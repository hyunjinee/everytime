import React from "react"
import { withRouter, Route } from "react-router"
import BoardView from "../components/Board/BoardView"

function Board({ match }) {
  return (
    <div>
      <Route exact path={match.path} component={BoardView} />
      <Route path={`${match.path}/:id`} />
    </div>
  )
}

export default Board
