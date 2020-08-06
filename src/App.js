import React, { useState, useEffect } from 'react';
import './css/styles.css';
import TopBar from './components/TopBar';
import Alert from './components/Alert';
import HomeTab from './components/HomeTab';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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

                <Switch>
                    <Route path="/" exact component={HomeTab} />
                    <Route
                        path="/contact"
                        render={(props) =>
                            <Contact {...props} sendMessage={sendMessage} status={status} />
                        }
                    />
                    <Route path="/portfolio" component={Portfolio} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;