function solution(food) {
    var answer = [];
    for(let i=1; i<food.length; i++){
        let count = Math.floor(food[i]/2)
        for(let j=0; j<count; j++){
            answer.push(i);
        } 
    }
    answer.push(0);
    for(let j=answer.length-2; j>=0; j--)
        answer.push(answer[j])
    return answer.join('');
}

solution([1,3,4,6])