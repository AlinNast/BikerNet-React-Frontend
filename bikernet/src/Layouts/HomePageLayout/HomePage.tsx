import Navbar from '../../Components/Navbar/Navbar';
import Feed from '../../Components/Feed/Feed';
import './HomePage.css';
import { useEffect, useState } from 'react';

import PostForm from '../../Components/PostForm/PostForm';


function HomePage() {
    const [showPostForm, setShowPostForm] = useState(false);

    useEffect(( ) => {setShowPostForm(false)},[])
    

    return(
        <div className='home-contaier'>
            <Navbar />
            <div className="grid-container">
                <div className="side-menu">side menu</div>

                <div className="form">
                    <PostForm showForm={showPostForm}/>
                </div>

                <div className="feed"><Feed/></div>
                <div className="news">news</div>
            </div>

        </div>
    )
}

export default HomePage;