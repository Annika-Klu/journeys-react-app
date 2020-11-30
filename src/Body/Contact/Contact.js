function Contact() {
    return (
        <div className='contact-page box'>
            <h2 className='title' id="contact-header">thank you for visiting this blog</h2>
            <p>
                This is the final project by 
                <br/> <span className='title'>Annika Kluepfel</span>
                <br/> graduating from Hamburg Coding School
                <br/> Full-Stack Web Development program
            </p>
            <p hidden={true}>
                <span className='title'>Thank you</span>
                <br/> To Teresa for founding this amazing school.
                <br/> To Eva for organizing everything so well.
                <br/> To Ugur, Helder, Paul, Jonas, Steffen, Ansgar, Henning
                <br/> for your supportive teaching, and for investing so much time.
                <br/> And to my classmates...
                <br/> ...I sure don't mind going "back to school" if it's with you!
            </p>
            <div>
                Get in touch!
                <ul id='contact-details'>
                    <li>Annika Kluepfel</li>
                    <li>Troplowitzstr. 11, 22529 HH</li>
                    <li>AnnikaKluepfel@web.de</li>
                    <li>+49 151 51891818</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;