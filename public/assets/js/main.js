document.addEventListener('DOMContentLoaded', function () {
    // Lightbox reset
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 300,
        'albumLabel': "Image %1 of %2",
        'showImageNumberLabel': false
    });

    // close light box
    const closeButton = document.querySelector('.lb-close');  // button
    const lightboxOverlay = document.querySelector('.lb-overlay');  // background

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            lightbox.close(); // Lightbox close
        });
    }

    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', function () {
            lightbox.close(); // Lightbox close
        });
    }

    // Granim.js
    new Granim({
        element: '#granim-canvas',
        direction: 'top-bottom',  // way
        opacity: [1, 1],  
        image: {
            source: '/public/assets/sauce/Image/bg-forest.jpg',  // path
            blendingMode: 'multiply'  // mode
        },
        states: {
            "default-state": {
                gradients: [
                    ['#ff7e5f', '#feb47b'],
                    ['#6a11cb', '#2575fc'],
                    ['#3a7bd5', '#00d2ff']
                ],
                transitionSpeed: 3000  // speed
            }
        }
    });

    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true
    });

});

