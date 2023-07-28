import promoImg from "../images/promo.png"
import '../App.css';
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();

    return(
        <main>
            <section className="hero-background">
                <div className="hero">
                    <div>
                        <h1 className="headline">Little Lemon</h1>
                        <h2 className="subhead">Chicago</h2>
                        <article className="headertext">
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </article>
                        <button className="reserve" onClick={() => navigate("/reserve")}>Reserve a Table</button>
                    </div>
                    <img className="crop" src={promoImg} alt="tray with food" width="300px"/>
                </div>
            </section>
        </main>
    )
}

export default Main;