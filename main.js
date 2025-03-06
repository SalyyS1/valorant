

jQuery(document).ready(function () {

    // Character Image Js
    var scene = document.querySelectorAll(".scene");
    scene.forEach(function (el) {
        var parallax = new Parallax(el);
    });
    // Slider Js
    jQuery('.banner-section-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 500,
        asNavFor: '.controller-right-icons-inner',
        touchThreshold: 100,
    });
    jQuery('.controller-right-icons-inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.banner-section-inner',
        arrows: false,
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
    });
    function onLoadTest() {
        jQuery(".banner-section-loop").each(function (i) {
            var j = i + 1;
            if (j % 3 === 1) {
                jQuery(this).addClass("banner-loop-one");
            } else if (j % 3 === 2) {
                jQuery(this).addClass("banner-loop-second");
            } else {
                jQuery(this).addClass("banner-loop-third");
            }
        });
    }
    window.onload = onLoadTest();


    // Custom Mouse Pointer
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY,
                }
            })
        }
    });
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })
    cursorScale.forEach(link => {
        link.addEventListener('mousemove', () => {
            cursor.classList.add('grow');
            if (link.classList.contains('small')) {
                cursor.classList.remove('grow');
                cursor.classList.add('grow-small');
            }
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
            cursor.classList.remove('grow-small');
        });
    })
});
