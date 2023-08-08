'use client';
import {useState} from "react";
import { LinkIcon } from '@heroicons/react/20/solid'

 // With this, browser has the full code for this component. Mandatory to allow client-side funcionalities.
//Hydration, process of rendering a component in the browser after it has been rendered in the server.
/*//Conclusion:
        Hydration Process:
        The result will be the same HTML elements pre-rendered by the server, but with the addition of 
        event handlers and all JS code associated with that component.
*/

export default function ShareLinkButton(){
    const [clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        navigator.clipboard.writeText(window.location.href);
        setClicked(true)
        setTimeout(()=> setClicked(false), 1500)
    }

    return(
        <button 
        onClick={handleClick}
        className="border flex gap-1 px-2 py-1 rounded text-slate-500 text-sm
         hover:bg-orange-200 hover:text-slate-700 items-center">
            <LinkIcon className="h-4 w-4"/>
            {clicked ? 'Linked Copied!' : 'Share Link!'}
        </button>
    );
}
