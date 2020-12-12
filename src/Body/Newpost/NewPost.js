function NewPost() {
    // I did not bother to code an actual post request here bc there's no backend to handle it.
    // If I had, I would have used axios request handler.
    // This is just to demonstrate a little more of the page's look and feel

    return (
        <div className='single-page box'>
            <h2 className='title'>share your journey!</h2>
            <br/>
            <form>
                <label htmlFor='location'> Which city/place did you travel to?
                    <br/>
                    <input id='location' type='text' required></input>
                </label>
                <br/> <br/>
                <label htmlFor='travelDate'> When did your trip start?
                    <br/>
                    <input id='travelDate' type='date' required></input>
                </label>
                <br/> <br/>
                <label htmlFor='description'> Describe your experiences in a few sentences!
                    <br/>
                    <input id='description' type='text' required></input>
                </label>
                <br/>
                <button type='submit' id='share-post-btn' className='bright-btn'>share!</button>
            </form>
        </div>
    )
}

export default NewPost;