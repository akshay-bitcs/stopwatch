import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Timer from './timer';
import Allbtns from './allbtn';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

class MyApp extends Component {
    render() {
        const lapsList = this.props.lap.map((val, i) => {
            return (<View style={{ padding: 10 }} key={i}><Text style={{ fontSize: 20, color: '#330066' }}>Lap {i + 1}: {val}</Text></View>)
        })
        return (
            <LinearGradient colors={['white', '#330066']} start={[0, 0.3]} end={[0, 1]} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View>
                        <Timer />
                        <Allbtns />
                    </View>
                    <ScrollView >
                        <View style={styles.lapList}>
                            {lapsList}
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        alignItems: 'center',
    },
    lapList: {
        backgroundColor: 'white',
        marginTop: 50,
        width: 300,
        alignItems: 'center',
        borderRadius: 30
    }
});

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(MyApp);