import './LoginModal.css'

function LoginModal(props:any) {

    const handleSubmit = () => {
        console.log("Submit handled")
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
                    <h4>form will be put here</h4>
                </div>
                <div className="modal-footer">
                    <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;