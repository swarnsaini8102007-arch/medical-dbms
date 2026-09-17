let suppliers = [
    [1, "ABC Pharma", "9876543210"],
    [2, "HealthCare Ltd", "9876501234"]
];

let medicines = [
    [1, "Paracetamol", 50, 1],
    [2, "Amoxicillin", 120, 2],
    [3, "Vitamin C", 80, 1]
];

let distributors = [
    [1, "City Medical Store", "9876541111"],
    [2, "Health Plus", "9876542222"]
];

let inventory = [
    [1, "Paracetamol", 100],
    [2, "Amoxicillin", 50],
    [3, "Vitamin C", 75]
];

let sales = [
    [1, 1, 1, 10],
    [2, 2, 2, 5],
    [3, 3, 1, 15]
];

document.getElementById("supplierCount").innerText = suppliers.length;
document.getElementById("medicineCount").innerText = medicines.length;
document.getElementById("distributorCount").innerText = distributors.length;
document.getElementById("salesCount").innerText = sales.length;

suppliers.forEach(function(item) {
    document.getElementById("supplierTable").innerHTML +=
        "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td>" + item[2] + "</td></tr>";
});

medicines.forEach(function(item) {
    document.getElementById("medicineTable").innerHTML +=
        "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td>₹" + item[2] + "</td><td>" + item[3] + "</td></tr>";
});

distributors.forEach(function(item) {
    document.getElementById("distributorTable").innerHTML +=
        "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td>" + item[2] + "</td></tr>";
});

inventory.forEach(function(item) {
    document.getElementById("inventoryTable").innerHTML +=
        "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td>" + item[2] + "</td></tr>";
});

sales.forEach(function(item) {
    document.getElementById("salesTable").innerHTML +=
        "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td><td>" + item[2] + "</td><td>" + item[3] + "</td></tr>";
});
