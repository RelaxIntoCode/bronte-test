"use client";
import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function BookingsPage() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1>Bookings Page</h1>

      <h4>Dog Booking</h4>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default BookingsPage;
