// /assets/js/room-details.js (FINAL)
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get('id');
    const room = roomData.find(r => r.id === roomId);

    if (room) {
        document.title = `${room.name} - Azure Haven`;
        document.getElementById('hero-details').style.backgroundImage = `url(${room.heroImage})`;

        // Correctly populate the simplified gallery
        const galleryContainer = document.getElementById('gallery-grid');
        if (room.gallery && room.gallery.length >= 2) {
            galleryContainer.innerHTML = `
                <img src="${room.gallery[0]}" alt="${room.name} view 1">
                <img src="${room.gallery[1]}" alt="${room.name} view 2">
            `;
        }

        document.getElementById('details-price').textContent = `${room.price} per night`;
        document.getElementById('details-title').textContent = room.name;
        document.getElementById('details-description').textContent = room.description;
        document.getElementById('details-guests').textContent = room.guests;
        
        const featuresList = document.getElementById('details-features-list');
        featuresList.innerHTML = room.features.map(item => `<li>${item}</li>`).join('');
        
        const inclusionsList = document.getElementById('details-inclusions-list');
        inclusionsList.innerHTML = room.inclusions.map(item => `<li>${item}</li>`).join('');

    } else {
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = `<div class="container" style="text-align:center; padding: 5rem 0;"><h2>Room Not Found</h2><p>The room you are looking for does not exist.</p><a href="rooms.html" style="color: var(--primary-blue);">Back to Rooms</a></div>`;
    }
});