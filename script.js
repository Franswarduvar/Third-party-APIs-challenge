

var textValue9 = localStorage.getItem("hr-9");
var textValue10 = localStorage.getItem("hr-10");
var textValue11 = localStorage.getItem("hr-11");
var textValue12 = localStorage.getItem("hr-12");
var textValue1 = localStorage.getItem("hr-1");
var textValue2 = localStorage.getItem("hr-2");
var textValue3 = localStorage.getItem("hr-3");
var textValue4 = localStorage.getItem("hr-4");
var textValue5 = localStorage.getItem("hr-5");

var textArea9 = ("#hr-9");
var textArea10 = ("#hr-10");
var textArea11 = ("#hr-11");
var textArea12 = ("#hr-12");
var textArea1 = ("#hr-1");
var textArea2 = ("#hr-2");
var textArea3 = ("#hr-3");
var textArea4 = ("#hr-4");
var textArea5 = ("#hr-5");

textArea9 = (textValue9);
textArea10 = (textValue10);
textArea11 = (textValue11);
textArea12 = (textValue12);
textArea1 = (textValue1);
textArea2 = (textValue2);
textArea3 = (textValue3);
textArea4 = (textValue4);
textArea5 = (textValue5);


var holdDate = moment().format("dddd, MMMM Do, YYYY");
var userInput;
var hourSpan;
$("#momentDay").text(holdDate);

function time(){
    
var curHour = moment().hours();


$(".block").each(function (){
    var holdHour = parseInt($(this).attr("id"));
    if (holdHour < curHour){
        $(this).addClass("past");
    }

    else if (holdHour === curHour){
        $(this).removeClass("past");
        $(this).addClass("present");
    }

    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})

}

time();

$(".saveBtn").on("click", function(){

    // userInput = $(this).siblings(".form-control").val().trim();
    // console.log(userInput);
    // hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    // console.log(hourSpan);
    // localStorage.setItem(hourSpan, JSON.stringify(userInput));
    var Id = textArea9 + textArea10 + textArea11 + textArea12 + textArea1 + textArea2 + textArea3 + textArea4 + textArea5;

    // var Id = textarea.attr("id");

    // var Value = textarea.val();
    

    localStorage.setItem(Id);

    localStorage.getItem(Id);
    console.log(Id);
});

// $(".saveBtn").on("click", function(){
//    var userInput = $(this).siblings(".form-control").val().trim();
//     console.log(userInput);
//   var hourSpan = $(this).siblings(".input-group-prepend").text().trim();
//     console.log(hourSpan);
//     localStorage.setItem(hourSpan, JSON.stringify(userInput));

//   })