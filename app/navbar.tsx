import Image from 'next/image';
import logo from '../public/logo.svg';
import searchIcon from '../public/icon=search.svg';
import sidebarLeftIcon from '../public/icon=sidebar-left.svg';
import buttonsIcon from '../public/Buttons.svg';
import buttonsIcon1 from '../public/Buttons1.svg';
import buttonsUpgradeIcon from '../public/Buttons_upgrade.svg';
import flowIcon from '../public/icon=flow.svg';
import avatarIcon from '../public/avatar.png';
import settingsIcon from '../public/settings.png';
import './navbar.css'; // Import the CSS file

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-top">
                <div className="logo-section" id="logo_section">
                    <Image src={logo} alt="Logo" width={157} height={40} />
                    <div className="logo-icons">
                        <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
                        <Image src={sidebarLeftIcon} alt="Sidebar Left Icon" width={24} height={24} />
                    </div>
                </div>
                <div className="buttons-div" id="buttons_div">
                    <button className="button">
                        <Image src={buttonsIcon} alt="Buttons Icon" width={256} height={40} />
                    </button>
                    <button className="button">
                        <Image src={buttonsIcon1} alt="Buttons1 Icon" width={256} height={40} />
                    </button>
                </div>
            </div>
            <div className="flex-1"></div> {/* Spacer div to push Bottom_nav lower */}
            <div className="bottom-nav" id="Bottom_nav">
                <div className="upgrade" id="Upgrade">
                    <div className="upgrade-text">
                        Upgrade to Premium
                        <div className="upgrade-subtext">
                            Make the most of all features!
                        </div>
                    </div>
                    <button className="button-upgrade">
                        <Image src={buttonsUpgradeIcon} alt="Buttons Upgrade Icon" width={224} height={40} />
                    </button>
                </div>
                <div className="flow-ai">
                    <button className="flow-button">
                        <Image src={flowIcon} alt="Flow Icon" width={24} height={24} />
                    </button>
                    <span className="flow-text">
                        Flow AI Templates
                    </span>
                </div>
                <div className="user-settings">
                    <button className="avatar-button">
                        <Image src={avatarIcon} alt="Avatar Icon" width={36} height={36} />
                    </button>
                    <span className="user-name">
                        Jessica Mills
                    </span>
                    <button className="settings-button">
                        <Image src={settingsIcon} alt="Settings Icon" width={20} height={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
