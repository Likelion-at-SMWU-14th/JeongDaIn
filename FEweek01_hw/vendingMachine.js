// 1. 데이터 설정
// 음료 리스트 배열로 저장
// 조건 : 음료-가격 object 형태
// const 변수명 = { key : value };
let pay = 10000;  // 지갑 금액 변수 설정
const bev = [{ name: "아메리카노", price: 3000},
    { name: "카페라떼", price: 4000},
    { name: "카푸치노", price: 4500},
    { name: "녹차라떼", price: 6000},
    { name: "딸기라떼", price: 5500},];

// 2. 랜덤 선택 기능
// Math 메서드를 사용해서 무작위로 음료 1개 선택
function getRandom(arr) {
    return Math.floor(Math.random() * arr.length);
}

// 3. 출력 조건
// 구매 가능하다면 음료 출력, 지갑에서 price만큼 빼기
// 구매 불가능하다면 잔고 부족 메세지 출력
function buyDrink(n) {
    if (bev[n].price <= pay) {
        pay -= bev[n].price;
        return `${bev[n].name} 음료가 나왔어요! (가격:${bev[n].price}원)\n지갑에 남은 돈: ${pay}원`;
    }
    else return `돈이 부족해요! 음료를 살 수 없어요!`;
}

// 4. 반복 조건
// 구매 성공 여부와 관계 없이 3번 시도 가능 
let cnt = 0;
while (cnt < 3) {
    console.log(buyDrink(getRandom(bev)));
    cnt++;
}