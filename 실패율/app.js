function solution(N, stages) {
    var answer = [];
    var failure = 0;
    var player = 0;
    for(let i=1; i<=N; i++){
        var count = 0;
        for(let j=0; j<stages.length; j++){
            if(stages[j] === i){
                count++;
                stages.splice(j,1)
            }
        }
        failure = count;
        player = stages.length
    }
    return answer;
}