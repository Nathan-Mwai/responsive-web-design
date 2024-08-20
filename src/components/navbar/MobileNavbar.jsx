import {RxHamburgerMenu} from "react-icons/rx";
import {navMenus} from "./navMenus.js";
import { useState } from "react";

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="md:hidden self-end">
            <button onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <RxHamburgerMenu/>
            </button>

           { isOpen && 
            <nav className=" divide-y right-4  divide-gray-500 rounded-xl absolute w-fit p-4 flex flex-col gap-2 bg-gray-100">
                {
                    navMenus.map((menu, index) => (
                        <a href={menu.link} key={index} className="flex items-center gap-2 hover:bg-slate-200 p-2">
                            <menu.icon/>
                            {menu.name}
                        </a>
                    ))
                }
            </nav>
}
        </div>
    )
}

export default MobileNavbar
