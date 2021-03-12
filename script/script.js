// Menu
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menuBtn');
// const nav = document.querySelector('nav');

const open = () => {
  if (!body.classList.contains('open')) {
    body.classList.add('open')
  } else 
  {
    body.classList.remove('open')
  }
  console.log('działam')
}

menuBtn.addEventListener('click', open);




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
        body.classList.remove('open');
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

const svgTop = document.getElementById('bgTop');
const lengthSvgTop = svgTop.getTotalLength();
const svgTopMobile = document.getElementById('bgTopMobile');
const lengthSvgTopMobile = svgTop.getTotalLength();

window.requestAnimationFrame(() => {

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
  });

  window.addEventListener('scroll', function() {
    const scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const draw = lengthSvgTop * scrollpercent;
    if (window.innerWidth > 1300) {
      svgTop.style.strokeDashoffset = (lengthSvgTop - 1800) - (draw * 6);
    } else svgTop.style.strokeDashoffset = (lengthSvgTop - 1800) - (draw * 4.75);
    const drawMobile = lengthSvgTopMobile * scrollpercent * 7.25;
    svgTopMobile.style.strokeDashoffset = (lengthSvgTopMobile + 1000) - drawMobile;
  });

const sygnet = document.querySelector('.logo_sygnet img');

$(window).scroll(function(){
    if ($(this).scrollTop() >= 5) {
      if (window.innerWidth > 1024) {
        console.log('dupa')
      }
      sygnet.src ="assets/icons/sygnet-open.svg";
      body.classList.add('after')
    } else {
    sygnet.src ="assets/icons/sygnet_logo.svg";
    body.classList.remove('after');
    };
 })


$(window).scroll(function(){
  if (window.innerWidth > 1024) {
  if ($(this).scrollTop() >= 5)
  {
    $('body').addClass('after')
    $('body').removeClass('start')
    $('body').removeClass('rewind')
  } else {
    $('body').removeClass('after');
    $('body').addClass('rewind');
    // $('body').removeClass('start');
  }}
})

// SVG Animation


const border = document.querySelectorAll('#border')
const borderDesk = document.querySelectorAll('#border-desk')
let dashoffset = 0;
let strokeLength = 860;
let strokeLengthBig = 2150;
let strokeLengthBigger = 950;
let speed = 2;
let pathLength = borderDesk[0].getTotalLength();
let pathLengthBig = border[6].getTotalLength();
let pathLengthBigger = border[4].getTotalLength();
border[0].style.strokeDashoffset = dashoffset;
border[0].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
border[1].style.strokeDashoffset = dashoffset;
border[1].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
border[2].style.strokeDashoffset = dashoffset;
border[2].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 4000}`;
border[3].style.strokeDashoffset = dashoffset;
border[3].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
border[4].style.strokeDashoffset = dashoffset;
border[4].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3200}`;
border[5].style.strokeDashoffset = dashoffset;
border[5].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
border[6].style.strokeDashoffset = dashoffset;
border[6].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
border[7].style.strokeDashoffset = dashoffset;
border[7].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
border[8].style.strokeDashoffset = dashoffset;
border[8].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
border[9].style.strokeDashoffset = dashoffset;
border[9].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
borderDesk[0].style.strokeDashoffset = dashoffset;
borderDesk[0].style.strokeDasharray = `${strokeLengthBigger + 450},${pathLength - strokeLength - 4000}`;
borderDesk[1].style.strokeDashoffset = dashoffset;
borderDesk[1].style.strokeDasharray = `${strokeLengthBigger + 350},${pathLength - strokeLength - 4000}`;
borderDesk[2].style.strokeDashoffset = dashoffset;
borderDesk[2].style.strokeDasharray = `${strokeLength + 1000},${pathLength - strokeLength - 3000}`;
function Animate() {
  window.requestAnimationFrame(Animate);
  dashoffset -= speed;
  border[0].style.strokeDashoffset = dashoffset * 2.3;
  border[1].style.strokeDashoffset = dashoffset * 2.5;
  border[2].style.strokeDashoffset = dashoffset * 2.5;
  border[3].style.strokeDashoffset = dashoffset * 2.3;
  border[4].style.strokeDashoffset = dashoffset * 2.3;
  border[5].style.strokeDashoffset = dashoffset * 2.3;
  border[6].style.strokeDashoffset = dashoffset * 2.3;
  border[7].style.strokeDashoffset = dashoffset * 2.3;
  border[8].style.strokeDashoffset = dashoffset * 2.3;
  border[9].style.strokeDashoffset = dashoffset * 2.3;
  borderDesk[0].style.strokeDashoffset = dashoffset * 1.35;
  borderDesk[1].style.strokeDashoffset = dashoffset * 0.85;
  borderDesk[2].style.strokeDashoffset = dashoffset * 1.15;
  if (window.innerWidth > 1024) {
    border[0].style.strokeDashoffset = dashoffset * 1.2;
    border[1].style.strokeDashoffset = dashoffset * 1.2;
    border[2].style.strokeDashoffset = dashoffset * 1.2;
    border[3].style.strokeDashoffset = dashoffset * 1.3;
    border[4].style.strokeDashoffset = dashoffset * 1.3;
    border[5].style.strokeDashoffset = dashoffset * 1.3;
    border[6].style.strokeDashoffset = dashoffset * 1.3;
    border[7].style.strokeDashoffset = dashoffset * 1.3;
    border[8].style.strokeDashoffset = dashoffset * 1.3;
  }
}
Animate();