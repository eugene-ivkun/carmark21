$(window).scroll(function() {
    if($(this).scrollTop() > 0) {
        $(".header").addClass("header--scrolled")
        $("body").css({
            "padding-top": $(".header").outerHeight() + "px"
        })
    }
    else {
        $(".header").removeClass("header--scrolled");
        $("body").css({
            "padding-top": 0 + "px"
        })
    }
});

$(window).on("resize", function() {
    $("body").addClass("not-anim");
    setTimeout(function() {
        $("body").removeClass("not-anim");
    }, 1000);
})

function menuToggle() {
    $(".header-menu").toggleClass("header-menu--open");
    $(".header-main").toggleClass("header-main--active");
}

$(".header-main__btn").click(menuToggle);

$(".scroll-link").click(function(e) {
    e.preventDefault();
    let scrollElem = $($(this).attr("href"));
    let scrollElemTop = scrollElem.offset().top - $(".header").outerHeight() - 20;
    $("html, body").animate({
        scrollTop: scrollElemTop
    }, 700);
    if( $(".header-menu").hasClass("header-menu--open")) {
        menuToggle();
    }
  })


const priceComparisonSlider = new Swiper(".price-comparison__slider-main", {
    autoHeight: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".price-comparison__slider-btn-next",
        prevEl: ".price-comparison__slider-btn-prev"
    },
    pagination: {
        el: ".price-comparison__slider-pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "slider__pagination-item price-comparison__slider-pagination-item"
    }
});

const banner2Slider = new Swiper(".banner-3__slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".banner-3__slider-btn-next",
        prevEl: ".banner-3__slider-btn-prev"
    },
    pagination: {
        el: ".banner-3__slider-pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "slider__pagination-item banner-3__slider-pagination-item"
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    }
})

const whatCardsSlider = new Swiper('.what-cars__slider', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 12,
    observer: true,
    updateOnWindowResize: true,
    autoHeight: true,
    navigation: {
        nextEl: '.what-cars__slider-btn-next',
        prevEl: '.what-cars__slider-btn-prev'
    },
    pagination: {
        el: '.what-cars__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "slider__pagination-item what-cars__pagination__item"
    },
    breakpoints: {
        0: {
            slidesPerView: 1.11,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.02,
            spaceBetween: 12,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      }
  });

  window.addEventListener("resize", function() {
    whatCardsSlider.update();
  })

 $(".accordion-header").click(function() {
    let stepItem = $(this).closest(".accordion-item");
    let stepContent= stepItem.find(".accordion-content");
    let stepParent = stepItem.closest(".accordion");
    stepParent.find(".accordion-content").not(stepContent).slideUp();
    stepParent.find(".accordion-header").not($(this)).removeClass("active");
    stepContent.slideToggle(500);
    $(this).toggleClass("active");
    if(stepParent.hasClass("accordion--scroll-top") && $(this).hasClass("active")) {
        setTimeout(function() {
            $("html, body").animate({
                scrollTop: stepItem.offset().top - $(".header").outerHeight()
            }, 200)
        }, 500)
    }
  })

  $(document).ready(function() {
    $(".calculation__form-number").mask("+38 (999) 999-99-99")
  });

  function scrollMenuItems() {
    $(".scroll-link").each(function(i, item) {
        let menuItem = $(item);
        let elem = $($(item).attr("href"));
        let bodyTop = $("html, body").scrollTop();
        let elemTop = elem.offset().top - ($(window).height() / 2.2)  - $(".header").outerHeight();
        let elemBottom = elemTop + elem.outerHeight();
        menuItem.removeClass("active");
        if(bodyTop > elemTop && bodyTop < elemBottom) {
            menuItem.addClass("active");
        }
        // else if(bodyTop > elemBottom ) {
        //     $(".scroll-link").removeClass("active");
        // }

    });
  }
$(document).ready(scrollMenuItems);
$(window).scroll(scrollMenuItems);




