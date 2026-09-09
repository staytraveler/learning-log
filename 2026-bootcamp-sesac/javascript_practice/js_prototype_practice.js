// 도서마다 제목과 가격은 다르지만, 수량을 받아 총액을 계산하는 방법은 같죠!!
// 데이터를 각 도서 객체에 저장하고 계산 함수는 함께 사용하도록 만들어 봅시다~

// Book(title, price) 생성자에서 title과 price를 각 객체에 저장합니다.
// getTotal(quantity)은 Book.prototype에 정의하고 현재 도서의 가격과 수량을 곱해 반환합니다.
// 15000원 도서와 20000원 도서를 만들어 각각 두 권의 총액을 확인합니다.
// 두 도서가 같은 getTotal 함수를 사용하는지 확인합니다.
// book1이 getTotal을 직접 가지고 있는지, Book.prototype이 가지고 있는지 확인합니다.
// 첫 도서의 가격을 18000원으로 바꾸고 두 도서의 총액을 다시 확인합니다. 수량 0도 확인합니다.

function Book(title, price) {
    this.title = title;
    this.price = price;
}

Book.prototype.getTotal = function (quantity) {
    return this.price * quantity;
};

const book1 = new Book('도서a', 15000);
const book2 = new Book('도서b', 20000);

console.log(`${book1.title}을 2권사면 ${book1.getTotal(2)}원 입니다.`);
console.log(`${book2.title}을 2권사면 ${book2.getTotal(2)}원 입니다.`);

console.log(book1.getTotal === book2.getTotal);
console.log(Object.hasOwn(book1, 'getTotal'));
console.log(Object.hasOwn(Book.prototype, 'getTotal'));

book1.price = 18000;
console.log(`${book1.title}을 2권사면 ${book1.getTotal(2)}원 입니다.`);
console.log(`${book1.title}을 0권사면 ${book1.getTotal(0)}원 입니다.`);