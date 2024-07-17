import React, {useState} from 'react';

function Parts(){
    const [name, setName] = useState("");
    const [quant, setQuant] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuant(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return (<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value = {quant} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quant}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='address'/>
        <p>Comment: {comment}</p>
        <p>Payment: {payment}</p>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>

        
        <p>Shipping: {shipping}</p>
        <label>
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
            Pick Up
        </label>
        
        <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
        </label>

    </div>);
}
export default Parts