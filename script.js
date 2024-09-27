
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
                    callbacks: {
                        label: function(tooltipItem) {
                            return '%' + tooltipItem.raw;  // Tooltip shows with ₪ symbol
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
                    color: 'black', // Adjust color as needed
                    anchor: 'end',
                    align: 'center',
                    offset: 5,
                    formatter: (value, context) => {
                        const dataset = context.dataset;
                        const total = dataset.data.reduce((acc, val) => acc + val, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${percentage}%`;
                    }
                }
            },
            barPercentage: 0.5,  // Full width bars
            categoryPercentage: 1.0  // Fit columns to the container
        }
    });

    // Bar Chart for Satisfaction Levels
    const ctxBar = document.getElementById('satisfactionChart').getContext('2d');
    
    const satisfactionChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5'],  // Satisfaction levels
            datasets: [{
                label: 'שביעות רצון (%)',
                data: [0, 0, 6, 38, 56],  // Values corresponding to satisfaction levels
                backgroundColor: 'rgba(54, 162, 235, 0.7)',  // Bar color
                borderColor: 'rgba(54, 162, 235, 1)',  // Bar border
                borderWidth: 1  // Thickness of the border
            }]
        },
        options: {
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
                duration: 1000,  // Animation duration in milliseconds
                easing: 'easeOutBounce',  // Easing function for animation
            },
            plugins: {
                legend: {
                    display: false  // Hide legend
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + '%';  // Show percentage in tooltip
                        }
                    }
                }
            }
        }
    });

    // Chart 1: איך מצאתי את המשרה
    const ctx4 = document.getElementById('howFound').getContext('2d');
    const howFound = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['שמעתי מחברים', 'קבוצת משרות בוואטסאפ', 'ירידי תעסוקה/מישהו מהתעשיה', 'חבר מביא חבר (מישהו מתוך החברה)', 'אתר החברה', 'אינסטגרם/פייסבוק/רשתות אחרות', 'LinkedIn'],
            datasets: [{
                data: [10, 14, 10, 29, 3, 6, 29],
                backgroundColor: ['#000000', '#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#FF6D00', '#00ACC1']
            }]
        },
        options: {
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    display: false
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutBounce'
            }
        }
    });

    // Chart 2: גודל החברה
    const ctx5 = document.getElementById('companySize').getContext('2d');
    new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['עד 15 עובדים', '15-50 עובדים', '51-100 עובדים', '101-200 עובדים', 'מעל 200 עובדים'],
            datasets: [{
                data: [20, 3, 17, 14, 45],
                backgroundColor: ['#4285F4', '#4285F4', '#4285F4', '#4285F4', '#4285F4']
            }]
        },
        options: {
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    display: false
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutBounce'
            }
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
                typeWriter(textItems[currentItemIndex], listItem, 20, addNextItem); // Type each letter
                currentItemIndex++;
            }
        }

        addNextItem(); // Start the process
    }

    // Start the typewriter effect for the list items
    addListItemsWithTypewriter();
};
