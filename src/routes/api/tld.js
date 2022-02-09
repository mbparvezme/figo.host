let tld = [
  {
    "id":"1",
    "tld":".com",
    "fee":"10.07",
    "group":"hot",
    "dns":"1",
    "email":"1",
    "privacy":"1",
    "renew":"10.07",
    "transfer":"9.40"
  },
  {
    "id":"2",
    "tld":".net",
    "fee":"13.20",
    "group":"",
    "dns":"1",
    "email":"1",
    "privacy":"0",
    "renew":"13.20",
    "transfer":"13.20"
  },
  {
    "id":"4",
    "tld":".biz",
    "fee":"7.27",
    "group":"sale",
    "dns":"1",
    "email":"1",
    "privacy":"1",
    "renew":"16.23",
    "transfer":"15.67"
  },
  {
    "id":"5",
    "tld":".info",
    "fee":"4.24",
    "group":"sale",
    "dns":"1",
    "email":"1",
    "privacy":"1",
    "renew":"17.68",
    "transfer":"15.11"
  },
  {
    "id":"6",
    "tld":".org",
    "fee":"12.08",
    "group":"none",
    "dns":"1",
    "email":"1",
    "privacy":"1",
    "renew":"12.08",
    "transfer":"12.08"
  },
  {
    "id":"7",
    "tld":".xyz",
    "fee":"1.11",
    "group":"sale",
    "dns":"1",
    "email":"1",
    "privacy":"1",
    "renew":"10.40",
    "transfer":"9.84"
  },
  {
    "id":"23",
    "tld":".me",
    "fee":"8.39",
    "group":"hot",
    "dns":"1",
    "email":"1",
    "privacy":"1",
    "renew":"19.03",
    "transfer":"17.91"
  },
  {
    "id":"24",
    "tld":".io",
    "fee":"38.07",
    "group":"hot",
    "dns":"1",
    "email":"1",
    "privacy":"1",
    "renew":"38.07",
    "transfer":"36.95"
  },
  {
    "id":"132",
    "tld":".tech",
    "fee":"9.95",
    "group":"",
    "dns":"0",
    "email":"0",
    "privacy":"0",
    "renew":"47.99",
    "transfer":"46.79"
  },
  {
    "id":"306",
    "tld":".store",
    "fee":"5.99",
    "group":"",
    "dns":"0",
    "email":"0",
    "privacy":"0",
    "renew":"52.79",
    "transfer":"51.59"
  }
]

let offer = [
  {
    "id": "11",
    "tld": ".art",
    "fee": "4.95",
    "renew": "12.95"
  },
  {
    "id": "26",
    "tld": ".best",
    "fee": "5.39",
    "renew": "21.35"
  },
  {
    "id": "27",
    "tld": ".bio",
    "fee": "13.79",
    "renew": "64.79"
  },
  {
    "id": "4",
    "tld": ".biz",
    "fee": "7.27",
    "renew": "16.23"
  },
  {
    "id": "12",
    "tld": ".blog",
    "fee": "7.11",
    "renew": "25.75"
  },
  {
    "id": "13",
    "tld": ".city",
    "fee": "5.92",
    "renew": "19.19"
  },
  // {
  //   "id": "25",
  //   "tld": ".club",
  //   "fee": "1.78",
  //   "renew": "13.43"
  // },
  // {
  //   "id": "15",
  //   "tld": ".co",
  //   "fee": "11.99",
  //   "renew": "27.23"
  // },
  // {
  //   "id": "20",
  //   "tld": ".host",
  //   "fee": "5.99",
  //   "renew": "82.79"
  // },
  // {
  //   "id": "5",
  //   "tld": ".info",
  //   "fee": "4.24",
  //   "renew": "17.68"
  // },
  // {
  //   "id": "22",
  //   "tld": ".institute",
  //   "fee": "7.24",
  //   "renew": "19.19"
  // },
  // {
  //   "id": "31",
  //   "tld": ".live",
  //   "fee": "3.95",
  //   "renew": "21.95"
  // },
  // {
  //   "id": "33",
  //   "tld": ".mobi",
  //   "fee": "5.32",
  //   "renew": "20.82"
  // },
  // {
  //   "id": "34",
  //   "tld": ".network",
  //   "fee": "4.79",
  //   "renew": "19.19"
  // },
  // {
  //   "id": "35",
  //   "tld": ".news",
  //   "fee": "5.95",
  //   "renew": "21.95"
  // },
  // {
  //   "id": "37",
  //   "tld": ".online",
  //   "fee": "3.35",
  //   "renew": "30.23"
  // },
  // {
  //   "id": "38",
  //   "tld": ".pw",
  //   "fee": "4.79",
  //   "renew": "21.59"
  // },
  // {
  //   "id": "7",
  //   "tld": ".xyz",
  //   "fee": "1.11",
  //   "renew": "10.40"
  // }
]

export async function get() {
  return {body : JSON.stringify({tld, offer})}
}