console.log("Connected!")

// Fetch values from HTML inputs, store pet age in let as value will change.
function calculateInsurance() {
    const petType = document.getElementById("petType").value;
    let petAge = parseInt(document.getElementById("petAge").value) || 0;
    const coverageLevel = document.getElementById("coverageLevel").value;

    // Base price for pet type
    let basePrice = 10; // Default for cat as first on list
    if (petType === "dog") { // Must match dog
        basePrice = 15;
    } else if (petType === "rabbit") { // Must match rabbit
        basePrice = 5;
    }

    // Price multipliers for coverage, stored in LET as value will change with type of cover, cover operators total match
    let multiplier = 1.5;
    if (coverageLevel === "health") {
        multiplier = 2;
    } else if (coverageLevel === "premium") {
        multiplier = 2.5;
    }

    // Cover increase for age of pet
    const ageCost = petAge * 0.5;

    // Total cost calculated and stored
    const totalCost = basePrice * multiplier + ageCost;

    // Display result in HTML
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Estimated Cost: $${totalCost} per month`;
}