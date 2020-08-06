import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import HomeTab from '../components/HomeTab';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-screen">
                <TopBar />
                <HomeTab />
            </div>
        )
    }
}

export default HomeScreen;