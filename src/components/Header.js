// import react, { useEffect, useState } from "react";
export default function  Header(props){

    const navigation =["About", "Projects", "Contact"]

    function renderNavigation(){
        return(
            <div clasName="navigation">
                {navigation.map(tab =>
                <li><a
                href= {"#" + tab.toLowerCase()} 
                onClick ={()=>props.setPage(tab)}
                >{tab}</a></li>)}
                
            </div>
        )
    }

    return (
        <>
        {renderNavigation()}
        </>
    )
}