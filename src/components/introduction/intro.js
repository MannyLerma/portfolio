import './intro.css';
import linkedin from './linkedin.png';
import github from './github.png';
import email from './email.png';
import resume from './resume.png';
import Typed from 'react-typed';


export const Intro = () => {

    return (
        <div className='heading-container'>
            <div className='name'>
                <h1>Hi, I’m Emmanuel,</h1>
            </div>
            <div className='subtext-heading'>
                <div>
                    <p>
                        a <span className='underline'>graphic designer</span>
                        &nbsp;and <span className='underline'>aspiring front-end 
                        developer</span>&nbsp;in Dallas.
                    </p>
                </div>
                <div>
                    <p>
                        I am <b>self-taught</b> and always <b>committed to
                        growth</b> in the craft. I am <b>passionate </b>
                        about web design and providing engaging
                        user experiences.
                    </p>
                </div>
                <div className='typing-container'>
                    <p className='text'>I also love&nbsp;</p>
                    <p>
                        <Typed 
                            strings={[
                                "playing video games.",
                                "working out.",
                                "learning.",
                                "watching movies.",
                                "making art.",
                                "music.",
                            ]}
                            typeSpeed={125}
                            backSpeed={100}
                            loop
                        />
                    </p>
                    
                        {/* <p className='static-txts'>I also love</p>
                        <ul className='dynamic-txts'>
                            <li><p>playing video games.</p></li>
                            <li><p>working out.</p></li>
                            <li><p>learning.</p></li>
                            <li><p>watching movies.</p></li>
                            <li><p>making art.</p></li>
                            <li><p>music.</p></li>
                        </ul>  */}
                </div>

                <div className='heading-links'>
                    <img src={linkedin} />
                    <img src={github} />
                    <img src={email} />
                    <img src={resume} />
                </div>
            </div>
        </div>
    )
}

export default Intro;