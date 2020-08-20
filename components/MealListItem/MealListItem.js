import React, { useEffect, useState } from "react";
const MealListItem = ({ meal_name, price, meal_image }) => {
  return (
    <div>
      <img src={meal_image} alt={meal_name} width="100" height="100" />
      <h5>{meal_name}</h5>
      <strong>{price}</strong>
    </div>
  );
};

export default MealListItem;
