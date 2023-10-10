  
var UserData ;

 fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
    .then((UserData) =>{
 console.log(UserData);
 createTable(UserData);
})

function createTable(UserData) {
    var table = document.getElementById("DataTable").getElementsByTagName('tbody')[0];

    for (var i = 0; i < UserData.length; i++) {
        var row = table.insertRow(i);

        var userIdCell = row.insertCell(0);
        userIdCell.innerHTML = UserData[i].userId;

        var idCell = row.insertCell(1);
        idCell.innerHTML = UserData[i].id;

        var titleCell = row.insertCell(2);
        titleCell.innerHTML = UserData[i].title;

        var completedCell = row.insertCell(3);
        completedCell.innerHTML = UserData[i].completed ? "True" : "False";
    }
}



 function filtertable(){
     var input, filter, table , tr, td, i, j, textValue;
     input = document.getElementById('InputFilter');
     filter = input.value.toUpperCase();
     table = document.getElementById('DataTable');
     tr = document.getElementsByTagName('tr');

     for (let i = 0; i < tr.length; i++) {
         tr[i].style.display = "none" ;

         td = tr[i].getElementsByTagName('td');

     for (let j = 0; j < td.length; j++) {
        textValue = td[j].textContent || td[j].innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "" ;
           break;
           }
        
     }
        
     }
 }

 createTable (UserData);

document.getElementById("InputFilter").addEventListener("keyup", filtertable);
