"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import './main.css'; // Import the CSS file

export default function Main() {
    const [hoverVisible, setHoverVisible] = useState(false);
    const [checked, setChecked] = useState({ checkbox1: false, checkbox2: false });

    const handleCheckboxChange = (checkbox: 'checkbox1' | 'checkbox2') => {
        setChecked(prevState => ({ ...prevState, [checkbox]: !prevState[checkbox] }));
    };

    const handleStartClick = () => {
        console.log("Start button clicked");
        // Add your start button logic here
    };

    const handleDeepDiveClick = () => {
        console.log("Start with Deep Dive button clicked");
        // Add your deep dive button logic here
    };

    return (
        <main className={cn("main-container")}>
            <div id="popup" className="popup">
                <img src="/info-circle.png" alt="Info" className="info-icon" />
                <span className="popup-text">
                    The web version does not display local chats. To access all features, please
                </span>
                <span className="popup-link">
                    install the app.
                </span>
            </div>
            <div id="headline" className="headline">
                <div id="text" className="text">
                    <div className="text-content">
                        <span className="headline-text">
                            Add Files to
                        </span>
                        <img src="/app_icon.png" alt="Cloud Icon" className="cloud-icon" />
                        <span className="headline-text">
                            Cloud Chat
                        </span>
                    </div>
                    <div className="subtext">
                        Your files will not be stored on our servers and no AI models will be trained.
                    </div>
                    <div className="subtext-highlight">
                        Supported File Types: .docx, .pdf, .epub, and many text filetypes
                    </div>
                </div>
                <div id="folders" className="folders">
                    <div className="folder-row">
                        <div id="folder1" className="folder">
                            <img src="/folder1.svg" alt="Folder 1" className="folder-icon" />
                            <span className="folder-text">
                                Drag & drop local files here, or click to select
                            </span>
                        </div>
                        <div id="folder2" className="folder">
                            <img src="/folder2.svg" alt="Folder 2" className="folder-icon" />
                            <div className="folder-input-container">
                                <span className="folder-text">
                                    Enter in a public URL:
                                </span>
                                <div className="folder-input-wrapper">
                                    <input type="text" placeholder="https://example.com/file.pdf" className="folder-input" />
                                    <button className="folder-button">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="folder-row">
                        <div id="folder3" className="folder">
                            <img src="/folder3.svg" alt="Folder 3" className="folder-icon" />
                            <span className="folder-text">
                                Add files from Dropbox
                            </span>
                        </div>
                        <div id="folder4" className="folder">
                            <img src="/folder4.svg" alt="Folder 4" className="folder-icon" />
                            <span className="folder-text">
                                Add files from Google Drive
                            </span>
                        </div>
                    </div>
                    <div id="upload" className="upload">
                        <div className="upload-item">
                            <img src="/pdf.svg" alt="PDF Icon" className="upload-icon" />
                            <span className="upload-text">
                                Report_file.pdf
                            </span>
                            <input type="checkbox" checked={checked.checkbox1} onChange={() => handleCheckboxChange('checkbox1')} className="upload-checkbox" />
                            <span className="upload-ocr">
                                Force OCR
                            </span>
                            <img src="/tooltip.svg" alt="Tooltip Icon" className="tooltip-icon" />
                        </div>
                        <div className="upload-item">
                            <img src="/doc.svg" alt="Doc Icon" className="upload-icon" />
                            <span className="upload-text">
                                Article.docs
                            </span>
                            <input type="checkbox" checked={checked.checkbox2} onChange={() => handleCheckboxChange('checkbox2')} className="upload-checkbox" />
                            <span className="upload-ocr">
                                Force OCR
                            </span>
                            <img src="/tooltip.svg" alt="Tooltip Icon" className="tooltip-icon" />
                        </div>
                    </div>
                </div>
                <div id="buttons" className="buttons">
                    <button className=" start-button" onClick={handleStartClick}>Start</button>
                    <span className="or-text">or</span>
                    <button className=" deep-dive-button" onClick={handleDeepDiveClick}>
                        <img src="/stars.svg" alt="Stars" className="stars-icon" />
                        Start with Deep Dive
                    </button>
                    <button className="info-button" onMouseEnter={() => setHoverVisible(true)} onMouseLeave={() => setHoverVisible(false)}>
                        i
                        {hoverVisible && (
                            <div id="hover" className="hover">
                                <span className="hover-text">
                                    Deep Dive processes documents section by section for &quot;unlimited&quot; context, enabling complete answers. Run once per chat to unlock Table AI and Prompt Loops
                                </span>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </main>
    );
}
