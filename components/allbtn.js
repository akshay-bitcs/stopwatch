import React, { Component } from 'react'
import Lapbtn from './lapbtn'
import Startbtn from './startbtn'
import Resetbtn from './resetbtn'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

class Allbtns extends Component {

    constructor() {
        super();
        this.timeBegan = null;
        this.timeStopped = null;
        this.timeDuration = 0;
        this.isStarted = null;
    }

    // componentWillUnmount() {
    //     this.handlePause();
    // }

    setTimer = () => {
        let currentTime = Date.now();
        let timeElapsed = currentTime - this.timeBegan - this.timeDuration
        let centiseconds = ("0" + (Math.floor(timeElapsed / 10) % 100)).slice(-2)
        let seconds = ("0" + (Math.floor(timeElapsed / 1000) % 60)).slice(-2)
        let minutes = ("0" + (Math.floor(timeElapsed / 60000) % 60)).slice(-2)
        let hours = ("0" + Math.floor(timeElapsed / 3600000)).slice(-2)
        let timer = `${hours}:${minutes}:${seconds}:${centiseconds}`
        this.props.updateState({ key: 'timer', value: timer })
    }

    handleStart = () => {
        this.props.updateState({ key: 'isTimerStarted', value: true })
        if (this.timeBegan === null) {
            this.timeBegan = Date.now()
        }
        if (this.timeStopped !== null) {
            this.timeDuration += Date.now() - this.timeStopped
        }
        this.isStarted = setInterval(this.setTimer, 10);
    }

    handlePause = () => {
        this.props.updateState({ key: 'isTimerStarted', value: false })
        this.props.updateState({ key: 'initial', value: false })
        this.timeStopped = Date.now();
        clearInterval(this.isStarted);
    }

    handleReset = () => {
        this.props.updateState({ key: 'initial', value: true })
        this.timeBegan = null;
        this.timeStopped = null;
        this.timeDuration = 0;
        this.isStarted = null;
        this.props.updateState({ key: 'timer', value: "00:00:00:00" });
        this.props.updateState({ key: 'lap', value: [] });
    }

    handleLap = () => {
        const { lap, timer } = this.props;
        this.props.updateState({ key: 'lap', value: [...lap, timer] });
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, }}>
                <Startbtn start={this.handleStart} pause={this.handlePause} />
                <Lapbtn lapMe={this.handleLap} />
                <Resetbtn reset={this.handleReset} />
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (test) => { dispatch({ type: 'UPDATE_STATE', payload: test }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Allbtns)