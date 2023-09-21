const bannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });


  const projectssSwiper = new Swiper(".projects-swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    breakpoints:{
      700:{
        slidesPerView:2,
        spaceBetween:30,
      },

      1024:{
        slidesPerView:3,
        spaceBetween:30,
      }
    }
  });

  const vidoesSwiper = new Swiper(".video-swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    breakpoints:{
      700:{
        slidesPerView:2,
        spaceBetween:30,
      },

      1024:{
        slidesPerView:3,
        spaceBetween:30,
      }
    }
  });


  const commentSwiper = new Swiper(".comment-swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    breakpoints:{
      700:{
        slidesPerView:1,
        spaceBetween:30,
      },

      1024:{
        slidesPerView:2,
        spaceBetween:30,
      }
    }
  });