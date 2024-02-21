import React from 'react'
import { Image } from 'react-native'
import { LoginForm } from '../../components/LoginForm'
import { Container, Title } from './style'

export function LoginPage() {
    return (
        <Container>
            <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }}/>
            <Title>LOGIN</Title>
            <LoginForm />
        </Container>
    )
}