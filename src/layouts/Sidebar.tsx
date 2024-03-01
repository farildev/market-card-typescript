import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { SidebarContext } from '@/context/SidebarContext';

const Sidebar: React.FC = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        return null;
    }

    const { isOpen, handleClose } = context;

    return (
        <div className={`lg:w-[30%] md:w-1/2 w-full fixed top-0 ${isOpen ? 'right-0' : '-right-full'} transition-all duration-300 z-20 bg-white h-full shadow-lg p-5`}>
            <div className="relative h-full flex flex-col">
                <button onClick={handleClose} className='absolute top-5 right-5 text-2xl bg-main text-white rounded-full p-2'>
                    <MdClose />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
