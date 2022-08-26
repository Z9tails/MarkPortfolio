// import react, { useEffect, useState } from "react";
export default function  Header(props){

    const navigation =["About", "Projects", "Contact"]

    function renderNavigation(){
        return(
            <div className="navigation">
                <div class ="container columns is-flex-direction-row">
                {navigation.map(tab =>
                <li><a
                href= {"#" + tab.toLowerCase()} 
                onClick ={()=>props.setPage(tab)}
                >{tab}</a></li>)}
               </div> 
            </div>
        )
    }

    return (
        <>
        {renderNavigation()}
        </>
    )
}