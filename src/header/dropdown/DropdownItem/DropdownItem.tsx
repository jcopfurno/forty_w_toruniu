import type { ReactNode } from 'react';
import './DropdownItem.css';

type Props = {
    children?: ReactNode;
    onClick?: () => void;
};

const DropdownItem = ({ children, onClick }: Props) => {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {children}
        </div>
    );
}

export default DropdownItem;