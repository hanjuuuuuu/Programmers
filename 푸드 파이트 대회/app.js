function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++){
        let count = Math.floor(food[i]/2)
        for(let j=0; j<count; j++)
            answer += i
    }
    answer += 0;
    return answer;
}