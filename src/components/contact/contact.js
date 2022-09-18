import './contact.css';

export const Contact = () => {

    return (
        <div className='contact-container'>
            <div>
                <h2>Contact</h2>
                <h4>Want to get a hold of me?</h4>
                <br></br>
                <h4>Just want to say hi? Drop a message here!</h4>
            </div>
            <br></br>
            <div className='input-container'>
                <input placeholder='Your Name'></input>
                <input placeholder='Your Email'></input>
                <input type='text' rows={5} placeholder='Your Message'></input>
            </div>
        </div>
    )
}

export default Contact;