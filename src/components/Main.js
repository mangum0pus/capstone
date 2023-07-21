import promoImg from "../images/promo.png"
import '../App.css';

function Main() {
    return(
        <main>
            <section className="header">
                <div className="banner">
                    <h1 className="headline">Little Lemon</h1>
                    <h2 className="subhead">Chicago</h2>
                    <article className="headertext">
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </article>
                    <button className="reserve">Reserve a Table</button>
                </div>
                <img className="crop" src={promoImg} alt="tray with food" width="300px"/>
            </section>
        </main>
    )
}

export default Main;