import React from "react";
import "./TripDetails.css";

const TripDetails = ({ trip, onRemove }) => {
  if (!trip) return null;

  const {
    from,
    to,
    departDate,
    arriveDate,
    departTime,
    arriveTime,
    daysAway,
    weather,
  } = trip;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "My Trip Details",
          text: `I'm going from ${from} to ${to} on ${departDate} at ${departTime}. It will be ${daysAway} days away with weather expected to be ${weather.temp} °C, mostly ${weather.description}.`,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        alert(
          "Your browser doesn't support sharing. You can manually share the trip details."
        );
      }
    } catch (error) {
      console.error("Error sharing trip details:", error);
    }
  };

  return (
    <div className="trip-details">
      <img src="/Logo1.png" alt="City" />
      <p>
        <strong>Boarding from:</strong> {from}
      </p>
      <p>
        <strong>Your trip to:</strong> {to}
      </p>
      <p>
        <strong>Departure Date:</strong> {departDate}
      </p>
      <p>
        <strong>Departure Time:</strong> {departTime}
      </p>
      <p>
        <strong>Arrival Date:</strong> {arriveDate}
      </p>
      <p>
        <strong>Arrival Time:</strong> {arriveTime}
      </p>
      <p>
        <strong>Days away:</strong> {daysAway}
      </p>
      <p>
        <strong>Expect weather to be:</strong> {weather.temp} °C, mostly{" "}
        {weather.description}
      </p>
      <button onClick={handleShare}>Share</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default TripDetails;
