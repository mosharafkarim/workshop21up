import React from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
const App = () => {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/Register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/Login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path='/Login'><Login/></Route>
                <Route path='/Register'><Registration/></Route>
            </Switch>
            </>
    )
}

export default App
