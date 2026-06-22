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
    margin: "0 !important", // Remove default margin
    marginBottom: `${theme.spacing(1)}px !important`, // Add small margin only at bottom
  },
  profileText: {
    margin: "0 !important", // Remove default margin from paragraph text
    whiteSpace: "pre-line",
  },
  profileSection: {
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "220px 1fr",
      textAlign: "left",
    },
  },
  profileImageContainer: {
    width: "200px",
    height: "200px",
    minWidth: "150px",
    minHeight: "150px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: theme.spacing(1), // Reduced margin here as well
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
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
                <div className={classes.profileImageContainer}>
                  <img
                    src={headshot}
                    alt="Profile"
                    className={classes.profileImage}
                  />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.heading}
                  >
                    Hey, I'm Aiden Melone.
                  </Typography>
                  <Typography
                    sx={{ whiteSpace: "pre-line" }}
                    className={classes.profileText}
                  >
                    {`I’m a Georgia Tech Computer Science graduate and full-stack engineer working at the intersection of AI, developer tooling, and human computer interaction.

                                    My recent work has focused on building agentic internal systems that improve engineering efficiency, QA coverage, and deployment reliability. At Saleo, I’ve helped develop autonomous tooling that identifies and resolves bugs before they become production issues, as well as RAG-based code-generation systems designed to improve developer effectiveness.

                                    I studied computer science with a psychology minor because I believe great software depends on both sides of the equation: understanding how to build complex systems, and understanding the people who rely on them. My research experience at Georgia Tech explored that same intersection, using generative technology to make higher education more accessible for individuals with cognitive disabilities.

                                    Outside of engineering, I’m a PCT thru-hiker (class of 2024!), avid rock climber, and international adventurer. I’m drawn to hard problems, unfamiliar environments, and challenges that require persistence, creativity, and constant learning.`}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className={classes.cardsContainer}>
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
                    Machine Learning
                  </Typography>
                  <Typography className="textSecondaryList">
                    Python (NumPy, TensorFlow, PyTorch, LangChain, Hugging Face,
                    Pandas), NoSQL (MongoDB, Firebase), MySQL
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.skillHeading}
                  >
                    OOP
                  </Typography>
                  <Typography className="textSecondaryList">
                    Java, C#, Kotlin, Python
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.skillHeading}
                  >
                    Web Dev
                  </Typography>
                  <Typography className="textSecondaryList">
                    JavaScript (React, Node.js, Express.js), TypeScript (AWS
                    CDK), HTML, CSS, Flask
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.skillHeading}
                  >
                    Tooling
                  </Typography>
                  <Typography className="textSecondaryList">
                    Git, AWS (Lambda, CDK), Google Cloud (Maps API, Firebase),
                    Postman (RESTful API testing), Linux (HiveOS)
                  </Typography>
                </div>
              </CardContent>
            </Card>

            <Card className={classes.courseCard}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  className={classes.heading}
                >
                  Course Work
                </Typography>
                <List text-align="center">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Artificial Intelligence",
                    "Data Structures and Algorithms",
                    "Object-Oriented Programming",
                    "Human-Computer Interaction",
                    "Cognitive Science",
                  ].map((course) => (
                    <ListItem key={course}>
                      <Typography>{course}</Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
