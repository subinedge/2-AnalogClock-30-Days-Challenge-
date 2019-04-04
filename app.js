const hour_hand = document.querySelector('.hour-hand');
const minute_hand = document.querySelector('.minute-hand');
const second_hand = document.querySelector('.second-hand');

function updateTime() {
  //   console.log('che che che');
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  second_hand.style.transform = `rotate(${secondDegrees}deg)`;
  // console.log(seconds);

  const minutes = currentDate.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  minute_hand.style.transform = `rotate(${minuteDegrees}deg)`;
  // console.log(minutes);

  const hours = currentDate.getHours();
  const hourDegrees = ((hours / 60) * 360) - 90;
  hour_hand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(updateTime, 1000);
