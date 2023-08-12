import React from "react";
import '../App.css'

export function Product(props){
    return(
        <div className="product">
            <img className="product-photo" src={props.prod_photo} alt="" />
        </div>
    )
}