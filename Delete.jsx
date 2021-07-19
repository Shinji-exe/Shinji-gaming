import React from "react"

function Delete(props){
return(
<div key ={props.delete._id}>
    <h3>{props.delete.update}</h3>
    <p><em>{props.delete.author}</em></p>
    
</div>
)
}

export default Delete