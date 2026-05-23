export type ElasticIpQAItem = {
  question: string;
  answer: string[];
};

export const elasticIpShortNotes: string[] = [
  "An Elastic IP (EIP) is a static, public IPv4 address that you allocate to your AWS account.",
  "You can attach it to an EC2 instance and later reattach it to another instance in the same Region.",
  "It is useful when you need a fixed public IP for DNS, allow-lists, or legacy integrations.",
  "A standard EC2 public IP can change when you stop/start the instance; an EIP stays the same until you release it.",
  "EIPs are Regional resources — they work only inside the Region where they were created.",
  "AWS may charge for an EIP that is allocated but not associated with a running instance.",
  "Best practice: release unused EIPs to avoid cost and stay within account limits.",
];

export const elasticIpQuestions: ElasticIpQAItem[] = [
  {
    question: "What is an Elastic IP address in AWS?",
    answer: [
      "An Elastic IP (EIP) is a static public IPv4 address designed for cloud environments.",
      "AWS reserves the address for your account until you explicitly release it.",
      "You can map the same EIP to different EC2 instances when needed.",
      "It gives you a stable internet-facing address for your workloads.",
    ],
  },
  {
    question: "Why would you use an Elastic IP instead of a normal public IP?",
    answer: [
      "A normal public IP on EC2 may change when you stop and start the instance.",
      "An Elastic IP remains the same even if you move it to another instance.",
      "This is important when external systems whitelist your IP or DNS points to a fixed address.",
      "EIPs make failover and instance replacement easier without changing the public endpoint.",
    ],
  },
  {
    question: "What is the difference between a Public IP and an Elastic IP?",
    answer: [
      "A public IP is automatically assigned by AWS and is tied to the instance lifecycle.",
      "An Elastic IP is a separate resource you allocate and manage in your account.",
      "Public IPs are usually free while the instance runs; EIPs can incur charges when unused.",
      "You control EIP association manually; public IPs are managed by the platform.",
    ],
  },
  {
    question: "How do you allocate and associate an Elastic IP with an EC2 instance?",
    answer: [
      "Allocate an EIP in the EC2 console, CLI, or CloudFormation for your target Region.",
      "Associate the EIP with a running instance or a network interface (ENI).",
      "Using CLI: aws ec2 allocate-address and aws ec2 associate-address.",
      "Verify routing: the instance subnet must allow a public route (Internet Gateway for public subnets).",
    ],
  },
  {
    question: "What happens to an Elastic IP when you stop an EC2 instance?",
    answer: [
      "The EIP remains allocated to your account and keeps the same IP address.",
      "While the instance is stopped, the EIP is not actively serving traffic on that instance.",
      "When you start the instance again, you can re-associate the same EIP if needed.",
      "If the EIP was associated before stop, association behavior depends on how you configured the instance.",
    ],
  },
  {
    question: "Does AWS charge for Elastic IP addresses?",
    answer: [
      "AWS provides one Elastic IP per running instance at no extra charge in many cases.",
      "Additional EIPs or EIPs not attached to a running instance may incur hourly charges.",
      "Pricing varies by Region, so always check the current EC2 pricing page.",
      "Release unused EIPs to avoid unnecessary cost.",
    ],
  },
  {
    question: "What are common limits and best practices for Elastic IPs?",
    answer: [
      "AWS sets a default quota on how many EIPs you can allocate per Region.",
      "You can request a quota increase if your architecture truly needs more static IPs.",
      "Avoid hoarding EIPs — each unused address can add cost and operational clutter.",
      "Prefer load balancers or DNS-based routing when you do not need a fixed instance IP.",
    ],
  },
  {
    question: "When should you NOT use an Elastic IP?",
    answer: [
      "Do not use an EIP when a load balancer, API Gateway, or CDN can expose your service.",
      "Auto Scaling groups with changing instances are a poor fit for a single fixed instance IP.",
      "Serverless and managed services usually do not need EIPs at all.",
      "Using too many EIPs increases cost and complexity without clear benefit.",
    ],
  },
  {
    question: "Can you move an Elastic IP across AWS Regions?",
    answer: [
      "No — an Elastic IP is Regional and cannot be moved to another Region directly.",
      "If you deploy in multiple Regions, allocate a separate EIP in each Region.",
      "For global traffic, use Route 53, CloudFront, or Global Accelerator instead of cross-Region EIPs.",
      "Plan your architecture with Regional endpoints in mind.",
    ],
  },
  {
    question: "How does Elastic IP relate to high availability?",
    answer: [
      "You can detach an EIP from a failed instance and attach it to a standby instance.",
      "This supports a simple active/passive failover pattern for legacy apps.",
      "Modern designs often use an Application Load Balancer with health checks instead.",
      "EIPs are one tool for HA, but not a replacement for full redundancy design.",
    ],
  },
];

