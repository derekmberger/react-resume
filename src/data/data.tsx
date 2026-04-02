import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import ari from '../images/ari.jpg';
import heroImage from '../images/lido_1.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import tidman from '../images/tidman.jpg';
import zielke from '../images/zielke.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Derek Berger',
  description: "A website to host my resume and portfolio.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Derek Berger.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Southwest Florida based <strong className="text-stone-100">Senior Staff DevOps Engineer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        While I love <strong className="text-stone-100">engineering</strong> and <strong className="text-stone-100">technology</strong>, my true passion is <strong className="text-stone-100">learning</strong>. Every skill I now call an <strong className="text-stone-100">expertise</strong> began as a new challenge. Rather than rote memorization, I have a <strong className="text-stone-100">learning framework</strong> that lets me adapt quickly and deliver value.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me lounging at the beach or traveling around <strong className="text-stone-100">Europe</strong>,
        trying amazing foods, or exploring beautiful trails with my wife and son.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With 16 years of experience delivering compliant cloud platforms at scale for over 300 hospitals, I provide specialized expertise in aligning technical solutions with complex regulatory, operational, and business requirements unique to healthcare and highly regulated industries. My background includes hands-on leadership of HIPAA-controlled medical systems and principal oversight of FedRAMP High initiatives in AWS GovCloud, demonstrating a consistent ability to address both compliance and technical challenges. Since 2018, I have differentiated my contributions by focusing on Terraform-driven infrastructure, prioritizing systems that balance maintainability, controlled blast radius for risk management, and enhanced experiences for both developers and customers.`,
  aboutItems: [
    {label: 'Location', text: 'Lakewood Ranch, Florida', Icon: MapIcon},
    {label: 'Education', text: 'Eastern Michigan University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend & Data Systems',
    skills: [
      {
        name: 'Python / FastAPI',
        level: 8,
      },
      {
        name: 'Postgres / Aurora',
        level: 8,
      },
      {
        name: 'Celery / SQS / Redis',
        level: 8,
      },
      {
        name: 'API & Data Modeling',
        level: 7,
      },
    ],
  },
  {
    name: 'Cloud & Infrastructure as Code',
    skills: [
      {
        name: 'Terraform / Terraform Cloud',
        level: 10,
      },
      {
        name: 'AWS (Commercial & GovCloud)',
        level: 9,
      },
      {
        name: 'VPC & Network Architecture',
        level: 9,
      },
      {
        name: 'Multi-Account Patterns',
        level: 8,
      },
    ],
  },
  {
    name: 'Security & Compliance',
    skills: [
      {
        name: 'FedRAMP High / HIPAA',
        level: 9,
      },
      {
        name: 'WAF & Network Firewall',
        level: 8,
      },
      {
        name: 'mTLS / Private CA',
        level: 8,
      },
      {
        name: 'Least-Privilege Design',
        level: 9,
      },
    ],
  },
  {
    name: 'Containers, CI/CD & Observability',
    skills: [
      {
        name: 'Docker / ECS / Fargate / EKS',
        level: 9,
      },
      {
        name: 'GitHub Actions / CodeBuild',
        level: 8,
      },
      {
        name: 'CloudWatch / EMF Metrics',
        level: 8,
      },
      {
        name: 'Incident Automation / ChatOps',
        level: 7,
      },
    ],
  },
];

export const education: TimelineItem[] = [
  {
    date: '2006-2011',
    location: 'Eastern Michigan University',
    title: "Bachelor's Degree, Information Assurance",
    content: <p>Concentration in Applied Information Assurance and Network Security.</p>,
  },
  {
    date: 'Previously held',
    location: 'Cisco',
    title: 'Cisco Certified Network Associate (CCNA)',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2025 - Present',
    location: 'Dispel (Remote)',
    title: 'Senior Staff Engineering DevOps',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Transformed ad-hoc, developer-managed multi-cloud integrations into codified, layered Terraform deployments, enforcing least-privilege defaults and a controlled blast radius.</li>
          <li>Lead a FedRAMP High program in AWS GovCloud (US), implementing required controls for compliance, including WAF and Network Firewall, audit-ready CloudWatch and EMF observability, and logging standards and retention.</li>
          <li>Reduced customer environment launch times from weeks to hours by automating provisioning with Terraform Cloud Stacks and layered components.</li>
          <li>Designed CI/CD pipelines with GitHub Actions and self-hosted runners on ephemeral CodeBuild workers, improving supply-chain security and auditability.</li>
          <li>Enabled secure staff access without VPN by securing admin and dashboard access through Keycloak, advanced IdP brokering, and AWS Verified Access to support customer IdPs.</li>
          <li>Developed secure remote access automation and monitoring with StrongSwan (GoVICI), implemented non-overlapping address space using CGNAT to prevent customer network conflicts, and enabled mTLS authentication via AWS Private CA.</li>
          <li>Developed backend services for identity, administration, and environment operations. Designed asynchronous workflows for idempotency and recovery using FastAPI, Celery, Aurora Postgres, SQS, and Redis/ElastiCache.</li>
          <li>Hardened build and runtime artifacts by automating the AMI build and patch lifecycle, optimizing Docker image security and caching, and implementing a Rust-based control to prevent build cache poisoning in self-hosted build caching.</li>
          <li>Improved developer productivity and reduced onboarding time through LocalStack-based development environments, comprehensive runbooks, and plan-first workflows. These strategies were further enhanced by markdown implementation plans and decision logs, promoting more consistent and reliable delivery. Additionally, leveraged AI to accelerate draft creation, followed by human review, to increase the efficiency and quality of technical documentation.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'August 2021 - February 2025',
    location: 'Loomly (Remote)',
    title: 'Lead DevOps Engineer',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Served as the sole platform engineer at an early-stage SaaS company with approximately 11 employees, collaborating with the VP of Engineering on system architecture, capacity planning, and the secure deployment of major releases and high-traffic events.</li>
          <li>Owned Terraform/Terraform Cloud for AWS infrastructure, reducing deployment-related incidents and improving migration reliability.</li>
          <li>Migrated Elastic Beanstalk applications to ECS (Fargate), increasing deployment speed by 40 percent and simplifying patching and operations.</li>
          <li>Automated CI/CD with AWS, GitHub, CircleCI, and Terraform Cloud, reducing manual steps and accelerating releases.</li>
          <li>Designed scaling and cost controls for bursty traffic, including tenfold spikes during holidays and Black Friday, and reduced annual AWS spend by 30 percent through right-sizing, reserved instances, and continuous optimization.</li>
          <li>Developed incident and security automation, including ChatOps self-service actions with AWS Chatbot, Lambda, and Slack, as well as WAF monitoring and alerting using Athena, Glue, and Lambda to accelerate detection and mitigation.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'October 2018 - August 2021',
    location: 'Progenity, Inc., Ann Arbor, MI',
    title: 'IT Solutions Architect',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Led migration from on-premises datacenter constraints to AWS to meet scaling demands for women&apos;s health genetic testing workloads.</li>
          <li>Designed and operated pipelines for &apos;big data, small files&apos; workflows, with sequencing runs generating 3–5 TB across thousands of small files, ensuring throughput and operational dependability.</li>
          <li>Worked within a microservice architecture of more than 60 services, coordinated via Kinesis streams, using cursor-based processing to manage backpressure and enable resumable processing.</li>
          <li>Designed a combined architecture connecting lab networks and AWS, including AWS Direct Connect to support reliable, high-throughput data transfer.</li>
          <li>Led Terraform adoption and standardization, decreasing deployment errors and operational burden.</li>
          <li>Supported compliance and audit requirements for IPO readiness, improving logging, access patterns, and operational controls.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'August 2016 - September 2018',
    location: 'SHI International Corp., Southfield, MI',
    title: 'Account Executive',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Established and managed a new sales territory through cold calling and outreach, becoming a trusted technical advisor to customers and building long-term relationships.</li>
          <li>Translated ambiguous infrastructure needs into concrete architectures spanning servers, storage, virtualization, data protection, and disaster recovery. Leveraged technical expertise to diagnose root problems before proposing solutions.</li>
          <li>Managed procurements from components to enterprise agreements, negotiated on the customer&apos;s behalf (Microsoft EA), and advised on AWS billing and platform decisions.</li>
          <li>Built a seven-figure annual revenue pipeline by demonstrating customer empathy, consistent follow-through, and strong OEM and vendor relationships.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'December 2013 - August 2016',
    location: 'Biotronic NeuroNetwork, Ann Arbor, MI',
    title: 'IT Supervisor',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Led IT and network operations for remote intraoperative neurological monitoring across 300+ hospitals, achieving 99.99% availability over 400,000 surgeries by effectively integrating diverse proprietary IONM platforms to ensure patient safety.</li>
          <li>Reverse-engineered network requirements for monitoring hardware not originally designed for remote use. Built a WAN simulation (latency and packet loss) to validate tolerances without risking patient care.</li>
          <li>Led a large-scale hospital integration program using Cisco SSL VPN, firewall exception workflows, and customer security and compliance documentation to meet health system auditing requirements and onboard to private networks.</li>
          <li>Managed datacenter and colocation infrastructure and vendor contracts. Partnered with executive staff on architecture decisions, including resilient connectivity such as point-to-point wireless backup links.</li>
          <li>Coordinated cross-departmental teams—including clinical operations, hospital IT and security, and vendors—to deliver reliable, secure connectivity for high-priority clinical operations.</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Adam Zielke',
      text: 'I worked with Derek for over two years at Progenity and had the pleasure of getting to know him in the office. Derek has always been a top performer on his team and true leader. He made himself available to everyone that needed his specific skillset. Derek\'s real value is in the innovation, drive and professionalism he brings to a company.',
      image: zielke,
    },
    {
      name: 'Ari Summer',
      text: 'I had the pleasure of managing Derek during his time as Lead DevOps Engineer at Loomly. Derek is reliable, thoughtful, and deeply committed to finding the best approach for each situation. He brought a calm, methodical mindset to transforming our infrastructure—making it far more robust, observable, and easy to work with. He consistently focused on simplicity and clarity in his solutions, always keeping the developer experience in mind. His contributions made a huge impact on our team and were key to our success. He is an asset to any engineering organization!',
      image: ari,
    },
    {
      name: 'Ben Tidman',
      text: 'Derek is a solid, and tenacious problem solver. If you are making improvements to your deployment pipeline or your AWS environment Derek will get it done, and send you funny memes along the way! He has mastered the fundamentals needed to set up the most complicated development environments and networks out there. This is the third company where I have had the good fortune to work with Derek. He is great to work with and I hope our paths cross again someday!',
      image: tidman,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Thank you for the time in reviewing my resume.',
  items: [
    {
      type: ContactType.Email,
      text: 'derekberger734@gmail.com',
      href: 'mailto:derekberger734@gmail.com',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/derekmberger'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/derekmberger/'},
];
