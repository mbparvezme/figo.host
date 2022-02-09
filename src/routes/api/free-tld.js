let tld = [".COM", ".NET", ".ORG", ".BIZ", ".INFO", ".US", ".XYZ", ".SPACE", ".IN", ".NAME", ".ONLINE", ".TOP", ".ONE", ".LIVE", ".BUZZ", ".PROMO", ".BLUE", ".EMAIL", ".PINK", ".RED", ".LIFE", ".CLUB", ".WORLD", ".WORKS", ".WEBSITE"]

export async function get() {
  return {body : JSON.stringify(tld)}
}