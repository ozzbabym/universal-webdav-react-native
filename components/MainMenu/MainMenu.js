import axios from 'axios';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native'

let url = 'http://localhost:3000/api' //'https://webdav-server.herokuapp.com/api'  есть запусти локально сервер, либо моим на хероку

export default function MainMenu({setAuth, dispatch}) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [webdav, setWebdav] = React.useState('https://webdav.cloud.mail.ru')
  
  
  const click = async() => {
    const response = await axios.post(url ,{email, password, webdav}).
      catch((error)=>console.log(error))
    if(response){
      setAuth(false)
      dispatch({type: 'SET_DATA', payload: response.data})
    }else{
      setAuth(true)
    }
  }
  
   

  return (
    <MyView>
        <Text style={{marginBottom: 50, fontSize: 20, width: 200}}>Подключение к сетевому диску по webdav</Text>
        <MyInput placeholder='Enter your webdav' onChangeText={(e) => setWebdav(e)} value={webdav}/>
        <MyInput placeholder='Enter your account' onChangeText={(e) => setEmail(e)} value={email}/>
        <MyInput placeholder='Enter your password' onChangeText={(e) => setPassword(e)} value={password}/>
        <MyButton onPress={click}><Text style={{color: "white"}}>Вход</Text></MyButton>
    </MyView>
  );
}

const MyInput = styled.TextInput`
  border: 1px solid black;
  margin: 10px 0px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
`
const MyButton = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100px;
  height: 30px;
  text-align: center;
  background: #6495ED;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const MyView = styled.View`
    
    margin-top: 100px;
    justify-content: center;
    align-items: center;
`

