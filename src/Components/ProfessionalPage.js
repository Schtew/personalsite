import CardItem from "./CardItem";
import amazon from "../Assets/amazon.png";
import fleeke from "../Assets/fleeke2.jpg";
import MRP from "../Assets/MRPthumbnail.png";
import Saleo from "../Assets/saleo.png";

const ProfessionsPage = ({ isHovered }) => {
  const professions = [
    {
      title: "Saleo | Machine Learning Engineer Contractor",
      image: Saleo,
      description: (
        <ul>
          <li>
            Led innovation team to develop internal AI based agentic
            applications to automate development and bug fixing workflows.
          </li>
          <li>
            Led R&D efforts in RAG model development for code generation, with
            an average return of 15% higher semantic quality over naïve
            generation
          </li>
          <li>
            Languages/Technologies Involved: Typescript, Python, React, AWS
            Terraform (Sagemaker, ECs, Dynamo, etc.), Docker, Huggingface, MCP
          </li>
        </ul>
      ),
      date: "March 2025 - Present",
    },
    {
      title: "Amazon | Software Development Engineer Intern",
      image: amazon,
      link: "https://www.amazon.com",
      description: (
        <ul>
          <li>
            Onboarded internal teams and built infrastructure for the customer
            facing notification hub in the Amazon Alexa Developer Console.
          </li>
          <li>
            Required internal communication and coordination among various
            independent internal teams.
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
        minHeight: "100vh",
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
