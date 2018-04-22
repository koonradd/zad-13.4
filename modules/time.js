function changeTime(time) {
  var hours = Math.floor(time / 3600);
  var minuts = Math.floor((time % 3600) / 60);
  var second = Math.floor((time % 3600) % 60);
  var score = " ";

  if (hours === 0) {
    score = minuts + "min " + second + "s ";
    return score;
  } else if (hours === 0 && minuts === 0) {
    score = second + "s ";
    return score;
  } else {
    score = hours + "h " + minuts + "min " + second + "s ";
    return score;
  }
}

exports.print = changeTime;