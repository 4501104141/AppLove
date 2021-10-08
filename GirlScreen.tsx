import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import styled from 'styled-components'
import { sendPushNotification } from './service/api'


const Heading = styled(Text)`
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: bold;
`

const Page = styled(View)`
    padding: 40px 30px 0 30px
`

const ButtonContainer = styled(View) `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const SummonBotton = styled(TouchableOpacity)<{ color?: string }>`
    background-color: ${p => p.color || 'red'};
    flex: 48% 0 0;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`   

const SummonButtonText = styled(Text)`
    color: white;
    font-size: 18px;
`

const token = 'ExponentPushToken[qX9B-8EfzHek-I_HUf0jhYZ]'


const GirlScreen: React.FC = () => {
    return (
        <View>
            <Header centerComponent={{ text: 'Cho em yêu👩🏻', style: { color: '#fff' } }} />
            <Page> 
                <View>
                    <Input label="Mã của em" placeholder="Nhập mã số của anh vào đây!" />
                    <Button title ="Xong rồi thì nhấn vào đây nha"/>
                </View>
                <View style={{ marginTop: 30}}>
                    <Heading>Triệu hồi anh yêu</Heading>
                    <ButtonContainer>
                        <SummonBotton color = "#e74c3c" onPress={() => sendPushNotification(token, 'Em đói quá 🥺', 'Qua chở em đi ăn đi')}> 
                            <SummonButtonText> Em đói quá 🥺</SummonButtonText>
                        </SummonBotton>
                        <SummonBotton color = "#2980b9" onPress={() => sendPushNotification(token, 'Em muốn mua 🥺', 'Mua liền cho em')}> 
                            <SummonButtonText> Thèm chà chữa 😋</SummonButtonText>
                        </SummonBotton>
                        <SummonBotton color = "#2ecc71" onPress={() => sendPushNotification(token, 'huhu 🥺', 'miss you')}> 
                            <SummonButtonText> Nhớ anh quá 🤒</SummonButtonText>
                        </SummonBotton>
                        <SummonBotton color = "#f1c40f" onPress={() => sendPushNotification(token, 'Đi đâu mà không bắt máy 🥺', 'Gọi ngay cho em')}> 
                            <SummonButtonText> Gọi em nha 😠</SummonButtonText>
                        </SummonBotton>
                    </ButtonContainer>
                </View>
            </Page>
        </ View>
    )
}
export default GirlScreen