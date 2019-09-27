import React from 'react';
//components
import ButtonEvent from '../../components/buttonEvent';
//images
import burnIcon from '../../assets/burn.png';
import drowIcon from '../../assets/drowning.png';
import smallCutIcon from '../../assets/knife.png';
import largeCutIcon from '../../assets/axe.png';
import salusIcon from '../../assets/salus.png';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    icon: burnIcon,
                    name: 'Queimadura',
                    steps: [
                        {
                            title: 'Passo 1',
                            description: 'Exponha a área queimada em água corrente por 5 minutos.',
                        },
                        {
                            title: 'Passo 2',
                            description: 'Seque a área cuidadosamente.',
                        },
                        {
                            title: 'Passo 3',
                            description: 'Tome analgésicos, se necessário antiinflamatórios.',
                        },
                        {
                            title: 'Mitos',
                            description: 'Nunca use: pasta de dente, manteiga, pomada... isso irá agravar o quadro.',
                        },
                    ],
                },
                {
                    icon: drowIcon,
                    name: 'Afogamento',
                    steps: [
                        {
                            title: 'Passo 1',
                            description: 'Chame o resgate imediatamente.',
                        },
                        {
                            title: 'Passo 2',
                            description: 'Ajoele-se ao lado da pessoa',
                        },
                        {
                            title: 'Passo 3',
                            description: 'Com o peso do seu corpo faça 30 compressões firmes, no centro da linha que liga os dois mamilos.',
                        },
                        {
                            title: 'Passo 4',
                            description: 'Faça respiração boca a boca alternando com a massagem cardíaca até a chegada do resgate.',
                        },
                    ],
                },
                {
                    icon: smallCutIcon,
                    name: 'Corte superficial',
                    steps: [
                        {
                            title: 'Passo 1',
                            description: 'Lave com agua corrente',
                        },
                        {
                            title: 'Passo 2',
                            description: 'Pressione com um pano ou gaze',
                        },
                        {
                            title: 'Passo 3',
                            description: 'Procure atendimento médico para verificar a necessidade de pontos',
                        },
                    ],
                },
                {
                    icon: largeCutIcon,
                    name: 'Corte profudo',
                    steps: [
                        {
                            title: 'Passo 1',
                            description: 'Não desmaie',
                        },
                        {
                            title: 'Passo 2',
                            description: 'De boa sorte',
                        },
                        {
                            title: 'Passo 3',
                            description: 'Fuja louco',
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <View >
                <View style={styles.imageView}>
                    <Image
                        source={salusIcon}
                        style={styles.imageIcon}
                    />
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Salus - Primeiros socorros! 2019</Text>
                    <Text style={styles.sectionDescription}>
                        Olá, selecione o <Text style={styles.highlight}>Problema</Text> desejado
                </Text>
                    <View style={styles.buttonView}>
                        {
                            this.state.events.map(event => {
                                console.log(event.steps)
                                return (
                                    <ButtonEvent
                                        key={event.name}
                                        icon={event.icon}
                                        name={event.name}
                                        problemSelected={() => this.props.navigation.navigate(
                                            'stepByStep',

                                            { steps: event.steps },

                                        )}
                                    />
                                );
                            })
                        }
                    </View>
                </View >
            </View >
        );
    }
};

const styles = StyleSheet.create({
    imageView: {
        width: '100%',
        paddingVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: '#137D7D',
    },
    imageIcon: {
        width: 130,
        height: 50,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'gray',
        marginBottom: 25,
    },
    highlight: {
        fontWeight: 'bold',
    },
    buttonView: {
        justifyContent: 'center',
        alignContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
