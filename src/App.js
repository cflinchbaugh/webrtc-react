import React, { Component } from 'react';
import './App.css';
import TextArea from './components/TextArea';
import Button from './components/Button';
var Peer = require('simple-peer');

class App extends Component {
    constructor(props) {
        super(props);

        this.initializePeer = this.initializePeer.bind(this);
        this.handleReceiveMessage = this.handleReceiveMessage.bind(this);
        this.handleClickInitiatorButton = this.handleClickInitiatorButton.bind(this);
        this.handleClickNonInitiatorButton = this.handleClickNonInitiatorButton.bind(this);
        this.handleChangeYourId = this.handleChangeYourId.bind(this);
        this.handleChangeOtherId = this.handleChangeOtherId.bind(this);
        this.handleClickConnectButton = this.handleClickConnectButton.bind(this);
        this.handleChangeYourMessage = this.handleChangeYourMessage.bind(this);
        this.handleClickSendButton = this.handleClickSendButton.bind(this);
        
        this.state = {
            yourId: '',
            otherId: '',
            yourMessage: ''
        }
    }

    render() {

        const initiatorButtonData ={
                id: 'initiator',
                label: 'Initiator',
                handleClickButton: this.handleClickInitiatorButton
            },
            nonInitiatorButtonData = {
                id: 'noninitiator',
                label: 'Non Initiator',
                handleClickButton: this.handleClickNonInitiatorButton
            },
            yourIdData = {
                id: 'your-id',
                value: this.state.yourId,
                handleChangeValue: this.handleChangeYourId
            },
            otherIdData = {
                id: 'other-id',
                value: this.state.otherId,
                handleChangeValue: this.handleChangeOtherId
            },
            connectButtonData = {
                id: 'connect',
                label: 'Connect',
                handleClickButton: this.handleClickConnectButton
            },
            yourMessageInputData = {
                id: 'your-message',
                value: this.state.yourMessage,
                handleChangeValue: this.handleChangeYourMessage
            },
            sendMessageButtonData = {
                id: 'send-message',
                label: 'Send',
                handleClickButton: this.handleClickSendButton
            }

        return (
            <div className="App">
                <div>
                    <Button {...initiatorButtonData}/>
                    <Button {...nonInitiatorButtonData}/>
                </div>

                <div>
                    <label>Your Id:</label><br/>
                    <TextArea {...yourIdData} />
                </div>

                <div>
                    <label>Other Id:</label><br/>
                    <TextArea {...otherIdData}/>
                </div>

                <Button {...connectButtonData}/>

                <hr/>

                <div>
                    <label>Other Id:</label><br/>
                    <TextArea {...yourMessageInputData}/>
                </div>
                <Button {...sendMessageButtonData}/>
                
                <pre id="messages"></pre>
            </div>
        );
    }

    handleClickInitiatorButton() {
        this.initializePeer(true)
    }

    handleClickNonInitiatorButton() {
        this.initializePeer(false)
    }

    initializePeer(initiator) {
        this.setState({
            yourId: 'Loading...'
        });

        this.peer = new Peer({
            initiator: initiator,
            trickle: false
        });

        this.peer.on('signal', (data) => {
            const yourId = JSON.stringify(data);
            this.setState({
                yourId: yourId
            });
        });

        this.peer.on('data', this.handleReceiveMessage);
    }

    handleReceiveMessage(data) {
        console.log(data);

        this.setState({
            yourMessage: data
        });
    }

    handleChangeYourId(value) {
        this.setState({
            yourId: value
        });
    }

    handleChangeOtherId(value) {
        this.setState({
            otherId: value
        });
    }

    handleClickConnectButton() {
        this.peer.signal(this.state.otherId);
    }

    handleChangeYourMessage(value) {
        this.setState({
            yourMessage: value
        });
    }

    handleClickSendButton() {
        this.peer.send(this.state.yourMessage);
    }
}

export default App;
