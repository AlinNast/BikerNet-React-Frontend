import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
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
            <h2>Here will be navbar</h2>
            <h2>Hello {userName}</h2>
        </div>
    )
}

export default Navbar;