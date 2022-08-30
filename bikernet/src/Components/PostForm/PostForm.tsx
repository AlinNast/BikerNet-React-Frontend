import './PostForm.css';
import { useEffect, useState } from 'react';
import PostFormModal from '../../Modals/PostFormModal/PostFormModal';


function PostForm(props: any) {
    const [showPostForm, setShowPostForm] = useState(props.showForm);
    const [closePostForm, setClosePostForm] = useState(1);

    useEffect(() => { setShowPostForm(false) }, [closePostForm])

    const closeForm = () => {
        console.log('close initialized');
        setClosePostForm(closePostForm + 1);
        console.log(showPostForm);
    }

    return (
        <div className="postForm-container" onClick={() => { setShowPostForm(true) }}>
            <h1 className='form-title'>Hello {window.sessionStorage.getItem("userName")}</h1>
            <input type="text" placeholder='Create a new post' />
            <PostFormModal show={showPostForm} onClose={() => closeForm()} />


        </div>

    )
}

export default PostForm;