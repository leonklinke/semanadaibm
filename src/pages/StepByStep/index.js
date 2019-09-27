import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class BurnScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
        };
    }
    componentDidMount = () => {
        let steps = this.props.navigation.getParam('steps', []);
        this.setState({ steps });
    }
    render() {
        return (
            <View style={styles.view}>
                <ScrollView>
                    {
                        this.state.steps.map(step => {
                            return (
                                <View
                                    key={step.title}
                                    style={styles.stepView}
                                >
                                    <Text style={styles.step}>{step.title}: </Text>
                                    <Text style={styles.description}>{step.description}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    stepView: {
        backgroundColor: '#137D7D',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    step: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F1F2F2',
    },
    description: {
        fontSize: 15,
        color: '#F1F2F2',
    },
});