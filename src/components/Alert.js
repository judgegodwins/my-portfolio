import React, { useRef } from 'react';

function Alert({ status }) {
    const success = status === 'success'
    const alertDiv = useRef(null);
    if(success || status == "failure")
        setTimeout(() => {
            alertDiv.current.style.display = 'none'
        }, 5000);

    return (
        <div
            ref={alertDiv}
            className="alert" 
            style={{ 
                background: success ? 'rgb(0, 255, 0)' : 'red',
                display: status != 'sending' && status != 'idle'
                    ? "block"
                    : "none"
            }}
        >
            <p>
                {
                    success
                        ? "Hi, I've received your message and will get back to you shortly"
                        : "Oops, something went wrong. Try checking your connection"

                }
            </p>
        </div>
    )
}

export default Alert;