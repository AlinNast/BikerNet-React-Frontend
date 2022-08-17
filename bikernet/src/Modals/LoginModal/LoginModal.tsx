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
        console.log(requestOptions);
        console.log(response);

        if(response.ok){
            alert("login succes")
            navigate("/Home");
        }
    }

    if(!props.show){
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Log In</h3>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder='Your UserName' onChange={(e) => setUsername(e.target.value)}/>
                    <h5>* This will be displayed on your profile</h5>
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="modal-footer">
                    <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;