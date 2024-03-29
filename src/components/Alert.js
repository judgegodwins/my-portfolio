import React, { useRef } from 'react';

function Alert({ status, name }) {
    const success = status === 'success';
    
    const alertDiv = useRef(null);
    if(success || status === "failure")
        setTimeout(() => {
            alertDiv.current.style.display = 'none'
        }, 5000);

    return (
        <div
            ref={alertDiv}
            className="alert" 
            style={{ 
                background: '#292929',
                display: status !== 'sending' && status !== 'idle'
                    ? "flex"
                    : "none"
            }}
        >
            <p>
                {
                    success
                        ? `Hi ${name.split(' ')[0]}, I've received your message and will get back to you shortly`
                        : "Oops, something went wrong. Try checking your connection"

                }
            </p>
        </div>
    )
}

export default Alert;