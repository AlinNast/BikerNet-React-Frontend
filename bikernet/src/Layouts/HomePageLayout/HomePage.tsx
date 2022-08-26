import Navbar from '../../Components/Navbar/Navbar';
import Feed from '../../Components/Feed/Feed';
import './HomePage.css';
import PostForm from '../../Components/PostForm/PostForm';

function HomePage() {
    return(
        <div className='home-contaier'>
        <Navbar />
        <div className="grid-container">
            <div className="side-menu">side menu</div>
            <div className="form"><PostForm/></div>
            <div className="feed"><Feed/></div>
            <div className="news">news</div>
        </div>
        </div>
    )
}

export default HomePage;