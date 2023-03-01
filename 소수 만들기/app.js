const isPrime = (num) => {     //소수 판별
    var div = Math.floor(Math.sqrt(num));
    for(let i=2; i<=div; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true
}

function solution(nums) {
    var answer = 0;
    var sum = 0;
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                sum += (nums[i]+nums[j]+nums[k]);
                if(isPrime(sum) === true)
                    answer++;
                sum = 0;
            }
        }
    }
    console.log(answer);
}

solution([1,2,7,6,4])