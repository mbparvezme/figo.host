let data = {
  "minHostingPrice":0.99,
  "minDomainPrice":0.99,
  "update":{
    // "title":"Added new packages in cloud hosting hosting hosting 2",
    // "url":"news"
  },
  "featurePackage":[
    {
      "name":"SHARED WEB HOSTING",
      "price":0.99,
      "suffix":"/mo",
      "btn":"VIEW PLANS",
      "slug":"web-hosting",
      "description":"Fast, Secure, Reliable and Flexible hosting plans for you and your business. hosting plans for you and your business"
    },
    {
      "name":"SHARED CLOUD HOSTING",
      "price":1.99,
      "suffix":"/mo",
      "btn":"VIEW PLANS",
      "slug":"cloud-hosting",
      "description":"Fast, auto fail-over & rock-solid stability - everything at one place. Configure your own powerful cloud servers in just a minute"
    },
    {
      "name":"WORDPRESS HOSTING",
      "price":1.99,
      "suffix":"/mo",
      "btn":"VIEW PLANS",
      "slug":"wordpress-hosting",
      "description":"Benefit from faster loading times, smarter updates and a safe and supported development environment"
    },
    {
      "name":"AUTOMATIC SITE BACKUP",
      "price":3.99,
      "suffix":"/mo",
      "btn":"VIEW PLANS",
      "slug":"codeguard-cloud-backup",
      "description":"All around website security tools for automatic malware removal as well as with enterprise-grade firewalls"
    }
  ],
  "reviews":[
    {
      "img":"post.jpg",
      "client":"Atikur Rahman",
      "info":"CEO, Moon Light",
      "url":"http://wwww.domain.tld",
      "review":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros."
    },
    {
      "img":"post.jpg",
      "client":"Shamim Hasan",
      "info":"CEO, Google garments & Hosiery",
      "url":"http://wwww.domain.tld",
      "review":"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
    },
    {
      "img":"post.jpg",
      "client":"Abdur Rashid",
      "info":"CEO, Microsoft Hotel & Restaurant",
      "url":"http://wwww.domain.tld",
      "review":"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
    },
    {
      "img":"post.jpg",
      "client":"Shamim Hasan",
      "info":"CEO, Google garments & Hosiery",
      "url":"http://wwww.domain.tld",
      "review":"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
    },
    {
      "img":"post.jpg",
      "client":"Abdur Rashid",
      "info":"CEO, Microsoft Hotel & Restaurant",
      "url":"http://wwww.domain.tld",
      "review":"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
    }
  ],
  "newArticles":[
    {
      "img":"post.jpg",
      "title":"Nam ipsum risus rutrum vitae donec elit libero sodales nec",
      "slug":"risus-rutrum-vitae-donec-elit-libero-sodales-nec"
    },
    {
      "img":"post.jpg",
      "title":"Donec pede justo risus rutrum vitae sodales nec donec elit libero",
      "slug":"risus-rutrum-vitae-donec-elit-libero-sodales-nec"
    },
    {
      "img":"post.jpg",
      "title":"Sed fringilla mauris sit amet mam ipsum risus rutrum vitae donec elit libero sodales nec",
      "slug":"risus-rutrum-vitae-donec-elit-libero-sodales-nec"
    },
    {
      "img":"post.jpg",
      "title":"Mam ipsum risus rutrum vitae fringilla mauris sit amet sodales nec donec elit libero",
      "slug":"risus-rutrum-vitae-donec-elit-libero-sodales-nec"
    }
  ],
  "domainOffers":[
    {
      "id":"11",
      "tld":".art",
      "fee":"4.95",
      "renew":"12.95"
    },
    {
      "id":"26",
      "tld":".best",
      "fee":"5.39",
      "renew":"21.35"
    },
    {
      "id":"27",
      "tld":".bio",
      "fee":"13.79",
      "renew":"64.79"
    },
    {
      "id":"4",
      "tld":".biz",
      "fee":"7.27",
      "renew":"16.23"
    },
    {
      "id":"12",
      "tld":".blog",
      "fee":"7.11",
      "renew":"25.75"
    },
    {
      "id":"13",
      "tld":".city",
      "fee":"5.92",
      "renew":"19.19"
    }
  ]
}

export async function get() {
  return {body : JSON.stringify(data)}
}