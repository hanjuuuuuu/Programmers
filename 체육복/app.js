function solution(n, lost, reserve) {
    let answer = n - lost.length;

    //중복 제거
    let realLost = lost.filter(x => !reserve.includes(x));        //체육복이 한 벌도 없는 사람
    let realReserve = reserve.filter(x => !lost.includes(x));       //여분 체육복이 있는 사람
    realLost.sort((a,b) => a-b);
    realReserve.sort((a,b)=> a-b);
    
    //여분 체육복 나눠주기
    for(let i=0; i<realLost.length; i++){
        if(realReserve.includes(realLost[i]-1)){
            answer++;
            realReserve = realReserve.filter(x => x !== realLost[i]-1);
        }
        else if(realReserve.includes(realLost[i]+1)){
            answer++;
            realReserve =  realReserve.filter((x) => (x !== realLost[i]+1)); 
        }
    }
    console.log(answer)
    return answer;
}

solution(5, [2,4], [3])