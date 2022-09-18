import './about.css';

export const AboutMe = () => {

    return (
        <div className='about-me-container'>
            <div>
            <h2>About Me</h2>
            </div>
            <div className='about-text-container'>
            <div className='text-container'>
                <h4>Who am I?</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam interdum iaculis sapien in faucibus. Duis aliquet 
                libero nec sollicitudin bibendum.
                </p>
            </div>
            <div className='text-container'>
                <h4>What do I do?</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam interdum iaculis sapien in faucibus. Duis aliquet 
                libero nec sollicitudin bibendum. Lorem ipsum dolor sit.
                </p>
            </div>
            <div className='text-container'>
                <h4>What am I passionate about?</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam interdum iaculis sapien in faucibus. Duis aliquet 
                libero nec sollicitudin bibendum. Lorem ipsum dolor sit.
                </p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;