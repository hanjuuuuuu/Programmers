function solution(numbers, hand) {
    let answer = '';
    let left = 10;
    let right = 12;

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            answer += 'L';
            left = numbers[i];
        }
        else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            answer += 'R';
            right = numbers[i];
        }
        else
            var leftDistance = 0;
            var rightDistance = 0;
            if(left == 1 || left == 4 || left == 7 || left == 10){
                leftDistance = Math.abs((numbers[i] - (left+1)) / 3) + 1;
            }

        
            if(leftDistance === rightDistance){
                if(hand === " right"){
                    answer += 'R';
                    right = numbers[i];
                }
                else {
                    answer += 'L';
                    left = numbers[i];
                }
            }
            else if(leftDistance > rightDistance){
                answer += 'R';
                right = numbers[i];
            }
            else {
                answer += 'L';
                left = numbers[i];
            }
    }
    console.log(answer);
    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")