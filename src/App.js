import React from "react"
import { Router, Route } from "react-router-dom"
// We will create these two pages in a moment
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  )
}