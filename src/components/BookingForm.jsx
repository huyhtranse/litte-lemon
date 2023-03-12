import React, { useEffect, useState } from "react";
import Button from "./Button";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [numberGuests, setNumberGuests] = useState(1);
  const [occasion, setOccasion] = useState();
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  
  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date()));
  }, [])

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  
  const submitAPI = function(e) {
    e.preventDefault();
    return true;
  };

  return (
    <form className="grid max-w-[200px] gap-[10px]" onSubmit={(e) => submitAPI(e)}>
      <label htmlFor="res-date" className="font-semibold">
        Choose date
      </label>
      <input
        className="rounded-lg border-solid border-2 border-green p-1.5"
        type="date"
        id="res-date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <label htmlFor="res-time" className="font-semibold">
        Choose time
      </label>
      <select
        className="rounded-lg border-solid border-2 border-green p-1.5"
        id="res-time"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      >
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests" className="font-semibold">
        Number of guests
      </label>
      <input
        className="rounded-lg border-solid border-2 border-green p-1.5"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setNumberGuests(e.target.value)}
        value={numberGuests}
      />

      <label htmlFor="occasion" className="font-semibold">
        Occasion
      </label>
      <select
        className="rounded-lg border-solid border-2 border-green bg-green text-white p-1.5"
        id="occasion"
        onChange={(e) => setOccasion(e.target.value)}
        value={occasion}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <div className="mt-5 border-t-2 pt-6">
        <Button styles="w-[200px]" type="submit">
          Make a Reservations
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
