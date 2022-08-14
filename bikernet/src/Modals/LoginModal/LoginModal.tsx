import './LoginModal.css'

function LoginModal(props:any) {
    if(!props.show){
        return null;
    }

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Log In</h3>
                </div>
                <div className="modal-body">
                    <h4>form will be put here</h4>
                </div>
                <div className="modal-footer">
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;