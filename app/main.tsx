"use client";

import { useState } from 'react';

export default function Main() {
    const [hoverVisible, setHoverVisible] = useState(false);

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
                                width: "406px",
                                height: "120px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424"
                            }}
                        />
                        <div
                            id="folder2"
                            style={{
                                width: "406px",
                                height: "120px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424"
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div
                            id="folder3"
                            style={{
                                width: "406px",
                                height: "120px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424"
                            }}
                        />
                        <div
                            id="folder4"
                            style={{
                                width: "406px",
                                height: "120px",
                                borderRadius: "20px",
                                gap: "6px",
                                backgroundColor: "#242424"
                            }}
                        />
                    </div>
                    <div
                        id="upload"
                        style={{
                            width: "820px",
                            height: "62px",
                            borderRadius: "34px",
                            gap: "6px",
                            backgroundColor: "#242424"
                        }}
                    />
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
