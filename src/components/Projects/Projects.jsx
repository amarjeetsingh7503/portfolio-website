import "./Projects.css";
import Card from "react-bootstrap/Card";

// Images
import TravelHaven from "../../assets/img/travelHaven.png";
import WeatherApp from "../../assets/img/weatherApp.png";
import ToDoApp from "../../assets/img/toDoApp.png";
import SpotifyClone from "../../assets/img/spotifyClone.png";
import SimonGame from "../../assets/img/simonGame.png";
import RandomColorGenerator from "../../assets/img/randomColorGenerator.png";
import PokemonApp from "../../assets/img/pokeball.jpg";
import RecipeBook from "../../assets/img/recipe-book.png";
import VoteConnect from "../../assets/img/vote-connect.png";
import StudySync from "../../assets/img/studySync.png";

const projectData = [
  {
    title: "TravelHaven",
    img: TravelHaven,
    desc: "TravelHaven - All In One Reviewing Platform",
    live: "https://reviewing-platform-project.onrender.com/",
    source: "https://github.com/amarjeetsingh7503/travelhaven-project",
  },
  {
    title: "React RecipeBook",
    img: RecipeBook,
    desc: "Learn and Cook New Recipes",
    live: "https://recipe-book-579y.onrender.com/",
    source: "https://github.com/amarjeetsingh7503/recipe-book",
  },
  {
    title: "StudySync",
    img: StudySync,
    desc: "StudySync - Study Group Coordinator App",
    live: "https://amarjeetsingh7503.github.io/StudySync/",
    source: "https://github.com/amarjeetsingh7503/StudySync",
  },
  {
    title: "VoteConnect",
    img: VoteConnect,
    desc: "VoteConnect - Every vote matters",
    live: "https://votingplatform-nds0.onrender.com/",
    source: "https://github.com/amarjeetsingh7503/voting_platform",
  },
  {
    title: "React Weather App",
    img: WeatherApp,
    desc: "Stay Informed with Real-Time Weather Updates",
    live: "https://amarjeetsingh7503.github.io/react-weather-app/",
    source: "https://github.com/amarjeetsingh7503/react-weather-app",
  },
  {
    title: "Spotify Frontend Clone",
    img: SpotifyClone,
    desc: "99% Look Alike Spotify Clone",
    live: "https://amarjeetsingh7503.github.io/SpotifyClone/",
    source: "https://github.com/amarjeetsingh7503/SpotifyClone",
  },
  {
    title: "React Pokemon App",
    img: PokemonApp,
    desc: "Catch 'Em All with Real-Time Pokémon Insights",
    live: "https://amarjeetsingh7503.github.io/pokemon-app/",
    source: "https://github.com/amarjeetsingh7503/pokemon-app/",
  },
  {
    title: "To Do Application",
    img: ToDoApp,
    desc: "Organize Your Day, One Task at a Time.",
    live: "https://amarjeetsingh7503.github.io/ToDoApplication/",
    source: "https://github.com/amarjeetsingh7503/ToDoApplication",
  },
  {
    title: "Simon Game",
    img: SimonGame,
    desc: "Test Your Memory - The Classic Simon Game Challenge!",
    live: "https://amarjeetsingh7503.github.io/SimonGame/",
    source: "https://github.com/amarjeetsingh7503/SimonGame",
  },
  {
    title: "Random Color Generator",
    img: RandomColorGenerator,
    desc: "Generate Unlimited Vibrant Colors Instantly with a Simple Click",
    live: "https://amarjeetsingh7503.github.io/RandomColorGenerator/",
    source: "https://github.com/amarjeetsingh7503/RandomColorGenerator",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projectContainer">
      <h2 className="sectionTitle">My Recent Works</h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={project.img}
                alt={`${project.title} preview`}
                width={500}
                style={{
                  border: "2px solid #222",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
              <br />
              <br />
              <Card.Body>
                <h3>{project.title}</h3>
                <br />
                <Card.Text>{project.desc}</Card.Text>
                <br />
                <br />
                <a href={project.live} target="_blank" rel="noreferrer">
                  <button>Visit Here</button>
                </a>{" "}
                &nbsp;
                <a href={project.source} target="_blank" rel="noreferrer">
                  <button>Source Code</button>
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
