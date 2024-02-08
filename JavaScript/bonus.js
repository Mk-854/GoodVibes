$(function() {
  var h = $(window).height();
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
//全ての読み込みが完了したら実行ローダー
$(window).load(function () { 
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

$('.hamburger').click(function () {
    $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
    }
});

window.onload = function () {
  $("#onemore, .card").addClass("disappear");
};

const gachaData = [10, 20, 30, 40, 50, 60, 70];
const min = 1;
const max = 70;

function OneMoreOnButtonClick() {
  $("#app, #button-name, #glow").addClass("disappear");
  $("onemore").addClass("appear");
  $(".card, .card #holo").addClass("disappear");
  $(".card").removeClass("animated");
  $(".card #glow2").addClass("active");

  const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;

  for (let i = 0; i < gachaData.length; i++) {
    const cardNumber = i + 1;
    const card = $(`#card_${cardNumber}`);
    const holo = $(`#card_${cardNumber} #holo`);

    if (randomNum >= i * 10 + min && randomNum < (i + 1) * 10 + min) {
      holo.removeClass("disappear");
      card.removeClass("disappear").addClass("appear");
      $("#onemore").addClass("displayblock");

      var animation = setTimeout(function () {
        card.addClass("animated");
      }, 1000);
      break; 
    }
  }
}