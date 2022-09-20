import './resume.css';

export const Resume = () => {

    return (
        <div className='resume-container'>
            <div className='title'>
                <span  className="resume-dot"></span>
                <h2>Resume</h2>
            </div>
            <div className='resume-info-container'>
            <div className='resume-left-side'>
                <div className='work-experience-container'>
                    <h3>Work Experience</h3>
                    <div className='work-experience'>
                        <h4>Company Name</h4>
                        <p>Position Title</p>
                        <p>Date</p>
                    </div>
                    <div className='work-experience'>
                        <h4>Company Name</h4>
                        <p>Position Title</p>
                        <p>Date</p>
                    </div>
                    <div className='work-experience'>
                        <h4>Company Name</h4>
                        <p>Position Title</p>
                        <p>Date</p>
                    </div>
                </div>
                <div className='list-container'>
                    <h3>Skills</h3>
                    <div className='list'>
                        <div>
                            <h4>Design</h4>
                            <li>Skill 1</li>
                            <li>Skill 2</li>
                            <li>Skill 3</li>
                            <li>Skill 4</li>
                        </div>
                        <div>
                            <h4>Development</h4>
                            <li>Skill 1</li>
                            <li>Skill 2</li>
                            <li>Skill 3</li>
                            <li>Skill 4</li>
                        </div>
                    </div>
                </div>
                <div className='list-container'>
                    <h3>Tools</h3>
                        <div className='list'>
                            <div>
                            <div>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                                <li>Skill 4</li>
                            </div>
                        </div>
                        <div>
                            <li>Skill 1</li>
                            <li>Skill 2</li>
                            <li>Skill 3</li>
                            <li>Skill 4</li>
                        </div>
                        </div>
                    </div>
                
            </div>
            <div className='resume-right-side'>
                <div className='education-container'>
                    <h3>Education</h3>
                    <div className='education'>
                        <h4>School Name</h4>
                        <p>Major</p>
                        <p>Date</p>
                    </div>
                    <div className='education'>
                        <h4>School Name</h4>
                        <p>Major</p>
                        <p>Date</p>
                    </div>
                </div>
                <div className='courses-container'>
                    <h3>Online Courses</h3>
                    <div className='online-course'>
                        <h4>Website Name</h4>
                        <p>Course Name</p>
                    </div>
                    <div className='online-course'>
                        <h4>Website Name</h4>
                        <p>Course Name</p>
                    </div>
                    <div className='online-course'>
                        <h4>Website Name</h4>
                        <p>Course Name</p>
                    </div>
                    <div className='online-course'>
                        <h4>Website Name</h4>
                        <p>Course Name</p>
                    </div>
                    <div className='online-course'>
                        <h4>Website Name</h4>
                        <p>Course Name</p>
                    </div>
                </div>
        </div>
    </div>
</div>
    )
}

export default Resume;