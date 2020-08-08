import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/styles.css';
import TopBar from './components/TopBar';
import Alert from './components/Alert';
import Container from './components/Container';

function App(props) {
    const [status, setStatus] = useState('idle');
    const sendMessage = (name, email, message) => {
        setStatus('sending');

        fetch('https://judgeportfolio.herokuapp.com/new_message', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(data => data.json())
            .then(res => {
                setStatus('sent');
                if (res.result === 'success') setStatus('success');
                else setStatus('failure')
            })
            .catch(error => setStatus('failure'))
    }

    return (
        <Router>
            <div className="app">
                <TopBar />
                <Alert
                    status={status}
                />
                <Container status={status} sendMessage={sendMessage} />
            </div>
        </Router>
    );
}

export default App;