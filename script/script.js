// Menu
let oldx = 0;
let oldy = 0;

mousemovemethod = function(e) {
    if ($(window).width() <= 767.98) {
      $('.con').mouseenter(function() {
        $('.blue-bottom').css('max-height', '0');
      });
      $('.off').mouseenter(function() {
        $('.blue-bottom').css('max-height', '271px');
      });

      $('.tea').mouseenter(function() {
        $('.blue-bottom').css('max-height', '371px');
      });

      $('.sho').mouseenter(function() {
        $('.blue-bottom').css('max-height', '471px');
      });

      $('.int').mouseenter(function() {
        $('.blue-bottom').css('max-height', '571px');
      });
    }

    if ($(window).width() <= 575.98) {
      $('.con').mouseenter(function() {
        $('.blue-bottom').css('max-height', '0');
      });
      $('.off').mouseenter(function() {
        $('.blue-bottom').css('max-height', '211px');
      });

      $('.tea').mouseenter(function() {
        $('.blue-bottom').css('max-height', '291px');
      });

      $('.sho').mouseenter(function() {
        $('.blue-bottom').css('max-height', '371px');
      });

      $('.int').mouseenter(function() {
        $('.blue-bottom').css('max-height', '451px');
      });
    }

    if ($(window).width() <= 480) {
      $('.con').mouseenter(function() {
        $('.blue-bottom').css('max-height', '0');
      });
      $('.off').mouseenter(function() {
        $('.blue-bottom').css('max-height', '187px');
      });

      $('.tea').mouseenter(function() {
        $('.blue-bottom').css('max-height', '259px');
      });

      $('.sho').mouseenter(function() {
        $('.blue-bottom').css('max-height', '331px');
      });

      $('.int').mouseenter(function() {
        $('.blue-bottom').css('max-height', '403px');
      });
    }

  oldx = e.pageX;
  oldy = e.pageY;
};

document.addEventListener('mousemove', mousemovemethod);

  // Go to top
  $('.to-top').click(function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  $('.logo_sygnet').click(function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });


  // Scroll to div on nav click
  $('.scroll')
    .not('.burger-menu')
    .bind('click', function() {
      $(this).addClass('active');
      $('.menu-icon img').attr('src', 'images/menu-icon.png');
      $('.mobile-menu-box').fadeOut();

      return false;
    });
    

  const links = document.querySelectorAll('.scroll');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // burger.classList.remove('click');
        setTimeout(function() {
        window.location = link.href;
        }, 600)
    })
})





  // Add class to nav on scroll
  var lastId,
    topMenu = $('nav'),
    topMenuHeight = topMenu.outerHeight() + 60,
    menuItems = topMenu.find('a'),
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr('href'));
      if (item.length) {
        return item;
      }
    });

  $(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight;

    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop) return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
      lastId = id;

      menuItems.filter('nav a.active').removeClass('active');

      menuItems.filter("[href='#" + id + "']").addClass('active');

      if ($('.sho').hasClass('active')) {
        $('.showroom h3 > span').addClass('active');
      } else {
        $('.showroom h3 > span').removeClass('active');
      }
    }
  });

// ----------- SVG TOP -----------

window.requestAnimationFrame(() => {
  const svgTop = document.getElementById('bgTop');
  const lengthSvgTop = svgTop.getTotalLength();
  const svgTopMobile = document.getElementById('bgTopMobile');
  const lengthSvgTopMobile = svgTop.getTotalLength();

  $('.bg-top path').addClass('transition');

  $('.bg-top path')
    .delay(10)
    .queue(function(next) {
      $(this).css('opacity', '1');
      next();
    });

  $('.bg-topMobile path').addClass('transition');  

  $('.bg-topMobile path')
    .delay(10)
    .queue(function(next) {
      $(this).css('opacity', '1');
      next();
    });  

  window.addEventListener('scroll', function() {
    const scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const draw = lengthSvgTop * scrollpercent * 7;
    const drawMobile = lengthSvgTopMobile * scrollpercent * 5.785;
    svgTop.style.strokeDashoffset = (lengthSvgTop - 1800) - draw;
    svgTopMobile.style.strokeDashoffset = (lengthSvgTopMobile +1000) - drawMobile;
  });
});

const sygnet = document.querySelector('.logo_sygnet img');

$(window).scroll(function(){
    if (window.innerWidth > 1024) {
    if ($(this).scrollTop() >= 5)
    {
      $('body').addClass('after')
      $('body').removeClass('start')
      $('body').removeClass('rewind')
      sygnet.src ="assets/icons/sygnet-open.svg";
    } else {
      $('body').removeClass('after');
      $('body').addClass('rewind');
      // $('body').removeClass('start');
    sygnet.src ="assets/icons/sygnet_logo.svg";
    }}
})