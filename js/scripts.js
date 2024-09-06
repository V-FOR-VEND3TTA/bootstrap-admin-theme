// Filtering Script
function filterData() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
      
    if (startDate && endDate) {
        alert(`Filtering data from ${startDate} to ${endDate}`);
        // Add logic to filter chart/table data by date range here
    } else {
        alert("Please select both start and end dates");
    }
}

// Toggling Script
document.getElementById('sidebarToggle').addEventListener('click', function () {
      const sidebar = document.getElementById('sidebar');
      const content = document.getElementById('content');
      const icon = document.querySelector('#sidebarToggle i');
  
      // Toggle collapsed class
      sidebar.classList.toggle('collapsed');
      content.classList.toggle('full-width');
  
      // Toggle icon between bars and X
      if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('fa-bars'); // hamburger icon class
        icon.classList.add('fa-xmark');     // X icon class
      } else {
        icon.classList.remove('fa-xmark');  // X icon class
        icon.classList.add('fa-bars');    // hamburger icon class
      }
});