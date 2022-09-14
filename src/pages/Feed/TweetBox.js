import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios'
import './TweetBox.css'

const TweetBox = () => {
    const [post, setPost] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState('');


    const handleUploadImage = (e) => {
        setIsLoading(true);
        const image = e.target.files[0];

        const formData = new FormData();
        formData.set('image', image)

        axios.post("https://api.imgbb.com/1/upload?key=59207bb0bb404bee12b87515615fe979", formData)
            .then(res => {
                setImageURL(res.data.data.display_url)
                console.log(res.data.data.display_url)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }

    const handleTweet = (e) => {
        e.preventDefault();
        if (imageURL) {
            const userPost = {
                post: post,
                photo: imageURL
            }
            console.log(userPost);
            fetch(`http://localhost:5000/post`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userPost)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <div className="tweetBox">
            <form onSubmit={handleTweet}>
                <div className="tweetBox_input">
                    <Avatar src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
                    <input
                        type="text"
                        placeholder="What's happening?"
                        onChange={(e) => setPost(e.target.value)}
                    />
                </div>
                <div className="imageIcon_tweetButton">
                    <label htmlFor="image" className='imageIcon'>
                        {
                            isLoading ? <p>Uploading image</p> : <p>{imageURL ? 'image uploaded' : <AddPhotoAlternateIcon />}</p>
                        }
                    </label>
                    <input
                        type="file"
                        id='image'
                        className='imageInput'
                        onChange={handleUploadImage}
                    />
                    <Button className='tweetBox_tweetButton' type='submit'>Tweet</Button>
                </div>
            </form>
        </div>
    );
};

export default TweetBox;