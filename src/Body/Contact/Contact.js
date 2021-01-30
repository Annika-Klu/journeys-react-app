import React, { useState } from 'react';
import  axios from 'axios';

function Contact() {

    const [message, setMessage] = useState({});
    const [sent, setSent] = useState(false);

    async function submitMessage (event) {
        event.preventDefault();
        console.log(message);
        axios.post('/contact', message)
             .then(function (response) {
             console.log(response); })
             .catch(function (error) {
             console.log(error);}
         );
        setSent(true);
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
                    <br/> December 2020
                </p>
                <p>
                    JOURNEYS is a travel blog built using the frontend Javascript framework 'React'.
                    <br/> Fictional users share their travel experiences, whereas locations are displayed on a map by
                    fetching their geographic data from a Google API to place corresponding markers. 
                </p>
                <p>
                    Since graduating, I've continued to work on my blog project, adding first of all an email form to this contact page.
                    Next, I will improve some of the features, as well as the website's responsiveness.
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
                    <p class='title sub-title'>Wanna see code? View this project on github</p>
                    <p><a href='https://github.com/Annika-Klu/journeys-react-app' target='blank'>github.com/annika-klu</a></p>
                    <p class='title sub-title'>Wanna get in touch?</p>
                     
                    { sent ? 
                    <p> Thanks for your message! I will get back to you as soon as possible.</p> : 
                   
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
                                placeholder='example@email.com'
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
                                id='yourMessage' 
                                type='text'
                                value={message.text}
                                onChange={event => setMessage({...message, [event.currentTarget.name] : event.currentTarget.value})}
                                required>
                            </input>
                        </label>
                        <br/>
                        <button id='sendMessage' type='submit'>Send</button>
                    </form> }
                </div>
            </div>
        </div>
    )
}

export default Contact;