import "../App.css"
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <article className="confirmation">
        <h1>Booking confirmed!</h1>
        <h2>We're looking forwards to your visit</h2>
        <button onClick={handleClick}>To Hompage</button>
    </article>
  )
}
