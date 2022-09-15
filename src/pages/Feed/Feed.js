import React, { useEffect, useState } from 'react';
import './Feed.css'
import TweetBox from './TweetBox';
import './Feed.css'
import Post from './Post/Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-everglades-50539.herokuapp.com/post')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [posts])

    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {
                posts.map(p => <Post key={p._id} p={p} />)
            }
        </div>
    );
};

export default Feed;