// Sales Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesCtx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Sales',
          data: [12000, 15000, 10000, 17000, 20000, 22000],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,  // Ensure responsive behavior
        maintainAspectRatio: false, // Let the chart adapt to different aspect ratios
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Revenue',
          data: [4000, 5000, 3000, 7000, 8000, 9000],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true, // Ensure responsive behaviour
        maintainAspectRatio: false, // Let the chart adapt to different aspect ratios
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });