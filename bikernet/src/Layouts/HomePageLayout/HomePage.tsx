import Navbar from '../../Components/Navbar/Navbar';
import Feed from '../../Components/Feed/Feed';
import './HomePage.css';

function HomePage() {
    return(
        <>
        <Navbar />
        <div className="grid-container">
            <div className="side-menu">side menu</div>
            <div className="form">form</div>
            <div className="feed"><Feed/></div>
            <div className="news">news</div>
        </div>
        </>
    )
}

export default HomePage;