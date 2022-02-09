let data = {
  "packages": [
    {
      "id": 61,
      "cat": 16,
      "title": "Standard",
      "description": "",
      "data": [
        "Daily Auto Backups",
        "5 GB Disk Space",
        "On-demand Backups",
        "Upto 10 Websites",
        "Unlimited Databases"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 year",
          "price": 3.99,
          "save": "40%"
        }
      ],
      "price": 3.99,
      "billing_cycle": "mo",
      "cart_id": 61,
      "status": 1
    },
    {
      "id": "62",
      "cat": 16,
      "title": "Professional",
      "description": "",
      "data": [
        "Daily Auto Backups",
        "10 GB Disk Space",
        "On-demand Backups",
        "Upto 25 Websites",
        "Unlimited Databases"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 year",
          "price": 6.99,
          "save": "40%"
        }
      ],
      "price": 6.99,
      "billing_cycle": "mo",
      "cart_id": 62,
      "status": 2
    },
    {
      "id": 63,
      "cat": 16,
      "title": "Enterprise",
      "description": "",
      "data": [
        "Daily Auto Backups",
        "25 GB Disk Space",
        "On-demand Backups",
        "Upto 100 Websites",
        "Unlimited Databases"
      ],
      "pricing": [
        {
          "id": "1_years",
          "label": "1 year",
          "price": 12.49,
          "save": "40%"
        }
      ],
      "price": 12.49,
      "billing_cycle": "mo",
      "cart_id": 63,
      "status": 1
    }
  ],
  "features": [
    {
      "title": "AUTOMATED BACKUPS",
      "info": "All the manual work you will need to do is connecting your website to CodeGuard website backup. After that CodeGuard takes over and automatically monitors changes and backs it up."
    },
    {
      "title": "BACKUPS ON-DEMAND",
      "info": "CodeGuard allows you to take website backups as many as you need. After the initial backup, future backups are differential. You choose how long you keep your backup history."
    },
    {
      "title": "PRIORITY QUEUING",
      "info": "Users of CodeGuard Website Backup will gain priority in the backup queue ahead of other users. This will make"
    },
    {
      "title": "CHANGE MONITORING",
      "info": "CodeGuard detect any modifications, additions and deletions and will notify you instantly via email. You control the settings via dashboard so you’re only updated on what matters to you."
    },
    {
      "title": "DOWNLOAD BACKUP",
      "info": "CodeGuard is fast and reliable website backup service, which tracks all changes and modification of files in your website daily and give you a option to download complete site backup."
    },
    {
      "title": "ROBUST ENCRYPTION",
      "info": "CodeGuard Website Backup Service secures your backups with AES (Advanced Encryption Standard) 256-bit encryption which is an industry-standard for most modern encryption algorithms."
    },
    {
      "title": "WEB TIME-MACHINE",
      "info": "You can restore your website to any previous backed up version by either downloading a zip file, selecting individual files or your entire website with the 1-click restore option on CodeGuard."
    },
    {
      "title": "EASY SETUP",
      "info": "CodeGuard installation is extremely simple. All you need to do is use SFTP and MySQL details to connect to CodeGuard and the website backup monitoring process will kick in immediately."
    },
    {
      "title": "BACKUP RETENTION",
      "info": "You can keep both database and website backups for as long as you like, even permanently. There is no limit for backup rotations as long as you do not exceed the storage limits."
    },
  ],
  "faq": [
    {
      "q": "What is CodeGuard?",
      "a": "CodeGuard is a website backup service that focuses on best practices to protect customer data. Passwords, databases, and website backups are encrypted, and secure connections are utilized if needed. Another agency conducted the annual vulnerability testing to check for a data breach or successful hacks."
    },
    {
      "q": "Is it possible to switch between CodeGuard plans?",
      "a": "Yes, as per your needs, you can switch between CodeGuard plans anytime you want."
    },
    {
      "q": "Can I backup multiple websites if I have to?",
      "a": "Yes, you can. However, we suggest that you upgrade to a higher plan if you need multiple website backups."
    },
    {
      "q": "Where is the website backup stored?",
      "a": "All website backups are stored on AWS Simple Storage System, known as S3, storing redundant data across multiple geographies and facilities. It is one of the most reliable data storage systems."
    },
    {
      "q": "Will, I have to set up cron jobs for website backup?",
      "a": "You don't need to do that with CodeGuard Website Backup Service."
    },
    {
      "q": "What credentials would I need for the CodeGuard Website Backup Service?",
      "a": "You would need the following information for CodeGuard:<br>- Website URL<br>- Hostname/IP Address<br>- SFTP/FTP Username<br>- SFTP/FTP Password<br>- Port Number<br>- Root Directory"
    }
  ]
}

export async function get() {
  return {body : JSON.stringify(data)}
}