// nav-loader.js
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation HTML
    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            // Insert the navigation HTML
            document.getElementById('nav-placeholder').innerHTML = html;
            
            // Initialize dropdown functionality
            initializeDropdown();
        })
        .catch(error => console.error('Error loading navigation:', error));
});

// Dropdown functionality
function initializeDropdown() {
    var dropdownOpen = false;
    
    document.getElementById("dropbtn").addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownOpen = !dropdownOpen;
        document.getElementById("myDropdown").classList.toggle("show");
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn') && dropdownOpen) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    dropdownOpen = false;
                }
            }
        }
    };
}