import { Job } from "@/types/types";

const JOBS: Job[] = [
  {
    company: "RatedPower",
    position: "Senior Marketing Operations Specialist",
    description: (
      <>
        I am working with a nice group of people in the marketing department,
        developing and mantaining all the marketing systems, processes and
        automations that we have.{" "}
      </>
    ),
    year: "2024",
    period: "Dec 2024 · Actually ",
    highlights: [
      "Hbuspot to Pardot (Account Engagement) Migration",
      "Website/Email tracking implementation for all the company",
    ],
    technologies: ["Pardot - Account Engagement", "Salesforce", "Javascript"],
  },
  {
    company: "McAfee",
    position: "Worlwide Email Marketing Manager",
    description: (
      <>
        In a company with more than 13 million active users and an average of 90
        emails per user in pre-purchase, my job is, first, to define the
        messages based on the user's behavior in the journey and its culture,
        and second, to ensure that these messages reach each of them in the best
        way possible. <br />
        <br />
        The biggest B2C logistics challenge to date, in a highly competitive
        environment where the most important thing is to improve the return on
        investment.
      </>
    ),
    year: "2023",
    period: "Feb 2024 · Nov 2024 ",
    highlights: [
      "Develop an AI tool to translate HTML emails automatically",
      "Manage a team of 14 developers",
    ],
    technologies: ["", ""],
  },
  {
    company: "Userlane",
    position: "Marketing Operations Manager",
    description: (
      <>
        I worked doing mainly dev projects related to improve Marketing
        processes and systems. took care of the integration between Salesforce
        and Pardot, as well as the creation of all the emails, journeys, landing
        pages and forms.
      </>
    ),
    year: "2022",
    period: "Oct 2022 · Jan 2023",
    highlights: [
      "Double Opt-in email system for EMEA",
      "Automated form enrichment based on company email through integration with ZoomInfo",
    ],
    technologies: ["", ""],
  },
  {
    company: "Schroders",
    position: "Salesforce & SFMC developer",
    description: (
      <>
        My tasks were very varied, from deploying development environments to
        production, to creating entire teams for specific regions, and of
        course, planning and developing all the assets related to email
        marketing.
      </>
    ),
    year: "2022",
    period: "may. 2022 · sept. 2022",
    highlights: [
      "Develop an internal feature to automate bulk uploads of leads to Pardot",
    ],
    technologies: ["", ""],
  },
  {
    company: "MSD",
    position: "SFMC Developer",
    description: (
      <>
        Using AMPScript, my work was to develop all the email templates, as well
        as some specific landing pages. On the other hand, I had to work on the
        database management for the target segmentation, with SQL.
      </>
    ),
    year: "2021",
    period: "jul 2021 · may 2022",
    highlights: [
      "Automated the creation of emails through excel and ScriptLab",
      "Script to sort differently the content on each email  to each user, based on their interest",
    ],
    technologies: ["", ""],
  },
  {
    company: "Prodigioso Volcán",
    position: "Digital Marketing Consultant",
    description: (
      <>
        I worked on Odoo and Salesforce implementation in several clients. I
        also carried out the management of digital projects, such as the
        implementation of websites with Wordpress/React or the configuration of
        Data Analysis dashboards through Data Studio or Tableau.
      </>
    ),
    year: "2019",
    period: "oct. 2019 · jul. 2021 ",
    highlights: [
      "Website of BBVA",
      "Social Media report automatically filled via API in Google Sheets using JavaScript",
    ],
    technologies: ["", ""],
  },
  {
    company: "University of Navarre",
    position: "Digital Marketing Specialist",
    description: (
      <>
        In this job I was fortunate to lead the project of creating the digital
        funnel of several masters of the university. In addition to planning
        emails, landing pages and multi-channel ads, I executed them using tools
        such as Unbounce, Google Ads and Pardot. I was in charge of the
        integration of Pardot to Salesforce at the university, participating
        from the beginning in the whole process. It was this process that
        especially connected me to ERP's and CRM's, which I have focused on
        professionally.
      </>
    ),
    year: "2017",
    period: "dic. 2017 · oct. 2019",
    highlights: [
      "Salesforce/Pardot implementation",
      "Develop of all assets for all Digital Marketing Campaigns",
    ],
    technologies: ["", ""],
  },
];

export default JOBS;
