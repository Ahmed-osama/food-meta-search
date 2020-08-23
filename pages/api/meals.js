export default (req, res) => {
  try {
    const data = [
      {
        id: "1",
        meal_name: "Pizza",
        meal_image: "meals/pizza.jpeg",
        price: 60,
        final_price: 65,
        brand: "uber eats",
        brand_logo: 3,
        meal_description: "chechen bbq + chips ",
        stars: 4,
        reviews_count: 99,
      },
      {
        id: "2",
        meal_name: "Fried chicken",
        meal_image: "meals/friend-checkin.jpeg",
        price: 46,
        final_price: 46,
        brand: "Talabat",
        brand_logo: 1,
        meal_description: "fried chicken + ketchup ",
        stars: 5,
        reviews_count: 891,
      },
      {
        id: "3",
        meal_name: "Beryani",
        meal_image: "meals/beryani.jpeg",
        price: 35,
        final_price: 35,
        brand: "Zomatoo",
        brand_logo: 2,
        meal_description: "rice + lamb meat + spice ",
        stars: 2,
        reviews_count: 389,
      },
      {
        id: "4",
        meal_name: "Kofta",
        meal_image: "meals/egyption-kofta.jpeg",
        price: 65,
        final_price: 75,
        brand: "Zomatoo",
        brand_logo: 4,
        meal_description: "meat + bread + salad",
        stars: 3.9,
        reviews_count: 39,
      },
      {
        id: "5",
        meal_name: "sea food soup",
        meal_image: "meals/sea-food-soup.jpeg",
        price: 100,
        final_price: 100,
        brand: "Deliveroo",
        brand_logo: 5,
        meal_description: "lubster + soup + creame",
        stars: 4.9,
        reviews_count: 893,
      },
    ];
    res.statusCode = 200;
    res.send([...data, ...data, ...data, ...data, ...data]);
  } catch (err) {
    res.statusCode = 500;
    res.send(err.message);
  }
};
