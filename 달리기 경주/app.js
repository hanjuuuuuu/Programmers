function solution(players, callings) {
    var answer = {};
    
    //객체로 plqyers의 인덱스 값 저장({"mumu":0, "soe":1})
    for(let i=0; i<players.length; i++){
        answer[players[i]] = i;
    }
    
    //추월한 선수 자리 바꾸기
    callings.forEach(ele => {
        let indexnum = answer[ele]; 
        let frontname = players[indexnum-1]; 
        
        players[indexnum] = frontname;
        players[indexnum-1] = ele;
        
        //객체도 변경 ({ mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 })
        answer[ele]--;
        answer[frontname]++;
    } )
    return players;
}