
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


    // Confirm Validation and push taskToSave
    if(validTask(taskToSave)){
        console.log("Saving Task");
        //save to server
        $.ajax({
            type: "POST",
            url: "http://fsdiapi.azurewebsites.net/api/tasks/",
            data: JSON.stringify(taskToSave),
            contentType: "application/json",
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log(error);  
            }
        })
        $("#btn-notification").fadeIn().delay(1000).fadeOut();  
        loadTask();      
    }

    //display the data received from server
    // displayTask(taskToSave); OLD Task Display
    $(".pending-tasks").empty();
    clearTaskForm();
}

function displayTask(task){
    let syntax = `
    <tr class = "task table-info">
        <td scope = "row">${task.title}</td>
        <td>${task.descript}</td>
        <td>${task.status}</td>
        <td>${task.stDate}</td>
        <td>$ ${task.budget}</td>
    </tr>`;
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

function loadTask(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response){
            console.log(response);
            let data = JSON.parse(response)
            console.log(data);
            for (let i=0;i<data.length;i++){
                let task =data[i];
                if(task.name=="DerrickLapp"){
                    displayTask(task);
                }
            }
        },
        error: function(error){
            console.log(error);
        }
    })
}

function init(){
    //load data
    loadTask();
    //hook events
    $("#btnSave").click(saveTask);

}



window.onload = init;
