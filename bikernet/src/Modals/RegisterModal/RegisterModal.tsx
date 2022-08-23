import { useEffect, useState } from 'react';
import './RegisterModal.css'

function RegisterModal(props:any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [checkPassword, setCheckPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('pass-box')

    // fetch stuff
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: name, email:email, userName: username, password: password})
    };

    const handleSubmit = async () => {
        console.log("Submit handled");

        const response = await fetch('https://localhost:5001/api/User', requestOptions);
        console.log(response);

        if(response.ok){
            props.onClose();
            alert("Registration successfull");
        }
    }

    const handleCheckPassword = (e:any) => {
        setCheckPassword(e.target.value);
        setIsCPasswordDirty(true);
    }

    useEffect(() => {
        if (isCPasswordDirty) {
            if (password === checkPassword) {
                setPasswordMatch(true);
                setCPasswordClass('pass-box-true')
            } else {
                setPasswordMatch(false);
                setCPasswordClass('pass-box-false')
            }
        }
    }, [checkPassword, password])
    

    if(!props.show){
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className='modal-header-title'>Register</h3>
                </div>
                <div className="modal-body">
                    <form>
                        <input type="text" placeholder='Your Name' onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" placeholder='Your UserName' onChange={(e) => setUsername(e.target.value)}/>

                        {password.length < 8 ? <h4>* Password has to be 8 characters long</h4> : ""}
                        <input type="password" placeholder='Password' className={"pass-box"} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" placeholder='Confirm Password' className={cPasswordClass} onChange={(e) => handleCheckPassword(e)}/>
                        {isCPasswordDirty && !passwordMatch ? <h4>Password dont match</h4>: ''}


                    </form>
                </div>
                <div className="modal-footer">
                    {password.length >=8 && passwordMatch && name !== '' && email.includes('@') && username !== '' ? 
                    <button className="submit" onClick={handleSubmit} >Submit</button> : ''}
                </div>
            </div>
        </div>
    )
}

export default RegisterModal;