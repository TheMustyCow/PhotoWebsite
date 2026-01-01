document.addEventListener('DOMContentLoaded', function() {
    const uploadInput = document.getElementById('photo-upload');
    const gallery = document.querySelector('.gallery');

    uploadInput.addEventListener('change', function(event) {
        const files = event.target.files;
        for (let file of files) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        const isVertical = img.naturalHeight > img.naturalWidth;
                        const photoItem = document.createElement('div');
                        photoItem.className = 'photo-item ' + (isVertical ? 'vertical' : 'horizontal');
                        photoItem.innerHTML = `
                            <img src="${e.target.result}" alt="${file.name}">
                        `;
                        gallery.appendChild(photoItem);
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    });
});