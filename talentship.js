var UserData;

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((userData) => {
        UserData = userData;
        console.log(UserData);
        createTable(UserData);
    });

function createTable(userData) {
    var table = document.getElementById("data-container");

    userData.forEach(item => {
        var row = document.createElement("tr");

        var userIdCell = document.createElement("td");
        userIdCell.textContent = item.userId;

        var idCell = document.createElement("td");
        idCell.textContent = item.id;

        var titleCell = document.createElement("td");
        titleCell.textContent = item.title;

        var completedCell = document.createElement("td");
        completedCell.textContent = item.completed ? "True" : "False";

        row.appendChild(userIdCell);
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(completedCell);

        table.appendChild(row);
    });
}





const dataContainer = document.getElementById("data-container");
const filterInput = document.getElementById("InputFilter");


function filterData(data, filter) {
    const filteredData = data.filter(item => {
        const filterLowerCase = filter.toLowerCase();
        return (
            item.userId.toString().includes(filterLowerCase) ||
            item.id.toString().includes(filterLowerCase) ||
            item.completed.toString().includes(filterLowerCase) ||
            item.title.toLowerCase().includes(filterLowerCase)
        );
    });

    dataContainer.innerHTML = '';

    filteredData.forEach(item => {
        var row = document.createElement("tr");

        var userIdCell = document.createElement("td");
        userIdCell.textContent = item.userId;

        var idCell = document.createElement("td");
        idCell.textContent = item.id;

        var titleCell = document.createElement("td");
        titleCell.textContent = item.title;

        var completedCell = document.createElement("td");
        completedCell.textContent = item.completed ? "True" : "False";

        row.appendChild(userIdCell);
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(completedCell);

        dataContainer.appendChild(row);
    });
}

// Event listener for the filter input
filterInput.addEventListener("input", () => {
    const currentFilter = filterInput.value;
    filterData(UserData, currentFilter);
});

// Initial setup
filterData(UserData, filterInput.value);

