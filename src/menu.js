import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';
import Props from './pages/Props';
import logo from './logo.svg';
import State from './pages/State';
import Lifecycle from './pages/Lifecycle';
import Events from './pages/Events';
import Keys from './pages/Keys';
import Refs from './pages/Refs';
import Async from './pages/Async';
import VirtualDOM from './pages/VirtualDOM';
import ReactFragment from './pages/ReactFragment';
import ReactMemo from './pages/ReactMemo';
import UseEffect from './pages/UseEffect';
import PageRouter from './pages/PageRouter';
import Context from './pages/Context';
import WorkWithForm from './pages/WorkWithForm';


function Menu(){

const[isVisible, setState] = useState(false)

function Dropdown () {
    setState(!isVisible)
}

return (
    <header>
        <Router>
                <div className="App-header">
                    <img src={logo} className="App-header-logo" alt="logo" />
                    <nav>
                        <ul className='App-header-menu'>
                            <li><Link to='/'>Номе</Link></li>
                            <li><Link to='/Components'>Components</Link></li>
                            <li><Link to='/Props'>Props</Link></li>
                            <li><Link to='/State'>State</Link></li>
                            <li><Link to='/Lifecycle'>Lifecycle</Link></li>
                            <li><Link to='/Events'>Events</Link></li>
                            <li><Link to='/Keys'>Keys</Link></li>
                            <li><Link to='/Refs'>Refs</Link></li>
                            <li><Link to='/Async'>Async</Link></li>
                            <li><Link to='/VirtualDOM'>Virtual DOM</Link></li>
                            <li><Link to='/ReactFragment'>React.Fragment</Link></li>
                            <li><Link to='/ReactMemo'>React.Memo</Link></li>
                            <li className='App-header-menu-burger' onClick={() => Dropdown()}>...</li>
                            
                            {isVisible ? 
                            <div className='Burger'>
                                <div className='Burger-menu'>
                                    <nav>
                                        <ul>
                                            <li onClick={() => Dropdown()}><Link to='/UseEffect'>UseEffect</Link></li>
                                            <li onClick={() => Dropdown()}><Link to='/PageRouter'>Router</Link></li>
                                            <li onClick={() => Dropdown()}><Link to='/Context'>Context</Link></li>
                                            <li onClick={() => Dropdown()}><Link to='/WorkWithForm'>Work with form</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            : <div></div>}
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/Components' element={<Components />}/>
                    <Route exact path='/Props' element={<Props />}/>
                    <Route exact path='/State' element={<State />}/>
                    <Route exact path='/Lifecycle' element={<Lifecycle />}/>
                    <Route exact path='/Events' element={<Events />}/>
                    <Route exact path='/Keys' element={<Keys />}/>
                    <Route exact path='/Refs' element={<Refs />}/>
                    <Route exact path='/Async' element={<Async />}/>
                    <Route exact path='/VirtualDOM' element={<VirtualDOM />}/>
                    <Route exact path='/ReactFragment' element={<ReactFragment />}/>
                    <Route exact path='/ReactMemo' element={<ReactMemo />}/>
                    <Route exact path='/UseEffect' element={<UseEffect />}/>
                    <Route exact path='/PageRouter' element={<PageRouter />}/>
                    <Route exact path='/Context' element={<Context />}/>
                    <Route exact path='/WorkWithForm' element={<WorkWithForm />}/>
                </Routes>
        </Router>
    </header>
    
);
};

export default Menu;