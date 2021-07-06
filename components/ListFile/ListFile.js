import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styled from 'styled-components/native'
import folder from '../../assets/folder.png'
import file from '../../assets/file.png'
import loader from '../../assets/loader.gif'

export default function ListFile({state}) {
  return (
    <MyView>
      {!state.data
      ?<Image source={loader} style={{width: 50, height: 50}}/>
      :<View>
        <Text>/Главная</Text>
        <View>
          <ScrollView>
            {state.data.map((item)=>{
              return (
              <MyBlockItem key={item.filename}>
                  <Image source={item.type==='directory'?folder:file} style={{width: 50, height: 50}} />
                  <Text style={{marginLeft: 20}}>{item.filename}</Text>
              </MyBlockItem>) 
            })}
            
          </ScrollView>
        </View>
      </View>
      }
    </MyView>
  );
}


const MyView = styled.View`
  margin: 30px 0px 10px 20px;
  
`

const MyBlockItem = styled.View`
  margin: 10px 0px;
  flex-direction:row;
  display: flex;
  align-items: center;
`
