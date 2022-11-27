const textValue9 = localStorage.getItem("hr-9");
const textValue10 = localStorage.getItem("hr-10");
const textValue11 = localStorage.getItem("hr-11");
const textValue12 = localStorage.getItem("hr-12");
const textValue1 = localStorage.getItem("hr-1");
const textValue2 = localStorage.getItem("hr-2");
const textValue3 = localStorage.getItem("hr-3");
const textValue4 = localStorage.getItem("hr-4");
const textValue5 = localStorage.getItem("hr-5");

const textArea9 = ("#hr-9");
const textArea10 = ("#hr-10");
const textArea11 = ("#hr-11");
const textArea12 = ("#hr-12");
const textArea1 = ("#hr-1");
const textArea2 = ("#hr-2");
const textArea3 = ("#hr-3");
const textArea4 = ("#hr-4");
const textArea5 = ("#hr-5");

textArea9.val(textValue9);
textArea10.val(textValue10);
textArea11.val(textValue11);
textArea12.val(textValue12);
textArea1.val(textValue1);
textArea2.val(textValue2);
textArea3.val(textValue3);
textArea4.val(textValue4);
textArea5.val(textValue5);


var holdDate =moment().format("dddd, MMMM Do, YYYY");

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

$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var TA = $(this).prev();
    var id = TA.attr("id");
    var Val = TA.val();
    localStorage.setItem(id, Val);
});

// $(".saveBtn").on("click", function(){
//    var userInput = $(this).siblings(".form-control").val().trim();
//     console.log(userInput);
//   var hourSpan = $(this).siblings(".input-group-prepend").text().trim();
//     console.log(hourSpan);
//     localStorage.setItem(hourSpan, JSON.stringify(userInput));

//   })