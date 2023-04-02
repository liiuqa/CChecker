function visa() {
    let cardNumber = "4";
    for (let i = 0; i < 14; i++) {
      cardNumber += Math.floor(Math.random() * 10);
    }
    let sum = 0;
    let doubleUp = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let curDigit = parseInt(cardNumber.charAt(i));
      if (doubleUp) {
        if ((curDigit * 2) > 9) {
          sum += (curDigit * 2) - 9;
        } else {
          sum += curDigit * 2;
        }
      } else {
        sum += curDigit;
      }
      doubleUp = !doubleUp;
    }
    let checkDigit = sum % 10;
    if (checkDigit !== 0) {
      checkDigit = 10 - checkDigit;
    }
    cardNumber += checkDigit;
  
    let ccv = Math.floor(Math.random() * 900) + 100; // 3 haneli bir CCV numarası oluşturuyoruz.
  
    let expirationDate = new Date();
    let years = Math.floor(Math.random() * 5) + 1; // 1 ila 5 yıl arasında rastgele bir son kullanma tarihi oluşturuyoruz.
    expirationDate.setFullYear(expirationDate.getFullYear() + years);
    let month = Math.floor(Math.random() * 12); // 0-11 arasında bir ay seçiyoruz
    expirationDate.setMonth(month);
  
    let formattedMonth = ("0" + (month + 1)).slice(-2); // Son kullanma tarihini 'MM/YY' formatında biçimlendiriyoruz
    let expirationString = formattedMonth + "/" + expirationDate.getFullYear().toString().substr(-2);
  
    return {
      "cardNumber": cardNumber,
      "ccv": ccv,
      "expirationDate": expirationString
    };
}

function ccGenerator(length, type) {
    if (type === 'Visa') {
        const card = [];
        for (let i = 0; i < length; i++) {
            cardGen = visa();
            card.push(cardGen);
        }
        return card;
    }
}

module.exports = {
    ccGenerator
}