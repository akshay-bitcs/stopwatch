import React, { Component } from 'react'
import {connect} from 'react-redux'
// import Play from '../icons/play-btn'
// import Pause from '../icons/pause-btn'
import { StyleSheet, Text, View, Button} from 'react-native'

class Startbtn extends Component {
    
    render() {
        const {start, pause} = this.props
        if(this.props.isTimerStarted === false){
            return (
                <View style={{width:90}}>
                    <Button color="#a64dff" onPress={start} title="Start"/>
                </View>
            )
        }
        else{
            return (
                <View style={{width:90}}>
                    <Button color="#ff6666" onPress={pause} title="Pause"/>
                </View>
            )
        }
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps)(Startbtn)