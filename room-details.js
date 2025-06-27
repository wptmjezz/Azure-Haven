document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get('id');
    const room = roomData.find(r => r.id === roomId);

    if (room) {
        document.title = `${room.name} - Azure Haven`;

        // Populate Hero
        document.getElementById('hero-details').style.backgroundImage = `url(${room.heroImage})`;

        // Populate Gallery
        const mainImageContainer = document.getElementById('gallery-main-image');
        const sideImageContainer = document.getElementById('gallery-side-images');
        
        // Main Image (first in array)
        if (room.gallery && room.gallery.length > 0) {
            mainImageContainer.innerHTML = `<img src="${room.gallery[0]}" alt="${room.name} main view">`;
        }

        // Side Images (the rest of the array)
        if (room.gallery && room.gallery.length > 1) {
            sideImageContainer.innerHTML = room.gallery.slice(1).map(src => {
                return `<img src="${src}" alt="${room.name} detail view">`;
            }).join('');
        }

        // Populate Details
        document.getElementById('details-price').textContent = `${room.price} per night`;
        document.getElementById('details-title').textContent = room.name;
        document.getElementById('details-description').textContent = room.description;
        document.getElementById('details-guests').textContent = room.guests;

        // Populate Lists
        const featuresList = document.getElementById('details-features-list');
        featuresList.innerHTML = room.features.map(item => `<li>${item}</li>`).join('');

        const inclusionsList = document.getElementById('details-inclusions-list');
        inclusionsList.innerHTML = room.inclusions.map(item => `<li>${item}</li>`).join('');

    } else {
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = `<div class="container" style="text-align:center; padding: 5rem 0;"><h2>Room Not Found</h2><p>The room you are looking for does not exist. Please return to our rooms page.</p><a href="rooms.html" style="color: var(--primary-blue);">Back to Rooms</a></div>`;
    }
});