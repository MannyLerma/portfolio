import './projects.css';
import Laptop from './laptop.png';
import RPS from './RPS-Mockup.png';
import Hulu from './Hulu-Mockup.png';

export const Projects = () => {

return (
    <div className='projects-container'>
        <div className='title'>
            <span  className="project-dot"></span>
            <h2>Selected Works</h2>
        </div>
        <div className='card-containers'>
            <div className='left-container'>
                <div className='card'>
                    <h3>Rock, Paper, Scissors</h3>
                    <p>Web Design, Web Development</p>
                    <img src={RPS} alt={'Rock, Paper, Scissors project'} />
                    <div className='project-buttons'>
                        <button>Live</button>
                        <button>Github</button>
                    </div>
                </div>
                
            </div>
            <div className='right-container'>
                <div className='card'>
                <h3>Hulu Clone</h3>
                <p>React Development, Web Design</p>
                <img src={Hulu} />
                <div className='project-buttons'>
                        <button>Live</button>
                        <button>Github</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-containers'>
            <div className='left-container'>
                <div className='card'>
                    <h3>Card Three</h3>
                    <p>Web Design, Web Development</p>
                    <img src={Laptop} />
                    <div className='project-buttons'>
                        <button>Live</button>
                        <button>Github</button>
                    </div>
                </div>
                
            </div>
            <div className='right-container'>
                <div className='card'>
                <h3>Card Four</h3>
                <p>React Development, Web Design</p>
                <img src={Laptop} />
                <div className='project-buttons'>
                        <button>Live</button>
                        <button>Github</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

}

export default Projects;