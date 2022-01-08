import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { auth } from "../_actions/user_actions"

export default function (SpecificComponent, option) {
  function AuthCheck(props) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(auth()).then((response) => {
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/")
          }
        } else {
          if (option == false) {
            props.history.push("/board")
          }
        }
      })
    }, [dispatch, props.history])
    return <SpecificComponent />
  }
  return AuthCheck
}