export const elasticIpScenarioQuestions: ElasticIpQAItem[] = [
  {
    question:
      "Scenario: Your production EC2 instance becomes unhealthy. How can an Elastic IP help you recover quickly?",
    answer: [
      "Detach the Elastic IP from the failed instance using disassociate-address.",
      "Associate the same EIP to a healthy standby instance in the same Region.",
      "Because the public IP stays the same, clients and firewall rules do not need updates.",
      "Validate security groups, routes, and application health before declaring recovery complete.",
    ],
  },
  {
    question:
      "Scenario: A partner whitelisted your server IP, but you replaced the EC2 instance. What should you do?",
    answer: [
      "If you used only the default public IP, the new instance likely has a different address and traffic will be blocked.",
      "Allocate or reuse an Elastic IP and associate it with the new instance before cutover.",
      "Confirm the partner's allow-list still matches your EIP, then test connectivity end to end.",
      "Document the EIP in runbooks so future instance replacements do not break integrations.",
    ],
  },
  {
    question:
      "Scenario: Your AWS bill increased and you see charges for Elastic IP. What is a likely cause?",
    answer: [
      "You may have EIPs allocated but not attached to a running instance.",
      "Extra EIPs beyond the free allowance per running instance can incur hourly cost.",
      "Review EC2 → Elastic IPs and release addresses that are no longer needed.",
      "Add a tag and monitoring alert for unattached or idle EIPs to prevent repeat surprises.",
    ],
  },
  {
    question:
      "Scenario: You run an Auto Scaling group behind user traffic. Should you attach one Elastic IP to every instance?",
    answer: [
      "Usually no — ASG instances scale in and out, so a fixed EIP per instance does not scale cleanly.",
      "Use an Application Load Balancer or Network Load Balancer with a stable DNS name instead.",
      "Reserve EIPs only when a specific legacy app must expose a static instance IP.",
      "This avoids EIP limit issues, higher cost, and complex reassociation during scale events.",
    ],
  },
  {
    question:
      "Scenario: You associated an Elastic IP, but users still cannot reach the website. What will you check?",
    answer: [
      "Confirm the instance is in a public subnet with a route to an Internet Gateway.",
      "Check security group inbound rules allow HTTP/HTTPS (or your app ports) from the internet.",
      "Verify the application is listening on the correct interface and port inside the instance.",
      "Ensure network ACLs and host firewall (iptables/firewalld) are not blocking traffic.",
    ],
  },
  {
    question:
      "Scenario: You must migrate a monolithic app to a new EC2 instance without changing DNS records. How do you use EIP?",
    answer: [
      "Associate the existing Elastic IP with the new instance after the app is ready on the new host.",
      "Perform a controlled cutover: stop old app, associate EIP, start app on new instance.",
      "Keep the DNS A record pointing to the same EIP so external users see no IP change.",
      "Run smoke tests immediately after association to confirm service availability.",
    ],
  },
  {
    question:
      "Scenario: Your architecture spans two Availability Zones. Can one Elastic IP serve both zones at once?",
    answer: [
      "An EIP can be associated with one network interface at a time, typically on one instance in one AZ.",
      "It does not automatically load-balance across multiple instances in different AZs.",
      "For multi-AZ resilience, use a load balancer spanning AZs instead of a single EIP.",
      "Use EIP failover only for active/passive designs, not active/active across zones.",
    ],
  },
  {
    question:
      "Scenario: You stopped EC2 instances overnight to save cost. Will the Elastic IP still work the next morning?",
    answer: [
      "The EIP remains in your account with the same address after you stop the instance.",
      "While stopped, that instance does not serve traffic even if the EIP is still associated.",
      "When you start the instance, traffic can resume on the same EIP if association is intact.",
      "Watch for charges on EIPs attached to stopped instances depending on current AWS pricing rules.",
    ],
  },
  {
    question:
      "Scenario: A developer allocated many Elastic IPs for testing and forgot to release them. What is your remediation plan?",
    answer: [
      "Inventory all EIPs in the Region and identify unattached or test-tagged addresses.",
      "Release unused EIPs after confirming no production dependency.",
      "Add IAM policies or Service Control Policies to limit who can allocate addresses.",
      "Set up a weekly cost report filter for Elastic IP line items to catch drift early.",
    ],
  },
  {
    question:
      "Scenario: You need DR in another AWS Region. Can you move your existing Elastic IP to the DR Region?",
    answer: [
      "No — Elastic IPs cannot be transferred across Regions.",
      "In the DR Region, allocate a new EIP (or use Route 53 failover to another endpoint).",
      "Update DNS with low TTL or use Route 53 health checks for automatic failover.",
      "Run DR drills to validate RTO/RPO without assuming the primary Region EIP will follow.",
    ],
  },
];
