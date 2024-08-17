
    document.addEventListener("DOMContentLoaded", function() {
        var accordionItems = document.querySelectorAll('.accordion-collapse');
        accordionItems.forEach(function(item) {
            item.classList.remove('show');
        });
    });