import './App.css'
import { Card } from './components/card'
import { CountdownTimer } from './components/countdownTimer'
import { UserList } from './components/userList'
import { WindowSize } from './components/windowSize'

function App() {
  return (
    <div className='main'>
      <Card>
        <CountdownTimer></CountdownTimer>
      </Card>
      <Card>
        <UserList></UserList>
      </Card>
      <Card>
        <WindowSize></WindowSize>
      </Card>
    </div>
  )
}

export default App
