function Contact() {
    return (
        <div className='single-page box'>
            <h2 className='page-heading' id="contact-header">thank you for visiting this blog</h2>
            <p>
                This is the final project by 
                <br/> <span className='title'>Annika Kluepfel</span>
                <br/> graduating from Hamburg Coding School
                <br/> Full-Stack Web Development program
            </p>
            <p>
                This fictional travel blog was built using the frontend Javascript framework 'React'.
                <br/> It displays previews and details for pre-coded blog entries, 
                <br/> and gets their geographic data from a Google API to display corresponding markers on a map.
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
                Wanna get in touch?
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