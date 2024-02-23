import {Image} from 'react-native'
import { Container, Title, Text, Button } from './style'

export function StartPage() {
    return (
        <Container>
            <Image 
                source={require('../../assets/start-page-background.png')} 
                style={{width: 400, height: 400}}    
            />
            <Title>Bem vindo ao iBooks</Title>
            <Text>
                Aproveite a sua chegada com a Leitura de um livro e xicara de café. Um espaço reservado para aproveitar mais de você.
            </Text>
            <Button>
                <Text>Cadastrar</Text>    
            </Button>
            <Button>
                <Text>Login</Text>
            </Button>
        </Container>
    )
}