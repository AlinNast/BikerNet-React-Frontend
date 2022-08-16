import { useState } from 'react';
import './RegisterModal.css'

function RegisterModal(props:any) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const handleSubmit = () => {
        console.log("Submit handled");
        console.log(name);
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