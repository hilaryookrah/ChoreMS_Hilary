
const ongoingChoresData = [
    { name: 'Washing', assignedBy: 'Hila ', dateAssigned: '2025-05-01', dateDue: '2025-01-15', status: 'Pending' },
    { name: 'Ironing', assignedBy: 'Ama ', dateAssigned: '2022-02-01', dateDue: '2026-02-15', status: 'Ongoing' },
];

const completedChoresData = [
    { name: 'Cleaning', assignedBy: 'Kwka ', dateAssigned: '2022-03-01', dateDue: '2022-03-15', status: 'Completed' },
];

function populateTable(tableId, data) {
    const table = document.getElementById(tableId);
    const header = table.createTHead();
    const row = header.insertRow();

    for (const key in data[0]) {
        const th = document.createElement('th');
        th.innerText = key.charAt(0).toUpperCase() + key.slice(1); 
        row.appendChild(th);
    }

    const body = table.createTBody();
    data.forEach(item => {
        const tr = body.insertRow();
        for (const key in item) {
            const cell = tr.insertCell();
            cell.innerText = item[key];
        }
    });
}

function redirectToAssignChore() {
    
    window.location.href = 'ChoreAssign.html';
}


populateTable('ongoingChores', ongoingChoresData);
populateTable('completedChores', completedChoresData);