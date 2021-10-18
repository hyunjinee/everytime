import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          {/* <Route path="/register" component={}/>
        <Route path="/bo" component={}/> */}
        </Switch>
      </Router>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

export default App;

