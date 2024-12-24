// Nouveau fichier JS pour gérer le panier d'achat

// Sélectionner les éléments
const plusButtons = Array.from(document.getElementsByClassName("fa-plus-circle"));
const minusButtons = Array.from(document.getElementsByClassName("fa-minus-circle"));
const trashButtons = Array.from(document.getElementsByClassName("fa-trash-alt"));
const heartButtons = Array.from(document.getElementsByClassName("fa-heart"));
const totalDisplay = document.querySelector(".total");

// Gestion des boutons "+"
plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantitySpan = button.nextElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

// Gestion des boutons "-"
minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantitySpan = button.previousElementSibling;
    if (parseInt(quantitySpan.textContent) > 0) {
      quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
      updateTotal();
    }
  });
});

// Fonction pour mettre à jour le total
function updateTotal() {
  let totalPrice = 0;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    const unitPrice = parseInt(
      card.querySelector(".unit-price").textContent.replace(" $", "")
    );
    totalPrice += quantity * unitPrice;
  });

  totalDisplay.textContent = totalPrice.toFixed(2) + " $";
}

// Gestion des boutons "Supprimer"
trashButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.remove();
    updateTotal();
  });
});

// Gestion des boutons "Cœur"
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");
    button.style.color = button.classList.contains("liked") ? "red" : "black";
  });
});
