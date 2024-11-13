document.addEventListener('DOMContentLoaded', function () {

    // lightbox.js
    const lightboxOverlay = document.querySelector('.lb-overlay');

    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', function () {
            lightbox.close(); // Lightbox close
        });
    }

    // Granim.js
    new Granim({
        element: '#canvas-image-blending',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        image: {
            source: '/public/assets/sauce/Image/bg-forest.jpg',  // path
            blendingMode: 'multiply'  // mode
        },
        states: {
            "default-state": {
                gradients: [
                    ['#8b3a2f', '#4a2a1a'],  
                    ['#3d1a7a', '#1c4a9c'],  
                    ['#2c4e87', '#1d5978']   
                ],
                transitionSpeed: 3000  // speed
            }
        }
    });

    // Parsley.js
    $(function () {
        var $sections = $('.form-section');

        function navigateTo(index) {
            $sections
                .removeClass('current')
                .eq(index)
                .addClass('current');

            $('.form-navigation .previous').toggle(index > 0);
            var atTheEnd = index >= $sections.length - 1;
            $('.form-navigation .next').toggle(!atTheEnd);
            $('.form-navigation [type=submit]').toggle(atTheEnd);
        }

        function curIndex() {
            return $sections.index($sections.filter('.current'));
        }

        $('.form-navigation .previous').click(function() {
            navigateTo(curIndex() - 1);
        });

        $('.form-navigation .next').click(function() {
            $('.demo-form').parsley().whenValidate({
                group: 'block-' + curIndex()
            }).done(function() {
                navigateTo(curIndex() + 1);
            });
        });

        $sections.each(function(index, section) {
            $(section).find(':input').attr('data-parsley-group', 'block-' + index);
        });

        navigateTo(0);
    });

    // Glide.js
    new Glide('.glide', {
        type: 'carousel', // 슬라이드가 순환되도록
        autoplay: 3000, // 3초 간격으로 자동 재생
        perView: 1, // 한 번에 한 슬라이드만 보이도록 설정
        animationDuration: 600, // 슬라이드 전환 시간
        animationTimingFunc: 'ease', // 애니메이션 속성
    }).mount();
});
