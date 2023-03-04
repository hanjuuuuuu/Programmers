function solution(N, stages) {
    var answer = [];

    for(let i=1; i<=N; i++){
        let reach = stages.filter((x)=> x >= i).length;
        let curr = stages.filter((x)=> x === i).length;
        answer.push([i, reach/curr]);
    }

    answer.sort((a,b) => b[1]-a[1]);

    return answer.map((x)=>x[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])