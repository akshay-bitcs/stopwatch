import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

class Timer extends Component {
    render() {
        return (
            <View style={{ ...styles.boxshadow, backgroundColor: '#330066', padding: 15, borderRadius: 10, minWidth: 370}}>
                <Text style={{ fontSize: 60, color: "#fff" }}>{this.props.timer}</Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

const styles = StyleSheet.create({
    boxshadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    }
})

export default connect(mapStateToProps)(Timer)