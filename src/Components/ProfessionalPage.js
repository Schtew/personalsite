import CardItem from "./CardItem";
import amazon from "../Assets/amazon.png";
import fleeke from "../Assets/fleeke2.jpg";
import MRP from "../Assets/MRPthumbnail.png";
import Saleo from "../Assets/saleo.png";

const ProfessionsPage = ({ isHovered }) => {
  const professions = [
    {
      title: "Saleo x Consensus | Full Stack Software Engineer",
      image: Saleo,
      description: (
        <ul>
          <li>
            Architected and deployed a fully autonomous bug detection and
            remediation system alongside one other engineer, closing the loop on
            a QA cycle that previously depended entirely on customer-reported
            issues reaching QA and engineering before resolution.
          </li>
          <li>
            Eliminated customer-facing error exposure across 8 of the company's
            largest and most complex accounts, catching 210 production events
            autonomously- events that would otherwise have been discovered by
            customers in active product sessions.
          </li>
          <li>
            Built as a full production service on AWS (Lambda, ECS, DynamoDB,
            S3, CloudFront, Secrets Manager), with dedicated frontend, backend,
            and infrastructure repositories, and seperate active interfaces for
            both engineering and QA teams
          </li>
          <li>
            Internal AI tooling cited by company leadership as a direct
            contributor to the company’s 13x acquisition outcome.
          </li>
          <li>
            Languages/Technologies Involved: TypeScript, Claude SDK, MCP, AWS
            (Lambda, ECS, DynamoDB, S3, CloudFront)
          </li>
        </ul>
      ),
      date: "June 2025 - Present",
    },
    {
      title: "Saleo | Machine Learning Engineer Contractor",
      image: Saleo,
      description: (
        <ul>
          <li>
            Led R&D efforts in RAG model development for code generation, with
            an average return of 15% higher semantic quality over naïve
            generation.
          </li>
          <li>
            Built a complete benchmarking suite for model testing and
            deployment, enabling rigorous evaluation of generation quality
            across varied code generation tasks.
          </li>
          <li>
            Languages/Technologies Involved: AWS Sagemaker, Huggingface,
            Langchain, OpenAI API, Typescript, Python
          </li>
        </ul>
      ),
      date: "March 2025 - June 2025",
    },
    {
      title: "Amazon | Software Development Engineer Intern",
      image: amazon,
      link: "https://www.amazon.com",
      description: (
        <ul>
          <li>
            Built infrastructure, front end components, and onboarded internal
            teams for the customer-facing notification hub in the Amazon Alexa
            Developer Console, coordinating across independent internal teams.
          </li>
          <li>
            Worked with small team of engineers to assist in Amazon's transition
            away from on prem to event-driven AWS architecture.
          </li>
          <li>
            Technologies Involved: TypeScript, AWS (CDK, Lambda, EventBridge)
          </li>
        </ul>
      ),
      date: "May, 2022 - August, 2022",
    },
    {
      title:
        "MRP Capital Investment | Cryptocurrency Mining Infrastructure Developer",
      image: MRP,
      link: "https://mrpci.com/",
      description: (
        <ul>
          <li>
            Developed cryptocurrency (Ethereum) mining infrastructure for a
            local capital investment firm.
          </li>
          <li>
            Managed tens of thousands of dollars in infrastructure, becoming
            responsible for the whole of 1.5GH/s mining operation.
          </li>
        </ul>
      ),
      date: "April 2021 - December 2022",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${fleeke})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        minHeight: "var(--page-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
        {professions.map((profession, index) => (
          <CardItem key={index} item={profession} isHovered={isHovered} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionsPage;
