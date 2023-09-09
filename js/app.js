function searchCar() {

    const input = document.getElementById('filter').value.toUpperCase();

    const cardContainer = document.getElementById('card-lists');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('box');
    console.log(cards)


    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body h3.card-title");
        console.log(title)

        if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}

//"--------------------------------------------------------------------------"//
   // Get the modal
   const modal = document.getElementById("rentModal");

   // Get the buttons with the class name "btn"
   const rentButtons = document.querySelectorAll(".btn");

   // Get the <span> element that closes the modal
   const closeModal = document.getElementsByClassName("close")[0];

   // Get the element to display the car name in the modal
   const carNameInModal = document.getElementById("carNameInModal");

   // When the user clicks on the button with class "btn", open the modal
   rentButtons.forEach(button => {
      button.addEventListener("click", () => {
         modal.style.display = "block";

         // Get the car name from the data attribute
         const carName = button.getAttribute("data-car-name");

         // Display the car name in the modal
         carNameInModal.textContent = carName;
      });
   });

   // When the user clicks on <span> (x), close the modal
   closeModal.addEventListener("click", () => {
      modal.style.display = "none";
   });

   // When the user clicks anywhere outside of the modal, close it
   window.addEventListener("click", event => {
      if (event.target === modal) {
         modal.style.display = "none";
      }
   });

   // Handle form submission
   const rentForm = document.getElementById("rentForm");
   rentForm.addEventListener("submit", event => {
      event.preventDefault();
      
      // Collect form data
      const Name = document.getElementById("First-Name").value;
      const location = document.getElementById("location").value;
      const pickupDate = document.getElementById("pickupDate").value;
      const returnDate = document.getElementById("returnDate").value;
      const paymentMethod = document.getElementById("paymentMethod").value;

      // You can now use this data to show it on the modal or perform further actions.
      // For example:
      const confirmationMessage = `Thanks ${Name}} You are renting the car at ${location} from ${pickupDate} to ${returnDate}.
      Payment method: ${paymentMethod}`;
      
      // Display the confirmation message
      alert(confirmationMessage);

      // Close the modal
      modal.style.display = "none";
   });

  //-----------------------------//

