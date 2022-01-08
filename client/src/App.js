<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Board from './pages/Board'

export default function App() {
=======
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
>>>>>>> 30090e2d9f264f06c142034a2a9f10ef65e6fd95
  return (
    <Container>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Login}></Route>
          <Route path="/register" component={Register}/>
          <Route path="/board" component={Board} />
=======
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          {/* <Route path="/register" component={}/>
        <Route path="/bo" component={}/> */}
>>>>>>> 30090e2d9f264f06c142034a2a9f10ef65e6fd95
        </Switch>
      </Router>
    </Container>
  )
}

const Container = styled.div`
<<<<<<< HEAD
  margin: 10px auto;
  width: 370px;
`

=======
  width: 100%;
`

export default App;

>>>>>>> 30090e2d9f264f06c142034a2a9f10ef65e6fd95
