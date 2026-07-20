import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './SidebarButton.css';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string;
    items: string[];
    open: boolean;
    onClick: () => void;
}

const SidebarButton = ({ title, items, open, onClick }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (items.length === 0) {
            if (title === "Strona Główna") {
                navigate("/forty_w_toruniu/");
            }
            else if (title === "Kontakt") {
                navigate("/forty_w_toruniu/kontakt");
            }
        }
        else {
            onClick();
        }
    }

    return (
        <div onClick={handleClick} className={'sidebar-button ' + (open ? 'button-open' : '')}>
            <p className="sidebar-text"> {title} </p>
            <span className="sidebar-icon"> 
                {items.length > 0 && (open ? <FaChevronUp /> : <FaChevronDown />)}
            </span>
        </div>
    );
}
export default SidebarButton;