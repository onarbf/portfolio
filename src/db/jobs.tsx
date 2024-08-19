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
    period: "Dec 2024 · Now ",
    highlights: [
      "Hubspot to Pardot (Account Engagement) Migration",
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
    period: "Jan 2023 · Dec 2023 ",
    highlights: [
      "Develop an AI tool to translate HTML emails automatically",
      "Manage a team of 14 developers",
    ],
    technologies: ["", ""],
  },
  {
    company: "CloudGaia · Schroders",
    position: "Salesforce Marketing Cloud developer",
    description: (
      <>
        My tasks were very varied, from deploying development environments to
        production, to creating entire teams for specific regions, and of
        course, planning and developing all the assets related to email
        marketing.
      </>
    ),
    year: "2022",
    period: "apr. 2022 · dec. 2022",
    highlights: [
      "Develop an internal feature to automate bulk uploads of leads to Pardot",
    ],
    technologies: ["", ""],
  },
  {
    company: "MSD",
    position: "SFMC & FrontEnd Developer",
    description: (
      <>
        <ul>
          <li>React front-end of landing pages developer</li>
          <li>Journey implementation & automation process developer</li>
          <li>Javascript Excel-Salesforce integration development</li>
        </ul>
      </>
    ),
    year: "2021",
    period: "jun 2021 · may 2022",
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
