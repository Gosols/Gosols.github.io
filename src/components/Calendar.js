import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

export default function CalendarPage() {
  const localizer = momentLocalizer(moment);

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://customerrest.herokuapp.com/gettrainings`)
      .then((response) => response.json())
      .then((data) => {
        let eventData = data;
        //console.log(eventData);

        for (let i = 0; i < eventData.length; i++) {
          eventData[i].date = new Date(eventData[i].date);
          eventData[i].duration = new Date(
            moment(eventData[i].date)
              .add(eventData[i].duration, "minutes")
              .format()
          );
          eventData[
            i
          ].customer = `${eventData[i].customer.firstname}  ${eventData[i].customer.lastname}`;
          eventData[
            i
          ].activity = `${eventData[i].customer} | ${eventData[i].activity}`;

          console.log(eventData[i]);
        }
        setEvents(eventData);
      });
  }, []);

  return (
    <div style={{ maxWidth: "70%", margin: "auto" }}>
      <h1
        style={{
          textAlign: "left",
          marginTop: "10px",
          marginBottom: "10px",
          color: "#3f51b5",
          textShadow: " 2px 2px  lightgrey",
        }}
      >
        Calendar
      </h1>

      <Calendar
        localizer={localizer}
        style={{ height: "700px" }}
        events={events}
        titleAccessor="activity"
        startAccessor="date"
        endAccessor="duration"
      />
    </div>
  );
}
