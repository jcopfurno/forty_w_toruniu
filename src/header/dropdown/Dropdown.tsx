import React, {useState, useEffect, useRef} from 'react';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownContent from './DropdownContent/DropdownContent';
import './Dropdown.css';

type DropdownProps = {
    buttonText: React.ReactNode;
    content: React.ReactNode;
}

const Dropdown= ({buttonText, content}: DropdownProps) => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setOpen(!open);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
            <DropdownButton toggle={toggleDropdown} open={open}>
                {buttonText}
            </DropdownButton>
            <DropdownContent open={open}>
                {content}
            </DropdownContent>
        </div>
    );
}

export default Dropdown;