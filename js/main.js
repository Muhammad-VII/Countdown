// global variables
let mainNavWidth = $(`.nav-mine`).innerWidth();
//

// Navbar toggle
$(`#closeNav`).on(`click`, function () {
  $(`.nav-mine`).animate({ left: -mainNavWidth });
  $(`.nav-icon`).animate({ left: `1%` });
});
// remember to swith this to width not position
$(`#toggleNav`).on(`click`, function () {
  $(`.nav-mine`).animate({ left: 0 });
  $(`.nav-icon`).animate({ left: `15%` });
});


// collapse
$(`#firstSingerToggle`).on(`click`, function () {
  $(`.singer-one p`).slideToggle(400);
});

$(`#secondSingerToggle`).on(`click`, function () {
  $(`.singer-two p`).slideToggle(400);
});

$(`#thirdSingerToggle`).on(`click`, function () {
  $(`.singer-three p`).slideToggle(400);
});

$(`#fourthSingerToggle`).on(`click`, function () {
  $(`.singer-four p`).slideToggle(400);
});

// Start Countdown
(function () {
  const dayEle = document.getElementById(`days`);
  const hoursEle = document.getElementById(`hrs`);
  const mins = document.getElementById(`mins`);
  const sec = document.getElementById(`sec`);

  const countDownDate = new Date("July 27, 2021 12:00:00").getTime();
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dayEle.innerHTML = days + " Days";
    hoursEle.innerHTML = hours + " Hours";
    mins.innerHTML = minutes + " Minutes";
    sec.innerHTML = seconds + " Seconds";

    if (distance < 0) {
      clearInterval(countdown);
      $(".col").fadeOut(1, function () {
        $("#expired").fadeIn(1000, function () {
          $("#countDownFinish").html("Party started");
        });
      });
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
        `<span class = "text-danger">${character}</span>` +
          ` ` +
          `Characters remaining`
      );
    }
  });
});

// smooth scrolling
$("ul li a").click(function () {
  let sectionId = $(this).attr("href");

  let positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({ scrollTop: positionOfSection }, 2000);
});

// Loading animation
(function () {
  $(document).ready(function () {
    $(`.loader`).fadeOut(1000);
  });
})();
