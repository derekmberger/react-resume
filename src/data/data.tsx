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
  title: 'Derek Berger - DevOps Engineer',
  description: "A website to host my resume and portfolio as an DevOps engineer.",
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
        I am a Southwest Florida based <strong className="text-stone-100">DevOps Engineer</strong>.
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
  description: `Senior DevOps Engineer with extensive AWS cloud infrastructure and container orchestration expertise, leveraging over 16 years of experience to innovate and streamline complex workflows. Proficient in Terraform, Docker, and CI/CD pipeline design, with a strong focus on security-first strategies to enhance deployment efficiency and reduce costs. Passionate about delivering high-quality solutions and driving technological advancement in dynamic environments.`,
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
    name: 'AWS Experience',
    skills: [
      {
        name: 'Elastic Container Service/ECS',
        level: 10,
      },
      {
        name: 'Web Application Firewall/WAF',
        level: 4,
      },
      {
        name: 'Cloudwatch',
        level: 8,
      },
      {
        name: 'Elasticache/Redis',
        level: 8,
      },
    ],
  },
  {
    name: 'DevOps Tool Experience',
    skills: [
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'Terraform Cloud',
        level: 7,
      },
      {
        name: 'Github',
        level: 7,
      },
      {
        name: 'CircleCI',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming/Scripting Languages',
    skills: [
      {
        name: 'Terraform',
        level: 10,
      },
      {
        name: 'Ruby',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: '.Net Framework & C#',
        level: 6,
      },
    ],
  },
  {
    name: 'General Skills',
    skills: [
      {
        name: 'Scripting & Automation',
        level: 9,
      },
      {
        name: 'Monitoring & Observability',
        level: 7,
      },
      {
        name: 'Cloud Security',
        level: 6,
      },
      {
        name: 'Windows and Linux Administration',
        level: 5,
      },
    ],
  },
];

export const education: TimelineItem[] = [
  {
    date: '2007-2011',
    location: 'Eastern Michigan University',
    title: 'Bachelors Degree, Information Assurance',
    content: <p>Concentration in Applied Information Assurance and Network Security.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2021 - February 2025 (3 years 7 months)',
    location: 'Loomly',
    title: 'Lead DevOps Engineer',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Standardized AWS infrastructure management using Terraform and Terraform Cloud, reducing deployment-related incidents and improving migration reliability.</li>
          <li>Streamlined deployments and reduced operational overhead by migrating legacy Elastic Beanstalk applications to AWS ECS (EC2/Fargate), increasing deployment speed by 40% and simplifying host patching processes.</li>
          <li>Enhanced CI/CD reliability and minimized manual errors by automating complex build and deployment workflows with Terraform Cloud, AWS, GitHub, and CircleCI, accelerating feature releases.</li>
          <li>Mitigated frequent security incidents by developing an automated AWS WAF monitoring and alerting system with Athena, Glue, Lambda, and Slack, accelerating threat detection and mitigation.</li>
          <li>Iteratively automated various processes and workflows using AWS Lambda functions written in Ruby and Python, reducing manual intervention while continuously enhancing operational efficiency.</li>
          <li>Optimized AWS infrastructure spending by approximately 25% annually through strategic reserved instance management, instance sizing, and continuous evaluation of cost-effective technologies—balancing complexity with engineering bandwidth.</li>
          <li>Collaborated with developers during service creation to enhance observability and implement comprehensive monitoring with AWS CloudWatch, including detailed metrics from various third-party APIs and supporting services such as Nginx, Puma, and Sidekiq.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'October 2018 - August 2021 (2 years 11 months)',
    location: 'Progenity, Inc., Ann Arbor, MI',
    title: 'IT Solutions Architect',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Spearheaded cloud infrastructure modernization by deploying containers and streamlining the management of complex bioinformatics workloads.</li>
          <li>Standardized AWS infrastructure management by introducing Terraform, significantly reducing deployment errors and operational overhead.</li>
          <li>Boosted software delivery speed and reliability by establishing robust CI/CD pipelines with GitHub, Jenkins, Cake Build, Octopus Deploy, and AWS—minimizing manual tasks and reducing downtime.</li>
          <li>Engineered hybrid-cloud architectures and network design, strategically distributing workloads between AWS and on-premises environments to optimize performance and address network constraints.</li>
          <li>Enhanced system observability by deploying comprehensive monitoring solutions (AWS CloudWatch and Datadog) across distributed environments, ensuring proactive detection and resolution of issues.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'August 2016 - September 2018 (2 years 2 months)',
    location: 'SHI International Corp., Southfield, MI',
    title: 'Account Executive',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Engineered customized technical solutions for mid-to-large enterprises across servers, storage, virtualization, data protection, and disaster recovery—delivering scalable, resilient IT infrastructures.</li>
          <li>Provided strategic guidance on selecting optimal application platforms and workload management strategies to enhance performance and operational efficiency.</li>
          <li>Developed and presented comprehensive technical proposals that aligned client business objectives with infrastructure solutions, driving maximized ROI.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'December 2013 - August 2016 (2 years 9 months)',
    location: 'Biotronic NeuroNetwork, Ann Arbor, MI',
    title: 'IT Supervisor',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Managed comprehensive IT support operations and data centers to ensure secure connectivity for remote surgical monitoring across multiple hospital networks.</li>
          <li>Streamlined network infrastructure for over 300 users across 500+ hospitals by implementing robust network and VPN solutions, ensuring secure and reliable access for critical surgical monitoring.</li>
          <li>Led cross-functional teams to enhance network architecture, significantly improving the reliability of real-time medical monitoring.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'August 2011 - December 2013 (2 years 5 months)',
    location: 'Biotronic NeuroNetwork, Ann Arbor, MI',
    title: 'Senior Network Administrator',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Managed secure network infrastructure across 500+ hospital IT environments by overseeing firewalls, VPNs, and remote access solutions to ensure seamless connectivity and robust protection.</li>
          <li>Authored comprehensive documentation for network infrastructure and security processes, streamlining IT operations and enhancing support efficiency.</li>
          <li>Pioneered network monitoring and testing solutions that integrated multisite healthcare systems while ensuring strict adherence to HIPAA compliance standards.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'January 2010 - August 2011 (1 year 8 months)',
    location: 'Biotronic NeuroNetwork, Ann Arbor, MI',
    title: 'System Administrator',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Achieved a 40% cost reduction in data center operations by consolidating VMware servers, optimizing resource allocation, and increasing operational efficiency.</li>
          <li>Streamlined backup processes by implementing automated scripts and monitoring tools, significantly enhancing data protection and system availability.</li>
          <li>Implemented a comprehensive enterprise-wide network monitoring system that proactively resolved critical infrastructure issues and minimized downtime.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'January 2009 - August 2009 (8 months)',
    location: 'Dynamic Edge, Ann Arbor, MI',
    title: 'IT Consultant',
    content: (
      <div>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>Led cross-functional IT projects that delivered tailored technology solutions while adhering to strict budget parameters and exceeding client expectations.</li>
          <li>Architected scalable IT frameworks that effectively resolved complex client challenges, driving sustainable, long-term technological innovation.</li>
          <li>Enhanced database reporting systems through advanced SQL query development, significantly improving data accessibility and facilitating informed decision-making.</li>
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
