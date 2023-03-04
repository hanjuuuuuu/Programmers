function solution(N, stages) {
    var answer = [];
    var failure = 0;
    var player = stages.length;

    for(let i=1; i<=N; i++){
        var count = 0;
        for(let j=0; j<stages.length; j++){
            if(stages[j] === i){
                count++;
            }
        }
        player -= failure;
        failure = count;
        rate = failure/player;
        answer.push({stage:i,rate:rate});
    }

    answer.sort((a,b) => {
        if(a.rate === b.rate)
            return a.stage-b.stage;
        else
            return b.rate-a.rate;
    });

    return answer.map(item=>item.stage)
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])