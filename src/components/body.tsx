import React from "react";

interface menubody {
    width?: string;
    height?: string;
    margin?: string;
    opacity?: string;
    children?: React.ReactNode
    border?: string;
    outline?: string;
    
}

const body =({ width, height, children, margin, opacity, border,  outline }: menubody)=>{
 return(
        <div >
           

        </div>

 );
};

export default body;