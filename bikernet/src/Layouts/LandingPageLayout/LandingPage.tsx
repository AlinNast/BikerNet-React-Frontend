import './LandingPage.css';
import LoginModal from '../../Modals/LoginModal/LoginModal'
import { useState } from 'react';
import RegisterModal from '../../Modals/RegisterModal/RegisterModal';

function LandingPage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return(
        <div className='main'>
            <div className="container">

                <div className='title'>BikerNet</div>

                <div className="login" onClick={() => {setShowLogin(true)}}>Log In</div>
                <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />

                <div className="register" onClick={() => {setShowRegister(true)}}>Join the brotherhood</div>
                <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} />

                <div className="end">Grab life by the handlebars</div>
            </div>
            
        </div>
    )
}

export default LandingPage;