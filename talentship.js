let UserData = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "Harishankar",
        "completed": false
    }
];


function createTable(UserData) {
    let table = document.getElementById("DataTable").getElementsByTagName('tbody')[0];

    for (let i = 0; i < UserData.length; i++) {
        let row = table.insertRow(i);

        let userIdCell = row.insertCell(0);
        userIdCell.innerHTML = UserData[i].userId;

        let idCell = row.insertCell(1);
        idCell.innerHTML = UserData[i].id;

        let titleCell = row.insertCell(2);
        titleCell.innerHTML = UserData[i].title;

        let completedCell = row.insertCell(3);
        completedCell.innerHTML = UserData[i].completed ? "True" : "False";
    }
}

createTable(UserData);