// Select buttons
const billButton = document.querySelector(".Bill");
const resetButton = document.querySelector(".Reset");

// Select all table rows
const rows = document.querySelectorAll("table tr");

// Show My Bill
billButton.addEventListener("click", function () {
    let total = 0;
    let bill = "----- YOUR BILL -----\n\n";

    // Skip the first row because it contains headings
    for (let i = 1; i < rows.length; i++) {

        const row = rows[i];

        const productName = row.cells[1].textContent;
        const price = Number(row.cells[2].textContent);

        const purchase = row.cells[3].querySelector("input");
        const quantity = row.cells[4].querySelector("input");

        // Check if product is selected
        if (purchase.checked) {

            const qty = Number(quantity.value);

            if (qty > 0) {
                const amount = price * qty;

                total = total + amount;

                bill += productName + 
                        " x " + qty + 
                        " = ₹" + amount + "\n";
            }
        }
    }

    // Display bill
    if (total === 0) {
        alert("Please select a book and enter quantity.");
    } else {
        bill += "\n--------------------\n";
        bill += "Total Amount = ₹" + total;

        alert(bill);
    }
});


// Reset button
resetButton.addEventListener("click", function () {

    for (let i = 1; i < rows.length; i++) {

        const purchase = rows[i].cells[3].querySelector("input");
        const quantity = rows[i].cells[4].querySelector("input");

        // Uncheck checkbox
        purchase.checked = false;

        // Reset quantity to 0
        quantity.value = 0;
    }
});