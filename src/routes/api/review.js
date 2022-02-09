let data = [
  {
    "img": "post.jpg",
    "client": "Atikur Rahman",
    "info": "CEO, Moon Light",
    "url": "http://wwww.domain.tld",
    "review": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros."
  },
  {
    "img": "post.jpg",
    "client": "Shamim Hasan",
    "info": "CEO, Google garments & Hosiery",
    "url": "http://wwww.domain.tld",
    "review": "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
  },
  {
    "img": "post.jpg",
    "client": "Abdur Rashid",
    "info": "CEO, Microsoft Hotel & Restaurant",
    "url": "http://wwww.domain.tld",
    "review": "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
  },
  {
    "img": "post.jpg",
    "client": "Shamim Hasan",
    "info": "CEO, Google garments & Hosiery",
    "url": "http://wwww.domain.tld",
    "review": "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
  },
  {
    "img": "post.jpg",
    "client": "Abdur Rashid",
    "info": "CEO, Microsoft Hotel & Restaurant",
    "url": "http://wwww.domain.tld",
    "review": "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac eros nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci."
  }
]

data = []

export async function get() {
  return {body : JSON.stringify(data)}
}