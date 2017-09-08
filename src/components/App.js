import React, { Component } from 'react'
import logo from '../logo.svg'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'
import { capitalize } from '../utils/helpers'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

class App extends Component {

  render() {
    const { calendar, remove } = this.props
    const mealOrder = ['breakfast', 'lunch', 'dinner']

    console.log('calendar', this.props.calendar)
    return (
      <div className='container'>
        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>
        <div className='calendar'>
          <div className='days'>
            {calendar.map(({day}) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                          <img src={meals[meal].image} alt={meals[meal].label}/>
                          <button onClick={() => remove({meal, day})}>Clear</button>
                        </div>
                      : <button className='icon-btn'>
                          <CalendarIcon size={30}/>
                        </button>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

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
