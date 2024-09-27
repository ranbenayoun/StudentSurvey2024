
// Ensure the DOM is fully loaded before running the script
window.onload = function() {
    // 1. Chart.js - Create the pie chart
    const ctx1 = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx1, {
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
                animateRotate: true,  // Rotation animation
            },
            title: {
                display: true,  // Show the chart title
                text: 'פיזור שכר ממוצע לפי תפקיד'  // Title in Hebrew
            },
            plugins: {
                legend: {
                    display: false  // Hide legend
                },
                tooltip: {
                    enabled: true,  // Enable tooltips when hovering over sections
                    callbacks: {
                        label: function(tooltipItem, data) {
                            const dataset = data.datasets[tooltipItem.datasetIndex];
                            const currentValue = dataset.data[tooltipItem.index];
                            const percentage = Math.floor((currentValue / dataset._meta[0].total) * 100 + 0.5);  // Calculate percentage
                            return percentage + '%';  // Show percentage in tooltip
                        }
                    }
                },
                datalabels: {
                    display: true,
                    color: 'white',
                    formatter: (value) => value + '%',  // Display percentage value inside each pie chart slice
                }
            }
        }
    });

    // 2. Bar chart for average hourly wage
    const ctx2 = document.getElementById('salaryChart').getContext('2d');
    const salaryChart = new Chart(ctx2, {
        type: 'bar',  // Bar chart type
        data: {
            labels: ['יצור', 'ניהול פרויקטים', 'בדיקות (V&V)', 'Application Specialist', ['איכות ','ורגולציה (QA)'], ['שירות לקוחות ','(Customer Service)'], ['מחקר ופיתוח ','(R&D)'], 'אלגוריתמיקה'],
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
                x: {
                    grid: {
                        display: false  // Hide x-axis grid lines
                    },
                    ticks: {
                        autoSkip: false,  // Ensure all x-axis labels are displayed
                        maxRotation: 0,  // Prevent rotating x-axis labels
                        minRotation: 0,
                    }
                },
                y: {
                    display: false,  // Hide y-axis completely
                    ticks: {
                        beginAtZero: true,  // Start from zero
                        callback: function(value) { return '₪ ' + value; }  // Show ₪ symbol
                    },
                    grid: {
                        display: false  // Hide y-axis grid lines
                    }
                }
            },
            animation: {
                duration: 2000,  // 2-second animation
                easing: 'easeOutBounce',  // Bounce effect
            },
            plugins: {
                legend: {
                    display: false  // Hide the legend
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return '₪ ' + tooltipItem.raw;  // Tooltip shows with ₪ symbol
                        }
                    }
                },
                datalabels: {
                    display: true,
                    color: 'black',
                    anchor: 'end',
                    align: 'top',
                    formatter: (value) => '₪ ' + value,  // Show the value above each bar
                }
            },
            barPercentage: 0.5,  // Full width bars
            categoryPercentage: 1.0  // Fit columns to the container
        }
    });

    // Hebrew text from the image
    const textItems = [
        "זמן חיפוש עבודה: יש להתחיל לחפש כמה שיותר מוקדם, שכן תהליך החיפוש יכול להימשך זמן רב. מומלץ להתחיל לקראת סוף השנה השנייה או השלישית.",
        "שילוב עבודה ולימודים: עבודה במהלך התואר יכולה לעזור לסטודנטים לצבור ניסיון, להקל על הלימודים, ולספק תובנות חדשות. עם זאת, היא יכולה גם להעמיס ולכן ייתכן שיהיה צורך לפתוח עוד סמסטר או להתאים את מערכת הלימודים.",
        "קשרים אישיים: מומלץ לחפש עבודה דרך אנשים מהתעשייה ולא רק להגיש קורות חיים דרך אתרים. קשרים אישיים מעלים את הסיכויים לקבל תשומת לב ממעסיקים.",
        "לא להתפשר: חשוב לדעת את ערך השוק שלכם ולא להתפשר על שכר נמוך או תפקידים שלא מעניינים אתכם. גם אם מתחילים בתפקיד שלא בדיוק רציתם, אפשר להתקדם לתפקידים אחרים.",
        "התמדה והקרבה: יש להיות מוכנים להשקיע זמן ומאמץ, במיוחד בהתחלה, כדי להצליח להשתלב בתעשייה.",
        "ניסיון הוא מפתח: חשוב לצבור ניסיון גם אם התפקיד הראשוני אינו חלומי. יש ערך לכל עבודה, אפילו בעבודות סטודנט, והניסיון שנצבר יכול לסייע בהמשך הקריירה.",
        "ניהול תהליך החיפוש: חיפוש עבודה הוא תהליך שיש לנהל באופן מסודר ועקבי, כולל שימוש בטבלאות לניהול הגשות קורות חיים ולמעקב אחרי סטטוס המשרות.",
        "כלים לראיונות ועבודה: הכנה טובה לראיונות חשובה מאוד, ויש להשקיע זמן בלמידת החומר הראשוני בעבודה.",
        "פלטפורמות לחיפוש עבודה: לינקדאין היא פלטפורמה מומלצת מאוד לחיפוש עבודה וליצירת קשרים.",
        "איזון בין עבודה ללימודים: עבודה יכולה להיות תורמת גם לשיפור בציונים, אך יש לשים לב לעומס ולוודא שהמשרה לא משפיעה לרעה על הלימודים.",
        "הכנה לראיונות וקורות חיים: חשוב להכין קורות חיים מסודרים, ללא אלמנטים מיותרים, ולהתכונן לראיונות כמו למבחן."
    ];

    // Target the UL element
    const dynamicList = document.getElementById('dynamic-list');

    // Function to simulate typewriter effect for each list item
    function typeWriter(text, listItem, delay, callback) {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                listItem.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                if (callback) callback(); // Proceed to next item when typing finishes
            }
        }, delay);
    }

    // Function to add items with typewriter effect
    function addListItemsWithTypewriter() {
        let currentItemIndex = 0;

        function addNextItem() {
            if (currentItemIndex < textItems.length) {
                const listItem = document.createElement('li');
                dynamicList.appendChild(listItem); // Add empty list item
                typeWriter(textItems[currentItemIndex], listItem, 30, addNextItem); // Type each letter
                currentItemIndex++;
            }
        }

        addNextItem(); // Start the process
    }

    // Start the typewriter effect for the list items
    addListItemsWithTypewriter();
};
