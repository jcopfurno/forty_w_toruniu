import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './DropdownButton.css';

type Props = {
    children?: React.ReactNode;
    open: boolean;
    toggle: () => void;
}

const DropdownButton = ({ children, open, toggle }: Props) => {
    return (
        <div onClick={toggle} className={'dropdown-button ' + (open ? 'button-open' : '')}>
            {children} 
            <span className="dropdown-icon"> 
                {open ? <FaChevronUp /> : <FaChevronDown />}
            </span>
        </div>
    );
}
export default DropdownButton;