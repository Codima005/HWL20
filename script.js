let userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100,
};
let bankData = {
  USD: {
    max: 3000,
    min: 100,
    img: "💵",
  },
  EUR: {
    max: 1000,
    min: 50,
    img: "💶",
  },
  UAH: {
    max: 0,
    min: 0,
    img: "💴",
  },
  GBP: {
    max: 10000,
    min: 100,
    img: "💷",
  },
};

function getMoney(userData, bankData) {
  let first = new Promise((resolve, reject) => {
    let answer = confirm(`Посмотреть баланс на карте?`);
    if (answer) {
      resolve(userData);
    } else {
      reject({ userData, bankData });
    }
  })
    .then((userData) => {
      let answer = "";

      while (!userData[answer]) {
        answer = prompt(`Введите валюту`);
      }

      alert(userData[answer]);
    })
    .catch(({ userData, bankData }) => {
      let filteredBankData = {};
      for (let key in bankData) {
        if (bankData[key].max !== 0 && userData[key]) {
          filteredBankData[key] = bankData[key];
        }
      }
      let answer = "";

      while (!filteredBankData[answer]) {
        answer = prompt(`Введите валюту`);
      }

      const sum = prompt(`Sum`);
      if (sum > filteredBankData[answer].max) {
        alert(
          `Введенная сумма больше допустимой. Максимальная сумма снятия: ${filteredBankData[answer].max} `
        );
      } else if (sum > userData[answer]) {
        alert(
          `Введенная сумма больше допустимой. Максимальная сумма снятия:${userData[answer]}`
        );
      } else if (sum < filteredBankData[answer].min) {
        alert(
          `Введенная сумма меньше допустимой. Минимальная сумма снятия:${filteredBankData[answer].min}`
        );
      } else {
        alert(`Вот Ваши денежки ${sum} ${filteredBankData[answer].img} `);
      }
    })
    .finally(() => {
      alert("Спасибо, хорошего дня 😊");
    });
}

getMoney(userData, bankData);
