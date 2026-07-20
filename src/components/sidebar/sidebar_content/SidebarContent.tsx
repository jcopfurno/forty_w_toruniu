import './SidebarContent.css';
import SidebarItem from '../sidebar_item/SidebarItem';

type Props = {
    items: string[];
    open?: boolean;
};

const SidebarContent = ({ items, open }: Props) => {
    return (
        <div className={"sidebar-content " + (open ? 'content-open' : 'content-close')}>
            {items.map((item, index) => (
                <SidebarItem key={index} title={item} />
            ))}
        </div>
    );
};

export default SidebarContent;