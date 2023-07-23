import '../App.css';

const dishes = [
    {
        getImageSrc: () => require( "../images/greek.png"),
        title: "Greek Salad",
        price: "$12.99",
        description:
            "The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crynchy garlic and rosemary croutons.",
    },
    {
        getImageSrc: () => require("../images/schetta.png"),
        title: "Bruchetta",
        price: "$5.99",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        getImageSrc: () => require("../images/lemonPie.jpg"),
        title: "Lemon Dessert",
        price: "$4.99",
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    }
]

export default function Promotions(){
    return(
        <section className="promotion">
            <h1>This weeks specials!</h1>
                <button className="menu">Online Menu</button>
            <article className="dishCard">
                {dishes.map((dish) => (
                    <div key={dish.title} style={{backgroundColor: "#EDEFEE"}}>
                        <img src={dish.getImageSrc()} alt="food" width="220px" style={{ height:"200px", objectFit: "cover"}}/>
                        <p>{dish.title} {dish.price}</p>
                        <p>{dish.description}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}