import Image from 'next/image';
import logo from '../public/logo.svg';
import searchIcon from '../public/icon=search.svg';
import sidebarLeftIcon from '../public/icon=sidebar-left.svg';
import buttonsIcon from '../public/Buttons.svg';
import buttonsIcon1 from '../public/Buttons1.svg';
import buttonsUpgradeIcon from '../public/Buttons_upgrade.svg';
import flowIcon from '../public/icon=flow.svg';

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
                        borderRadius: "12px",
                        padding: "16px",
                        gap: "12px",
                        backgroundColor: "#363636",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            width: "187px",
                            height: "36px",
                            gap: "4px",
                            fontFamily: "Onest",
                            fontWeight: 600,
                            fontSize: "16px",
                            lineHeight: "110%",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                            color: "white", // Set text color to white
                            display: "flex",
                            flexDirection: "column",

                        }}
                    >
                        Upgrade to Premium
                        <div
                            style={{
                                fontFamily: "Onest",
                                fontWeight: 400,
                                fontSize: "12px",
                                lineHeight: "120%",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                                color: "#868686",
                            }}
                        >
                            Make the most of all features!
                        </div>
                    </div>
                    <button
                        style={{
                            width: "224px",
                            height: "40px",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                        }}
                    >
                        <Image src={buttonsUpgradeIcon} alt="Buttons Upgrade Icon" width={224} height={40} />
                    </button>
                </div>
                <div
                    style={{
                        width: "256px",
                        height: "40px",
                        gap: "8px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        display: "flex",
                        alignItems: "center",
                    }}
                > {/* Create a 40px high div with 8px gap between children */}
                    <button
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "18px",
                            padding: "12px",
                            gap: "10px",
                            backgroundColor: "#363636",
                            color: "#ffffff",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image src={flowIcon} alt="Flow Icon" width={20} height={20} />
                    </button>
                    <span
                        style={{
                            fontFamily: "Onest",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "-1%",
                            verticalAlign: "middle",
                            color: "white",
                            marginLeft: "10px",
                        }}
                    >
                        Flow AI Templates
                    </span>
                </div>
            </div>
        </nav>
    );
}
