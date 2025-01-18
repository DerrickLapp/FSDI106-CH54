
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
    const title = $("#txtTitle").val();
    const descript = $("#txtDescript").val();
    const color = $("#selColor").val();
    const stDate = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();

    
    //build an object
    let taskToSave = new Task (title,descript,color,stDate,status,budget);//Task class is on task.js


    //Confirm Validation and push taskToSave
    // if(validTask(newTask)){
    //     console.log("Saving Task");
    //     $("#btn-notification").fadeIn().delay(1000).fadeOut();
    //     clearTaskForm(); 
        
    // }

    //save to server
    
    //display the data received from server
    displayTask(taskToSave);
}

function displayTask(task){
    let syntax = `
    <h3> Hello, I'm a task</h3>
    <div class = "task">
        <div> 
            <h3 class = "info">Task Title: ${task.title}</h3>
            <p> Description: ${task.descript}</p>
        </div>
        <label class = "status">Status: ${task.status}</label>
        <div class = "date-budget">
            <h3>Start Date: ${task.stDate}</h3>
            <h3>Budget: ${task.budget}</h3>
        </div>
    </div>`;
    $(".pending-tasks").append(syntax);
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

function testFunction(){
    $.ajax({
        type:"get",
        url: "http://fsdiapi.azurewebsites.net",
        success: function(response){
            console.log(respone);
        },
        error: function(error){
            console.log(error);
        },
        
        
    });
}

function init(){
    console.log("init");
    //load data

    //hook events
    $("#btnSave").click(saveTask);


}



window.onload = init;
