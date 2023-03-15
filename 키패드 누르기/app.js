function solution(numbers, hand) {
    let answer = '';
    let left = 10;
    let right = 12;

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === 0)
            numbers[i] = 11;

        //왼손으로 누르는 경우
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            answer += 'L';
            left = numbers[i];
        }
        //오른손으로 누르는 경우
        else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            answer += 'R';
            right = numbers[i];
        }
        //가까운 손가락으로 눌러야하는 경우. 거리 같으면 오른손잡이, 왼손잡이 파악
        else{
            var leftDistance = 0;
            var rightDistance = 0;
            //왼손이 왼쪽 열 키패드에 있을 때
            if(left == 1 || left == 4 || left == 7 || left == 10){
                leftDistance = Math.abs((numbers[i] - (left+1)) / 3) + 1;
            }
            //왼손이 가운데 열 키패드에 있을 때
            else {
                leftDistance = Math.abs((numbers[i]-left)/3);
            }
            //오른손이 오른쪽 열 키패드에 있을 때
            if(right == 3 || right == 6 || right == 9 || right == 12){
                rightDistance = Math.abs((numbers[i] - (right-1)) / 3) + 1;
            }
            //오른손이 가운데 열 키패드에 있을 때
            else{
                rightDistance = Math.abs((numbers[i]-right)/3);
            }

        
            if(leftDistance === rightDistance){
                if(hand === "right"){
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
    }
    console.log(answer);
    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")