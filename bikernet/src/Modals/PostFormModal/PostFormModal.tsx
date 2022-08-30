import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import './PostFormModal.css';

function PostFormModal(props:any) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const userId = window.sessionStorage.getItem('userId');

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(props.show);
    // },[props.show])

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                id:"00000000-0000-0000-0000-000000000000",
                title:title,
                description:description,
                created:Date.now,
                userId:userId,
                image:null,
                location:null
            })
    };

    const handleSubmit = async () => {
        console.log('submit handled')
        const response = await fetch('https://localhost:5001/api/FeedPost', requestOptions);
        console.log(requestOptions);
        console.log(response);
        if(response.ok){
            alert('post succesful')
            props.onClose();

        }

        //navigate("/Home");

    }

    if(!props.show){
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header-postForm">
                    <h3 className='modal-header-title'>Create a new post</h3>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder='Title' onChange={(e) => {setTitle(e.target.value)}}/>
                    <input type="textarea" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="modal-footer">
                    <button className="submit-form" onClick={handleSubmit}>Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostFormModal;