"use client";

import { useState } from 'react';

export default function Main() {
    const [hoverVisible, setHoverVisible] = useState(false);
    const [checked, setChecked] = useState({ checkbox1: false, checkbox2: false });

    const handleCheckboxChange = (checkbox: 'checkbox1' | 'checkbox2') => {
        setChecked(prevState => ({ ...prevState, [checkbox]: !prevState[checkbox] }));
    };

    return (
        <main
            className="flex-1 flex flex-col items-center"
            style={{
                width: "1440px",
                height: "900px",
                borderRadius: "32px",
                padding: "16px",
                gap: "12px",
                backgroundColor: "#2b2b2b",
                backgroundImage: "url('/HeroPattern.svg')",
                backgroundSize: "cover"
            }}
        >
            <div
                id="popup"
                style={{
                    width: "auto",
                    height: "28px",
                    borderRadius: "100px",
                    gap: "4px",
                    paddingTop: "8px",
                    paddingRight: "12px",
                    paddingBottom: "8px",
                    paddingLeft: "16px",
                    backgroundColor: "#242424",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px"
                }}
            >
                <img src="/info-circle.png" alt="Info" style={{ width: "20px", height: "20px" }} />
                <span
                    style={{
                        fontFamily: "Onest",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "135%",
                        letterSpacing: "1%",
                        textAlign: "center",
                        verticalAlign: "middle",
                        color: "white",
                        marginLeft: "8px"
                    }}
                >
                    The web version does not display local chats. To access all features, please
                </span>
                <span
                    style={{
                        fontFamily: "Onest",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "135%",
                        letterSpacing: "1%",
                        textAlign: "center",
                        verticalAlign: "middle",
                        color: "#FB9937"
                    }}
                >
                    install the app.
                </span>
            </div>
            <div
                id="headline"
                style={{
                    width: "1076px",
                    height: "624px",
                    gap: "60px",
                    marginTop: "60px",
                }}
            >
                <div
                    id="text"
                    style={{
                        width: "1076px",
                        height: "114px",
                        gap: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px"
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Onest",
                                fontWeight: 500,
                                fontSize: "54px",
                                lineHeight: "100%",
                                letterSpacing: "-3%",
                                textAlign: "center",
                                verticalAlign: "middle",
                                color: "white"
                            }}
                        >
                            Add Files to
                        </span>
                        <img src="/app_icon.png" alt="Cloud Icon" style={{ width: "114px", height: "114px", }} />
                        <span
                            style={{
                                fontFamily: "Onest",
                                fontWeight: 500,
                                fontSize: "54px",
                                lineHeight: "100%",
                                letterSpacing: "-3%",
                                textAlign: "center",
                                verticalAlign: "middle",
                                color: "white",
                            }}
                        >
                            Cloud Chat
                        </span>
                    </div>
                    <div
                        style={{
                            fontFamily: "Onest",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "130%",
                            letterSpacing: "1%",
                            textAlign: "center",
                            verticalAlign: "middle",
                            color: "white",
                        }}
                    >
                        Your files will not be stored on our servers and no AI models will be trained.
                    </div>
                    <div
                        style={{
                            fontFamily: "Onest",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "130%",
                            letterSpacing: "1%",
                            textAlign: "center",
                            verticalAlign: "middle",
                            color: "#F37F0C",
                        }}
                    >
                        Supported File Types: .docx, .pdf, .epub, and many text filetypes
                    </div>
                </div>
                <div
                    id="folders"
                    style={{
                        width: "820px",
                        height: "330px",
                        gap: "20px",
                        marginTop: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div
                            id="folder1"
                            style={{
                                width: "358px",
                                height: "72px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424",
                                display: "flex",
                                alignItems: "center",
                                padding: "24px"
                            }}
                        >
                            <img src="/folder1.svg" alt="Folder 1" style={{ width: "35px", height: "35px", marginRight: "16px" }} />
                            <span
                                style={{
                                    fontFamily: "Onest",
                                    fontWeight: 600,
                                    fontSize: "18px",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                    verticalAlign: "middle",
                                    color: "white"
                                }}
                            >
                                Drag & drop local files here,
                                or click to select
                            </span>
                        </div>
                        <div
                            id="folder2"
                            style={{
                                width: "358px",
                                height: "72px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424",
                                display: "flex",
                                alignItems: "center",
                                padding: "24px"
                            }}
                        >
                            <img src="/folder2.svg" alt="Folder 2" style={{ width: "35px", height: "35px", marginRight: "16px" }} />
                            <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                                <span
                                    style={{
                                        fontFamily: "Onest",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "130%",
                                        letterSpacing: "-1%",
                                        verticalAlign: "middle",
                                        color: "white"
                                    }}
                                >
                                    Enter in a public URL:
                                </span>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                    <input
                                        type="text"
                                        placeholder="https://example.com/file.pdf"
                                        style={{
                                            width: "196px",
                                            height: "40px",
                                            borderRadius: "100px",
                                            justifyContent: "space-between",
                                            backgroundColor: "#353535",
                                            color: "white",
                                            border: "none",
                                            opacity: 0.6,
                                            fontFamily: "Onest",
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            lineHeight: "135%",
                                            letterSpacing: "0%",
                                            verticalAlign: "middle",
                                            paddingLeft: "16px", // start typing after 8px
                                            paddingRight: "68px" // end typing before 4px of the button
                                        }}
                                    />
                                    <button
                                        style={{
                                            width: "60px",
                                            height: "36px",
                                            borderRadius: "20px",
                                            gap: "10px",
                                            backgroundColor: "#FFFFFF26",
                                            color: "white",
                                            border: "none",
                                            cursor: "pointer",
                                            position: "absolute",
                                            right: "2px"
                                        }}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div
                            id="folder3"
                            style={{
                                width: "358px",
                                height: "72px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424",
                                display: "flex",
                                alignItems: "center",
                                padding: "24px"
                            }}
                        >
                            <img src="/folder3.svg" alt="Folder 3" style={{ width: "35px", height: "35px", marginRight: "16px" }} />
                            <span
                                style={{
                                    fontFamily: "Onest",
                                    fontWeight: 600,
                                    fontSize: "18px",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                    verticalAlign: "middle",
                                    color: "white"
                                }}
                            >
                                Add files from Dropbox
                            </span>
                        </div>
                        <div
                            id="folder4"
                            style={{
                                width: "358px",
                                height: "72px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424",
                                display: "flex",
                                alignItems: "center",
                                padding: "24px"
                            }}
                        >
                            <img src="/folder4.svg" alt="Folder 4" style={{ width: "35px", height: "35px", marginRight: "16px" }} />
                            <span
                                style={{
                                    fontFamily: "Onest",
                                    fontWeight: 600,
                                    fontSize: "18px",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                    verticalAlign: "middle",
                                    color: "white"
                                }}
                            >
                                Add files from Google Drive
                            </span>
                        </div>
                    </div>
                    <div
                        id="upload"
                        style={{
                            width: "788px",
                            height: "30px",
                            borderRadius: "34px",
                            gap: "6px",
                            padding: "16px",
                            backgroundColor: "#242424",
                            display: "flex", // added to place divs side by side

                        }}
                    >
                        <div
                            style={{
                                width: "290px",
                                height: "30px",
                                borderRadius: "20px",
                                gap: "8px",
                                paddingRight: "7px",
                                paddingLeft: "12px",
                                backgroundColor: "#2b2b2b",
                                alignItems: "center",
                                display: "flex"
                            }}
                        >
                            <img src="/pdf.svg" alt="PDF Icon" style={{ width: "20px", height: "18px" }} />
                            <span
                                style={{
                                    fontFamily: "Onest",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    verticalAlign: "middle",
                                    color: "white"
                                }}
                            >
                                Report_file.pdf
                            </span>
                            <input
                                type="checkbox"
                                checked={checked.checkbox1}
                                onChange={() => handleCheckboxChange('checkbox1')}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    border: "1px solid #242424",
                                    marginLeft: "14px",
                                    backgroundColor: "#363636",
                                    cursor: "pointer",
                                    accentColor: "#363636",
                                    textDecoration: checked.checkbox1 ? "none" : "line-through"
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "Onest",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    verticalAlign: "middle",
                                    color: "#B7B7B7" // added text style
                                }}
                            >
                                Force OCR
                            </span>
                            <img src="/tooltip.svg" alt="Tooltip Icon" style={{ width: "20px", height: "18px" }} />
                        </div>
                        <div
                            style={{
                                width: "290px",
                                height: "30px",
                                borderRadius: "20px",
                                gap: "8px",
                                paddingRight: "7px",
                                paddingLeft: "12px",
                                backgroundColor: "#2b2b2b",
                                alignItems: "center",
                                display: "flex"
                            }}
                        >
                            <img src="/doc.svg" alt="Doc Icon" style={{ width: "20px", height: "18px" }} />
                            <span
                                style={{
                                    fontFamily: "Onest",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    verticalAlign: "middle",
                                    color: "white"
                                }}
                            >
                                Article.docs
                            </span>
                            <input
                                type="checkbox"
                                checked={checked.checkbox2}
                                onChange={() => handleCheckboxChange('checkbox2')}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    border: "1px solid #242424",
                                    marginLeft: "14px",
                                    backgroundColor: "#363636",
                                    cursor: "pointer",
                                    accentColor: "#363636",
                                    textDecoration: checked.checkbox2 ? "none" : "line-through"
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "Onest",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    verticalAlign: "middle",
                                    color: "#B7B7B7" // added text style
                                }}
                            >
                                Force OCR
                            </span>
                            <img src="/tooltip.svg" alt="Tooltip Icon" style={{ width: "20px", height: "18px" }} />
                        </div>
                    </div>
                </div>
                <div
                    id="buttons"
                    style={{
                        width: "528px",
                        height: "60px",
                        gap: "16px",
                        marginTop: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <button
                        style={{
                            width: "240px",
                            height: "60px",
                            borderRadius: "56px",
                            gap: "10px",
                            paddingTop: "17px",
                            paddingRight: "32px",
                            paddingBottom: "17px",
                            paddingLeft: "32px",
                            border: "1px solid #F37F0C",
                            backgroundColor: "transparent",
                            color: "white",
                            fontFamily: "Onest",
                            fontWeight: 500,
                            fontSize: "16px",
                            textAlign: "center",
                            cursor: "pointer"
                        }}
                    >
                        Start
                    </button>
                    <span
                        style={{
                            fontFamily: "Onest",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "130%",
                            letterSpacing: "1%",
                            textAlign: "center",
                            verticalAlign: "middle",
                            color: "white",
                        }}
                    >
                        or
                    </span>
                    <button
                        style={{
                            width: "240px",
                            height: "60px",
                            borderRadius: "56px",
                            gap: "10px",
                            border: "1px solid #F37F0C",
                            background: "linear-gradient(180deg,#FFBF00, #FB9937 )",
                            color: "white",
                            fontFamily: "Onest",
                            fontWeight: 500,
                            fontSize: "16px",
                            textAlign: "center",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <img src="/stars.svg" alt="Stars" style={{ width: "20px", height: "20px" }} />
                        Start with Deep Dive
                    </button>

                    <button
                        style={{
                            width: "24px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                            color: "black",
                            fontFamily: "Onest",
                            fontWeight: 500,
                            fontSize: "16px",
                            textAlign: "center",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid black",
                            position: "relative"
                        }}
                        onMouseEnter={() => setHoverVisible(true)}
                        onMouseLeave={() => setHoverVisible(false)}
                    >
                        i
                        {hoverVisible && (
                            <div
                                id="hover"
                                style={{
                                    width: "226px",
                                    height: "94px",
                                    borderRadius: "20px",
                                    padding: "12px",
                                    gap: "8px",
                                    backgroundColor: "#1E1E1E",
                                    position: "absolute",
                                    top: "calc(100% + 10px)",
                                    left: "0",
                                    zIndex: 1
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "Onest",
                                        fontWeight: 400,
                                        fontSize: "12px",
                                        lineHeight: "120%",
                                        letterSpacing: "1%",
                                        color: "white"
                                    }}
                                >
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
