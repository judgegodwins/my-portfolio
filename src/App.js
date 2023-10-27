import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/styles.css';
import TopBar from './components/TopBar';
import Alert from './components/Alert';
import Container from './components/Container';

function App(props) {
    const [ status, setStatus ] = useState('idle');
    const [ name, setName ] = useState('');

    return (
        <Router>
            <div className="app" style={{ maxWidth: 1600, marginLeft: 'auto', marginRight: 'auto' }}>
                <TopBar />
                <Alert
                    status={status}
                    name={name}
                />
                <Container status={status} setStatus={setStatus} setName={setName} />
            </div>
        </Router>
    );
}

export default App;