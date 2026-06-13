export type SmtpQAItem = {
  question: string;
  answer: string[];
};

export type SmtpQASection = {
  level: "Beginner" | "Intermediate" | "Advanced";
  items: SmtpQAItem[];
};

export const smtpIntro = {
  whatIsSmtp:
    "SMTP (Simple Mail Transfer Protocol) is the standard protocol used to send email over the internet.",
  whyUsed:
    "SMTP is used to send OTPs, password resets, alerts, invoices, and all transactional email from applications and servers.",
};

export const smtpProviders: string[] = [
  "Gmail SMTP",
  "Outlook / Microsoft 365 SMTP",
  "Amazon SES",
  "SendGrid",
  "Mailgun",
  "Postmark",
  "Brevo (Sendinblue)",
  "SMTP2GO",
  "Zoho Mail SMTP",
  "Mailjet",
  "SparkPost",
  "Mailtrap (testing)",
];

export const smtpQASections: SmtpQASection[] = [
  {
    level: "Beginner",
    items: [
      {
        question: "What is SMTP?",
        answer: [
          "SMTP stands for Simple Mail Transfer Protocol.",
          "It is the standard method used to send email on the internet.",
          "Your app uses SMTP to send mail to an outgoing mail server.",
          "Mail servers also use SMTP to forward messages to other servers.",
        ],
      },
      {
        question: "Why is SMTP used?",
        answer: [
          "SMTP is used because applications need a reliable way to send email.",
          "It powers common messages like OTP, verification, and password reset emails.",
          "It is also used for alerts, invoices, and newsletters from systems.",
          "Without SMTP, your app cannot deliver outgoing email to users.",
        ],
      },
      {
        question: "Is SMTP used to receive email?",
        answer: [
          "No, SMTP is mainly for sending email, not receiving.",
          "Incoming email is usually read using IMAP or POP3 protocols.",
          "Think of SMTP as the sending pipeline.",
          "Think of IMAP or POP3 as the mailbox reading pipeline.",
        ],
      },
      {
        question: "Which ports are commonly used by SMTP?",
        answer: [
          "Common SMTP ports are 25, 587, and 465.",
          "Port 587 is the modern standard for authenticated email submission.",
          "Port 465 is typically used for implicit TLS secure SMTP.",
          "Port 25 is mostly for server relay and is often restricted by ISPs.",
        ],
      },
      {
        question: "What is an SMTP server?",
        answer: [
          "An SMTP server is a service that handles outgoing email delivery.",
          "It accepts messages from your app or email client.",
          "Then it routes or relays those messages to the destination server.",
          "In short, it is the transport system for outgoing email.",
        ],
      },
      {
        question: "What is SMTP authentication?",
        answer: [
          "SMTP authentication confirms that the sender is allowed to send email.",
          "It usually uses username and password, token, or API-based credentials.",
          "This prevents random users from abusing your SMTP server.",
          "It is a basic security layer to reduce spam and unauthorized sending.",
        ],
      },
      {
        question: "What is STARTTLS in SMTP?",
        answer: [
          "STARTTLS begins with a normal connection and then upgrades it to TLS.",
          "After upgrade, email traffic is encrypted during transport.",
          "This protects credentials and message data from easy interception.",
          "It is commonly used with port 587 for secure SMTP submission.",
        ],
      },
      {
        question: "Why do apps use port 587 instead of 25?",
        answer: [
          "Port 587 is designed for client submission with authentication.",
          "It supports modern security practices like STARTTLS.",
          "Port 25 is often blocked to reduce spam abuse.",
          "So apps use 587 for more reliable and secure delivery.",
        ],
      },
    ],
  },
  {
    level: "Intermediate",
    items: [
      {
        question: "What is the difference between SMTP relay and SMTP submission?",
        answer: [
          "SMTP submission is when your app sends mail to its outgoing server.",
          "This usually happens on port 587 with authentication.",
          "SMTP relay is when one server forwards mail to another server.",
          "So submission is client-to-server, and relay is server-to-server.",
        ],
      },
      {
        question: "What is the SMTP envelope?",
        answer: [
          "The SMTP envelope contains technical sender and recipient routing info.",
          "It is built using commands like MAIL FROM and RCPT TO.",
          "These values are used for delivery, retries, and bounce handling.",
          "They can be different from the visible From and To in the email header.",
        ],
      },
      {
        question: "What is SPF and why is it important?",
        answer: [
          "SPF is a DNS record that lists which servers can send for your domain.",
          "Receiving servers check SPF to validate the sender source.",
          "It helps reduce spoofing where attackers fake your domain.",
          "SPF is a core requirement for better deliverability and trust.",
        ],
      },
      {
        question: "What is DKIM?",
        answer: [
          "DKIM adds a digital signature to outgoing emails.",
          "The receiver validates that signature using your domain's DNS public key.",
          "If valid, it proves the message was not tampered with in transit.",
          "DKIM improves trust and helps reduce spam classification.",
        ],
      },
      {
        question: "What is DMARC?",
        answer: [
          "DMARC is a policy framework built on SPF and DKIM alignment.",
          "It tells recipient servers what to do if authentication fails.",
          "Typical actions are none, quarantine, or reject.",
          "It also provides reports so domain owners can monitor abuse.",
        ],
      },
      {
        question: "What does '550 relay denied' usually mean?",
        answer: [
          "A 550 relay denied error means the SMTP server refused to send the mail.",
          "Common causes are missing login, wrong credentials, or blocked sender domain.",
          "It can also happen when relay is not permitted for your network or account.",
          "You fix it by checking auth settings, sender policy, and provider permissions.",
        ],
      },
      {
        question: "How do you improve SMTP deliverability?",
        answer: [
          "Set up SPF, DKIM, and DMARC correctly on your sending domain.",
          "Keep your recipient list clean and remove invalid or inactive addresses.",
          "Avoid spam-like content and send at a consistent pace.",
          "Track bounces, complaints, and engagement to protect sender reputation.",
        ],
      },
      {
        question: "What is soft bounce vs hard bounce?",
        answer: [
          "A soft bounce is a temporary delivery issue.",
          "Examples include mailbox full, temporary server error, or greylisting.",
          "A hard bounce is a permanent failure, like invalid email address.",
          "Soft bounces may be retried; hard bounces should usually be suppressed.",
        ],
      },
    ],
  },
  {
    level: "Advanced",
    items: [
      {
        question: "How does SMTP retry logic work?",
        answer: [
          "When delivery gets a temporary error (4xx), the email is queued.",
          "The server retries after a delay instead of failing immediately.",
          "Retry intervals usually increase gradually using backoff strategy.",
          "If retries keep failing until timeout, the message is finally bounced.",
        ],
      },
      {
        question: "What is SMTP rate limiting?",
        answer: [
          "Rate limiting controls how many emails you can send per minute or hour.",
          "Providers use it to protect systems from abuse and sudden spam bursts.",
          "It also helps maintain stable sender reputation over time.",
          "If exceeded, sends may be deferred, throttled, or temporarily blocked.",
        ],
      },
      {
        question: "How do SMTP status codes differ?",
        answer: [
          "SMTP responses use numeric status codes to indicate result.",
          "2xx means success and message accepted.",
          "4xx means temporary issue and retry is possible.",
          "5xx means permanent failure and configuration or recipient must be corrected.",
        ],
      },
      {
        question: "What is sender reputation?",
        answer: [
          "Sender reputation is a trust score attached to your domain and IP.",
          "Mailbox providers calculate it from complaints, bounces, and engagement.",
          "Good reputation improves inbox placement and delivery speed.",
          "Poor reputation causes throttling, spam placement, or blocking.",
        ],
      },
      {
        question: "How do you design robust high-volume email delivery?",
        answer: [
          "Use an email queue so requests are processed safely and at controlled speed.",
          "Add retry logic, backoff, and dead-letter handling for failed sends.",
          "Use suppression lists and idempotency keys to avoid bad or duplicate sends.",
          "Track events with webhooks and segment traffic by domain/IP for reputation control.",
        ],
      },
      {
        question: "What is opportunistic TLS vs enforced TLS in SMTP?",
        answer: [
          "Opportunistic TLS tries to encrypt if both servers support TLS.",
          "If TLS fails, delivery may continue without encryption.",
          "Enforced TLS requires encrypted delivery and rejects insecure fallback.",
          "Use enforced TLS when compliance or sensitive data protection is mandatory.",
        ],
      },
      {
        question: "How do distributed systems avoid duplicate email sends?",
        answer: [
          "Distributed systems can send duplicates during retries or network failures.",
          "Use idempotency keys so repeated requests map to one logical send.",
          "Use outbox and dedup checks before placing messages in queue.",
          "Store provider message IDs and status to prevent repeated delivery attempts.",
        ],
      },
      {
        question: "What metrics should be monitored for SMTP pipelines?",
        answer: [
          "Track delivery success rate to know if emails are accepted.",
          "Monitor deferrals, soft bounces, hard bounces, and complaint rate closely.",
          "Measure send latency and queue depth to detect delays early.",
          "Watch domain/IP reputation trends because they directly impact inbox placement.",
        ],
      },
    ],
  },
];
