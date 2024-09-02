document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('details-button').addEventListener('click', function() {
        document.getElementById('popup').classList.remove('hidden');
    });

    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('popup').classList.add('hidden');
    });
});





function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function filterLocation(location) {
    var table = document.getElementById("locationTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        if (location === 'All' || row.getAttribute("data-location") === location) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }

    // Update the dropdown button text
    document.querySelector("#location-dropdown p").textContent = location === 'All' ? 'Location' : location;
}