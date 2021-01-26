import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import  axios from 'axios';

function Contact() {

    const [message, setMessage] = useState({});
    const history = useHistory();

    async function submitMessage (event) {
        event.preventDefault();
        console.log(message);
        axios.post('/contact', message)
             .then(function (response) {
             console.log(response); })
             .catch(function (error) {
             console.log(error);}
         );
         history.push('/');
    }

    return (
        <div className='single-page box'>
            <div className='single-page-content'>
                <h2 className='title' id='contact-header'>thank you for visiting this blog</h2>
                <p>
                    This is the final project by 
                    <br/> <span className='title sub-title'>Annika Kluepfel</span>
                    <br/> graduating from Hamburg Coding School
                    <br/> Full-Stack Web Development program
                </p>
                <p>
                    JOURNEYS is a travel blog built using the frontend Javascript framework 'React'.
                    <br/> Fictional users share their travel experiences, whereas locations are displayed on a map by
                    fetching their geographic data from a Google API to place corresponding markers.
                </p>
                <p hidden={true}>
                    <span className='title'>Thank you</span>
                    <br/> To Teresa for founding this amazing school.
                    <br/> To Eva for organizing everything so well.
                    <br/> To Christoph, Ugur, Helder, Paul, Jonas, Steffen, Ansgar, Henning
                    <br/> for your supportive teaching, and for investing so much time.
                    <br/> And to my classmates...
                    <br/> ...I sure don't mind going "back to school" if it's with you!
                </p>
                <div>
                    <p class='title sub-title'>Wanna see code? Visit me on github</p>
                    <p>github.com/annika-klu</p>
                    <p class='title sub-title'>Wanna get in touch?</p>
                    <p class='red'>Note: at present, this contact form is 
                        <span class='bold'> not </span>
                    functional. The server will shortly be reprogrammed to enable sending a messsage through this contact form.</p>
                    <form onSubmit={submitMessage}>
                        <label htmlFor='yourName'>Your name 
                            <br/>
                            <input 
                                name='yourName' 
                                type='text'
                                value={message.yourName}
                                onChange={event => setMessage({...message, [event.currentTarget.name] : event.currentTarget.value})}
                                required>
                                
                            </input>
                        </label>
                        <br/>
                        <label htmlFor='yourEmail'>Your email 
                            <br/>
                            <input
                                name='yourEmail'
                                type='email'
                                value={message.yourEmail}
                                onChange={event => setMessage({...message, [event.currentTarget.name] : event.currentTarget.value})}
                                required>
                            </input>
                        </label>
                        <br/>
                        <label htmlFor='yourMessage'>Your message
                            <br/>
                            <input
                                name='yourMessage' 
                                type='text'
                                value={message.text}
                                onChange={event => setMessage({...message, [event.currentTarget.name] : event.currentTarget.value})}
                                required>
                            </input>
                        </label>
                        <br/>
                        <button id='sendMessage' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;