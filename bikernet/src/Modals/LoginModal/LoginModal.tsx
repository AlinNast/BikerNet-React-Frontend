import { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginModal.css'

function LoginModal(props:any) {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(password)
    };

    const handleSubmit = async () => {
        console.log("Submit handled");

        const response = await fetch('https://localhost:5001/api/User/login?username='+userName, requestOptions);
        const user = await response.json();
        console.log(user);
       


        if(response.ok){
            alert("login succes");
            window.sessionStorage.setItem("userName", user.userName);
            window.sessionStorage.setItem("userId", user.id);
            console.log(window.sessionStorage.getItem("userId"));
            window.sessionStorage.setItem("userEmail", user.email);
            navigate("/Home");
        }
        else{
            alert("login failed");
        }
    }

    if(!props.show){
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header-login">
                    <h3 className='modal-header-title'>Log In</h3>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder='Your UserName' onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder='Password' className='pass-box' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="modal-footer">
                    <button className="submit" onClick={handleSubmit}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;