import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native'
//import Lap from '../icons/lap-btn'

class Lapbtn extends Component {
    render() {
        if (this.props.isTimerStarted === true) {
            return (
                <View style={{ width: 90 }}>
                    <Button color="#a64dff" onPress={this.props.lapMe} title="Lap" />
                </View>
            )
        }
        else {
            return (
                <View style={{ width: 90 }}>
                    <Button color="grey" title="Lap" />
                </View>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Lapbtn)