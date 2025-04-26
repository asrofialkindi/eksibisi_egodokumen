const images = [
    { 
        name: '1.jpg',
        desc: 'descriptions/1.txt'
    },
    { 
        name: '2.jpg',
        desc: 'descriptions/2.txt'
    },
    // Add more images in this format
];

let currentSlide = 0;

async function showSlide(index) {
    const slideContainer = document.getElementById('slide');
    const descContainer = document.getElementById('description-box');
    const image = images[index];
    
    try {
        // Update image
        slideContainer.innerHTML = `<img src="images/${image.name}" alt="Document ${index + 1}">`;
        
        // Fetch and update description
        const response = await fetch(image.desc);
        const description = await response.text();
        descContainer.innerHTML = description;
    } catch (error) {
        console.error('Error loading description:', error);
        slideContainer.innerHTML = `<img src="images/${image.name}" alt="Document ${index + 1}">`;
        descContainer.innerHTML = "Description not available";
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);