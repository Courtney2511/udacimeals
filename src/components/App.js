import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    console.log('props', this.props)
    return (
      <div>
        Hello World
      </div>
    );
  }
}

function mapStateToProps(calendar) {
  // map the calendar object to an array, React needs arrays to map into a grid, redux likes the object data shape
  const dayOrder =  ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null

      return meals
      }, {})
    }))
  }
}

export default connect(mapStateToProps)(App);
