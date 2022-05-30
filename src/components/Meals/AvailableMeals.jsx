import React from "react";
import DUMMY_MEALS from "./dummy-meals";
import styles from "./AvailableMeals.module.css";
import Card from "./../UI/Card";
import MealItem from "./MealItem";

export default function AvailableMeals() {
  // console.log(DUMMY_MEALS);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((elm) => {
            return (
              <MealItem
              id={elm.id}
                key={elm.id}
                name={elm.name}
                desc={elm.description}
                price={elm.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
}
