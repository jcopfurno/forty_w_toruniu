import './DropdownContent.css';

type Props = {
    children?: React.ReactNode;
    open?: boolean;
};

const DropdownContent = ({ children, open }: Props) => {
    return (
        <div className={"dropdown-content " + (open ? 'content-open' : '')}>
            {children}
        </div>
    );
};

export default DropdownContent;