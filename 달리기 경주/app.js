//인덱스를 찾아서 변경 --> 시간초과
function solution(players, callings) {
    for (let i=0; i<callings.length; i++){
        let indexnum = players.indexOf(callings[i])
        players[indexnum] = players[indexnum-1];
        players[indexnum-1] = callings[i];
    }
    return players;
}