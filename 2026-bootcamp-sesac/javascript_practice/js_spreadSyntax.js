// cart에 '키보드', '마우스'를 넣습니다. ( 배열)
// Spread로 '모니터'가 추가된 updatedCart를 만듭니다.
// order 객체에 id: 1, status: '결제 대기'를 넣습니다.
// Spread로 기존 값은 유지하고 status만 '결제 완료'로 바꾼 completedOrder를 만듭니다.
// Rest 파라미터를 사용해 전달받은 가격의 합계를 반환하는 getTotal을 작성합니다.
// updatedCart, 두 주문 객체(order, completedOrder), getTotal(50000, 30000, 200000)의 결과를 출력합니다.

const cart = ['키보드', '마우스'];

const updateCart = [...cart, '모니터'];

const order = { id: 1, status: '결제대기' };

const completeOrder = { ...order, stauts: '결제완료' }; //spread 문법에서 뒤에 오는 속성이 앞의 걸 덮어씀 한줄로 처리가능.

function getTotal(...prices) {
    let sum = 0;
    for (const price of prices) {
        sum += price;
    }
    return sum;
}

console.log(updateCart);
console.log('----');
console.log(order, completeOrder);
console.log('----');
console.log(getTotal(50000, 30000, 200000));