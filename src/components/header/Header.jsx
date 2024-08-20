import { RiMailLine } from "react-icons/ri";
import Navbar from "../navbar/Navbar.jsx";
import {IoIosSearch} from "react-icons/io";
import { PiPhoneXFill } from "react-icons/pi";
import { BiPhoneIncoming } from "react-icons/bi";
import MobileNavbar from "../navbar/MobileNavbar.jsx";

function Header() {
    return (
        <header className=" debugger flex flex-col p-4">

            <div className="justify-around p-4 hidden md:flex">

                <img src="https://placehold.co/100x30/black/white" alt="Page Logo"/>

                <div className=" flex items-center">

                    {/*Search Bar*/}
                    <div className="flex items-center gap-2 border-b-2 border-black">
                        <label htmlFor="search">
                            <IoIosSearch/>
                        </label>
                        <input type="text" placeholder="Search here" id="search" 
                        className="outline-none gap-4"/>
                    </div>

                    {/*Contact Info*/}
                    <div className="px-4 flex items-center gap-4">
                        <a href="mailto:example@mail.com" target="_blank"
                        className="flex items-center gap-2">
                            <RiMailLine/><span>example@mail.com</span>
                            </a>
                        <a href="tel:(000) 888-88" className="flex items-center gap-2">
                            <BiPhoneIncoming/>
                            (000) 888-88</a>
                    </div>

                </div>
            </div>

            <Navbar/>

            <MobileNavbar/>
        </header>
    )
}

export default Header
