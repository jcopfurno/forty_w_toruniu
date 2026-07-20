import { useState } from 'react';
import SidebarButton from './sidebar_button/SidebarButton'
import SidebarContent from './sidebar_content/SidebarContent';

type Props = {
    title: string;
    items: string[];
};

function SidebarComponent ({ title, items } : Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <SidebarButton
                title={title}
                items={items}
                open={open}
                onClick={() => setOpen(!open)}
            >
            </SidebarButton>
            <SidebarContent open={open} items={items} />
        </>
    )
}

export default SidebarComponent;