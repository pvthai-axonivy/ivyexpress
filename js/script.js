var currentDeg = 0;
var prevDeg = 0;
var randDeg = 0;
var turns = 0;
var transDuration = 3;
const gifts = [
  'Yamaha Exciter 150GP 2019',
  'Chúc bạn may mắn lần sau!',
  '50.000 VND tặng vào VTC Pay',
  'Xiaomi Redmi S2 64GB',
  '100.000 VND tặng vào VTC Pay',
  '500.000 VND tặng vào VTC Pay',
  '10.000 VND tặng vào VTC Pay'
];

function getGift(val) {
  if ((val >= 0 && val <= 10) || (val >= 321 && val <= 370))
    return gifts[0];
  if (val >= 11 && val <= 61)
    return gifts[1];
  if (val >= 62 && val <= 113)
    return gifts[2];
  if (val >= 114 && val <= 164)
    return gifts[3];
  if (val >= 165 && val <= 216)
    return gifts[4];
  if (val >= 166 && val <= 267)
    return gifts[5];
  if (val >= 268 && val <= 320)
    return gifts[6];
}

$('#turn-btn').on('click', function(e) {
  e.preventDefault();
  currentDeg += Math.floor(Math.random() * 10000) + 500;
  turns = Math.floor((currentDeg - prevDeg) / 360);
  prevDeg = currentDeg;
  transDuration = turns / 10 + 2;

  $('#wheel-check').css({
    'transform': 'rotate(' + currentDeg + 'deg)',
    'transition-duration': transDuration + 's'
  });

  setTimeout(() => {
    Swal.fire(
      getGift(currentDeg % 360),
      'Phần thưởng',
      'success'
    );
  }, transDuration * 1000 + 500);
  
});