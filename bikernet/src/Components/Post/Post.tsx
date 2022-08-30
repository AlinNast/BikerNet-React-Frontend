import { useEffect, useState } from 'react';
import './Post.css'

function Post(data: any) {
    const post = data.data;
    const [userName, setUserName] = useState('')

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    useEffect(() => {
        console.log(post.userId);
        const fetchUser = (async () => {
            const repsonse = await fetch('https://localhost:5001/api/User/getUser/' + post.userId, requestOptions);
            const data = await repsonse.json();
            console.log(data);
            setUserName(data);
        })

        fetchUser();
    }, [])


    return (
        <div className="post-container">
            <h1 className='post-title'>{post.title}</h1>
            {(post.description !== "" && post.description !== null) ? <h2>{post.description}</h2> : ""}
            {(userName !== '' && userName !== null) ? <h5>Posted by <b>{userName}</b></h5> : <h5>Secret author</h5>}
            <h5>published on {post.created.slice(0, 10)} ; {post.created.slice(11, 16)}</h5>
        </div>
    )
}

export default Post;