const globalBox = document.querySelector('.global');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.close');



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
      svgTop.style.strokeDashoffset = (lengthSvgTop - 1800) - (draw * 6.25);
    } else svgTop.style.strokeDashoffset = (lengthSvgTop - 1800) - (draw * 4.75);
    const drawMobile = lengthSvgTopMobile * scrollpercent * 7.25;
    svgTopMobile.style.strokeDashoffset = (lengthSvgTopMobile + 1000) - drawMobile;
  });










const sygnet = document.querySelector('.logo_sygnet img');


$(window).scroll(function() {
  if ($(this).scrollTop() >= 5) {
  sygnet.src ="assets/icons/sygnet-open.svg";
  body.classList.add('after');
  } else {
    sygnet.src = 'assets/icons/sygnet_logo.svg'
    body.classList.remove('after')
  };
  if (window.innerWidth < 1024) {
    if ($(this).scrollTop() > $('.contact').offset().top) {
      $('.icon-box-btn').addClass('visible');
      } else {
      $('.icon-box-btn').removeClass('open visible');
      $('.icon-box').removeClass('open');
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
border[10].style.strokeDashoffset = dashoffset;
border[10].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3100}`;
border[11].style.strokeDashoffset = dashoffset;
border[11].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3100}`;
border[12].style.strokeDashoffset = dashoffset;
border[12].style.strokeDasharray = `${strokeLength},${pathLength - strokeLength - 3100}`;
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
  border[10].style.strokeDashoffset = dashoffset * 1.25;
  border[11].style.strokeDashoffset = dashoffset * 1.25;
  border[12].style.strokeDashoffset = dashoffset * 1.25;
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
    finishScreen.style.opacity = '0'
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
  finishScreen.style.opacity = '0';
  if (!body.classList.contains('project')) {
  closeBtn.style.opacity = '0'
  setTimeout(() => {
    globalBox.style.zIndex = '-1'
    finishScreen.style.zIndex = '-1'
  }, 500);
} else {
  setTimeout(() => {
    finishScreen.style.zIndex = '-1'
  }, 500);
}
});





// Gallery //


const projectHeader = document.querySelector('.projects .header ');
const projectTitle = document.querySelector('.projects .title ');
const projectDescription = document.querySelector('.projects .description ');
const projectPhoto = document.querySelector('.projects .photo ');
const projectClientTitle = document.querySelector('.projects .clientTitle');
const projectClientFanPage = document.querySelector('.website');
const projectClientFb = document.querySelector('.fanpage');
const projectClientYt = document.querySelector('.youtube');
const projectClientAddress = document.querySelector('.projects .address');
const projectPhotograph = document.querySelector('.projects .photoBy');
const projectQuote = document.querySelector('.projects .clientQuote');
const projectQuoteAuthor = document.querySelector('.projects .author');
const projectQuoteBox = document.querySelector('.projects .quote')
const projectIcon = document.querySelector('.icon');
const projectIconYt = document.querySelector('.youtube img');
const projecttextYt = document.querySelector('.youtube p');
const projectTestimonials = document.querySelector('.testimonial');
const project = document.querySelector('.projects');

const globalWrapper = document.querySelector('.global-wrapper')
const galleryProjects = document.querySelectorAll('.hoverbox div');
const backButton = document.querySelector('.back');
const nextButton = document.querySelectorAll('.next');
const prevButton = document.querySelectorAll('.prev');
const projectBox = document.querySelector('.projects');
var targetElm = document.querySelector('.projects .top');
var root = document.querySelector('html');


const showroomHref = document.querySelector('.sho');


// Contents


const galleryContents = {
  headers: [" Okładka płyty CD (digipack)", 
            " Logo + ilustracja", 
            " Ilustracje (na ubrania)", 
            " 4 Lubię Placki", 
            " 5 Lubię Placki", 
            " 6 Lubię Placki", 
            " 7 Lubię Placki", 
            " 8 Lubię Placki", 
            " 9 Lubię Placki"],
  
  titles: ["Wiosna Ludów", 
           "Damage Seed", 
           "Kolekcja I-talia", 
           "Święto Lasu", 
           " 4 Lubię Placki", 
           " 5 Lubię Placki", 
           " 6 Lubię Placki", 
           " 7 Lubię Placki", 
           " 8 Lubię Placki"],
   
  
  descriptionsDesk: ["Opracowanie graficzne dla digipack’a projektu muzycznego. Motywem przewodnim jest drzewo, którego korona przedstawia mapę europy. Jego pień skrywają ludzkie profile. Sylwetka umieszczona obok drzewa to postać wokalisty. Ramiona postaci tworzą kształt oka.",

  "Założeniem projektu było stworzenie logo i ilustracji w nawiązaniu do motywu ziarna wyciąganego z oka. W logo opartym na złotej proporcji zawarty został kształt ziarna jako gałki ocznej. Ilustracja powstała na podstawie zdjęcia otrzymanego od klienta oraz sugestii na temat w/w motywu przewodniego. Całość oparta na technice wektorowej.", 
  
  "Ilustracje wektorowe dostosowane do haftu na ubraniach. Tematyka projektów nawiązuje w swobodny sposób do włoskiego klimatu. Dzięki zastosowaniu stylistyki linearnej, cała kolekcja osadzona jest w minimalistycznej formie.", 
  
  "Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4Opis 4", " 4 Lubię Placki", " 4 Lubię Placki", " 4 Lubię Placki", " 4 Lubię Placki", " 4 Lubię Placki"],
  
  photos: ["assets/images/portfolio/1.jpg", 
           "assets/images/portfolio/2.jpg", 
           "assets/images/portfolio/3.jpg", 
           "assets/images/portfolio/3.jpg", 
           "assets/images/portfolio/5.jpg", 
           "assets/images/portfolio/6.jpg", 
           "assets/images/portfolio/7.jpg", 
           "assets/images/portfolio/8.jpg", 
           "assets/images/portfolio/9.jpg"],

  photosMobile: ["assets/images/portfolio-mobile/1.jpg", 
           "assets/images/portfolio-mobile/2.jpg", 
           "assets/images/portfolio-mobile/3.jpg", 
           "assets/images/portfolio-mobile/3.jpg", 
           "assets/images/portfolio-mobile/5.jpg", 
           "assets/images/portfolio-mobile/6.jpg", 
           "assets/images/portfolio-mobile/7.jpg", 
           "assets/images/portfolio-mobile/8.jpg", 
           "assets/images/portfolio-mobile/9.jpg"],
  
  addresses : ["www.adres1.pl",
               "", 
               "I-TALIAWEAR.COM", 
               "www.adres4.pl", 
               "www.adres5.pl", 
               "www.adres6.pl", 
               "www.adres7.pl", 
               "www.adres8.pl", 
               "www.adres9.pl"],

  websiteLinks : ["www.adres1.pl", "https://www.empty.com", "www.adres3.pl", "https://www.empty.com", "www.adres5.pl", "www.adres6.pl", "www.adres7.pl", "www.adres8.pl", "www.adres9.pl"], 

  fbLinks : ["www.adres1.pl", "HTTPS://WWW.FACEBOOK.COM/DAMAGESEED", "www.adres3.pl", "https://www.empty.com", "www.adres5.pl", "www.adres6.pl", "www.adres7.pl", "www.adres8.pl", "www.adres9.pl", ],

  ytLinks : ["www.adres1.pl", "HTTPS://WWW.YOUTUBE.COM/USER/DAMAGESEED", "www.adres3.pl", "www.adres4.pl", "www.adres5.pl", "www.adres6.pl", "www.adres7.pl", "www.adres8.pl", "www.adres9.pl", ],

  photographers : ["Imie i nazwisko1", 
                   "Imie i nazwisko2", 
                   "Imie i nazwisko3",
                   "Imie i nazwisko4",
                   "Imie i nazwisko5",
                   "Imie i nazwisko6",
                   "Imie i nazwisko7",
                   "Imie i nazwisko8",
                   "Imie i nazwisko9"],

   clientQuotes : ["Miałem bardzo wygórowane oczekiwania odnosnie szaty graficznej do mojego albumu. W sumie to mialem tylko zarys informacji, które chciałem, aby się tam pojawiły. Sama wspólpraca przebiegła na najwyższym poziomie! Pełne zrozumienie, choć nie musiałem robić/podpowiadać zbyt wiele, co jest mega ważne, bo nie każdy potrafi dokładnie przekazać to, czego oczekuje! (tak też było w moim przypadku). Oprócz samego wizualnego efektu w okładce została zawarta ukryta treść, dostepna tylko dla spostrzegawczego oka. WOW! Efekt końcowy przerósł wielokrotnie moje najsmielsze oczekiwania. Moje oczy zobaczyły to, co wcześniej widział tylko umysł. Rewelacja.",

  "Jestem bardzo zadowolony z przebiegu i efektów naszej współpracy. Po przedstawieniu mojego pomysłu przeszliśmy z Łukaszem do omawiania szczegółów i konkretów, by wszystko było jasne i żebyśmy oboje wiedzieli na czym stoimy. W trakcie realizowania mojego zamówienia byłem informowany o postępach i mogłem na bieżąco śledzić etapy powstawania. Dzieło, które otrzymałem na końcu spełniło, a wręcz wykroczyło poza moje oczekiwania. Z czystym sumieniem mogę polecić Łukasza każdemu - osobie potrzebującej logotypu firmy, ilustracji, czy komuś, kto po prostu potrzebuje kreatywnego grafika, który pomoże, naprowadzi i rozwinie podany mu pomysł tak, by efekt był satysfakcjonujący dla obu stron.",

  "Fachowy kontakt pozwolił na sprawne określenie potrzeb, a także specyfiki projektu. Świetna współpraca zaowocowała projektami dedykowanego logoi funkcjonalego sklepu internetowego; dostosowanymi do profilu moich klientów. Polecam.",
  "",

  "",

  "Fachowy kontakt pozwolił na sprawne określenie potrzeb, a także specyfiki projektu. Świetna współpraca zaowocowała projektami dedykowanego logoi funkcjonalego sklepu internetowego; dostosowanymi do profilu moich klientów. Polecam.",
  "Duże zaangażowanie podczas naszej współpracy to ogromna zaleta. Dzięki inwencji twórczej oraz sugestiom udało się wypracować atrakcyjny sposób prezentacji produktu mojej firmy.",

  "Jestem bardzo zadowolony z przebiegu i efektów naszej współpracy. W trakcie realizowania projektu byłem informowany o postępach i mogłem na bieżąco śledzić etapy powstawania. Dzieło, które otrzymałem spełniło, a wręcz wykroczyło ponad moje oczekiwania.Z czystym sumieniem mogę polecić każdemu - osobie potrzebującej logo, ilustracji, czy komuś, kto po prostu potrzebuje kreatywnego grafika, który pomoże, naprowadzi i rozwinie podany mu pomysł tak, by efekt był satysfakcjonujący dla obu stron.",

  "Planując wygląd swojego logo miałem w głowie tylko ogólny zarys jak ma ono wyglądać. Po tych cząstkowych informacjach powstało dla mnie dzieło sztuki które w pełni zobrazowało to na czym mi zależało. Pełen profesjonalizm i wyczucie. Dziękuję i polecam.",

  "Miałem bardzo wygórowane oczekiwania odnosnie szaty graficznej do mojego albumu. W sumie to mialem tylko zarys informacji, które chciałem, aby się tam pojawiły. Sama wspólpraca przebiegła na najwyższym poziomie! Pełne zrozumienie, choć nie musiałem robić/podpowiadać zbyt wiele, co jest mega ważne, bo nie każdy potrafi dokładnie przekazać to, czego oczekuje! (tak też było w moim przypadku). Oprócz samego wizualnego efektu w okładce została zawarta ukryta treść, dostepna tylko dla spostrzegawczego oka. WOW! Efekt końcowy przerósł wielokrotnie moje najsmielsze oczekiwania. Moje oczy zobaczyły to, co wcześniej widział tylko umysł. Rewelacja.",

  "Jestem bardzo zadowolony z przebiegu i efektów naszej współpracy. W trakcie realizowania projektu byłem informowany o postępach i mogłem na bieżąco śledzić etapy powstawania. Dzieło, które otrzymałem spełniło, a wręcz wykroczyło ponad moje oczekiwania.Z czystym sumieniem mogę polecić każdemu - osobie potrzebującej logo, ilustracji, czy komuś, kto po prostu potrzebuje kreatywnego grafika, który pomoże, naprowadzi i rozwinie podany mu pomysł tak, by efekt był satysfakcjonujący dla obu stron."],



  quoteAuthors: ["Jan Robak, GMF LABEL","Karol Bieńkowski, Lider zespołu DAMAGE SEED", "Mikołaj Drożdżyński, BOOGIE WOODY", "Dawid Senko, REDTARGET.PL Sp. z o.o",
                "Michał Miś, CEO kominki.eu","Jan Robak, GMF LABEL","Karol Bieńkowski, Lider zespołu DAMAGE SEED", "Mikołaj Drożdżyński, BOOGIE WOODY", "Jan Robak, GMF LABEL"]};



// Events //


// Open Gallery Event//

galleryProjects.forEach(project => {    
  project.addEventListener('click', () => {
  body.classList.add('project');
  globalBox.style.zIndex = '5';
  root.style.scrollBehavior = 'unset'
  project.classList.add('active');
  setTimeout(() => {
    body.style.overflow = 'hidden';
    closeBtn.style.opacity = '1';
  }, 800);


  let activeContent = document.querySelector('.gallery .active');
  let indexOfActiveContent = [...galleryProjects].indexOf(activeContent);

  const changeContent = () => {
    projectHeader.textContent = galleryContents.headers[indexOfActiveContent];
    projectTitle.textContent = galleryContents.titles[indexOfActiveContent];
    projectDescription.textContent = galleryContents.descriptionsDesk[indexOfActiveContent];
    // projectClientTitle.textContent = galleryContents.websiteTitles[indexOfActiveContent];
    projectClientAddress.textContent = galleryContents.addresses[indexOfActiveContent];
    projectClientFanPage.setAttribute('href', galleryContents.websiteLinks[indexOfActiveContent]);
    projectClientFb.setAttribute('href', galleryContents.fbLinks[indexOfActiveContent]);
    projectClientYt.setAttribute('href', galleryContents.ytLinks[indexOfActiveContent]);
    projectPhotograph.textContent = galleryContents.photographers[indexOfActiveContent];
    projectQuote.textContent = galleryContents.clientQuotes[indexOfActiveContent];
    projectQuoteAuthor.textContent = galleryContents.quoteAuthors[indexOfActiveContent];
    if (window.innerWidth > 769) {
      projectPhoto.src = galleryContents.photos[indexOfActiveContent];
    } else projectPhoto.src = galleryContents.photosMobile[indexOfActiveContent];
    if (projectClientFanPage.href !== "https://www.empty.com/") {
      projectClientFanPage.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientYt.href !== "https://www.empty.com/") {
      projectClientYt.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientFb.href !== "https://www.empty.com/") {
      projectClientFb.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectQuote.textContent !== "") {
      projectQuoteBox.style.display = "block"
    } else projectQuoteBox.style.display ="none";
    if (projectClientFb.href !== "https://www.empty.com" && projectQuote.textContent !== "") {
      projectTestimonials.style.display = 'flex'
    } else projectTestimonials.style.display = 'none';
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

closeGalleryBtn.addEventListener('click', closeGallery);



// Prev Project Event //



const prevBtn = document.querySelectorAll('.prev')


const prevProject = () => {
  let activeContent = document.querySelector('.gallery .active');
  let indexOfActiveContent = [...galleryProjects].indexOf(activeContent);
  if (indexOfActiveContent < 1) {
    indexOfActiveContent = galleryProjects.length;
    galleryProjects[0].classList.remove('active');
  }
  indexOfActiveContent--;
  body.classList.remove('project');
  globalBox.classList.remove('Off');
  window.location = showroomHref.href;
  setTimeout(function() {
    targetElm.scrollIntoView()
    if (indexOfActiveContent !== 8) {
      galleryProjects[indexOfActiveContent + 1].classList.remove('active');
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
  }, 1800);    

  const changeContent = () => {
    projectHeader.textContent = galleryContents.headers[indexOfActiveContent];
    projectTitle.textContent = galleryContents.titles[indexOfActiveContent];
    projectDescription.textContent = galleryContents.descriptionsDesk[indexOfActiveContent];
    // projectClientTitle.textContent = galleryContents.websiteTitles[indexOfActiveContent];
    projectClientAddress.textContent = galleryContents.addresses[indexOfActiveContent];
    projectClientFanPage.setAttribute('href', galleryContents.websiteLinks[indexOfActiveContent]);
    projectClientFb.setAttribute('href', galleryContents.fbLinks[indexOfActiveContent]);
    projectClientYt.setAttribute('href', galleryContents.ytLinks[indexOfActiveContent]);
    projectPhotograph.textContent = galleryContents.photographers[indexOfActiveContent];
    projectQuote.textContent = galleryContents.clientQuotes[indexOfActiveContent];
    projectQuoteAuthor.textContent = galleryContents.quoteAuthors[indexOfActiveContent];
    if (window.innerWidth > 769) {
      projectPhoto.src = galleryContents.photos[indexOfActiveContent];
    } else projectPhoto.src = galleryContents.photosMobile[indexOfActiveContent];
    if (projectClientFanPage.href !== "https://www.empty.com/") {
      projectClientFanPage.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientYt.href !== "https://www.empty.com/") {
      projectClientYt.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientFb.href !== "https://www.empty.com/") {
      projectClientFb.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectQuote.textContent !== "") {
      projectQuoteBox.style.display = "block"
    } else projectQuoteBox.style.display ="none";
    if (projectClientFb.href !== "https://www.empty.com" && projectQuote.textContent !== "") {
      projectTestimonials.style.display = 'flex'
    } else projectTestimonials.style.display = 'none';
  };


  setTimeout(function() {
    changeContent();
  }, 500)
};

prevBtn.forEach(button => {
  button.addEventListener('click', prevProject)
})




// Next Project Event //



const nextBtn = document.querySelectorAll('.next')


const nextProject = () => {
  let activeContent = document.querySelector('.gallery .active');
  let indexOfActiveContent = [...galleryProjects].indexOf(activeContent);
  if (indexOfActiveContent > 7) {
    indexOfActiveContent = -1;
    galleryProjects[8].classList.remove('active');
  }
  indexOfActiveContent++;
  body.classList.remove('project');
  globalBox.classList.remove('Off');
  window.location = showroomHref.href;
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
  }, 1800);    

  const changeContent = () => {
    projectHeader.textContent = galleryContents.headers[indexOfActiveContent];
    projectTitle.textContent = galleryContents.titles[indexOfActiveContent];
    projectDescription.textContent = galleryContents.descriptionsDesk[indexOfActiveContent];
    // projectClientTitle.textContent = galleryContents.websiteTitles[indexOfActiveContent];
    projectClientAddress.textContent = galleryContents.addresses[indexOfActiveContent];
    projectClientFanPage.setAttribute('href', galleryContents.websiteLinks[indexOfActiveContent]);
    projectClientFb.setAttribute('href', galleryContents.fbLinks[indexOfActiveContent]);
    projectClientYt.setAttribute('href', galleryContents.ytLinks[indexOfActiveContent]);
    projectPhotograph.textContent = galleryContents.photographers[indexOfActiveContent];
    projectQuote.textContent = galleryContents.clientQuotes[indexOfActiveContent];
    projectQuoteAuthor.textContent = galleryContents.quoteAuthors[indexOfActiveContent];
    if (window.innerWidth > 769) {
      projectPhoto.src = galleryContents.photos[indexOfActiveContent];
    } else projectPhoto.src = galleryContents.photosMobile[indexOfActiveContent];
    if (projectClientFanPage.href !== "https://www.empty.com/") {
      projectClientFanPage.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientYt.href !== "https://www.empty.com/") {
      projectClientYt.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectClientFb.href !== "https://www.empty.com/") {
      projectClientFb.style.display = 'flex';
    } else projectClientFanPage.style.display ="none";
    if (projectQuote.textContent !== "") {
      projectQuoteBox.style.display = "block"
    } else projectQuoteBox.style.display ="none";
    if (projectClientFb.href !== "https://www.empty.com" && projectQuote.textContent !== "") {
      projectTestimonials.style.display = 'flex'
    } else projectTestimonials.style.display = 'none';
  };


  setTimeout(function() {
    changeContent();
  }, 500)
};

nextBtn.forEach(button => {
  button.addEventListener('click', prevProject)
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
      }, 100);
    } else if (phoneScreen.style.opacity === '0' || mailScreen.style.opacity === '0' || finishScreen.style.opacity === '0') {
      closeBtn.style.opacity = '0';
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
  const loader = document.querySelector('.loading')
  setTimeout(() => {
    loader.style.display = 'none';
    globalBox.style.zIndex = '-1';
  }, 3400);
}