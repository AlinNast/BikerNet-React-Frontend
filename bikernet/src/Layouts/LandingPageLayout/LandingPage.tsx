import './LandingPage.css';
import LoginModal from '../../Modals/LoginModal/LoginModal'
import { useState } from 'react';

function LandingPage() {
    const [showLogin, setShowLogin] = useState(false)
    return(
        <div className='main'>
            <div className="container">

                <div className='title'>BikerNet</div>

                <div className="login" onClick={() => {setShowLogin(true)}}>Log In</div>
                <LoginModal show={showLogin} />

                <div className="register">Join the brotherhood</div>

                <div className="end">Grab life by the handlebars</div>
            </div>
            
        </div>
    )
}

export default LandingPage;