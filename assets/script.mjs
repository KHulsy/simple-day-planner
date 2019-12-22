import { myDay } from "./calendar.mjs";

// create a loop for the current day by hour
// create place to store data within each hours block
// add functionality to save each hours info to local storage

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM YYYY');
    $("#currentDay").text(currentHeaderDate);
}

getHeaderDate();

myDay.forEach(function(thisHour) {

    var hourRow = $("<div>").attr({
        "id": `${thisHour.hour}`,
        "class": "row"
    });
    $(".container").append(hourRow);

    
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });


    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past"
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }


    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<div>")
        .attr({
            "class": "col-md-1 saveBtn pt-4"
    });


    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})
