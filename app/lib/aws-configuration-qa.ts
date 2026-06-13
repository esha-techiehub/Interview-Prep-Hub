export type QAItem = {
  question: string;
  answer: string;
};

export type QASection = {
  title: string;
  items: QAItem[];
};

export const awsConfigurationSections: QASection[] = [
  {
    title: "AWS Basics and Cloud Fundamentals",
    items: [
      {
        question: "What is AWS configuration?",
        answer:
          "AWS configuration is the process of setting up AWS services, credentials, permissions, and regions so applications can run properly in the cloud.",
      },
      {
        question: "Why do we use AWS configuration?",
        answer:
          "We use AWS configuration to connect applications to AWS, manage security, choose regions, control cloud resources, and automate deployments.",
      },
      {
        question: "What is an AWS Region?",
        answer:
          "An AWS Region is a geographic location where AWS data centers exist, such as ap-south-1 (Mumbai) or us-east-1 (US East).",
      },
      {
        question: "Why is region selection important?",
        answer:
          "Region selection affects speed, latency, cost, compliance, and availability for your application.",
      },
      {
        question: "What is cloud computing?",
        answer:
          "Cloud computing means using servers, storage, and services over the internet instead of local machines.",
      },
      {
        question: "What are the benefits of AWS?",
        answer:
          "Key benefits include scalability, flexibility, security, pay-as-you-go pricing, and global infrastructure.",
      },
      {
        question: "Explain AWS configuration in one line.",
        answer:
          "AWS configuration is setting up AWS credentials, regions, permissions, and services so applications can run securely in the cloud.",
      },
    ],
  },
  {
    title: "AWS CLI and Configuration Setup",
    items: [
      {
        question: "What does aws configure do?",
        answer:
          "The aws configure command stores Access Key, Secret Key, default region, and output format for AWS CLI access.",
      },
      {
        question: "Where does AWS store configuration files?",
        answer:
          "AWS stores configuration in ~/.aws/config and credentials in ~/.aws/credentials.",
      },
      {
        question: "What is AWS CLI?",
        answer:
          "AWS CLI is a command-line tool used to manage AWS services from the terminal, for example: aws s3 ls.",
      },
      {
        question: "What happens if AWS is not configured?",
        answer:
          "AWS services fail because authentication fails, permissions are missing, or region settings are unknown.",
      },
      {
        question: "What is an AWS profile?",
        answer:
          "AWS profiles allow multiple AWS account configurations on one machine, such as aws configure --profile dev.",
      },
      {
        question: "What is the default output format in AWS CLI?",
        answer:
          "Common output formats are json, table, and text. Most teams use json as default for scripting.",
      },
    ],
  },
  {
    title: "AWS Security and Access Management",
    items: [
      {
        question: "What is IAM in AWS?",
        answer:
          "AWS IAM is used to manage users, roles, permissions, and access control in AWS.",
      },
      {
        question: "Difference between Access Key and Secret Key?",
        answer:
          "Access Key is the user identifier, and Secret Key is the password-like credential for authentication. Both are used together.",
      },
      {
        question: "What is a Security Group?",
        answer:
          "A Security Group acts like a firewall for AWS resources and controls incoming and outgoing traffic, such as allowing port 80 for web and 22 for SSH.",
      },
    ],
  },
  {
    title: "Core AWS Services",
    items: [
      {
        question: "What is Amazon EC2?",
        answer:
          "Amazon EC2 provides virtual servers in the cloud for hosting applications, backend services, and websites.",
      },
      {
        question: "What is Amazon S3?",
        answer:
          "Amazon S3 is a cloud storage service used to store files, images, backups, and videos.",
      },
      {
        question: "What is VPC?",
        answer:
          "Amazon VPC is a private network inside AWS used to organize and secure cloud resources.",
      },
      {
        question: "What is AWS Lambda?",
        answer:
          "AWS Lambda runs code without managing servers, which is known as serverless computing.",
      },
    ],
  },
];

export const awsConfigurationRapidFire: Array<{ question: string; answer: string }> =
  [
    { question: "Command to configure AWS?", answer: "aws configure" },
    { question: "AWS storage service?", answer: "S3" },
    { question: "AWS virtual server?", answer: "EC2" },
    { question: "AWS permission service?", answer: "IAM" },
    { question: "AWS networking service?", answer: "VPC" },
    { question: "AWS serverless service?", answer: "Lambda" },
  ];
