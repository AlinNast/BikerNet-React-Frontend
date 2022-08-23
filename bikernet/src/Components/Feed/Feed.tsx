import { useEffect, useState } from 'react';
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
            console.log(repsonse);
            const data = await repsonse.json();
            console.log(data);
            
            setPosts(data)
        } 
        fetchData();
    }, []);

    return(
        <div className='feed-container'>
        <h1>feed</h1>
        {posts.map((item:any)=>{
            return (<li key={item.id}>{item.title}</li>);
        })}
        </div>
    )
}

export default Feed;