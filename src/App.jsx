import { useState } from 'react'
import './App.css'
import Cake from './components/Cake'
import { Provider } from 'react-redux'
import store from './redux/Store.jsx'
import HookCake from './components/HookCake'
import IceCream from './components/IceCream'
import InputCake from './components/InputCake'
import UserContainer from './components/UserContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Cake/>
      <HookCake/>
      <IceCream/>
      <InputCake/>
      <UserContainer/>
    </Provider>
  )
}

export default App
