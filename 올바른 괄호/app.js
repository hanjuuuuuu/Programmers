function solution(s) {
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack += 1;
    else if (s[i] == ")") stack -= 1;

    if (stack < 0 || stack > s.length / 2) break;
  }

  return stack == 0 ? true : false;
}
