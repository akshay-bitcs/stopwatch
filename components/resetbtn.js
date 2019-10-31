import React, { Component } from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Button} from 'react-native'
//import Reset from '../icons/reset-btn'

export class Resetbtn extends Component {
    render() {
        const {reset} = this.props;
        if(this.props.isTimerStarted === false && this.props.initial=== false){
            return (
                <View style={{width:90}}>
                    <Button color="#a64dff" onPress={reset} title="Reset"/>
                </View>
            )
        }else{
            return (
                <View style={{width:90}}>
                    <Button color="grey" title="Reset"/>
                </View>
            )
        }
        
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps)(Resetbtn)