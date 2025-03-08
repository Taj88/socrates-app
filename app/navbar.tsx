import Image from 'next/image';
import logo from '../public/logo.svg';
import searchIcon from '../public/icon=search.svg';
import sidebarLeftIcon from '../public/icon=sidebar-left.svg';
import buttonsIcon from '../public/Buttons.svg';
import buttonsIcon1 from '../public/Buttons1.svg';

export default function Navbar() {
    return (
        <nav
            className="flex flex-col justify-between"
            style={{
                width: "280px",
                height: "868px",
                borderRadius: "24px",
                padding: "12px",
            }}
        >
            <div
                className="flex flex-col"
                style={{
                    width: "256px",
                    height: "164px",
                    gap: "32px",
                }}
            >
                <div
                    className="flex justify-between items-center"
                    style={{
                        width: "256px",
                        height: "40px",
                    }}
                    id="logo_section"
                >
                    <Image src={logo} alt="Logo" width={157} height={40} />
                    <div
                        className="flex items-center"
                        style={{
                            width: "60px",
                            height: "24px",
                            gap: "12px",
                        }}
                    >
                        <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
                        <Image src={sidebarLeftIcon} alt="Sidebar Left Icon" width={24} height={24} />
                    </div>
                </div>
                <div
                    className="flex flex-col"
                    style={{
                        width: "256px",
                        height: "92px",
                        gap: "12px",
                    }}
                    id="buttons_div"
                >
                    <Image src={buttonsIcon} alt="Buttons Icon" width={256} height={40} />
                    <Image src={buttonsIcon1} alt="Buttons1 Icon" width={256} height={40} />
                </div>
            </div>
            <div className="flex-1"></div> {/* Spacer div to push Bottom_nav lower */}
            <div
                className="flex flex-col"
                style={{
                    width: "256px",
                    height: "224px",
                    gap: "12px",
                }}
                id="Bottom_nav"
            >
                <div
                    id="Upgrade"
                    style={{
                        width: "256px",
                        height: "120px",
                        borderRadius: "12px",
                        padding: "16px",
                        gap: "12px",
                        backgroundColor: "#363636",
                    }}
                >
                    {/* Add your content here */}
                </div>
            </div>
        </nav>
    );
}
