import React from 'react'
import  classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id:'m1',
        name: 'Sushi',
        description:'Finest Fish & veggies',
        price:22.99,
    },
    {
        id:'m2',
        name: 'Sushi',
        description:'Finest Fish & veggies',
        price:16.5,
    },
    {
        id:'m3',
        name: 'Sushi',
        description:'Finest Fish & veggies',
        price:12.99,
    },
    {
        id:'m4',
        name: 'Sushi',
        description:'Finest Fish & veggies',
        price:22.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
  )
}

export default AvailableMeals
