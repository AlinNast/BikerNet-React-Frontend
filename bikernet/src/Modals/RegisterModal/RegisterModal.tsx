import { useEffect, useState } from 'react';
import './RegisterModal.css'

function RegisterModal(props:any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: name, email:email, userName: username, password: password})
    };

    const handleSubmit = async () => {
        console.log("Submit handled");

        console.log(requestOptions);

        const response = await fetch('https://localhost:5001/api/User', requestOptions);
        console.log(response);
        const data = await response.json();
        console.log(data);
    }
    

    if(!props.show){
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>register</h3>
                </div>
                <div className="modal-body">
                    <form>
                        <input type="text" placeholder='Your Name' onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" placeholder='Your UserName' onChange={(e) => setUsername(e.target.value)}/>
                        <h5>* This will be displayed on your profile</h5>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" placeholder='Password' onChange={(e) => setCheckPassword(e.target.value)}/>


                    </form>
                </div>
                <div className="modal-footer">
                    <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal;