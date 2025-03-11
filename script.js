// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Get form elements
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const typeSelect = document.getElementById("type");
    const sizeSelect = document.getElementById("size");
    const toppingsCheckboxes = document.querySelectorAll("input[name='toppings']");
    const orderSummary = document.createElement("div");
    orderSummary.id = "order-summary";
    form.appendChild(orderSummary);

    // Function to update order summary
    function updateOrderSummary() {
        let selectedToppings = Array.from(toppingsCheckboxes)
            .filter(t => t.checked)
            .map(t => t.value)
            .join(", ");
        if (!selectedToppings) selectedToppings = "None";

        orderSummary.innerHTML = `
            <h3>Order Summary</h3>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Phone:</strong> ${phoneInput.value}</p>
            <p><strong>Pizza:</strong> ${typeSelect.options[typeSelect.selectedIndex].text}</p>
            <p><strong>Size:</strong> ${sizeSelect.options[sizeSelect.selectedIndex].text}</p>
            <p><strong>Toppings:</strong> ${selectedToppings}</p>
            <p><strong>Total Price:</strong> $${calculatePrice()}</p>
        `;
    }

    // Attach event listeners for live updates
    [nameInput, emailInput, phoneInput, typeSelect, sizeSelect].forEach(input => {
        input.addEventListener("input", updateOrderSummary);
    });

    toppingsCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateOrderSummary);
    });

    // Initialize order summary on page load
    updateOrderSummary();
});
