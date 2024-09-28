
// Ensure the DOM is fully loaded before running the script
window.onload = function() {
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
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: (value) => value + '%',
                    font: {
                        weight: 'bold'
                    },
                    offset: 5
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0,
                        callback: function(value) {
                            const label = this.getLabelForValue(value);
                            return label.split(' ');
                        }
                    }
                },
                y: {
                    display: false,
                    max: 50 // Adjust this value to control the height of the bars
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutBounce'
            },
            layout: {
                padding: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }
            }
        },
        plugins: [ChartDataLabels]
    });
    
    // Adjust the canvas size
    ctxBar.canvas.parentNode.style.height = '500px';
    ctxBar.canvas.parentNode.style.width = '100%';

// Chart 1: איך מצאתי את המשרה
const ctx4 = document.getElementById('howFound').getContext('2d');
const howFound = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['שמעתי מחברים', 'קבוצת משרות בוואטסאפ', 'ירידי תעסוקה/מישהו מהתעשיה', 'חבר מביא חבר (מישהו מתוך החברה)', 'אתר החברה', 'אינסטגרם/פייסבוק/רשתות אחרות', 'LinkedIn'],
        datasets: [{
            data: [10, 14, 10, 29, 3, 6, 29],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: (value) => value,
                font: {
                    weight: 'bold'
                },
                offset: 5
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    callback: function(value) {
                        const label = this.getLabelForValue(value);
                        return label.split(' ');
                    }
                }
            },
            y: {
                display: false,
                max: 35 // Adjust this value to control the height of the bars
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }
        }
    },
    plugins: [ChartDataLabels]
});

// Adjust the canvas size
ctx4.canvas.parentNode.style.height = '500px';
ctx4.canvas.parentNode.style.width = '100%';

// Chart 2: גודל החברה
const ctx5 = document.getElementById('companySize').getContext('2d');
const companySizeChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['עד 15 עובדים', '15-50 עובדים', '51-100 עובדים', '101-200 עובדים', 'מעל 200 עובדים'],
        datasets: [{
            data: [20, 3, 17, 14, 45],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: (value) => value + '%',
                font: {
                    weight: 'bold'
                },
                offset: 5
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    callback: function(value) {
                        const label = this.getLabelForValue(value);
                        return label.split(' ');
                    }
                }
            },
            y: {
                display: false,
                max: 50 // Adjust this value to control the height of the bars
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }
        }
    },
    plugins: [ChartDataLabels]
});

// Adjust the canvas size
ctx5.canvas.parentNode.style.height = '500px';
ctx5.canvas.parentNode.style.width = '100%';


// Utility function to add data labels
const addDataLabels = (chart) => {
    chart.options.plugins.datalabels = {
        color: '#FFFFFF',
        anchor: 'center',
        align: 'center',
        formatter: (value, context) => `${value}%`,
        font: { weight: 'bold' }
    };
};

// Chart 1: מספר ימי עבודה בשבוע
const ctx6 = document.getElementById('workDaysPerWeek').getContext('2d');
const chart1 = new Chart(ctx6, {
    type: 'pie',
    data: {
        labels: ['יומיים', 'שלושה ימים', 'יום אחד'],
        datasets: [{
            data: [67, 25, 6],
            backgroundColor: ['#a9cf44', '#f29a20', '#59c9e9'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'מספר ימי עבודה בשבוע',
                font: { size: 16 }
            },
            legend: { display: false },
            datalabels: {
                color: '#FFFFFF',
                formatter: (value) => `${value}%`,
                font: { weight: 'bold' }
            }
        }
    },
    plugins: [ChartDataLabels]
});
ctx6.canvas.parentNode.style.width = '35%';

// Chart 2: העבודה מתבצעת מ:
const ctx7 = document.getElementById('workLocation').getContext('2d');
const chart2 = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['אני עובד/ת רק מהבית', 'עבודה במשרדי החברה בלבד', 'עבודה חלקית מהמשרד וחלקית מהבית'],
        datasets: [{
            data: [5, 58, 38],
            backgroundColor: '#F29A20',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: (value) => value + '%',
                font: {
                    weight: 'bold'
                },
                offset: 5
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    callback: function(value) {
                        const label = this.getLabelForValue(value);
                        return label.split(' ');
                    }
                }
            },
            y: {
                display: false,
                max: 50 // Adjust this value to control the height of the bars
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }
        }
    },
    plugins: [ChartDataLabels]
});
addDataLabels(chart2);

// Chart 3: תחום העבודה
const ctx8 = document.getElementById('workField').getContext('2d');
const chart3 = new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ['איכות (QA) ורגולציה', 'שירות (Customer Service) לקוחות', '(R&D) מחקר ופיתוח', '(V&V) בדיקות', 'ניהול פרויקטים', 'יצור', 'אלגוריתמיקה', 'Application Specialist'],
        datasets: [{
            data: [6, 5, 44, 19, 5, 2, 17, 3],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'תחום העבודה',
                font: { size: 16 }
            },
            legend: { display: false }
        },
        scales: {
            x: { grid: { display: false } },
            y: { display: false }
        }
    },
    plugins: [ChartDataLabels]
});
addDataLabels(chart3);

// Chart 4: הסמסטר בו התחלתי לעבוד
const ctx9 = document.getElementById('startingSemester').getContext('2d');
const chart4 = new Chart(ctx9, {
    type: 'bar',
    data: {
        labels: ["סמסטר א'/ב'", "סמסטר ג'", "סמסטר ד'", "סמסטר ה'", "סמסטר ו'", "סמסטר ז'", "סמסטר ח'"],
        datasets: [{
            data: [6, 6, 11, 20, 20, 28, 9],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'הסמסטר בו התחלתי לעבוד',
                font: { size: 16 }
            },
            legend: { display: false }
        },
        scales: {
            x: { grid: { display: false } },
            y: { display: false }
        }
    },
    plugins: [ChartDataLabels]
});
addDataLabels(chart4);

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


const style = document.createElement('style');
style.innerHTML = `
    canvas {
        max-width: 100%;
        height: 100px;
    }
    .side-by-side {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
`;
document.head.appendChild(style);