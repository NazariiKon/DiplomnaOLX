import React from "react";
interface topMenu {
    width?: string;
    height?: string;
    margin?: string;
    opacity?: string;
    children?: React.ReactNode
}
const Top = ({ width, height, children, margin, opacity }: topMenu) => {
    return (
        <div style={{ width, height, opacity: '1', margin: '-4px', border: '4px solid #F0AB3B ' }}>
            {children}
            
        </div>
    );
};
export default Top;


