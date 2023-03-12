function solution(numbers, hand) {
    let answer = '';
    let left = '';
    let right = '';

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === 1 && 4 && 7){
            answer += 'L';
            left = numbers[i];
        }
        else if(numbers[i] === 3 && 6 && 9){
            answer += 'R';
            right = numbers[i];
        }
        else
            if(Math.abs(numbers[i]-left) < Math.abs(numbers[i]-right)){
                answer += 'L'
            }
            else if(Math.abs(numbers[i]-left) > Math.abs(numbers[i]-right)){
                answer += 'R'
            }
            else {
                if(hand === 'right')
                    answer += 'R'
                else
                    answer += 'L'
            }
    }
    console.log(answer);
    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")