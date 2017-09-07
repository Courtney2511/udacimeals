import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

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

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(addRecipe(data)),
  }
}

function mapStateToProps({ calendar, food }) {
  // map the calendar object to an array, React needs arrays to map into a grid, redux likes the object data shape
  const dayOrder =  ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = food[calendar[day][meal]]
          ? calendar[day][meal]
          : null

      return meals
      }, {})
    }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
