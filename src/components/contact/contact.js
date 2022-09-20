import './contact.css';

export const Contact = () => {

    return (
        <div className='contact-container'>
            <div>
                <div className='title'>
                    <span className="dot"></span>
                    <h2>Contact</h2>
                </div>
                <h4>Want to get a hold of me?</h4>
                <br></br>
                <h4>Just want to say hi? Drop a message here!</h4>
            </div>
            <br></br>
            <div className='contact-links-container'>
                <div className='link-row'>
                    <img src=''/>
                    <h3>Emmanuellerma@outlook.com</h3>
                </div>
                <div className='link-row'>
                    <img src=''/>
                    <h3>Github Link</h3>
                </div>
                <div className='link-row'>
                    <img src=''/>
                    <h3>Linkedin Link</h3>
                </div>
                <div className='link-row'>
                    <img src=''/>
                    <h3>View My Resume</h3>
                </div>

            </div>
            {/* <div className='input-container'>
                <input placeholder='Your Name'></input>
                <input placeholder='Your Email'></input>
                <input type='text' rows={5} placeholder='Your Message'></input>
            </div> */}
        </div>
    )
}

export default Contact;