import React from "react";

 let days = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];
 let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 let morningevening = null;

export default function FormattedDate(props) {
   
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let hour = props.date.getHours();
    let min = props.date.getMinutes();

     if (hour<10) {
        hour = `0${hour}`;
        morningevening = "am";
    } else if (hour >12) {
        hour = hour-12;
        morningevening = "pm";
    } else {
        morningevening = "am";
    }

    if (min<10) {
        min = `0${min}`
    }

    return(<div>{day}, {month} {date} at {hour}:{min} {morningevening}</div>);
}