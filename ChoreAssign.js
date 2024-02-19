let choreId = 1; 

function addChore() {
    const choreName = document.getElementById("choreName").value;
    const assignedBy = document.getElementById("assignedBy").value;
    const choreStatus = document.getElementById("choreStatus").value;
    const dueDate = document.getElementById("dueDate").value;

    if (!choreName || !assignedBy || !choreStatus || !dueDate) {
        alert("All fields are required");
        return;
    }

    const validStatusValues = ["Incomplete", "Pending", "Completed"];
    if (!validStatusValues.includes(choreStatus)) {
        alert("Invalid Chore Status");
        return;
    }

    const tableBody = document.querySelector("#choreTable tbody");
    const newRow = tableBody.insertRow();
    
    newRow.innerHTML = `
        <td>${choreId}</td>
        <td>${choreName}</td>
        <td>${choreStatus}</td>
        <td>
            <button onclick="editChore(${choreId})">Edit</button>
            <button onclick="deleteChore(${choreId})">Delete</button>
        </td>
    `;

    choreId++;
}

function editChore(id) {
    alert(`Edit chore with ID ${id}`);
}

function deleteChore(id) {

    alert(`Delete chore with ID ${id}`);
}
