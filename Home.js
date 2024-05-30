function calculateCarbonFootprint() {
    const electricity = parseFloat(document.getElementById('electricity').value);
    const transport = parseFloat(document.getElementById('transport').value);
    const waste = parseFloat(document.getElementById('waste').value);
  
    const electricityEmissions = electricity * 0.5; // Example calculation
    const transportEmissions = transport * 0.2; // Example calculation
    const wasteEmissions = waste * 0.1; // Example calculation
  
    const totalEmissions = electricityEmissions + transportEmissions + wasteEmissions;
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your estimated carbon footprint is ${totalEmissions.toFixed(2)} tons CO2e/year.`;
  }
  