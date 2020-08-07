import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sending: false,
            name: '',
            phone_number: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('props: ', this.props.status);
    }
    componentDidUpdate() {
        console.log('props: ', this.props.status);
    }

    handleChange(e) {
        let { name, value } = e.target;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = this.state
        if(name != '' && email != '' && message != '')
            this.props.sendMessage(name, email, message);
        else
            return;
    }

    render() {
        return (
            <div className="contact-div">
                <form className="leave-message">
                    <h2 style={{ marginBottom: "20px" }}>Leave Me a Message</h2>
                    <div className="short-input-child outside">
                        <label htmlFor="name">Name</label>
                        <div className="is-relative">
                            <input type="text" value={this.state.name} id="name" name="name" onChange={this.handleChange} required/>
                            <span className="focus-border"></span>
                        </div>
                    </div>

                    <div className="short-input">
                        <div className="short-input-child">
                            <label htmlFor="phone_number">Phone Number</label>
                            <div className="is-relative">
                                <input type="text" id="phone_number" value={this.state.phone_number} name="phone_number" onChange={this.handleChange} required />
                                <span className="focus-border"></span>
                            </div>
                        </div>
                        <div className="short-input-child">
                            <label htmlFor="email">Email</label>
                            <div className="is-relative">
                                <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                <span className="focus-border"></span>
                            </div>
                        </div>
                    </div>
                    <div className="short-input-child outside">
                        <label htmlFor="message">Message</label>
                        <div className="is-relative">
                            <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange} required/>
                            <span className="focus-border"></span>
                        </div>
                    </div>
                    <button type="submit" disabled={this.props.status == 'sending' ? true : false} style={{ marginTop: "20px" }} onClick={this.handleSubmit}>
                        {
                            this.props.status == 'sending'?
                                <div className="cover">
                                    <div className="tuner"></div>
                                    <div className="tuner"></div>
                                    <div className="tuner"></div>
                                </div>
                            : 'Send Message'
                        }
                    </button>
                </form>
            </div>
        );
    }
}

export default Contact;