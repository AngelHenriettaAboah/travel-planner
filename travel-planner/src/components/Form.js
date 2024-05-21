import React, { useState } from "react";
import axios from "axios";
import TripDetails from "./TripDetails";
import "./Form.css";

const Form = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [arriveDate, setArriveDate] = useState("");
  const [departTime, setDepartTime] = useState("");
  const [arriveTime, setArriveTime] = useState("");
  const [trip, setTrip] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const daysAway = Math.ceil(
      (new Date(departDate) - new Date()) / (1000 * 60 * 60 * 24)
    );

    // Fetch weather data
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${to}&units=metric&appid=ee642d4399072c119cc1a792a69d219e`
    );
    const weatherData = weatherResponse.data;
    const weather = {
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
    };

    const newTrip = {
      from,
      to,
      departDate,
      arriveDate,
      departTime,
      arriveTime,
      daysAway,
      weather,
    };
    setTrip(newTrip);
  };

  const handleRemove = () => {
    setTrip(null);
  };

  return (
    <section id="plan-your-trip">
      <h2>Plan your trip</h2>
      <form id="plan-form" onSubmit={handleSubmit}>
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          placeholder="City"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          placeholder="City"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <label htmlFor="departDate">Departing Date</label>
        <input
          type="date"
          id="departDate"
          value={departDate}
          onChange={(e) => setDepartDate(e.target.value)}
          required
        />
        <label htmlFor="departTime">Departing Time</label>
        <input
          type="time"
          id="departTime"
          value={departTime}
          onChange={(e) => setDepartTime(e.target.value)}
          required
        />
        <label htmlFor="arriveDate">Arrival Date</label>
        <input
          type="date"
          id="arriveDate"
          value={arriveDate}
          onChange={(e) => setArriveDate(e.target.value)}
          required
        />
        <label htmlFor="arriveTime">Arrival Time</label>
        <input
          type="time"
          id="arriveTime"
          value={arriveTime}
          onChange={(e) => setArriveTime(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <TripDetails trip={trip} onRemove={handleRemove} />
    </section>
  );
};

export default Form;
