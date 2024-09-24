<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const ctx = document.getElementById('pieChartContainer').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['V&V', 'Project Management', 'R&D', 'QA', 'Customer Service'],
            datasets: [{
                data: [44, 19, 17, 6, 5], // Sample data from the PDF
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
</script>
