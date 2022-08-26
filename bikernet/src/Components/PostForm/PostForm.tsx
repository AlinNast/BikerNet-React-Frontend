import './PostForm.css';

function PostForm() {
    return(
        <div className="postForm-container">
            <h1 className='form-title'>Hello {window.sessionStorage.getItem("userName")}</h1>
            <input type="text" placeholder='Create a new post' />

        </div>
       
    )
}

export default PostForm;