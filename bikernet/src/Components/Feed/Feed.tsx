import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Feed.css'

function Feed(){
    const [posts, setPosts] = useState([]);

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }


    useEffect( () => {
        const fetchData = async () => {
            const repsonse = await fetch('https://localhost:5001/api/FeedPost', requestOptions);
            const data = await repsonse.json();            
            setPosts(data)
        } 
        fetchData();
    }, []);

    return(
        <div className='feed-container'>
            {posts.map((item:any)=>{
                return (
                    <>
                        <Post key={item.id} data={item} />
                    </>
                );
            })}
        </div>
    )
}

export default Feed;