import React, { useState, useReducer } from 'react';
import { View} from 'react-native';
import MainMenu from './components/MainMenu/MainMenu'
import ListFile from './components/ListFile/ListFile'
import reducer from './reducer/reducer'

export default function App() {
  const [auth, setAuth] = useState(true)
  const [state, dispatch] = useReducer(reducer, {
    data: []
  })
  
  return (
    <>{auth ?
    <View>
      <MainMenu setAuth={setAuth} dispatch = {dispatch}/>
    </View>
    :
    <View>
      <ListFile state={state}/>
    </View>
    }
    </>
  );
}

