import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./form.css"

export default function BookingForm({availableTimes, dispatchDate}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/confirmed");
    };

    const [isDisabled, setIsDisabled] = useState(false)

    const [date, setDate] = useState(new Date().toJSON().slice(0,10));
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("Birthday");

    return(
        <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" required value={date} onChange={(e) => {
                setDate(e.target.value)
                dispatchDate(e.target.value)
                e.target.value.length < 1 ? setIsDisabled(true) : setIsDisabled(false)}} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input value={guests} type="number" min="1" max="10" required id="guests" onChange={(e) => {
                setGuests(e.target.value)
                e.target.value > 10 || e.target.value < 1 ? setIsDisabled(true) : setIsDisabled(false)}}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" disabled={isDisabled} aria-label="On click">Make your reservation</button>
        </form>
    )
}