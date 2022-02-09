let data = {
  "packages": [
    {
      "id": 58,
      "cat": 15,
      "title": "Starter",
      "description": "BILLED ANNUALLY",
      "data": [
        "Scan up to 100 pages",
        "Network Scan",
        "Daily malware scan",
        "Daily malware removal",
        "1-time Scan for web apps and vulnerability",
        "File change monitoring",
        "Daily FTP scanning",
        "Trust Seal"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 years",
          "price": 3.95,
          "save": ""
        }
      ],
      "price": 3.95,
      "billing_cycle": "mo",
      "cart_id": 58,
      "status": 1
    },
    {
      "id": 59,
      "cat": 15,
      "title": "Professional",
      "description": "",
      "data": [
        "Scan up to 500 pages",
        "Network Scan",
        "Daily malware scan",
        "Daily malware removal",
        "Unlimited scan for web apps and vulnerability",
        "File change monitoring",
        "Daily FTP scanning",
        "Trust Seal"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 years",
          "price": 4.95,
          "save": ""
        }
      ],
      "price": 4.95,
      "billing_cycle": "mo",
      "cart_id": 59,
      "status": 2
    },
    {
      "id": 60,
      "cat": 15,
      "title": "Enterprise",
      "description": "",
      "data": [
        "Scan up to 2500 pages",
        "Network Scan",
        "Daily malware scan",
        "Daily malware removal",
        "Unlimited scan for web apps and vulnerability",
        "File change monitoring",
        "Daily FTP scanning",
        "Trust Seal"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 years",
          "price": 15.95,
          "save": ""
        }
      ],
      "price": 15.95,
      "billing_cycle": "mo",
      "cart_id": 60,
      "status": 1
    }
  ],
  "features": [
    {
      "title": "BLOCK HARMFUL TRAFFIC",
      "info": "SiteLock’s TrueShield Firewall protects websites from hackers, malicious traffic and blocks harmful requests. It provides security alerts, CAPTCHA security, blocks bad bot attacks and lets you identify the source of the attack."
    },
    {
      "title": "FIND & FIX MALWARE",
      "info": "SiteLock security scans daily for malware and also removes it immediately if found. It is a 360° powerful cybersecurity security tools designed for websites to operate without fear of an attack and security issues."
    },
    {
      "title": "BOOST WEBSITE SPEED",
      "info": "SiteLock’s advanced CDN dramatically increases your website speed with its network of global data centers. Your web pages render with near lightning speed leading to an improved visitor experiences and conversions."
    },
    {
      "title": "APPLICATION SCANNING",
      "info": "SiteLock Security tool scans your web apps to identify vulnerabilities that hackers can utilize to gain access to your website. SiteLock informs you about the latest version of the apps and provide you the proper security information."
    },
    {
      "title": "NETWORK SCANNING",
      "info": "SiteLock’s network scans are a part of its Deep 360 scan. SiteLock website security will check every single port on the servers, to be sure the ones that are supposed to be closed actually are and notify if there is any issue."
    },
    {
      "title": "FTP SCANNING",
      "info": "SiteLock’s SMART Secure Malware Alert and Removal tool scan and removes malicious code automatically found on your website. It scans website files thoroughly to identify and remove malicious code or vulnerabilities."
    },
    {
      "title": "IMPROVED SEO",
      "info": "SiteLock Website Security scanners find and repair all website security issues that negatively impact your search engine rankings and monitors search engine blacklisting. Because search engines blacklists websites infected with malware."
    },
    {
      "title": "EMAIL ANTI-SPAM",
      "info": "SiteLock’s Spam Scan monitors your website’s IP address and notify you if your mail server has been blacklisted for being a spam server. If you have been identified as ‘spam’, your customers and users will not get emails from you."
    },
    {
      "title": "BUILD CUSTOMER TRUST",
      "info": "The Trust Seal of SiteLock’s website security daily scans, is updated everyday to indicate that all scans have passed and the badge is displayed only when no issues are found during the daily scan which will boost trust with customers and therefore conversions."
    }
  ],
  "faq": [
    {
      "q": "What is SiteLock?",
      "a": "SiteLock is a cloud-based website security solution for small businesses. Its state-of-the-art auto-detection capability for online security threats helps prevent malware injections and more."
    },
    {
      "q": "Do I get a money-back Guarantee with SiteLock website security?",
      "a": "No, we do not provide a money-back guarantee on any of the SiteLock website security plans."
    },
    {
      "q": "What is Deep 360-Degree Site Scan?",
      "a": "Deep 360-Degree Site Scan checks all files susceptible to threats, including .css files, .js files, .jpg, .png, and other image files and others. It performs a deep scan checking for anything that could turn into a security issue."
    },
    {
      "q": "Doesn’t FIGO.HOST protect my website?",
      "a": "It is a common misconception that hosting providers protect the websites they host. The hosting provider protects the server of your website, not the website itself. If your website is compromised, it will be suspended by hosting providers and temporarily taken offline. SiteLock can help."
    },
    {
      "q": "Is not an SSL certificate is suffice for my website?",
      "a": "A SSL certificate encrypts the connection between the browser and server. However, SiteLock security protects the data, scans website files and applications, and protects them from malware attacks."
    },
    {
      "q": "What types of scans are available with SiteLock Website Security?",
      "a": "The following Website Security Scans are included:<br>- Daily Malware Scan<br>- Daily FTP Scanning<br>- Website Application Scan<br>- SQL Injection Scan<br>- Cross Site Scripting (XSS) Scan"
    },
    {
      "q": "How do I install SiteLock Website Security?",
      "a": "To install SiteLock, you need to update your FTP details on the SiteLock admin panel and validate that you own the website. It triggers a scan, and your SiteLock is good to go. You can include the JavaScript snippet that SiteLock provides in the footer of your website to display the Trust Seal."
    },
    {
      "q": "Can the control panel be accessed by a URL?",
      "a": "You can access the SiteLock Panel from the SiteLock Management page. However, you cannot access the Panel directly through a URL."
    }
  ]
}

export async function get() {
  return {body : JSON.stringify(data)}
}