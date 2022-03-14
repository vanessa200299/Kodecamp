const cook= (water, four, eggs) => {
  console.log('El pastel se realizo con: ${water} de agua, ${flour} de harina, ${eggs} de huevo'
  );
};

document.getElementById

const builCard = (title, description, photoUrl, buttonColor, buttonText) => {
  let cardContainer = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardBody = documente.cardImage("div");
  let CardTitle = documente.createElement("h5");
  let CardText = documente.createElement("p");
  let cardButton = documente.createElement("a");

  //Add clases to elements
  cardContainer.classList.add("card", "custom-card", "m-2")
  cardImage.classList.add("card-img-top", "custom-card")
  cardBody.classList.add("card-body")
  cardTitle.classList.add("card-title")
  cardButton.classList.add("btn", `btn-${buttonColor}`) //Template strisng

  //Add values to  the element
  cardImage.src = photoUrl;
  cardTitle.innerText = title;
  CardText.innerText = description;
  cardButton.innerText = buttonText;
  cardButton.href = "#";

  //build structure
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardBody);

  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardText);
  cardContainer.appendChild(cardButton);
  
  return cardContainer;
}