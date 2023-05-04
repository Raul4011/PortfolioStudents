import React from "react";

function Header(props) {
    //console.log("en Header me llega esta prop: ",props);

   


    return (
        <>
           <div>
            <h1>{props.nombre}</h1>

           </div>
        </>
    )
}

export default Header;