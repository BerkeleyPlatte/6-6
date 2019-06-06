function cl(data) {
  console.log(data);
}
cl("working");

fetch("https://www.openfood.org/api/v0/product/5400101059634.json")
  .then(data => data.json())
  .then(food => {
    cl("food", food);
    let foodContainer = document.querySelector("#food-list");
    food.forEach(item => {
      foodContainer.innHTML += `<h2>I like to eat ${item.name}</h2>`;
    });
  });

