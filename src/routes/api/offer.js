let tld = [
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
  {
    "id": "25",
    "tld": ".club",
    "fee": "1.78",
    "renew": "13.43"
  },
  {
    "id": "15",
    "tld": ".co",
    "fee": "11.99",
    "renew": "27.23"
  },
  {
    "id": "20",
    "tld": ".host",
    "fee": "5.99",
    "renew": "82.79"
  },
  {
    "id": "5",
    "tld": ".info",
    "fee": "4.24",
    "renew": "17.68"
  },
  {
    "id": "22",
    "tld": ".institute",
    "fee": "7.24",
    "renew": "19.19"
  },
  {
    "id": "31",
    "tld": ".live",
    "fee": "3.95",
    "renew": "21.95"
  },
  {
    "id": "33",
    "tld": ".mobi",
    "fee": "5.32",
    "renew": "20.82"
  },
  {
    "id": "34",
    "tld": ".network",
    "fee": "4.79",
    "renew": "19.19"
  },
  {
    "id": "35",
    "tld": ".news",
    "fee": "5.95",
    "renew": "21.95"
  },
  {
    "id": "37",
    "tld": ".online",
    "fee": "3.35",
    "renew": "30.23"
  },
  {
    "id": "38",
    "tld": ".pw",
    "fee": "4.79",
    "renew": "21.59"
  },
  {
    "id": "7",
    "tld": ".xyz",
    "fee": "1.11",
    "renew": "10.40"
  }
]

export async function get() {
  return {body : JSON.stringify(tld)}
}