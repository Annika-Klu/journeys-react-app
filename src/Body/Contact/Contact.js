function Contact() {
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
                    Wanna get in touch?
                    <ul id='contact-details'>
                        <li>Annika Kluepfel</li>
                        <li>Troplowitzstr. 11, 22529 HH</li>
                        <li>AnnikaKluepfel@web.de</li>
                        <li>+49 151 51891818</li>
                        <br/>
                        <li>github.com/annika-klu</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;