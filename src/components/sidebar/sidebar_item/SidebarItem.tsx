import './SidebarItem.css';
import Navigation from "@/utils/Navigation"

type Props = {
    title: string;
};

const SidebarItem = ({ title }: Props) => {
    const goToFort = Navigation();

    return (
        <button 
            onClick={() => goToFort(title)}
            className="sidebar-item">
                {title}
        </button>
    );
}

export default SidebarItem;