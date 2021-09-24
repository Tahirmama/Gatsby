import React from "react";

export default function Biryani({pageContext}){
    console.log(pageContext)
    return(
        <div>
<h2>Name: </h2>
<h3>{pageContext.name}</h3>
<h2>Description: </h2>
<h3>{pageContext.desc}</h3>
<h2>Price: </h2>
<h3>{pageContext.price}</h3>
        </div>
    )
}