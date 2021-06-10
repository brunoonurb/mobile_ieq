import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Image, View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

export default function Login() {

    
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
                    {/* <Modal transparent={true} visible={opemResetPass}
                        animationType='slide' >
                        <TouchableWithoutFeedback onPress={() => this.setState({ opemResetPass: !this.state.opemResetPass })}>
                            <View style={styles.modalHeader} ></View>
                        </TouchableWithoutFeedback>
                        <Animatable.View animation="rubberBand" style={styles.modalContainer}>
                            <View style={styles.resetPass}>
                                <TouchableOpacity onPress={() => this.setState({ opemResetPass: !this.state.opemResetPass })}
                                    style={styles.closeModal}  >
                                    <Text style={{ color: '#FFFFFF', fontSize: 20 }} >
                                        x
                            </Text>
                                </TouchableOpacity>
                                <Text style={{ color: '#FFFFFF', fontSize: 20, marginBottom: 35 }}>
                                    Digite seu seu e-mail</Text>
                                <AuthInput icon='at' placeholder='E-mail' keyboardType='email-address'
                                    value={this.state.email}
                                    style={styles.input}
                                    onChangeText={email => this.setState({ email })} />
                                <TouchableOpacity onPress={this.resetPassword} >
                                    <View style={styles.btResetPass}>
                                        <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 5 }}>
                                            Enviar
                            </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                        <TouchableWithoutFeedback onPress={() => this.setState({ opemResetPass: !this.state.opemResetPass })}>
                            <View style={styles.modalFooter} ></View>
                        </TouchableWithoutFeedback>
                    </Modal> */}
                    {/* <ActivIndicador animating={this.state.activIndicador} /> */}
                    <Image
                        style={{ width: 180, height: 180,marginBottom:3 }}
                        source={{
                            uri: 'https://avatars2.githubusercontent.com/u/61466626?s=400&u=a5c9b1908b4b8cb6698cf3e8d0a5c4c563d2875b&v=4'}}

                    />

                    {/* <Animatable.Text animation="fadeInUpBig" duration={2000} style={styles.title}>Andy</Animatable.Text> */}
                    <Animatable.View animation="swing"
                        style={styles.formContainer}>
                        <Animatable.Text animation="pulse" duration={2000} style={styles.subtitle}>
                            {true ? 'Crie a sua conta' : 'Informe seus dados'}
                        </Animatable.Text>
                        {/* {this.state.stageNew &&
                            <AuthInput icon='user' placeholder='Nome'
                                ani="fadeInUpBig"
                                dur={1500}
                                value={this.state.name}
                                style={styles.input}
                                onChangeText={name => this.setState({ name })} />
                        }
                        {this.state.stageNew &&
                            <AuthInput icon='user' placeholder='Sobrenome'
                                ani="fadeInLeft"
                                dur={1000}
                                value={this.state.surname}
                                style={styles.input}
                                onChangeText={surname => this.setState({ surname })} />
                        } */}
                        {/* <AuthInput icon='at' placeholder='E-mail' keyboardType='email-address'
                            ani="fadeInLeft"
                            dur={1000}
                            value={this.state.email}
                            style={styles.input}
                            onChangeText={email => this.setState({ email })} /> */}
                        {/* <AuthInput icon='lock' placeholder='Senha'
                            ani="fadeInRightBig"
                            dur={1500}
                            value={this.state.password}
                            style={styles.input} secureTextEntry={true}
                            onChangeText={password => this.setState({ password })} />
                        {this.state.stageNew &&
                            <AuthInput icon='asterisk'
                                ani="fadeInRightBig"
                                dur={1500}
                                placeholder='Confirmação de Senha'
                                value={this.state.confirnPassword}
                                style={styles.input} secureTextEntry={true}
                                onChangeText={confirnPassword => this.setState({ confirnPassword })} />
                        } */}
                        <Animatable.View animation="fadeInUpBig" duration={2000}>
                            {/* <TouchableOpacity onPress={this.signinOrSignup}
                                disabled={!validForm}>
                                <View style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]}>
                                    <Text style={styles.textBotton}>
                                        {this.state.stageNew ? 'Registrar' : 'Entrar'}
                                    </Text>
                                </View>
                            </TouchableOpacity> */}
                        </Animatable.View>
                        <Animatable.View animation="lightSpeedIn" duration={1800}>
                            {/* <TouchableOpacity style={styles.touchResetSenha}
                                onPress={() => this.setState({ opemResetPass: !this.state.opemResetPass })}>
                                {!this.state.stageNew &&
                                    <Text style={styles.textResetSenha}>
                                        Recuperar Senha ?
                                </Text>
                                }
                            </TouchableOpacity> */}
                        </Animatable.View>
                    </Animatable.View>
                    <Animatable.View animation="slideInUp" duration={2000}>
                        {/* <TouchableOpacity style={{ padding: 15 }}
                            onPress={() => this.setState({ stageNew: !this.state.stageNew })} >
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                            </Text>
                        </TouchableOpacity> */}
                    </Animatable.View>
                </ScrollView>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',

    },
    contentContainer: {
        paddingTop: Dimensions.get('window').height / 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#8B0000',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        fontSize: 60,
        marginBottom: Dimensions.get('window').height / 12,
    },
    subtitle: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0, 0.3)',
        padding: 20,
        width: '80%',
        borderRadius: 7

    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFfffF'
    },
    button: {
        left:'25%',
        width:'50%',
        backgroundColor: 'rgba(0,128,0,1)',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    textBotton: {
        color: '#FFF',
        fontSize: 20,
    },
    textResetSenha: {
        width: 150,
        alignContent: 'center',
        textAlign: "right",
        paddingEnd: 10,
        marginTop: 10,
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',

    },
    touchResetSenha: {
        width: 156,
        marginTop: 10,
    },
    buttonText: {
        // padding: 5,
        textAlign: "center",
        color: '#0000FF',
        fontSize: 20,
        // backgroundColor: 'rgba(128,128,128, 0.5)',
        alignContent: 'center',
        borderColor: '#0000FF',
        //color: '#FFFFFF',
         borderBottomWidth: 2,
        // borderRadius: 4,
    },
    btResetPass: {
        alignContent: "center",
        width: 150,
        height: 40,
        color: '#ffffff',
        backgroundColor: '#080',
        marginTop: 40,
        alignItems: 'center',
        borderRadius: 7
    },
    resetPass: {
        backgroundColor: 'rgba(0,0,0, 0.9)',
        width: Dimensions.get('window').width - 40,
        marginLeft: 20,
        paddingBottom: 65,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center",
        borderRadius: 7,
        height: 250,
        padding: 15,

    },
    modalHeader: {
        flex: 3,
        backgroundColor: 'rgba(0,0,0, 0.5)',
    },
    modalFooter: {
        flex: 2,
        backgroundColor: 'rgba(0,0,0, 0.5)',
    },
    modalContainer: {
        flex: 4,
        backgroundColor: 'rgba(0,0,0, 0.5)',
    },
    closeModal: {
        width: 10,
        marginLeft: Dimensions.get('window').width / 2 + 118,
        marginTop: 10
    }
})