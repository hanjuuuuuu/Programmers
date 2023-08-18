function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  while (people.length > 0) {
    var min = 0;
    var max = people.length - 1;
    if (people[min] + people[max] <= limit) {
      answer += 1;
      people.splice(max, 1);
      people.splice(min, 1);
    } else {
      answer += 1;
      people.splice(max, 1);
    }
  }
  return answer;
}
