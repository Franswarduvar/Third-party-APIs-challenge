var textValue9 = localStorage.getItem("hr-9");
var textValue10 = localStorage.getItem("hr-10");
var textValue11 = localStorage.getItem("hr-11");
var textValue12 = localStorage.getItem("hr-12");
var textValue1 = localStorage.getItem("hr-1");
var textValue2 = localStorage.getItem("hr-2");
var textValue3 = localStorage.getItem("hr-3");
var textValue4 = localStorage.getItem("hr-4");
var textValue5 = localStorage.getItem("hr-5");

var textArea9 = $("#hr-9");
var textArea10 = $("#hr-10");
var textArea11 = $("#hr-11");
var textArea12 = $("#hr-12");
var textArea1 = $("#hr-1");
var textArea2 = $("#hr-2");
var textArea3 = $("#hr-3");
var textArea4 = $("#hr-4");
var textArea5 = $("#hr-5");

textArea9.val(textValue9);
textArea10.val(textValue10);
textArea11.val(textValue11);
textArea12.val(textValue12);
textArea1.val(textValue1);
textArea2.val(textValue2);
textArea3.val(textValue3);
textArea4.val(textValue4);
textArea5.val(textValue5);


var holdDate =moment().format("dddd, MMMM, YYYY");

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
})


// $(document).ready(function () {
//     $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
//     $(".saveBtn").on("click",function (){
//         console.log(this);
//         var text = $(this).siblings(".description").val();
//         var time = $(this).parent().attr("id");
//         localStorage.setItem(time, text);
//     })
//     $("#hour9 .description").val(localStorage.getItem("hour9"));
//     $("#hour10 .description").val(localStorage.getItem("hour10"));
//     $("#hour11 .description").val(localStorage.getItem("hour11"));
//     $("#hour12 .description").val(localStorage.getItem("hour12"));
//     $("#hour13 .description").val(localStorage.getItem("hour13"));
//     $("#hour14 .description").val(localStorage.getItem("hour14"));
//     $("#hour15 .description").val(localStorage.getItem("hour15"));
//     $("#hour16 .description").val(localStorage.getItem("hour16"));
//     $("#hour17 .description").val(localStorage.getItem("hour17"));
    
//     function hourFollower() {
//         var currentHour = moment().hour();
//         $(".time-block").each(function () {
//             var blockHour = parseInt($(this).attr("id").split("hour")[1]);
//             console.log(blockHour, currentHour);

//             if(blockHour < currentHour){
//                 $(this).removeClass("past");
//                 $(this).addClass("present");
//                 $(this).removeClass("future");
//             } else {
//                 $(this).removeClass("past");
//                 $(this).removeClass("present");
//                 $(this).adddClass("future");
//             }
//         })
//     }
//     hourFollower();
// })