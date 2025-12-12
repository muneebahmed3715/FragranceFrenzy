// Function to populate product details and open the modal
function openModal(name, price, description, reviews, quality, weight, returnWarranty, buttonText, buttontext) {
    document.getElementById("productName").innerText = name;
    document.getElementById("productPrice").innerText = price;
    document.getElementById("productDescription").innerText = description;
    document.getElementById("productReviews").innerText = reviews;
    document.getElementById("productQuality").innerText = quality;
    document.getElementById("productWeight").innerText = weight;
    document.getElementById("productReturnWarranty").innerText = returnWarranty;
    document.getElementById("buyNowBtn").innerText = buttonText;
    document.getElementById("Addtocart").innerText = buttontext;

    document.getElementById("productModal").style.display = "block"; // Display the modal
}

// Function to close the modal
function closeModal() {
    document.getElementById("productModal").style.display = "none"; // Hide the modal
}
