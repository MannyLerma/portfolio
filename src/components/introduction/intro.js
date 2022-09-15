import './intro.css';
import linkedin from './linkedin.png';
import github from './github.png';

export const Intro = () => {

    return (
        <div className='heading-container'>
            <div className='name'>
                <h1>Hi, I’m Emmanuel,</h1>
            </div>
            <div className='subtext-heading'>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.
                    </p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Phasellus elementum odio a.
                    </p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Aliquam interdum iaculis sapien in faucibus.
                        Duis aliquet libero nec sollicitudin bibendum. 
                        Lorem ipsum dolor sit.
                    </p>
                </div>
                <div className='heading-links'>
                    <img src={linkedin} />
                    <img src={github} />
                </div>
            </div>
        </div>
    )
}

export default Intro;