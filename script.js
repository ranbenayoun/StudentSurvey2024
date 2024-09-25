// Ensure the DOM is fully loaded before running the script
window.onload = function() {
    // 1. Chart.js - Create the pie chart
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',  // Define the type of chart
        data: {
            labels: ['V&V', 'ניהול פרויקטים', 'מו"פ', 'בקרת איכות', 'שירות לקוחות'], // Categories in Hebrew
            datasets: [{
                label: 'פיזור שכר ממוצע',
                data: [44, 19, 17, 6, 5],  // Sample data (replace this with your data)
                backgroundColor: [
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
                enabled: true,  // Enable tooltips when hovering over sections
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

    // 2. Typewriter Effect - Show text typing in real time
    const text = "מומלץ להתחיל לקראת סוף השנה השנייה או השלישית. עבודה יכולה לעזור לצבור ניסיון רב...";  // Replace with the full text in Hebrew
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById('realTimeText').innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);  // Adjust typing speed here (100ms per character)
        }
    }

    // Call the typeWriter function to start typing
    typeWriter();
};


const ctx = document.getElementById('salaryChart').getContext('2d');
const salaryChart = new Chart(ctx, {
    type: 'bar',  // Bar chart type
    data: {
        labels: ['יצור', 'ניהול פרויקטים', 'בדיקות (V&V)', 'Application Specialist', 'איכות ורגולציה (QA)', 'שירות לקוחות (Customer Service)', 'מחקר ופיתוח (R&D)', 'אלגוריתמיקה'],
        datasets: [{
            label: '₪ שכר שעתי ממוצע',
            data: [48, 60, 64, 65, 67, 68, 68, 89],  // Salary data
            backgroundColor: '#4285F4',  // Bar color
            borderColor: '#357AE8',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) { return '₪ ' + value; }  // Show ₪ symbol
                }
            }
        },
        animation: {
            duration: 2000,  // 2-second animation
            easing: 'easeOutBounce',  // Bounce effect
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return '₪ ' + tooltipItem.raw;  // Tooltip shows with ₪ symbol
                    }
                }
            }
        }
    }
});
