//개인정보 수집 일자 + 유효기간 vs 오늘 (오늘이 더 이전날짜면 파기)
//오늘-개인정보 수집 일자 vs 유효기간 (유효기간이 더 작으면 파기)
const addMonth = (date, month) => {
    let [year, mon, day] = date.split('.').map((x) => Number(x));
    mon += month;
    day -= 1;
    if(day === 0){
        day = 28;
        mon -= 1;
    }
    if(mon > 12){
        mon -= 1;
        year += 1;
    }
    return [year, mon, day];
}

function solution(today, terms, privacies) {

    var answer = [];
    for(let i=0; i<privacies.length; i++){
        var collectdate = privacies[i].split(' ')
        var termsdate = terms[i].split(' ')
        if(collectdate[1] == termsdate[0])
            var expiration = termsdate[1]
        if(today - collectdate[0]>=expiration)
            answer.push(i+1)
    }
    return answer;
}