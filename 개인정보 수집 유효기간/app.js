//개인정보 수집 일자 + 유효기간 vs 오늘 (오늘이 더 이전날짜면 파기)

function solution(today, terms, privacies) {
    const answer = [];

    //오늘 날짜를 Date 형식으로 변환
    const todaydate = new Date(today);      

    //약관 종류 별 기간 객체화
    const kindTerm = {};


    for(let i=0; i<terms.length; i++){
        //약관의 유효기간을 구조분해할당
        let [kind, month] = terms[i].split(' ');        //A 6
        kindTerm[kind] = Number(month);     //객체화
    }
    for(let j=0; j<privacies.length; j++){
        let [date, kind] = privacies[j].split(' '); //2021.05.02 A
            
        //개인정보 수집 일자를 Date 형식으로 변환
        const expiredate = new Date(date);
        //날짜와 유효기간 달 더하기
        expiredate.setMonth(expiredate.getMonth() + kindTerm[kind]);

        if(expiredate <= todaydate)
            answer.push(j + 1);
        }
    console.log(answer);
}


solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]);