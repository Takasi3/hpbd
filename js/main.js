$(document).ready(function() {
    // process bar
    $('.content').hide();
    setTimeout(function () {
        firstQuestion();
    }, 8000);

    setTimeout(function () {
        $('#c').delay(7500).fadeOut('slow');
        $('body').delay(7500).css({
            'overflow': 'visible'
        });
    }, 600);
})
function init(){
    $('#title').text(CONFIG.title)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion() {

    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: 'img/lookMe.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: 'thistle',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
    }).then(function () {
            $('#auHpbd')[0].volume = 0.1;
          $('#auHpbd')[0].play();
          $('.book').show(100);
          //$('.content').show(100);

      })
}
 // switch button position
 function switchButton() {
     var audio = new Audio('sound/duck.mp3');
     audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton(n) {
    var audio = new Audio('sound/duck.mp3');
    audio.volume = 0.1;
    if (n % 3 == 0) 
        audio.play();

    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.5 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.5;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init();

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton(n);
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})


// show popup
$('#yes').click(function() {

    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        width: 900,
        confirmButtonText: CONFIG.btnAccept,
        background: '#fff url("img/iput-bg.jpg")',
        title: CONFIG.mess,
        text: CONFIG.messDesc,
        confirmButtonColor: '#83d0c9',
        onClose: () => {
            window.location = CONFIG.messLink;
        }
    });
})

