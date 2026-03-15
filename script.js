// Add click and mouseout event listeners to all images for zoom functionality
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Remove zoomed from all images
            images.forEach(i => i.classList.remove('zoomed'));
            // Add zoomed to the clicked image
            this.classList.add('zoomed');
        });
        img.addEventListener('mouseout', function() {
            // Remove zoomed when mouse leaves
            this.classList.remove('zoomed');
        });
    });
});