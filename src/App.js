import { Route, Switch } from 'react-router-dom'
import Footer from './Components/Footer'
import './App.css'
import { Routes } from './routes/Routes'
import Sidebar from './Components/Sidebar'

function App() {
    return (
        <div className='App'>
            <div>
                <Sidebar />
            </div>
            <Switch>
                {Routes.map((route, index) => {
                    return (
                        <Route
                            exact={route.exact}
                            key={index}
                            path={route.url}
                            component={route.component}
                        />
                    )
                })}
            </Switch>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App
