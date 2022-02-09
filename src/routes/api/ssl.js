let data = {
  "packages": [
    {
      "id": "50",
      "cat": "14",
      "title": "Positive SSL",
      "des": "",
      "data": [
        "Domain validation",
        "1 domain",
        "1 sub-domain",
        "SHA2 & ECC 128/256 bit Encryption",
        "Trust Logo Supported",
        "Issued within 2 Days",
        "Free Reissuance"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 year",
          "price": "14.99",
          "save": "40%"
        }
      ],
      "price": "24.99",
      "billing_cycle": "yr",
      "cart_id": "50",
      "status": "1"
    },
    {
      "id": "52",
      "cat": "14",
      "title": "Wildcard SSL",
      "des": "",
      "data": [
        "Domain validation",
        "1 domain",
        "Unlimited sub-domains",
        "SHA2 & ECC 128/256 bit Encryption",
        "Trust Logo Supported",
        "Issued within 2 Days",
        "Free Reissuance"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 year",
          "price": "99.99",
          "save": "20%"
        }
      ],
      "price": "124.99",
      "billing_cycle": "yr",
      "cart_id": "52",
      "status": "1"
    },
    {
      "id": "53",
      "cat": "14",
      "group": "11",
      "title": "EV SSL",
      "des": "",
      "data": [
        "Enterprise validation",
        "1 domain",
        "1 sub-domain",
        "SHA2 & ECC 128/256 bit Encryption",
        "Trust Logo Supported",
        "Issued within 7 Days",
        "Free Reissuance"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 year",
          "price": "99.99",
          "save": "20%"
        }
      ],
      "price": "149.99",
      "billing_cycle": "yr",
      "cart_id": "53",
      "status": "1"
    }
  ],
  "faq": [
    {
      "q": "What is an SSL Certificate?",
      "a": "Secure Sockets Layer (SSL) is a protocol for enabling data encryption and site authentication for the Internet. It Certificates a digital certificate that proves the identity of a website and authenticates it. All the information sent to SSL installed website will stay encrypted with the help of SSL technology. That ensures that no one can access any data between server and browser. SSL is used to protect communications between web browsers and servers, server-to-server communications, and web-based applications."
    },
    {
      "q": "Why do I need SSL?",
      "a": "If you have a website, SSL is a must need. Earlier it was okay to have an SSL only for the website that collects information from the users. But after the update from Google regarding SSL, it is a must need for any website."
    },
    {
      "q": "What is domain validation (DV) SSL?",
      "a": "A domain-validated certificate, also commonly known as DV certificate, is the most frequently SSL type. It delivers the easiest & quickest solution to secure a domain since only the domain name is verified during the validation process. DV certificates are suitable for small or start-up businesses. Our DV SSL does not require human intervention and paper documents. As a result, it can be issued in a matter of minutes. DV certificates are often cheap compared to other SSL types."
    },
    {
      "q": "What is an Organization Validated (OV) Certificate?",
      "a": "An organization validation certificate provides validation in the organization label. It requires going through more validation to get OV SSL. To receive an Organization Validated (OV) SSL certificate, the customer must demonstrate control of a registered domain and provide certain pieces of company/organization information that Certificate Authority (CA) can verify using third-party sources."
    },
    {
      "q": "What is Extended Validation (EV) SSL?",
      "a": "An extended validation certificate, also frequently known as EV SSL, requires full organization validation that provides your websites' visitors more confidence and the highest available levels of trust. This EV certificate is sometimes also referred to green address bar SSL. Extended Validation (EV) SSL certificates provide a secure connection and provide visible proof to establish business identity validation."
    },
    {
      "q": "Am I eligible for an EV certificate?",
      "a": "An EV SSL requires a lengthy validation & authentication process. Before an EV certificate is issued, the certificate-issuing authority validates information about the organization/business, including physical address and registered business identity verification."
    },
    {
      "q": "What is a Wildcard SSL?",
      "a": "A wildcard certificate is used to secure your main domain and an unlimited number of subdomains. This SSL is comparatively flexible and easy to manage. Compared to other SSL types, the Wildcard Certificate is a top choice for organizations/businesses with multiple domains or sub-domains."
    },
    {
      "q": "What does 256-bit encryption mean?",
      "a": "It is a data/file encryption technique that employs a 256-bit key to encrypt and decrypt files or data. 256-bit encryption is the most secure and modern encryption method after 128-bit and 192-bit encryption."
    },
    {
      "q": "What is the difference between SHA-1 and SHA-2?",
      "a": "It is a hash algorithm. SHA is used to sign certificates and certificates revocation lists by certification authorities. The main fundamental difference between SHA-1 and SHA-2 is the length of the hash. The SHA-2 or SHA-256 creates a longer and more complex hash, whereas the SHA-1 is a more basic hash version that provides a shortcode with fewer unique combinations possibilities."
    },
    {
      "q": "Do I need any technical knowledge to set up an SSL?",
      "a": "While it isn't difficult to install an SSL certificate, you need to follow a series of steps. More information can be found on our KnowledgeBase or read our blog on How to Install SSL Certificate."
    },
    {
      "q": "Is it possible to update/downgrade the SSL Certificate?",
      "a": "No, this is not possible to upgrade or downgrade SSL Certificate plans at the moment."
    }
  ]
}

export async function get() {
  return {body : JSON.stringify(data)}
}