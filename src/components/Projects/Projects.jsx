import './Projects.css'
import Card from 'react-bootstrap/Card';
import TravelHaven from '../../assets/img/travelHaven.png'
import WeatherApp from '../../assets/img/weatherApp.png'
import ToDoApp from '../../assets/img/toDoApp.png'
import SpotifyClone from '../../assets/img/spotifyClone.png'
import SimonGame from '../../assets/img/simonGame.png'
import RandomColorGenerator from '../../assets/img/randomColorGenerator.png'

export default function Projects() {
  return (
    <section id="projects" className='projectContainer'>
        <h2 className='sectionTitle'>My Recent Works</h2>
        <div className='projects'>

            <div className="project-card">
                <Card>
                    <Card.Img variant="top" src={TravelHaven} width={500} style={{border: '2px solid #222', objectFit: "cover"}}/>
                    <br /><br />
                    <Card.Body >
                        <h3>TravelHaven</h3><br />
                        <Card.Text>TravelHaven - All In One Reviewing Platform</Card.Text>
                        <br /><br />
                        <a href='https://reviewing-platform-project.onrender.com/' target='_blank'>
                            <button>Visit Here</button>
                        </a> &nbsp;
                        <a href='https://github.com/amarjeetsingh7503/travelhaven-project' target='_blank'>
                            <button>Source Code</button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <div className="project-card">
                <Card>
                    <Card.Img variant="top" src={WeatherApp} width={500} style={{border: '2px solid #222', objectFit: "cover"}}/>
                    <br /><br />
                    <Card.Body >
                        <h3>React Weather App</h3><br />
                        <Card.Text>Stay Informed with Real-Time Weather Updates</Card.Text>
                        <br /><br />
                        <a href='https://amarjeetsingh7503.github.io/react-weather-app/' target='_blank'>
                            <button>Visit Here</button>
                        </a> &nbsp;
                        <a href='https://github.com/amarjeetsingh7503/react-weather-app' target='_blank'>
                            <button>Source Code</button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <div className="project-card">
                <Card>
                    <Card.Img variant="top" src={ToDoApp} width={500} style={{border: '2px solid #222', objectFit: "cover"}}/>
                    <br /><br />
                    <Card.Body >
                        <h3>To Do Application</h3><br />
                        <Card.Text>Organize Your Day, One Task at a Time.</Card.Text>
                        <br /><br />
                        <a href='https://amarjeetsingh7503.github.io/ToDoApplication/' target='_blank'>
                            <button>Visit Here</button>
                        </a> &nbsp;
                        <a href='https://github.com/amarjeetsingh7503/ToDoApplication' target='_blank'>
                            <button>Source Code</button>
                        </a>
                    </Card.Body>
                </Card>
            </div>
            
            <div className="project-card">
                <Card style={{paddingBottom: "10px"}}>
                    <Card.Img variant="top" src={SpotifyClone} width={500} style={{border: '2px solid #222', objectFit: "cover"}}/>
                    <br /><br />
                    <Card.Body >
                        <h3>Spotify Frontend Clone</h3>
                        <br />
                        <Card.Text>99% Look Alike Spotify Clone</Card.Text>
                        <br /><br />
                        <a href='https://amarjeetsingh7503.github.io/SpotifyClone/' target='_blank'>
                            <button>Visit Here</button>
                        </a> &nbsp;
                        <a href='https://github.com/amarjeetsingh7503/SpotifyClone' target='_blank'>
                            <button>Source Code</button>
                        </a>
                    </Card.Body>
                </Card>
            </div>
            
            <div className="project-card">
                <Card>
                    <Card.Img variant="top" src={SimonGame} width={500} style={{border: '2px solid #222', objectFit: "cover"}}/>
                    <br /><br />
                    <Card.Body >
                        <h3>Simon Game</h3>
                        <br />
                        <Card.Text>Test Your Memory - The Classic Simon Game Challenge!</Card.Text>
                        <br />
                        <br />
                        <a href='https://amarjeetsingh7503.github.io/SimonGame/' target='_blank'>
                            <button>Visit Here</button>
                        </a> &nbsp;
                        <a href='https://github.com/amarjeetsingh7503/SimonGame' target='_blank'>
                            <button>Source Code</button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <div className="project-card">
                <Card>
                    <Card.Img variant="top" src={RandomColorGenerator} width={500} style={{border: '2px solid #222', objectFit: "cover"}}/>
                    <br /><br />
                    <Card.Body >
                        <h3>Random Color Generator</h3>
                        <br />
                        <Card.Text>Generate Unlimited Vibrant Colors Instantly with a Simple Click</Card.Text>
                        <br />
                        <br />
                        <a href='https://amarjeetsingh7503.github.io/RandomColorGenerator/' target='_blank'>
                            <button>Visit Here</button>
                        </a> &nbsp;
                        <a href='https://github.com/amarjeetsingh7503/RandomColorGenerator' target='_blank'>
                            <button>Source Code</button>
                        </a>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    </section>
  )
}
