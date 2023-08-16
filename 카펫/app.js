function solution(brown, yellow) {
  var answer = [];
  var total = brown + yellow;
  for (let i = 3; i <= total / 2; i++) {
    if (total % i == 0) {
      var share = total / i;
    }
    if ((share - 2) * (i - 2) == yellow) {
      answer.push(share, i);
      break;
    }
  }
  return answer;
}
