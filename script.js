// Ensure the DOM is fully loaded before running the script
window.onload = function() {
    // Select the canvas element by its ID where the pie chart will be rendered
    const ctx = document.getElementById('myPieChart').getContext('2d');



    
    // Create the pie chart using Chart.js
    const myPieChart = new Chart(ctx, {
        type: 'pie',  // Define the type of chart
        data: {
            labels: ['ו&ו', 'ניהול פרויקטים', 'מו"פ', 'בקרת איכות', 'שירות לקוחות'], // Categories in Hebrew
            datasets: [{
                label: 'פיזור שכר ממוצע',
                data: [44, 19, 17, 6, 5],  // Sample data (you can replace this with your data)
                backgroundColor: [  // Colors for each slice
                    '#FF6384', 
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ]
            }]
        },
        options: {
            responsive: true,  // Adjusts the chart to screen size
            animation: {
                animateScale: true,  // Scale animation
                animateRotate: true  // Rotation animation
            },
            title: {
                display: true,  // Show the chart title
                text: 'פיזור שכר ממוצע לפי תפקיד'  // Title in Hebrew
            },
            tooltips: {
                enabled: true,  // Enable tooltips (when hovering over sections)
                callbacks: {
                    label: function(tooltipItem, data) {
                        const dataset = data.datasets[tooltipItem.datasetIndex];
                        const currentValue = dataset.data[tooltipItem.index];
                        const percentage = Math.floor((currentValue / dataset._meta[0].total) * 100 + 0.5);  // Calculate percentage
                        return percentage + '%';  // Show percentage in tooltip
                    }
                }
            }
        }
    });
};
