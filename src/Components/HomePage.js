import fiordlandsImage from "../Assets/fiordlands.jpg";
import headshot from "../Assets/IMG_8980.JPEG";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import resume from "../Assets/resume.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundImage: `url(${fiordlandsImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100%",
    minHeight: "var(--page-height)",
  },
  pageContent: {
    opacity: 1,
    transform: "translateY(0)",
    filter: "blur(0)",
    transition: "opacity 350ms ease, transform 350ms ease, filter 350ms ease",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridAutoRows: "auto",
    justifyItems: "center",
    alignContent: "start",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  hiddenContent: {
    opacity: 0,
    transform: "scale(0.985)",
    filter: "blur(2px)",
    pointerEvents: "none",
  },
  mainCard: {
    width: "90%",
    maxWidth: "1200px",
    justifySelf: "center",
  },
  heading: {
    fontFamily: "Lora",
    textAlign: "center",
  },
  profileText: {
    margin: "0 !important",
    whiteSpace: "pre-line",
    textAlign: "left",
    lineHeight: 1.15,
  },
  profileSection: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto",
    justifyItems: "center",
    textAlign: "center",
    gap: theme.spacing(2),
    width: "100%",
  },
  profileRow: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: theme.spacing(3),
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      justifyItems: "center",
      textAlign: "center",
    },
  },
  profileImageContainer: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    width: "90%",
    maxWidth: "1200px",
    gap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns:
        "minmax(180px, 0.9fr) minmax(0, 1.6fr) minmax(180px, 0.9fr)",
    },
  },
  resumeCard: {
    width: "100%",
  },
  skillsCard: {
    width: "100%",
  },
  courseCard: {
    width: "100%",
  },
  courseworkList: {
    width: "100%",
    textAlign: "center",
  },
  courseworkItem: {
    justifyContent: "center",
    textAlign: "center",
  },
  skillsSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "flex-start",
    width: "100%",
  },
  skillHeading: {
    fontFamily: "Lora",
    marginTop: theme.spacing(1),
  },
}));

const Home = ({ isHovered }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.pageContainer}>
        <div
          className={`${classes.pageContent} ${isHovered ? classes.hiddenContent : ""}`}
        >
          <Card className={classes.mainCard}>
            <CardContent>
              <div className={classes.profileSection}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  Hey, I'm Aiden Melone.
                </Typography>
                <div className={classes.profileRow}>
                  <div className={classes.profileImageContainer}>
                    <img
                      src={headshot}
                      alt="Profile"
                      className={classes.profileImage}
                    />
                  </div>
                  <Typography className={classes.profileText}>
                    {`I'm a Georgia Tech Computer Science graduate and full-stack engineer working at the intersection of AI, developer tooling, and human computer interaction.

                                    My recent work has focused on building agentic internal systems that improve engineering efficiency, QA coverage, and deployment reliability. At Saleo, I’ve developed autonomous tooling that identifies and resolves bugs before they become production issues, as well as RAG-based code-generation systems that enhance developer productivity.

                                    I studied computer science with a psychology minor because I believe great software depends on both sides of the equation: understanding how to build complex systems, and understanding the people who rely on them. My research experience at Georgia Tech explored that same intersection, using generative technology to make higher education more accessible for individuals with cognitive disabilities.

                                    Outside of engineering, I’m a PCT thru-hiker (class of 2024!), avid rock climber, and international adventurer. I’m drawn to hard problems, unfamiliar environments, and challenges that require persistence, creativity, and constant learning.`}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className={classes.cardsContainer}>
            <Card className={classes.courseCard}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  Course Work
                </Typography>
                <List className={classes.courseworkList}>
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Artificial Intelligence",
                    "Reinforcement Learning",
                    "Automata and Complexity",
                    "Linear Algebra",
                    "Probability and Statistics",
                    "Data Structures and Algorithms",
                    "Object-Oriented Programming",
                    "Human-Computer Interaction",
                    "Cognitive Science",
                  ].map((course) => (
                    <ListItem key={course} className={classes.courseworkItem}>
                      <Typography>{course}</Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card className={classes.skillsCard}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  className={classes.heading}
                >
                  Technical Skills
                </Typography>
                <div className={classes.skillsSection}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.skillHeading}
                  >
                    ML & AI Systems
                  </Typography>
                  <Typography className="textSecondaryList">
                    Python, PyTorch, TensorFlow, Hugging Face, LangChain, OpenAI
                    API, Claude SDK, RAG, MCP, agentic workflows
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.skillHeading}
                  >
                    Data & Evaluation
                  </Typography>
                  <Typography className="textSecondaryList">
                    NumPy, Pandas, benchmarking suites, retrieval pipelines,
                    model quality analysis, MongoDB, DynamoDB, Firebase, MySQL
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.skillHeading}
                  >
                    Production Engineering
                  </Typography>
                  <Typography className="textSecondaryList">
                    TypeScript, JavaScript, React, Node.js, Express.js, Flask,
                    REST APIs, full-stack internal tools, QA automation,
                    production monitoring
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.skillHeading}
                  >
                    Cloud & Infrastructure
                  </Typography>
                  <Typography className="textSecondaryList">
                    AWS SageMaker, Lambda, ECS, CDK, DynamoDB, S3, CloudFront,
                    EventBridge, Secrets Manager, MCP, Git, Linux
                  </Typography>
                </div>
              </CardContent>
            </Card>

            <Card className={classes.resumeCard}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  className={classes.heading}
                >
                  Resume
                </Typography>
                <Typography>
                  <a
                    href="/Resume - Aiden Melone.pdf"
                    download="Resume - Aiden Melone.pdf"
                  >
                    <img
                      src={resume}
                      alt="resume"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
