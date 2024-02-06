document.addEventListener("DOMContentLoaded", function () {
    let cardDetails: any[]; // Assuming 'cardDetails' has a specific type, replace 'any' with the correct type

    function fetchData(): Promise<void> {
        return fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                cardDetails = data.cardDetails; // Assign data to cardDetails
                dailyFunction(cardDetails);
            })
            .catch(error => {
                console.error('Error fetching or displaying JSON data:', error);
            });
    }

    function dailyFunction(cardDetails: any[]): void {
        const gridContainer = document.querySelector(".grid-container") as HTMLElement;
        gridContainer.innerHTML = ""; // Clear previous content

        cardDetails.forEach(item => {
            const cardContent = `
                <div class="card-container">
                    <div class="card">
                        <div class="top">
                            <p>${item.title}</p>
                            <p><img src="assets/dot.svg"></p>
                        </div>
                        <div class="bottom">
                            <p>${item.timeframes.daily.current} hrs</p>
                            <p>Yesterday ${item.timeframes.daily.previous} hrs</p>
                        </div>
                    </div>
                </div>
            `;
            gridContainer.innerHTML += cardContent;
        });
    }

    function weeklyFunction(cardDetails: any[]): void {
        const gridContainer = document.querySelector(".grid-container") as HTMLElement;
        gridContainer.innerHTML = ""; // Clear previous content

        cardDetails.forEach(item => {
            const cardContent = `
                <div class="card-container">
                    <div class="card">
                        <div class="top">
                            <p>${item.title}</p>
                            <p><img src="assets/dot.svg"></p>
                        </div>
                        <div class="bottom">
                            <p>${item.timeframes.weekly.current} hrs</p>
                            <p>Last Week ${item.timeframes.weekly.previous} hrs</p>
                        </div>
                    </div>
                </div>
            `;
            gridContainer.innerHTML += cardContent;
        });
    }

    function monthlyFunction(cardDetails: any[]): void {
        const gridContainer = document.querySelector(".grid-container") as HTMLElement;
        gridContainer.innerHTML = "";

        cardDetails.forEach(item => {
            const cardContent = `
                <div class="card-container">
                    <div class="card">
                        <div class="top">
                            <p>${item.title}</p>
                            <p><img src="assets/dot.svg"></p>
                        </div>
                        <div class="bottom">
                            <p>${item.timeframes.monthly.current} hrs</p>
                            <p>Last month ${item.timeframes.monthly.previous} hrs</p>
                        </div>
                    </div>
                </div>
            `;
            gridContainer.innerHTML += cardContent;
        });
    }

    const dailyBtn = document.getElementById('dailyButton') as HTMLButtonElement;
    dailyBtn.addEventListener('click', () => {
        dailyFunction(cardDetails);
    });

    const weeklyBtn = document.getElementById('weeklyButton') as HTMLButtonElement;
    weeklyBtn.addEventListener('click', () => {
        weeklyFunction(cardDetails);
    });

    const monthlyBtn = document.getElementById('monthlyButton') as HTMLButtonElement;
    monthlyBtn.addEventListener('click', () => {
        monthlyFunction(cardDetails);
    });

    fetchData();
});
