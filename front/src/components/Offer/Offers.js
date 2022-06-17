import React from "react"
import OfferCard from "./OfferCard"
import food from "../../food.json"
import "./Offers.css"

const Offers = (props) => {
  let cardNumber = 0
  const offersList = food.map((offer) => {
    cardNumber++

    return (
      <OfferCard
        key={cardNumber}
        id={cardNumber}
        name={offer.name}
        image={offer.image}
        price={offer.price}
        description={offer.description}
        quantity={offer.quantity}
        address={offer.address}
        showCart={props.showCart}
      ></OfferCard>
    )
  })
  return <div className="offers">{offersList}</div>
}

export default Offers
