import React, {useState, useEffect, useRef} from 'react';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownContent from './DropdownContent/DropdownContent';
import './Dropdown.css';

const Dropdown = ({buttonText, content}) => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef();

    const toggleDropdown = () => {
        setOpen(!open);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <DropdownButton toggle={toggleDropdown} open={open} setOpen={setOpen}>
                {buttonText}
            </DropdownButton>
            <DropdownContent open={open}>
                {content}
            </DropdownContent>
        </div>
    );
}

export default Dropdown;