import * as React from 'react'
import * as Notifications from 'expo-notifications'
import { View, Text } from 'react-native'
import { Button,Header } from 'react-native-elements'
import styled from 'styled-components'



const Heading = styled(Text)`
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: bold;
`

const Page = styled(View)`
    padding: 40px 30px 0 30px
`

async function getNotificationToken() {
    const { status } = await Notifications.getPermissionsAsync( )
    if (status != 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    if (status != 'granted') {
        alert('failed to get notification token')
        return
    }


    const tokenData = await Notifications.getExpoPushTokenAsync()
    const token = tokenData.data
    console.log({ token })
    return token
    }
    const tokenData = await Notifications.getExpoPushTokenAsync()
    alert(tokenData.data)
}

const BoyScreen: React.FC = () => {
    return (
        <View>
            <Header centerComponent={{ text: 'Cho anh yêu🧑🏻', style: { color: '#fff' } }} />
            <Page>
                <Heading> Chưa có mã số. Chạm để lấy mã</Heading>
                <Button title = "Chạm để lấy mã" onPress={getNotificationToken} />
            </Page>
        </ View>
    )
}
export default BoyScreen