// global variables
let mainNavWidth = $(`.nav-mine`).innerWidth();
let detailsOffset = $("#details").offset().top;
//

// Navbar toggle
$(`#closeNav`).on(`click`, function () {
  $(`.nav-mine`).animate({ left: -mainNavWidth });
  $(`.nav-icon`).animate({ width: `10%` });
});
// remember to swith this to width not position
$(`#toggleNav`).on(`click`, function () {
  $(`.nav-mine`).animate({ left: 0 });
  $(`.nav-icon`).animate({ width: `35%` });
});

// collapse
$(`#firstSingerToggle`).on(`click`, function () {
  $(`.singer-one p`).slideToggle(400);
});

$(`#secondSingerToggle`).on(`click`, function () {
  $(`.singer-two p`).slideToggle(400);
  $(`.singer-one p`).slideUp(400);
});

$(`#thirdSingerToggle`).on(`click`, function () {
  $(`.singer-three p`).slideToggle(400);
  $(`.singer-two p`).slideUp(400);
});

$(`#fourthSingerToggle`).on(`click`, function () {
  $(`.singer-four p`).slideToggle(400);
  $(`.singer-three p`).slideUp(400);
});

// Start Countdown
(function () {
  const dayEle = document.getElementById(`days`);
  const hoursEle = document.getElementById(`hrs`);
  const mins = document.getElementById(`mins`);
  const sec = document.getElementById(`sec`);

  const countDownDate = new Date("July 27, 2021 8:00:00");  //❤️ Birthday
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    dayEle.innerHTML = days + " Days";
    hoursEle.innerHTML = hours + " Hours";
    mins.innerHTML = minutes + " Minutes";
    sec.innerHTML = seconds + " Seconds";
   
    if (distance < 0) {
      $(".col").fadeOut(0, function () {
        $("#expired").fadeIn(1000) 
          $("#expired").html(`<div class="col mr-3 expired" id="expired">
          <h4 class="" id="countDownFinish">You're late :(</h4>
        </div>`)
      })
      clearInterval(countdown);
    }
  }, 1000);
})();
// End countdown

// start strict
$(function () {
  let max = 100;

  $("#userMessage").keyup(function () {
    let length = $(this).val().length;
    let character = max - length;

    if (character <= 0) {
      $("#limitWarning").html(
        `<strong class = "text-danger">More characters are not allowed</strong>`
      );
    } else {
      $("#limitWarning").html(
        `<span class = "text-danger">${character}</span>` + ` ` +`Characters remaining`
      );
    }
  });
});

$(window).on("scroll", function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > detailsOffset) {
    $("nav").css('backgroundColor','rgba(218, 95, 95,0.5)')
    $("#btnUp").fadeIn(500);
  } else {
    $("nav").css("backgroundColor", "rgba(204, 204, 204, 0.1)");
    $("#btnUp").fadeOut(500);
  }
});

$("#btnUp").on("click", function () {
  $("html,body").animate({ scrollTop: 0 }, 500);
});

// smooth scrolling
$("nav ul li a").click(function () {
  let sectionId = $(this).attr("href");
  let positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({ scrollTop: positionOfSection }, 500);
});

// Loading animation
(function () {
  $(document).ready(function () {
    $(`.loader`).fadeOut(1000);
  });
})();

$(window).on(`load`, () =>
  $(`.singer-one p`).slideDown(0),
  $("#btnUp").css('display','none')
);

function topScrollingBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  $("#myBar").css(`width`,`${scrolled}%`);
}

$(window).on(`scroll`, () => {topScrollingBar()});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// Message area (textarea)
function messageRestriction(){
  if($("#userMessage").val() == `` || $("#userMessage").val().length > 100){
    $(`#sendMessageBtn`).prop('disabled', true);
  }
  else{
    $(`#sendMessageBtn`).prop('disabled', false);
  }
  
}

$(document).ready(() => {
  messageRestriction()
})

$("#userMessage").on(`keyup`,() => {
  messageRestriction()
  $(`#message`).html(`"${$("#userMessage").val()}"`) 
})
// End of message area

// AOS plugin configration
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});