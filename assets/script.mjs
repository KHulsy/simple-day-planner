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

    var hourRow = $("<tr>").attr({
        "id": `${thisHour.hour}`,
        "class": "row"
    });
    $("tbody").append(hourRow);

    
    var hourField = $("<td>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "hour"
    });


    var hourPlan = $("<td>")
        .attr({
            "class": "description"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    if (thisHour.hour < moment().format())


    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<td>")
        .attr({
            "class": "saveBtn"
    });


    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})
