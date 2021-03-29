const globalBox = document.querySelector('.global');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.close');

const mainHeader = document.querySelector('h1');
const pHeader = document.querySelector('header p');



// Menu

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
    if (!body.classList.contains('project')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else return false
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
      svgTop.style.strokeDasharray = (lengthSvgTop - 2000) + (draw * 7.3);
    } else svgTop.style.strokeDasharray = (lengthSvgTop - 2000) + (draw * 4.75);
    const drawMobile = lengthSvgTopMobile * scrollpercent * 6.25;
    svgTopMobile.style.strokeDashoffset = (lengthSvgTopMobile + 530) - (drawMobile * 1.125);
  });










const sygnet = document.querySelector('.logo_sygnet img');


$(window).scroll(function() {
  if ($(this).scrollTop() >= 5) {
  sygnet.src ="assets/icons/sygnet-open.svg";
  body.classList.add('after');
  mainHeader.classList.add('disappear');
  pHeader.classList.add('disappear');
  if (body.classList.contains('rewind')) {
    body.classList.remove('rewind');
  }
  } else {
    sygnet.src = 'assets/icons/sygnet_logo.svg'
    body.classList.remove('after')
    mainHeader.classList.remove('disappear');
    pHeader.classList.remove('disappear');
    body.classList.add('rewind');
  };
  if (window.innerWidth > 1023) {
  if ($(this).scrollTop() > $('.intro').offset().top * 0.9) {
    $('.intro').addClass('visible');
    }
    if ($(this).scrollTop() > $('header').innerHeight() * 0.8 && $(this).scrollTop() < $('header').innerHeight() * 1.2) {
      $('.apla').addClass('transparent');
    } else {
       $('.apla').removeClass('transparent');
    }
    if ($(this).scrollTop() > $('.showroom').offset().top * 0.8) {
      $('.showroom').addClass('visible');
    }
    if ($(this).scrollTop() > $('.about').offset().top * 0.9) {
      $('.about').addClass('visible');
    }
    if ($(this).scrollTop() > $('.about').offset().top * 1.08) {
      $('.about').addClass('visibleNext');
    }
    if ($(this).scrollTop() > $('.about').offset().top * 1.325) {
      $('.about').addClass('visibleNextTwo');
    }
    // if ($(this).scrollTop() > $('.about').offset().top * 1.6) {
    //   $('.numbers').addClass('visible');
    // }
    // if ($(this).scrollTop() > $('.numbers').offset().top * 0.95) {
    //   $('.numbers').addClass('visible');
    //   $('.counter').each(function() {
    //     var $this = $(this),
    //         countTo = $this.attr('data-count');
        
    //     $({ countNum: $this.text()}).animate({
    //       countNum: countTo
    //     },
      
    //     {
      
    //       duration: 1000,
    //       easing:'linear',
    //       step: function() {
    //         $this.text(Math.floor(this.countNum));
    //       },
    //       complete: function() {
    //         $this.text(this.countNum);
    //         //alert('finished');
    //       }
      
    //     });
    //   });
    //   setTimeout(function() {
    //     $('.counterTwo').each(function() {
    //       var $this = $(this),
    //           countTo = $this.attr('data-count');
          
    //       $({ countNum: $this.text()}).animate({
    //         countNum: countTo
    //       },
        
    //       {
        
    //         duration: 3000,
    //         easing:'linear',
    //         step: function() {
    //           $this.text(Math.floor(this.countNum));
    //         },
    //         complete: function() {
    //           $this.text(this.countNum);
    //           //alert('finished');
    //         }
        
    //       });
    //     });
    //   }, 1150);
    //   setTimeout(function() {
    //     $('.counterThree').each(function() {
    //       var $this = $(this),
    //           countTo = $this.attr('data-count');
          
    //       $({ countNum: $this.text()}).animate({
    //         countNum: countTo
    //       },
        
    //       {
        
    //         duration: 2000,
    //         easing:'linear',
    //         step: function() {
    //           $this.text(Math.floor(this.countNum));
    //         },
    //         complete: function() {
    //           $this.text(this.countNum);
    //           //alert('finished');
    //         }
        
    //       });
    //     });
    //   }, 4200);
    // };
    if ($(this).scrollTop() > $('.offer').offset().top * 0.95) {
      $('.offer').addClass('visible');
    }
    if ($(this).scrollTop() > $('.offer').offset().top) {
      $('.offer').addClass('visibleNext');
    }
    if ($(this).scrollTop() > $('.offer').offset().top * 1.05) {
      $('.offer').addClass('visibleNextTwo');
    }
    if ($(this).scrollTop() > $('.contact').offset().top * 0.95) {
      $('.contact').addClass('visible');
    }
  }
  if (window.innerWidth < 1024) {
    if ($(this).scrollTop() > $('.contact').offset().top) {
      $('.icon-box-btn').addClass('visible');
      } else {
      $('.icon-box-btn').removeClass('open visible');
      $('.icon-box').removeClass('open');
      }


      if ($(this).scrollTop() > $('.intro').offset().top * 0.95) {
        $('.intro').addClass('visible');
      }
      if ($(this).scrollTop() > $('.intro').offset().top * 1.8) {
        $('.intro').addClass('visibleNext');
      }
      if ($(this).scrollTop() > $('.intro').offset().top * 2.7) {
        $('.intro').addClass('visibleNextTwo');
      }


      if ($(this).scrollTop() > $('header').innerHeight() * 0.9 && $(this).scrollTop() < $('header').innerHeight()) {
        $('.apla').addClass('transparent');
      } else {
         $('.apla').removeClass('transparent');
      }


      if ($(this).scrollTop() > $('.showroom').offset().top * 0.9) {
        $('.showroom').addClass('visible');
      }


      if ($(this).scrollTop() > $('.about').offset().top * 0.95) {
        $('.about').addClass('visible');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.02) {
        $('.about').addClass('visibleNext');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.09) {
        $('.about').addClass('visibleNextTwo');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.185) {
        $('.about').addClass('visibleNextThree');
      }

      // Passion

      if ($(this).scrollTop() > $('.about').offset().top * 1.24) {
        $('.passion').addClass('visible');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.35) {
        $('.passion').addClass('visibleNext');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.425) {
        $('.passion').addClass('visibleNextTwo');
      }

      // Customers

      if ($(this).scrollTop() > $('.about').offset().top * 1.5 ) {
        $('.customers').addClass('visible');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.6) {
        $('.customers').addClass('visibleNext');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.63) {
        $('.customers').addClass('visibleNextTwo');
      }
      if ($(this).scrollTop() > $('.about').offset().top * 1.66) {
        $('.customers').addClass('visibleNextTwo');
      }

      // Numbers


      // if ($(this).scrollTop() > $('.numbers').offset().top * 0.975) {
      //   $('.numbers').addClass('visible');
      // };
      // if ($(this).scrollTop() > $('.numbers').offset().top) {
      //   $('.numbers').addClass('visibleNext');
      //   $('.counter').each(function() {
      //     var $this = $(this),
      //         countTo = $this.attr('data-count');
          
      //     $({ countNum: $this.text()}).animate({
      //       countNum: countTo
      //     },
        
      //     {
        
      //       duration: 3000,
      //       easing:'linear',
      //       step: function() {
      //         $this.text(Math.floor(this.countNum));
      //       },
      //       complete: function() {
      //         $this.text(this.countNum);
      //         //alert('finished');
      //       }
        
      //     });
      //   });
      // }
      // if ($(this).scrollTop() > $('.numbers').offset().top * 1.035) {
      //   $('.numbers').addClass('visibleNextTwo');
      //     $('.counterTwo').each(function() {
      //       var $this = $(this),
      //           countTo = $this.attr('data-count');
            
      //       $({ countNum: $this.text()}).animate({
      //         countNum: countTo
      //       },
          
      //       {
          
      //         duration: 3000,
      //         easing:'linear',
      //         step: function() {
      //           $this.text(Math.floor(this.countNum));
      //         },
      //         complete: function() {
      //           $this.text(this.countNum);
      //           //alert('finished');
      //         }
          
      //       });
      //     });
      // }
      // if ($(this).scrollTop() > $('.numbers').offset().top * 1.065) {
      //   $('.numbers').addClass('visibleNextThree');
      //     $('.counterThree').each(function() {
      //       var $this = $(this),
      //           countTo = $this.attr('data-count');
            
      //       $({ countNum: $this.text()}).animate({
      //         countNum: countTo
      //       },
          
      //       {
          
      //         duration: 3000,
      //         easing:'linear',
      //         step: function() {
      //           $this.text(Math.floor(this.countNum));
      //         },
      //         complete: function() {
      //           $this.text(this.countNum);
      //           //alert('finished');
      //         }
          
      //       });
      //     });
      // }


      if ($(this).scrollTop() > $('.offer').offset().top * 0.985) {
        $('.offer').addClass('visible');
      }
      if ($(this).scrollTop() > $('.offer').offset().top * 1.005) {
        $('.offer').addClass('visibleNext');
      }
      if ($(this).scrollTop() > $('.offer').offset().top * 1.025) {
        $('.offer').addClass('visibleNextTwo');
      }
      if ($(this).scrollTop() > $('.offer').offset().top * 1.06) {
        $('.offer').addClass('visibleNextThree');
      }
      if ($(this).scrollTop() > $('.offer').offset().top * 1.09) {
        $('.offer').addClass('visibleNextFour');
      }
      if ($(this).scrollTop() > $('.offer').offset().top * 1.13) {
        $('.offer').addClass('visibleNextFive');
      }
      if ($(this).scrollTop() > $('.offer').offset().top * 1.165) {
        $('.offer').addClass('visibleNextSix');
      }


      if ($(this).scrollTop() > $('.contact').offset().top * 0.99) {
        $('.contact').addClass('visible');
      }
      if ($(this).scrollTop() > $('.contact').offset().top * 1.015) {
        $('.contact').addClass('visibleNext');
      }
      if ($(this).scrollTop() > $('.contact').offset().top * 1.035) {
        $('.contact').addClass('visibleNextTwo');
      }
      if ($(this).scrollTop() > $('.contact').offset().top * 1.055) {
        $('.contact').addClass('visibleNextThree');
      }


      if ($(this).scrollTop() > $('.contact').offset().top) {
      $('.mannaz').addClass('visible');
      } else {
      $('.mannaz').removeClass('visible');
      $('.mannaz').removeClass('active');
      $('.icon-box').removeClass('visible');
      }
    }
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
border[2].style.strokeDashoffset = -dashoffset;
border[2].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3000}`;
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
border[10].style.strokeDashoffset = dashoffset;
border[10].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3100}`;
border[11].style.strokeDashoffset = dashoffset;
border[11].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3100}`;
border[12].style.strokeDashoffset = dashoffset;
border[12].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3100}`;
border[13].style.strokeDashoffset = dashoffset;
border[13].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3100}`;
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
  border[2].style.strokeDashoffset = -dashoffset * 2.5;
  border[3].style.strokeDashoffset = dashoffset * 2.3;
  border[4].style.strokeDashoffset = dashoffset * 2.3;
  border[5].style.strokeDashoffset = dashoffset * 2.3;
  border[6].style.strokeDashoffset = dashoffset * 2.3;
  border[7].style.strokeDashoffset = dashoffset * 2.3;
  border[8].style.strokeDashoffset = dashoffset * 2.3;
  border[9].style.strokeDashoffset = dashoffset * 2.3;
  border[10].style.strokeDashoffset = dashoffset * 1.25;
  border[11].style.strokeDashoffset = dashoffset * 1.25;
  border[12].style.strokeDashoffset = dashoffset * 1.25;
  border[13].style.strokeDashoffset = dashoffset * 1.25;
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


// About Extend button //

const extendBtn = document.querySelector('.quotebox button');

const extend = () => {
  const content = document.querySelector('.quotebox .second');
  extendBtn.classList.add('extend')
  setTimeout(() => {
    extendBtn.style.display = 'none';
    content.style.display = 'flex';
  }, 900);
  setTimeout(() => {
    content.classList.add('extend');
  }, 920);
}

extendBtn.addEventListener('click', extend)


// Footer //

const footerBtn = document.querySelector('.icon-box-btn');

const bottomMenu = () => {
  const bottomMenuBox = document.querySelector('.icon-box');
  if (!footerBtn.classList.contains('open')) {
    footerBtn.classList.add('open')
    bottomMenuBox.classList.add('open')
  } else {
    footerBtn.classList.remove('open')
    bottomMenuBox.classList.remove('open')
  }
}

footerBtn.addEventListener('click', bottomMenu);


// Phone //

const phoneScreen = document.querySelector('.phone-screen');
const phoneBtn = document.querySelectorAll('.phoneBtn');

const phoneBox = (e) => {
  if (window.innerWidth > 1024) {
      e.preventDefault();
      closeBtn.style.zIndex = '13';
      globalBox.style.zIndex = '6';
      phoneScreen.style.zIndex = '12';
      setTimeout(() => {
        phoneScreen.style.opacity = '1'
        closeBtn.style.opacity = '1';
      }, 200);
 }
 if (window.innerWidth < 1024) {
  const phoneNumber = document.querySelectorAll('.phoneBtn p')
   phoneBtn.forEach(button => {
     if (!button.classList.contains('focus')) {
      button.classList.add('focus');
      phoneNumber.forEach(number => {
        number.textContent = '+48 516 720 692'
      })
     } else {
       e.preventDefault();
       button.classList.remove('focus')
       phoneNumber.forEach(number => {
         number.textContent = 'WYŚWIETL NUMER TELEFONU'
       })
     }
    }
  )
 }
}


phoneBtn.forEach(button => {
  button.addEventListener('click', phoneBox);
});



// Mail Form //

const mailBtn = document.querySelectorAll('.mailBtn');
const mailScreen = document.querySelector('.mail-screen');

const mailBox = () => {
  closeBtn.style.zIndex = '13';
  mailScreen.style.zIndex = '6';
  globalBox.style.zIndex = '10';
  setTimeout(() => {
    mailScreen.style.opacity = '1'
    mailScreen.classList.add('on')
    closeBtn.style.opacity = '1'
  }, 200);
};

mailBtn.forEach(button => {
  button.addEventListener('click', mailBox);
})


const mailInput = document.querySelector('.email');
const msgInput = document.querySelector('form .msg');
const inputParent = document.querySelector('.inputParent');
const msgParent = document.querySelector('.messageParent');
const sendBtn = document.querySelector('form button');
const backBtn = document.querySelector('.finish-screen button');
const finishScreen = document.querySelector('.finish-screen');
let mailValue = mailInput.nodeValue;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


mailInput.addEventListener('input', () => {
  mailInput.setCustomValidity('');
  mailInput.checkValidity();
});

function validateMyMail() {
  if(!mailInput.value.match(mailformat)) {
    inputParent.classList.add('invalid')
    return false;
  } else inputParent.classList.remove('invalid')
  return true;
}

function validateMyMessage() {
  if(msgInput.value === '') {
    msgParent.classList.add('invalid')
    return false;
  } else msgParent.classList.remove('invalid')
  return true;
}

inputParent.addEventListener('click', () => {
  if (inputParent.classList.contains('invalid')) {
    inputParent.classList.remove('invalid')
  }
});

msgParent.addEventListener('click', () => {
  if (msgParent.classList.contains('invalid')) {
    msgParent.classList.remove('invalid')
  }
})


// Finish Screen //

sendBtn.addEventListener('click', () => {
  if (msgInput.value === '' || !mailInput.value.match(mailformat)) {
    return false;
  } else {
    sendBtn.classList.add('done');
    finishScreen.style.zIndex = '2'
    finishScreen.style.opacity = '1'
    setTimeout(function() {
      mailScreen.style.opacity = '0'
      }, 800);
    setTimeout(function() {
      mailScreen.style.zIndex = '0'
      }, 820);
    setTimeout(function() {
      sendBtn.classList.remove('done');
    }, 2000);
  }
})

backBtn.addEventListener('click', () => {
  if (!body.classList.contains('project')) {
  closeBtn.style.opacity = '0'
  setTimeout(() => {
    finishScreen.style.opacity = '0'
  }, 700);
  setTimeout(() => {
    finishScreen.style.zIndex = '-1'
    globalBox.style.zIndex = '-1'
  }, 900);
} else {
  setTimeout(() => {
    finishScreen.style.opacity = '0';
  }, 650);
  setTimeout(() => {
    finishScreen.style.zIndex = '-1'
  }, 800);
}
});





// Gallery //


const projectHeader = document.querySelector('.projects .header ');
const projectTitle = document.querySelector('.projects .title ');
const projectDescription = document.querySelector('.projects .description ');
const projectPhoto = document.querySelector('.projects .photo ');
const projectClient = document.querySelector('.projects .client ');
const projectClientTitle = document.querySelector('.projects .clientTitle');
const projectClientFanPage = document.querySelector('.website');
const projectClientFb = document.querySelector('.fanpage');
const projectClientYt = document.querySelector('.youtube');
const projectClientInsta = document.querySelector('.instagram');
const projectClientAddress = document.querySelector('.projects .address');
const projectPhotographBox = document.querySelector('.projects .photoAuthor');
const projectPhotograph = document.querySelector('.projects .photoBy');
const projectQuote = document.querySelector('.projects .clientQuote');
const projectQuoteAuthor = document.querySelector('.projects .author');
const projectQuoteBox = document.querySelector('.projects .quote')
const projectIcon = document.querySelector('.icon');
const projectIconYt = document.querySelector('.youtube img');
const projecttextYt = document.querySelector('.youtube p');
const projectTestimonials = document.querySelector('.testimonial');
const project = document.querySelector('.projects');
const projectMedia = document.querySelectorAll('.projects .media');
const projectOurBox = document.querySelector('.projects .ourbox');

const globalWrapper = document.querySelector('.global-wrapper')
const galleryProjects = document.querySelectorAll('.window');
const backButton = document.querySelector('.back');
const nextButton = document.querySelectorAll('.next');
const prevButton = document.querySelectorAll('.prev');
const projectBox = document.querySelector('.projects');
const targetElm = document.querySelector('.projects .top');
const root = document.querySelector('html');


const showroomHref = document.querySelector('.sho');


// Contents


const galleryContents = {
  
  titles: ["Wiosna Ludów", 
           "Damage Seed", 
           "Kolekcja I-talia", 
           "Boogy Woody", 
           "Carter Polska", 
           "Junior Jobs Only", 
           "Kominki.eu", 
           "Atlanca", 
           "Instrukcja RedTarget.pl", 
           "RocaMar Cruise", 
           "Holistic Studio",  
           "Jest Słodko"],

  headers: ["Ilustracje, CD Cover", 
  "Logo, Ilustracje", 
  "Ilustracje", 
  "Logo / identyfikacja wizualna", 
  "Logo / identyfikacja wizualna", 
  "Logo / Identyfikacja wizualna / Header WWW", 
  "Logo, WWW", 
  "Logo, WWW", 
  "Ilustracje",
  "Reklama",
  "Logo / Identyfikacja wizualna, WWW",
  "Logo / Identyfikacja wizualna, WWW"],
   
  
  descriptionsDesk: ["Opracowanie graficzne dla digipack’a projektu muzycznego. Motywem przewodnim jest drzewo, którego korona przedstawia mapę europy. Jego pień skrywają ludzkie profile. Sylwetka umieszczona obok drzewa to postać wokalisty. Ramiona postaci tworzą kształt oka.",

  "Założeniem projektu było stworzenie logo i ilustracji w nawiązaniu do motywu ziarna wyciąganego z oka. W logo opartym na złotej proporcji zawarty został kształt ziarna jako gałki ocznej. Ilustracja powstała na podstawie zdjęcia otrzymanego od klienta oraz sugestii na temat w/w motywu przewodniego. Całość oparta na technice wektorowej.", 
  
  "Ilustracje wektorowe dostosowane do haftu na ubraniach. Tematyka projektów nawiązuje w swobodny sposób do włoskiego klimatu. Dzięki zastosowaniu stylistyki linearnej, cała kolekcja osadzona jest w minimalistycznej formie.", 
  
  "Logo w bezpośrednim nawiązaniu do nazwy działalności inspirowanej tańcem „boogie woogie”. Kształt stworzony w oparciu o złotą proporcję. Dynamiczna forma. Element swobody. Zgodnie ze specyfikacją i oczekiwaniami klienta - przedstawia tańczące drzewa. Analiza uproszczonych sylwetek w tańcu pozwoliła wyklarować najbardziej czytelną figurę.",
  
  "Projekt logo dla oficjalnego polskiego dystrybutora koparek CARTER. Koncept oparty jest o stylizację litery A na kształt ramienia koparki.", 
  
  "Logo i nagłówek strony internetowej skierowanej do osób szukających swojej pierwszej pracy w branży IT. Ze względu na młodą grupę odbiorczą, logo tworzy połączenie kształtu emotikony z aktówką. Swobodny charakter pozwala na zminimalizowanie stresu związanego z poszukiwaniem nowej pracy, natomiast mocna forma daje wyraz solidnego podejścia do selekcji ogłoszeń.",
  
  "Projekt logo i sklepu internetowego oficjalnego dystrybutora kominków. Solidna typografia z nazwą sklepu oraz sygnet z charakterystycznym akcentem tematycznym. Jako podkreślenie międzynarodowego charakteru działalności, rozszerzenie domeny (.eu) stylizowane na zasadzie Trade Mark (TM).", 
  
  "Projekt logo i strony internetowej dla firmy zajmującej się wynajmem łodzi motorowych na Teneryfie. Sygnet logo tworzy zestawienie fal, litery A oraz kształtu łodzi dostępnych we flocie Atlanca. Kolorystyka w bezpośredni sposób nawiązuje do gorącego klimatu hiszpańskiej wyspy i aktywnej formy wypoczynku. Mocny czerwony kolor aktywizuje do działania.",

  "Instrukcja obrazkowa przedstawiająca zasadę działania produktu RedTarget. Stylistyka dostosowana do wyglądu strony klienta z zastosowaniem podstawowego koloru identyfikacji wizualnej.",

  "Ulotka w formacie 3DL dla firmy organizującej rejsy na Teneryfie. Zewnętrzna strona zrealizowana w formie wizerunkowej, a zawartość ulotki pełni rolę sprzedażową.",

  "Miejsce, które opisać można w trzech słowach - dotyk, piękno, harmonia. Projekt logo Holistic Studio łączy w sobie te trzy aspekty. Stworzony z połączenia personalizowanego symbolu harmonii, formy “koru” i sylwetki osoby realizującej masaż (widzianej od góry).", 
  
  "Jest Słodko to manufaktura czekolady.Logo nawiązuje do kształtu owocu kakaowca, który przedstawia jednocześnie literę J. W środek wpisana została litera S, tworząc akronim nazwy. Harmonijna forma powstała w oparciu o złotą proporcję jest także akronimem. Kompozycja złotego logo na czarnym tle pozwoliła uzyskać ponadczasowy, elegacki charakter identyfikacji wizualnej."],
  
  photos: ["assets/images/portfolio/1.jpg",
           "assets/images/portfolio/2.jpg", 
           "assets/images/portfolio/3.jpg", 
           "assets/images/portfolio/4.jpg", 
           "assets/images/portfolio/5.jpg", 
           "assets/images/portfolio/6.jpg", 
           "assets/images/portfolio/7.jpg", 
           "assets/images/portfolio/8.jpg", 
           "assets/images/portfolio/9.jpg",
           "assets/images/portfolio/10.jpg", 
           "assets/images/portfolio/11.jpg", 
           "assets/images/portfolio/12.jpg"],
  
  addresses : ["",

               "", 

               "I-TALIAWEAR.COM", 

               "", 

               "", 

               "JuniorJobsOnly.com", 

               "Kominki.eu", 

               "", 

               "RedTarget.pl", 

               "", 

               "", 
               
               ""],

  websiteLinks : [
  "empty",

   "empty",

    "https://i-taliawear.com/", 

    "empty", 

    "empty",

    "https://juniorjobsonly.com", 

     "https://kominki.eu", 

     "empty", 

     "https://redtarget.pl", 

     "empty",

     "empty",

     "empty"], 

  fbLinks : ["https://www.facebook.com/janrobakGMF",

   "HTTPS://WWW.FACEBOOK.COM/DAMAGESEED",

    "https://www.facebook.com/I-taliawear-108265350698176",

     "https://www.facebook.com/Boogie-Woody-112971413508798",

      "empty",

       "empty",

       "empty", 

       "https://www.facebook.com/atlanca.boat",

        "empty",

         "empty",

         "empty",

          "https://www.facebook.com/jestslodko" ],

  ytLinks : [
    "https://www.youtube.com/watch?v=15UxnqtNyf8&list=PLde9Fg2kiWvOK8aND20bi6EpNhj9BW7L7",

     "https://www.youtube.com/user/DamageSEED",

      "empty", 

      "empty", 

      "empty", 

      "empty",

       "empty",

        "empty",

         "empty", 

         "empty", 

         "empty",

          "empty" ],
  
  instaLinks: [
    "empty",
    
    "empty",
    
    "https://www.instagram.com/italiawear/",
    
    "empty",
    
    "empty",
    
    "empty",
    
    "empty",
    
    "https://www.instagram.com/atlanca_boatrental/",
    
    "empty",
    
    "https://www.instagram.com/rocamar_cruise/",
    
    "empty",
    
    "https://www.instagram.com/jest.slodko",
  ],

  photographers : ["", 

                   "", 

                   "AnnaSincini.pl",

                   "",

                   "",

                   "",

                   "",

                   "",

                   "",

                   "",

                   "",

                   ""],

   clientQuotes : ["Miałem bardzo wygórowane oczekiwania odnosnie szaty graficznej do mojego albumu. W sumie to mialem tylko zarys informacji, które chciałem, aby się tam pojawiły. Sama wspólpraca przebiegła na najwyższym poziomie! Pełne zrozumienie, choć nie musiałem robić/podpowiadać zbyt wiele, co jest mega ważne, bo nie każdy potrafi dokładnie przekazać to, czego oczekuje! (tak też było w moim przypadku). Oprócz samego wizualnego efektu w okładce została zawarta ukryta treść, dostepna tylko dla spostrzegawczego oka. WOW! Efekt końcowy przerósł wielokrotnie moje najśmielsze oczekiwania. Moje oczy zobaczyły to, co wcześniej widział tylko umysł. Rewelacja.",

  "Jestem bardzo zadowolony z przebiegu i efektów naszej współpracy. Po przedstawieniu mojego pomysłu przeszliśmy z Łukaszem do omawiania szczegółów i konkretów, by wszystko było jasne i żebyśmy oboje wiedzieli na czym stoimy. W trakcie realizowania mojego zamówienia byłem informowany o postępach i mogłem na bieżąco śledzić etapy powstawania. Dzieło, które otrzymałem na końcu spełniło, a wręcz wykroczyło poza moje oczekiwania. Z czystym sumieniem mogę polecić Łukasza każdemu - osobie potrzebującej logotypu firmy, ilustracji, czy komuś, kto po prostu potrzebuje kreatywnego grafika, który pomoże, naprowadzi i rozwinie podany mu pomysł tak, by efekt był satysfakcjonujący dla obu stron.",

  "Pan Łukasz fachowo wykonał powierzone mu zlecenie. Podobała mi się jakość wykonania grafik oraz obsługa na wysokim poziomie. Ma głowę pełną pomysłów za co serdecznie dziękuję i jak najbardziej POLECAM.",


  "Planując wygląd swojego logo miałem w głowie tylko ogólny zarys jak ma ono wyglądać. Po tych cząstkowych informacjach powstało dla mnie dzieło sztuki które w pełni zobrazowało to na czym mi zależało. Pełen profesjonalizm i wyczucie.",

  "",

  "Pan Łukasz zrobił kawał świetnej roboty dla Junior Jobs Only. Przy projekcie wykazał się wielką kreatywnością, wysoką starannością i szybkim czasem realizacji. Zawsze chętnie doradzał. Świetny kontakt. Polecam.",


  "Fachowy kontakt pozwolił na sprawne określenie potrzeb, a także specyfiki projektu. Świetna współpraca zaowocowała realizacją dedykowanego logo i funkcjonalego sklepu internetowego. W trakcie realizacji projekt ewoluował. Dzięki umiejętności uważnego słuchania oraz dostosowania widoków strony internetowej do pojawiających się sugestii i nowych wytycznych, finalnie udało się uzyskać efekt, którego oczekiwałem. Polecam.",

  "",

  "Duże zaangażowanie podczas współpracy to ogromna zaleta Pana Łukasza. Dzięki jego inwencji oraz sugestiom udało się wypracować kompromisowy sposób prezentacji produktu mojej firmy.",

  "",

  "",

  "Długo zastanawialiśmy się jak najlepiej opisać współpracę z Kresky. Doszliśmy jednak do wniosku ,że właściwym opisem będzie jedno słowo: Profesjonalizm. Dziękujemy za stały kontakt na każdym etapie realizacji naszego logo i za głebokie zrozumienie potrzeb oraz oczekiwań jakie z nim wiązaliśmy. Całym sercem polecamy."],
  



  quoteAuthors: [
    "Jan Robak, GMF LABEL",

    "Karol Bieńkowski, Lider zespołu DAMAGE SEED",

     "Izabela Dudek, właścicielka marki i-taliawear",

      "Mikołaj Drożdżyński, Boogie Woody",

      "",

      "Dawid Zamkowski, CEO Junior Jobs Only",

      "Michał Miś, CEO kominki.eu",

       "",

        "Dawid Senko, RedTarget.pl sp. z o. o.",

        "",

        "",

        "Zespół JestSłodko"
  
]};



// Events //

const logo = document.querySelector('.logo_sygnet')

const portNav = document.querySelector('.port-nav');


// Open Gallery Event//

galleryProjects.forEach(project => {  
  project.addEventListener('click', () => {
  globalBox.style.zIndex = '5';
  root.style.scrollBehavior = 'unset';
  portNav.style.opacity = '1';
  targetElm.scrollIntoView()
  project.classList.add('active');
  setTimeout(() => {
    body.classList.add('project');
  }, 500);
  setTimeout(() => {
    body.style.overflow = 'hidden';
    root.style.overflowY = 'hidden';
    closeBtn.style.opacity = '1';
  }, 800);


  let activeContent = document.querySelector('.gallery .active');
  let indexOfActiveContent = [...galleryProjects].indexOf(activeContent);


  const changeContent = () => {
    if (window.innerWidth < 1024) {
      projectOurBox.style.marginTop = '19vw';
    }
    projectHeader.textContent = galleryContents.headers[indexOfActiveContent];
    projectTitle.textContent = galleryContents.titles[indexOfActiveContent];
    projectDescription.textContent = galleryContents.descriptionsDesk[indexOfActiveContent];
    // projectClientTitle.textContent = galleryContents.websiteTitles[indexOfActiveContent];
    projectClientAddress.textContent = galleryContents.addresses[indexOfActiveContent];
    projectClientFanPage.setAttribute('href', galleryContents.websiteLinks[indexOfActiveContent]);
    projectClientFb.setAttribute('href', galleryContents.fbLinks[indexOfActiveContent]);
    projectClientYt.setAttribute('href', galleryContents.ytLinks[indexOfActiveContent]);
    projectClientInsta.setAttribute('href', galleryContents.instaLinks[indexOfActiveContent]);
    projectPhotograph.textContent = galleryContents.photographers[indexOfActiveContent];
    projectQuote.textContent = galleryContents.clientQuotes[indexOfActiveContent];
    projectQuoteAuthor.textContent = galleryContents.quoteAuthors[indexOfActiveContent];
    projectPhoto.src = galleryContents.photos[indexOfActiveContent];
    if (projectClientFanPage.href !== "") {
      projectClientFanPage.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientYt.href !== "") {
      projectClientYt.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientFb.href !== "") {
      projectClientFb.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectQuote.textContent !== "") {
      projectQuoteBox.style.display = "block"
    } else projectQuoteBox.style.display ="none";
    // if (projectClientFb.href !== "" && projectQuote.textContent !== "") {
    //   projectTestimonials.style.display = 'flex'
    // } else projectTestimonials.style.display = 'none';
    if (projectPhotograph.textContent !== "") {
      projectPhotographBox.style.display = 'block'
    } else projectPhotographBox.style.display = 'none';
    if (projectMedia[0].children[1].textContent !== "") {
      projectMedia[0].style.display = 'flex';
    } else projectMedia[0].style.display = 'none'
    if (projectMedia[1].href.indexOf("empty") > -1) {
      projectMedia[1].style.display = 'none';
    } else projectMedia[1].style.display = 'flex'
    if (projectMedia[2].href.indexOf("empty") > -1) {
      projectMedia[2].style.display = 'none';
    } else projectMedia[2].style.display = 'flex'
    if (projectMedia[3].href.indexOf("empty") > -1) {
      projectMedia[3].style.display = 'none';
    } else projectMedia[3].style.display = 'flex'
    if (projectMedia[0].children[1].textContent === "" && projectMedia[1].href.indexOf("empty") > -1 && projectMedia[2].href.indexOf("empty") > -1 && projectMedia[3].href.indexOf("empty") > -1) {
      projectClient.style.display = 'none'
      if (window.innerWidth > 1023) {
        projectOurBox.style.alignItems = 'center'
      }
      if (window.innerWidth < 1024) {
        projectTestimonials.style.alignSelf = 'flex-start';
        projectOurBox.style.marginTop = '-8vw';
      }
    } else  {
      projectClient.style.display = 'block';
      projectTestimonials.style.display = 'flex';
    }
  };


   changeContent();

  
  setTimeout(function() {
    globalWrapper.classList.add('off');
  }, 500);

 });
});



// Close Gallery Event //


const closeGalleryBtn = document.querySelector('.back');


const closeGallery = () => {
  closeBtn.style.opacity = '0';
  portNav.style.opacity = '0';
  setTimeout(() => {
    body.classList.remove('project')
    globalWrapper.classList.remove('off')
    body.style.overflowX = 'hidden';
    root.style.overflowY ='visible';
  }, 300);
  setTimeout(() => {
    globalBox.style.zIndex = '-1'
  }, 1100);
  galleryProjects.forEach(project => {
    project.classList.remove('active');
  }
 )
 root.style.scrollBehavior = 'smooth'  
}

closeGalleryBtn.addEventListener('click', closeGallery);



// Prev Project Event //



const prevBtn = document.querySelectorAll('.next')


const prevProject = () => {
  let activeContent = document.querySelector('.gallery .active');
  let indexOfActiveContent = [...galleryProjects].indexOf(activeContent);
  if (indexOfActiveContent === 0) {
    indexOfActiveContent = galleryProjects.length;
    galleryProjects[0].classList.remove('active');
  }
  indexOfActiveContent--;
  body.classList.remove('project');
  globalBox.classList.remove('Off');
  window.location = showroomHref.href;
  closeBtn.style.opacity = '0';
  setTimeout(function() {
    targetElm.scrollIntoView()
    if (indexOfActiveContent !== 11) {
      galleryProjects[indexOfActiveContent + 1].classList.remove('active');
    } else galleryProjects[11].classList.remove('active')
    root.style.scrollBehavior = 'smooth';
  }, 1200);
  setTimeout(function() {
    body.classList.add('project');
    root.style.scrollBehavior = 'unset'
    galleryProjects[indexOfActiveContent].classList.add('active');
  }, 1300);
  setTimeout(function() {
    globalBox.classList.add('Off');
    closeBtn.style.opacity = '1';
  }, 1800);

  console.log(indexOfActiveContent)

  const changeContent = () => {
    if (window.innerWidth < 1024) {
      projectOurBox.style.marginTop = '19vw';
    }
    projectHeader.textContent = galleryContents.headers[indexOfActiveContent];
    projectTitle.textContent = galleryContents.titles[indexOfActiveContent];
    projectDescription.textContent = galleryContents.descriptionsDesk[indexOfActiveContent];
    // projectClientTitle.textContent = galleryContents.websiteTitles[indexOfActiveContent];
    projectClientAddress.textContent = galleryContents.addresses[indexOfActiveContent];
    projectClientFanPage.setAttribute('href', galleryContents.websiteLinks[indexOfActiveContent]);
    projectClientFb.setAttribute('href', galleryContents.fbLinks[indexOfActiveContent]);
    projectClientYt.setAttribute('href', galleryContents.ytLinks[indexOfActiveContent]);
    projectClientInsta.setAttribute('href', galleryContents.instaLinks[indexOfActiveContent]);
    projectPhotograph.textContent = galleryContents.photographers[indexOfActiveContent];
    projectQuote.textContent = galleryContents.clientQuotes[indexOfActiveContent];
    projectQuoteAuthor.textContent = galleryContents.quoteAuthors[indexOfActiveContent];
    projectPhoto.src = galleryContents.photos[indexOfActiveContent];
    if (projectClientFanPage.href !== "") {
      projectClientFanPage.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientYt.href !== "") {
      projectClientYt.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientFb.href !== "") {
      projectClientFb.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectQuote.textContent !== "") {
      projectQuoteBox.style.display = "block"
    } else projectQuoteBox.style.display ="none";
    // if (projectClientFb.href !== "" && projectQuote.textContent !== "") {
    //   projectTestimonials.style.display = 'flex'
    // } else projectTestimonials.style.display = 'none';
    if (projectPhotograph.textContent !== "") {
      projectPhotographBox.style.display = 'block'
    } else projectPhotographBox.style.display = 'none';
    if (projectMedia[0].children[1].textContent !== "") {
      projectMedia[0].style.display = 'flex';
    } else projectMedia[0].style.display = 'none'
    if (projectMedia[1].href.indexOf("empty") > -1) {
      projectMedia[1].style.display = 'none';
    } else projectMedia[1].style.display = 'flex'
    if (projectMedia[2].href.indexOf("empty") > -1) {
      projectMedia[2].style.display = 'none';
    } else projectMedia[2].style.display = 'flex'
    if (projectMedia[3].href.indexOf("empty") > -1) {
      projectMedia[3].style.display = 'none';
    } else projectMedia[3].style.display = 'flex'
    if (projectMedia[0].children[1].textContent === "" && projectMedia[1].href.indexOf("empty") > -1 && projectMedia[2].href.indexOf("empty") > -1 && projectMedia[3].href.indexOf("empty") > -1) {
      projectClient.style.display = 'none'
      if (window.innerWidth > 1023) {
        projectOurBox.style.alignItems = 'center'
      }
      if (window.innerWidth < 1024) {
        projectTestimonials.style.alignSelf = 'flex-start';
        projectOurBox.style.marginTop = '-8vw';
      }
    } else  {
      projectClient.style.display = 'block';
      projectTestimonials.style.display = 'flex';
    }
  };


  setTimeout(function() {
    changeContent();
  }, 1000)
};

prevBtn.forEach(button => {
  button.addEventListener('click', prevProject)
})




// Next Project Event //



const nextBtn = document.querySelectorAll('.prev')


const nextProject = () => {
  let activeContent = document.querySelector('.gallery .active');
  let indexOfActiveContent = [...galleryProjects].indexOf(activeContent);
  console.log(indexOfActiveContent)
  if (indexOfActiveContent === 11) {
    indexOfActiveContent = -1;
    galleryProjects[11].classList.remove('active');
  }
  indexOfActiveContent++;
  body.classList.remove('project');
  globalBox.classList.remove('Off');
  window.location = showroomHref.href;
  closeBtn.style.opacity = '0'
  setTimeout(function() {
    targetElm.scrollIntoView()
    if (indexOfActiveContent !== 0) {
      galleryProjects[indexOfActiveContent - 1].classList.remove('active');
    } else galleryProjects[8].classList.remove('active')
    root.style.scrollBehavior = 'smooth';
  }, 1200);
  setTimeout(function() {
    body.classList.add('project');
    root.style.scrollBehavior = 'unset'
    galleryProjects[indexOfActiveContent].classList.add('active');
  }, 1300);
  setTimeout(function() {
    globalBox.classList.add('Off');
    closeBtn.style.opacity = '1'
  }, 1800);    

  const changeContent = () => {
    if (window.innerWidth < 1024) {
      projectOurBox.style.marginTop = '19vw';
    }
    projectHeader.textContent = galleryContents.headers[indexOfActiveContent];
    projectTitle.textContent = galleryContents.titles[indexOfActiveContent];
    projectDescription.textContent = galleryContents.descriptionsDesk[indexOfActiveContent];
    // projectClientTitle.textContent = galleryContents.websiteTitles[indexOfActiveContent];
    projectClientAddress.textContent = galleryContents.addresses[indexOfActiveContent];
    projectClientFanPage.setAttribute('href', galleryContents.websiteLinks[indexOfActiveContent]);
    projectClientFb.setAttribute('href', galleryContents.fbLinks[indexOfActiveContent]);
    projectClientYt.setAttribute('href', galleryContents.ytLinks[indexOfActiveContent]);
    projectClientInsta.setAttribute('href', galleryContents.instaLinks[indexOfActiveContent]);
    projectPhotograph.textContent = galleryContents.photographers[indexOfActiveContent];
    projectQuote.textContent = galleryContents.clientQuotes[indexOfActiveContent];
    projectQuoteAuthor.textContent = galleryContents.quoteAuthors[indexOfActiveContent];
    projectPhoto.src = galleryContents.photos[indexOfActiveContent];
    if (projectClientFanPage.href !== "") {
      projectClientFanPage.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientYt.href !== "") {
      projectClientYt.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientFb.href !== "") {
      projectClientFb.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectQuote.textContent !== "") {
      projectQuoteBox.style.display = "block"
    } else projectQuoteBox.style.display ="none";
    // if (projectClientFb.href !== "" && projectQuote.textContent !== "") {
    //   projectTestimonials.style.display = 'flex'
    // } else projectTestimonials.style.display = 'none';
    if (projectPhotograph.textContent !== "") {
      projectPhotographBox.style.display = 'block'
    } else projectPhotographBox.style.display = 'none';
    if (projectMedia[0].children[1].textContent !== "") {
      projectMedia[0].style.display = 'flex';
    } else projectMedia[0].style.display = 'none'
    if (projectMedia[1].href.indexOf("empty") > -1) {
      projectMedia[1].style.display = 'none';
    } else projectMedia[1].style.display = 'flex'
    if (projectMedia[2].href.indexOf("empty") > -1) {
      projectMedia[2].style.display = 'none';
    } else projectMedia[2].style.display = 'flex'
    if (projectMedia[3].href.indexOf("empty") > -1) {
      projectMedia[3].style.display = 'none';
    } else projectMedia[3].style.display = 'flex'
    if (projectMedia[0].children[1].textContent === "" && projectMedia[1].href.indexOf("empty") > -1 && projectMedia[2].href.indexOf("empty") > -1 && projectMedia[3].href.indexOf("empty") > -1) {
      projectClient.style.display = 'none'
      if (window.innerWidth > 1023) {
        projectOurBox.style.alignItems = 'center'
      }
      if (window.innerWidth < 1024) {
        projectTestimonials.style.alignSelf = 'flex-start';
        projectOurBox.style.marginTop = '-8vw';
      }
    } else  {
      projectClient.style.display = 'block';
      projectTestimonials.style.display = 'flex';
    }
  };


  setTimeout(function() {
    changeContent();
  }, 1000)
};

nextBtn.forEach(button => {
  button.addEventListener('click', nextProject)
})





// Close Button //

const closeWindow = () => {
  

  // Gallery Close

  if (!body.classList.contains('project')) {
    if (phoneScreen.style.opacity === '1') {
      phoneScreen.style.opacity = '0';
      setTimeout(() => {
        globalBox.style.zIndex = '-1'
        phoneScreen.style.zIndex = '-1'
      }, 800);
      closeBtn.style.opacity = '0'
    }
    if (finishScreen.style.opacity === '1') {
      finishScreen.style.opacity = '0';
      setTimeout(() => {
        globalBox.style.zIndex = '-1'
        finishScreen.style.zIndex = '-1'
      }, 800);
      closeBtn.style.opacity = '0'
    }
    if (mailScreen.style.opacity === '1') {
      mailScreen.style.opacity = '0';
      setTimeout(() => {
        globalBox.style.zIndex = '-1'
        mailScreen.style.zIndex = '-1'
        mailScreen.classList.remove('on');
      }, 800);
      closeBtn.style.opacity = '0'
    }
    
    // Gallery Open//

  } else {
    if (phoneScreen.style.opacity === '1' || mailScreen.style.opacity === '1' || finishScreen.style.opacity === '1') {
      phoneScreen.style.opacity = '0';
      mailScreen.style.opacity = '0';
      finishScreen.style.opacity = '0';
      setTimeout(() => {
        phoneScreen.style.zIndex = '0';
        mailScreen.style.zIndex = '0';
        finishScreen.style.zIndex = '0';
        mailScreen.classList.remove('on');
      }, 100);
    } else if (phoneScreen.style.opacity === '0' || mailScreen.style.opacity === '0' || finishScreen.style.opacity === '0') {
      closeBtn.style.opacity = '0';
      portNav.style.opacity = '0';
      body.style.overflowX = 'hidden';
      root.style.overflowY = 'visible';
      setTimeout(() => {
        body.classList.remove('project')
        globalWrapper.classList.remove('off')
        body.style.overflow = 'visible';
      }, 300);
      setTimeout(() => {
        globalBox.style.zIndex = '-1'
      }, 1100);
      galleryProjects.forEach(project => {
        project.classList.remove('active');
      }
     )
     root.style.scrollBehavior = 'smooth'
    }
 }
};

closeBtn.addEventListener('click', closeWindow);



window.onload = () => {
  phoneScreen.style.opacity = '0';
  mailScreen.style.opacity = '0';
  finishScreen.style.opacity = '0';
  portNav.style.opacity = '0';
  const headerImg = document.querySelector('h1 img')
  const loader = document.querySelector('.loading')
  setTimeout(() => {
    mainHeader.classList.remove('headerTransition');
  }, 3000);
  setTimeout(() => {
    headerImg.classList.remove('start');
  }, 3200);
  setTimeout(() => {
    loader.style.display = 'none';
    globalBox.style.zIndex = '-1';
  }, 3400);
  setTimeout(() => {
    pHeader.classList.remove('pTransition');
  }, 4400);
}