import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [userName, setUserName] = useState<string |null> ();

    const navigator = useNavigate();

    useEffect(() => {
        if(window.sessionStorage.getItem('userName') !== null){
            setUserName(window.sessionStorage.getItem('userName'))
        }
        else{
            navigator('/');
        }
    })


    return(
        <div className="navbar">
            <h2 className='username'>Hello {userName}</h2>
            
            <Link to="/home" className='home-button'>Home</Link>
            
        </div>
    )
}

export default Navbar;