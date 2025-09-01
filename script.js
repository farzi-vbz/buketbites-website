// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Location data
const locations = [
    {
        name: "BucketBites Padana",
        address: "Padana, Kasarkode",
        hours: "4:00 PM - 1:00 AM",
        instagram: "#",
        imageClass: "padana"
    },
    {
        name: "BucketBites Mattool",
        address: "Mattool north, Kannur",
        hours: "4:00 PM - 1:00 AM",
        instagram: "#",
        imageClass: "mattool"
    },
    {
        name: "BucketBites Kozhikode",
        address: "Gandhi Road, Kozhikode",
        hours: "4:00 PM - 1:00 AM",
        instagram: "#",
        imageClass: "kozhikode"
    }
];

// Function to generate location cards
function generateLocationCards() {
    const locationsContainer = document.getElementById('locations-container');
    
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card bg-gray-100 rounded-lg overflow-hidden shadow-md';
        
        locationCard.innerHTML = `
            <div class="location-image ${location.imageClass}"></div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${location.name}</h3>
                <p class="text-gray-600 mb-4">${location.address}</p>
                <p class="mb-4"><span class="font-bold">Hours:</span> ${location.hours}</p>
                <div class="flex space-x-4">
                    <a href="${location.instagram}" class="text-primary hover:text-secondary">
                        <i class="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-primary">
                        <i class="fas fa-directions text-xl"></i>
                    </a>
                </div>
            </div>
        `;
        
        locationsContainer.appendChild(locationCard);
    });
}

// Generate location cards when the page loads
document.addEventListener('DOMContentLoaded', generateLocationCards);