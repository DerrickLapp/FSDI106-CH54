//Empty Array
let tasks = [];

//build an object
//object constructor
function taskObject(title,descript,color,stDate,status,budget){
    this.title = title;
    this.descript = descript;
    this.color = color;
    this.stDate = stDate;
    this.status = status;
    this.budget = budget;
}
//Validations
function validTask(task){
    let validTitle = true;
    let validDesript = true;
    let validColor = true;
    let validDate = true;
    let validStatus = true;
    let validBudget = true;
    
    // Validation  
    if(task.title == ""){
        validTitle = false;
        $("#txtTitle").css("border","2px solid red");
        $("#titleRequirement").show();
    }else{
        $("#txtTitle").css("border", "1px solid black");
        $("#titleRequirement").hide();
        
    }
    if(task.descript == ""){
        validDesript = false;
        $("#txtDescript").css("border","2px solid red");
        $("#descriptRequirement").show();
    }else{
        $("#txtDescript").css("border", "1px solid black");
        $("#descriptRequirement").hide();
        
    }
    if(task.color == ""){
        validColor = false;
        $("#selColor").css("border","2px solid red");
        $("#colorRequirement").show();
    }else{
        $("#selColor").css("border", "1px solid black");
        $("#colorRequirement").hide();
        
    }
    if(task.stDate == ""){
        validDate = false;
        $("#selDate").css("border","2px solid red");
        $("#dateRequirement").show();
    }else{
        $("#selDate").css("border", "1px solid black");
        $("#dateRequirement").hide();
        
    }
    if(task.status == ""){
        validStatus = false;
        $("#selStatus").css("border","2px solid red");
        $("#statusRequirement").show();
    }else{
        $("#selStatus").css("border", "1px solid black");
        $("#statusRequirement").hide();
        
    }
    if(task.budget == ""){
        validBudget = false;
        $("#numBudget").css("border","2px solid red");
        $("#budgetRequirement").show();
    }else{
        $("#numBudget").css("border", "1px solid black");
        $("#budgetRequirement").hide();
        
    }
    return validTitle && validDesript && validColor && validDate && validStatus && validBudget;
}

//get Task sent into tasks array
function saveTask(){
    // Input fields
    let txtTitle = document.getElementById("txtTitle");
    let txtDescript = document.getElementById("txtDescript");
    let selColor = document.getElementById("selColor");
    let selDate = document.getElementById("selDate");
    let selStatus = document.getElementById("selStatus");
    let numBudget = document.getElementById("numBudget");
    let newTask = new taskObject(txtTitle.value,txtDescript.value,selColor.value,selDate.value,selStatus.value,numBudget.value);
    
    //create the object
    if(validTask(newTask)){
        tasks.push(newTask);
        console.log(tasks);
        console.log("Saving Task");
        $("#btn-notification").fadeIn().delay(1000).fadeOut();
        clearTaskForm(); 
        getTasks();
    }


}

//clear form
function clearTaskForm(){
    $("#txtTitle").val("");
    $("#txtDescript").val("");
    $("#selColor").val("#000000");
    $("#selDate").val("");
    $("#selStatus").val("");
    $("#numBudget").val("");
}
//save to server

//display the data received from server
function getTasks(){
    let result="";

    for(let i=0;i<tasks.length;i++){
        let task = tasks[i];
        result += `
        <tr id="${i}">
            <th scope="row">${i+1}</th>
            <td>${task.title}</td>
            <td>${task.descript}</td>
            <td>${task.color}</td>
            <td>${task.stDate}</td>
            <td>${task.status}</td>
            <td>$ ${task.budget}</td>
        </tr>
    `
    }   
    $("#taskRows").append(result);

}

    
    
    
    


function init(){
    console.log("init");
    //load data

    //hook events
    $("#btnSave").click(saveTask);


}





window.onload = init;
