function solution(lottos, win_nums) {
    let answer = [];
    
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    const zeroCount = lottos.filter(zero => zero === 0).length; 
    //console.log(correct, zerocount)

    let min = correct===0 ? 6 : 7-correct;
    let max = min-zeroCount===0 ? 1 : min-zeroCount;
    answer.push(max,min)

    //console.log(answer)
    return answer;
}


solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])