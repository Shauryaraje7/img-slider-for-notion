const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar::before');

function updateActiveLink(index) {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add 'active' class to the link corresponding to the image
    navLinks[index].classList.add('active');
    
    // Update the position of the white rectangle (navbar::before) based on the active link
    const translateValue = index * (100 + 2); // Adjust based on gap and link width
    document.querySelector('.navbar::before').style.transform = `translateX(${translateValue}%)`;
}

// Assuming you have image-related logic, here's an example
const images = document.querySelectorAll('.image'); // Replace this with your actual image selector
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        updateActiveLink(index);
    });
});
