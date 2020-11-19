const operatorData = [
  {
    id: "1",
    name: "МТС",
    nameInternational: "mts",
    color: "red",
    commission: "0",
    logoPath: "",
  },
  {
    id: "2",
    name: "Мегафон",
    nameInternational: "Megafon",
    color: "green",
    commission: "0",
    logoPath: "",
  },
  {
    id: 3,
    name: "Билайн",
    nameInternational: "BeeLine",
    color: "yellow",
    commission: "0.1",
    logoPath: "",
  },
];

phoneData = [
  {
    number: "9124416966",
    operator: "1",
    firstPayData: "",
  },
  {
    number: "9124416969",
    operator: "1",
    firstPayData: "",
  },
  {
    number: "9204416966",
    operator: "2",
    firstPayData: "",
  },
];

paymentData = [
  {
    id: 1,
    number: "9124416966",
    time: "29/10/1981 12:30:41",
    amounthPay: 50,
    status: true,
  },
  {
    id: 2,
    number: "9124416969",
    time: "29/10/1981 12:20:41",
    amounthPay: 250,
    status: true,
  },
  {
    id: 3,
    number: "9124416966",
    time: "29/10/1981 11:20:41",
    amounthPay: 530,
    status: true,
  },
  {
    id: 4,
    number: "9204416966",
    time: "29/10/1981 11:20:41",
    amounthPay: 150,
    status: true,
  },
];

module.exports = { operatorData, phoneData, paymentData };
