import {
  Cloud,
  Code2,
  Briefcase,
  Mail,
  Container,
  Workflow,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

export type PortfolioLink = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  meta?: string
}

export const projectLinks: PortfolioLink[] = [
  {
    title: "TechHealth Secure Cloud Infrastructure",
    description:
      "Secure healthcare infrastructure built with AWS CDK (TypeScript) featuring a multi-AZ VPC, EC2 application layer, private RDS database, IAM roles, and least-privilege security controls.",
    href: "https://github.com/MylesChums/techhealth-secure-cloud-infrastructure",
    icon: ShieldCheck,
    meta: "AWS CDK · TypeScript",
  },
  {
    title: "Lambda CI/CD Pipeline",
    description:
      "AWS Lambda CI/CD pipeline using GitHub Actions and CloudFormation for automated serverless deployments.",
    href: "https://github.com/MylesChums/Lambda_CICD",
    icon: Workflow,
    meta: "Lambda · GitHub Actions",
  },
  {
    title: "Terraform Portfolio Project",
    description:
      "Cloud-native portfolio infrastructure provisioned and managed with Terraform on AWS.",
    href: "https://github.com/MylesChums/terraform-portfolio-project",
    icon: Cloud,
    meta: "Terraform · AWS",
  },
  {
    title: "CloudFormation Templates",
    description:
      "AWS CloudFormation infrastructure-as-code templates for provisioning and managing cloud resources.",
    href: "https://github.com/MylesChums/CloudFormation",
    icon: Container,
    meta: "CloudFormation · AWS",
  },
]

export const socialLinks: PortfolioLink[] = [
  {
    title: "GitHub",
    description: "Open-source infrastructure tooling and project code.",
    href: "https://github.com/MylesChums",
    icon: Code2,
  },
  {
    title: "LinkedIn",
    description: "Professional background and work experience.",
    href: "https://www.linkedin.com/in/myles-chumley-4a891a179",
    icon: Briefcase,
  },
  {
    title: "Email",
    description: "Reach out about roles, consulting, or collaboration.",
    href: "mailto:myleschumley@yahoo.com",
    icon: Mail,
  },
]
