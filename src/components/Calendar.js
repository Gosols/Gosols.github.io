import React from "react";
import {
  Calendar,
  momentLocalizer,
  move,
  Views,
  Navigate,
  components
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

export default function CalendarPage() {
  const localizer = momentLocalizer(moment);

  const [trainingData, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://customerrest.herokuapp.com/gettrainings`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const events = [
    {
      title: "My Event",
      allDay: false,
      start: new Date(2018, 0, 1, 10, 0),
      end: new Date(2018, 0, 1, 14, 0)
    }
  ];

  console.log("LUL: " + Date(moment().format()));

  return (
    <div style={{ height: "700", maxWidth: "70%", margin: "auto" }}>
      <Calendar
        localizer={localizer}
        events={events}
        views={["week", "month"]}
        step={60}
      />
    </div>
  );
}
