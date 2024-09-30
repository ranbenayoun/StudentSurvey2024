// Ensure the DOM is fully loaded before running the script
window.onload = function() {
    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                position: 'top',
                align: 'center',
                font: { size: 18, weight: 'bold' }
            },
            datalabels: {
                color: '#FFFFFF',
                anchor: 'center',
                align: 'center',
                offset: { x: 50, y: 20 },
                formatter: (value) => `${value}%`,
                font: { weight: 'bold', size: 14 }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    font: { size: 12 }
                }
            },
            y: { display: false }
        },
        layout: {
            padding: { top: 30, right: 30, bottom: 30, left: 30 }
        }
    };

    // Function to create or update a chart
    function createOrUpdateChart(chartId, type, data, options = {}) {
        const ctx = document.getElementById(chartId).getContext('2d');
        const chartOptions = { ...commonOptions, ...options };
        
        if (window[chartId]) {
            window[chartId].destroy();
        }
        
        window[chartId] = new Chart(ctx, {
            type: type,
            data: data,
            options: chartOptions,
            plugins: [ChartDataLabels]
        });

        ctx.canvas.parentNode.style.height = '400px';
        ctx.canvas.parentNode.style.width = '100%';
    }

    // Create or update each chart
    createOrUpdateChart('salaryChart', 'bar', {
        labels: ['יצור', 'ניהול פרויקטים', 'בדיקות (V&V)', 'Application Specialist', ['איכות ','ורגולציה (QA)'], ['שירות לקוחות ','(Customer Service)'], ['מחקר ופיתוח ','(R&D)'], 'אלגוריתמיקה'],
        datasets: [{
            label: '₪ שכר שעתי ממוצע',
            data: [48, 60, 64, 65, 67, 68, 68, 89],
            backgroundColor: '#4285F4',
            borderColor: '#357AE8',
            borderWidth: 1
        }]
    }, {
        plugins: {
            title: { text: 'שכר שעתי ממוצע לפי תפקיד' }
        }
    });

    createOrUpdateChart('satisfactionChart', 'bar', {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'שביעות רצון (%)',
            data: [0, 0, 6, 38, 56],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }, {
        plugins: {
            title: { text: 'רמות שביעות רצון' }
        }
    });

    createOrUpdateChart('howFound', 'bar', {
        labels: ['שמעתי מחברים', 'קבוצת משרות בוואטסאפ', 'ירידי תעסוקה/מישהו מהתעשיה', 'חבר מביא חבר (מישהו מתוך החברה)', 'אתר החברה', 'אינסטגרם/פייסבוק/רשתות אחרות', 'LinkedIn'],
        datasets: [{
            data: [10, 14, 10, 29, 3, 6, 29],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0']
        }]
    }, {
        plugins: {
            title: { text: 'איך מצאתי את המשרה' }
        }
    });

    createOrUpdateChart('companySize', 'bar', {
        labels: ['עד 15 עובדים', '15-50 עובדים', '51-100 עובדים', '101-200 עובדים', 'מעל 200 עובדים'],
        datasets: [{
            data: [20, 3, 17, 14, 45],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0']
        }]
    }, {
        plugins: {
            title: { text: 'גודל החברה' }
        }
    });

    createOrUpdateChart('workDaysPerWeek', 'pie', {
        labels: ['יומיים', 'שלושה ימים', 'יום אחד'],
        datasets: [{
            data: [67, 25, 6],
            backgroundColor: ['#a9cf44', '#f29a20', '#59c9e9'],
        }]
    }, {
        plugins: {
            title: { text: 'מספר ימי עבודה בשבוע' }
        }
    });

    createOrUpdateChart('workLocation', 'bar', {
        labels: ['אני עובד/ת רק מהבית', 'עבודה במשרדי החברה בלבד', 'עבודה חלקית מהמשרד וחלקית מהבית'],
        datasets: [{
            data: [5, 58, 38],
            backgroundColor: '#F29A20',
        }]
    }, {
        plugins: {
            title: { text: 'מקום העבודה' }
        }
    });

    createOrUpdateChart('workField', 'bar', {
        labels: ['איכות (QA) ורגולציה', 'שירות (Customer Service) לקוחות', '(R&D) מחקר ופיתוח', '(V&V) בדיקות', 'ניהול פרויקטים', 'יצור', 'אלגוריתמיקה', 'Application Specialist'],
        datasets: [{
            data: [6, 5, 44, 19, 5, 2, 17, 3],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0'],
        }]
    }, {
        plugins: {
            title: { text: 'תחום העבודה' }
        }
    });

    createOrUpdateChart('startingSemester', 'bar', {
        labels: ["סמסטר א'/ב'", "סמסטר ג'", "סמסטר ד'", "סמסטר ה'", "סמסטר ו'", "סמסטר ז'", "סמסטר ח'"],
        datasets: [{
            data: [6, 6, 11, 20, 20, 28, 9],
            backgroundColor: ['#a9cf44', '#f6c413', '#f29a20', '#59c9e9','#247ba0'],
        }]
    }, {
        plugins: {
            title: { text: 'הסמסטר בו התחלתי לעבוד' }
        }
    });

    // Hebrew text items
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

    const boldWords = ["לינקדאין", "סטודנט", "ניסיון", "קשרים אישיים"];

    // Target the UL element
    const dynamicList = document.getElementById('dynamic-list');

    // Function to apply bold styling to specific words
    function applyBoldStyling(text) {
        boldWords.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            text = text.replace(regex, `<span class="bold">${word}</span>`);
        });
        return text;
    }

    // Function to add items with styling
    function addListItems() {
        textItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            const parts = item.split(':');
            let styledText = '';
            if (parts.length > 1) {
                styledText = `<span class="bold-underline">${parts[0]}:</span> ${applyBoldStyling(parts.slice(1).join(':'))}`;
            } else {
                styledText = applyBoldStyling(item);
            }
            listItem.innerHTML = styledText;
            dynamicList.appendChild(listItem);
        });
    }

    // Add the list items
    addListItems();

    // Apply updated styles
    const style = document.createElement('style');
    style.innerHTML = `
        canvas {
            max-width: 100%;
            height: auto;
        }
        .side-by-side {
            display: flex;
            justify-content: space-around;
            width: 100%;
        }
        #dynamic-list {
            direction: rtl;
            text-align: right;
            font-size: 18px;
            line-height: 1.6;
        }
        #dynamic-list li {
            margin-bottom: 15px;
        }
        .bold {
            font-weight: bold;
        }
        .bold-underline {
            font-weight: bold;
            text-decoration: underline;
        }
        #dynamic-list li:last-child {
            font-size: 22px;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
};