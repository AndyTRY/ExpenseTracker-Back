document.getElementById("button-upload-expenses").addEventListener('click',uploadExpenses)






function uploadExpenses(){
    let expenses = document.getElementById("expense-file").files[0];  // file from input
    console.log(expenses)
    let req = new XMLHttpRequest();
    let formData = new FormData();

    req.onload = function() {
        console.log(this.responseText); 
    }

    formData.append("expenses", expenses);                                
    req.open("POST", '/upload/expense');
    req.send(formData);

}