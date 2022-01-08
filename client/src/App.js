import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Board from './pages/Board'

export default function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/register" component={Register}/>
          <Route path="/board" component={Board} />
        </Switch>
      </Router>
    </Container>
  )
}

const Container = styled.div`
  margin: 10px auto;
  width: 370px;
`

