import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import  axios from 'axios';

import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);


function NewPost() {

   const [post, setPost] = useState({ });
   const history = useHistory();

   async function checkLocation() {
        try {
            let response = await Geocode.fromAddress(post.location)
            console.log(response)
            return true
        } catch (error) {
            return false
        }
   }

   //in spite of return statement the function still adds the post even if there's an error
   async function submitPost (event) {
       event.preventDefault();
       //to do: add default Img for author and location if respective fields are empty
       try {
            const placeFound = await checkLocation()
            if (!placeFound) {
                alert('Sorry, we cannot find this place on the map. Please check your location entry for typos and look up alternative English spellings')
                return
            }    
            const res = await axios.post(`${process.env.REACT_APP_BE_URL}/new`, post)
            console.log(res)
            if (res.status === 200) {
                history.push('/');
                //to do: cause entries data to reload on return to dashboard
            }
       } catch (error) {
        console.error(error)
       }      
   }

    //if login functionality >> render 'user' conditionally based on whether someone is logged in:
    //input field or name of logged in user

    return (
        <div className='single-page box'>
            <div className='single-page-content'>
                <h1 className='title new-post-header'>your journey</h1>
                <form id='submit-form' onSubmit={submitPost}>
                    <label htmlFor='title'> Choose an enticing title for your trip!
                        <br/>
                        <input
                            name='title' 
                            type='text'
                            maxLength='35'
                            value={post.title}
                            onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                            required>
                        </input>
                    </label>
                    <br/><br/>
                    <label htmlFor='location'> Which city, or place did you travel to?
                        <br/>
                        <input
                            name='location' 
                            type='text'
                            value={post.location}
                            onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                            required>
                        </input>
                    </label>
                    <br/><br/>
                    {/* to improve: get country info from Geocode API, 
                    don't leave it to the user to respond correctly... ;) or drop-down with all countries */}
                    <label htmlFor='country'> Which country is it in?
                        <br/>
                        <input
                            name='country' 
                            type='text'
                            value={post.country}
                            onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                            required>
                        </input>
                    </label>
                    <br/><br/>
                    <label htmlFor='visitDate'> When did your trip start?
                        <br/>
                        <input
                            name='visitDate'
                            type='date'
                            value={post.visitDate} 
                            onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                            required>
                        </input>
                    </label>
                    <br/><br/>
                    <p className='form-info'> Info on images: No file upload available, please paste valid image web address e.g. 'https//website.com...imageName.jpg'</p>
                    <label htmlFor='locationImg'> If you can, share visual impressions, too!
                        <br/>
                        
                        <input
                            name='locationImg' 
                            type='text'
                            value={post.locationImg}
                            onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                            >                    
                        </input>
                    </label>
                    <br/><br/>
                    <label htmlFor='authorImg'> Your profile picture
                        <br/>
                        <input
                            name='authorImg' 
                            type='text'
                            value={post.authorImg}
                            onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                            >
                        </input>
                    </label>
                    <br/><br/>
                    <label htmlFor='author'> Your name
                        <br/>
                        <input
                            name='author' 
                            type='text'
                            value={post.author}
                            onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                            required>
                        </input>
                    </label>
                    <br/><br/>
                    <label htmlFor='description'> 
                        What did you do, what did you learn? <br/>
                        Share your experiences!
                            <br/>
                            <input
                                name='description'
                                id='description'
                                type='text'
                                value={post.description}
                                onChange={event => setPost({...post, [event.currentTarget.name] : event.currentTarget.value})}
                                required>
                            </input>
                    </label>
                    <br/>
                    <button
                        type='submit'
                        id='share-post-btn'
                        className='bright-btn'> share!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewPost;