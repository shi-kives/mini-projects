const toggle = document.getElementById("priceToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
    prices.forEach(price =>{
        if(toggle.checked){
            price.textContent=`₹${price.dataset.yearly}`
        }
        else{
            price.textContent=`₹${price.dataset.monthly}`
        }
    });
});