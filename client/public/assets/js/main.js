var checkboxes = document.querySelectorAll('input.subOption'),
  checkall = document.getElementById('option');

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].onclick = function () {
    var checkedCount = document.querySelectorAll('input.subOption:checked').length;

    checkall.checked = checkedCount > 0;
    checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  }
}

checkall.onclick = function () {
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = this.checked;
  }
}

$('.toggler').click(function () {
  $('.navigation').addClass('slide');
});
$('.close-btn').click(function () {
  $('.navigation').removeClass('slide');
});

$('.feature-carousel').owlCarousel({
  margin: 15,
  loop: true,
  nav: true,
  dots: false,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    800: {
      items: 2,
    },
    1140: {
      items: 3
    }
  }
});

// Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  /* Our Clients Says owl-carousel  */
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: false
        });

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


  