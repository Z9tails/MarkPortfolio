// import react, { useEffect, useState } from "react";
export default function  Header(props){

    const navigation =["About", "Projects", "Contact"]

    function renderNavigation(){
        return(
            <div className="navigation">
                <div class ="box">
                {navigation.map(tab =>
                <ul> <div class="columns">
                <a
                href= {"#" + tab.toLowerCase()} 
                onClick ={()=>props.setPage(tab)}
                >{tab}</a></div></ul>)}
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