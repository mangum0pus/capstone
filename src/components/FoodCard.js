import delivery from "../images/delivery.svg"
import './foodCard.css'

export default function FoodCard({title, description, image, price}) {
  return (
    <div className="foodCard">
        <img src={image} alt="food" className="dishImage" style={{ height:"230px", objectFit: "cover"}}/>
        <div className="cardBody">
            <div className='cardHeader'>
                <p className='cardTitle'>{title}</p>
                <p className='cardPrice'>{price}</p>
            </div>
            <div className='cardText'>{description}</div>
            <div className='cardFooter'>
                <p>Order a delivery </p>
                <img src={delivery} alt='scooter icon' style={{height:"20px", marginLeft:"1.5rem"}}/>
            </div>
        </div>
    </div>
  )
}
