export default function Main() {
    return (
        <main
            className="flex-1 flex flex-col items-center" // Remove justify-center to align items at the top
            style={{
                width: "1440px",
                height: "900px",
                borderRadius: "32px",
                padding: "16px",
                gap: "12px",
                backgroundColor: "#2b2b2b",
                backgroundImage: "url('/HeroPattern.svg')", // Correct the path
                backgroundSize: "cover" // Optional: Ensure the background image covers the entire area
            }}
        >
            <div
                id="popup" // Name this div as popup
                style={{
                    width: "auto", // Adjust width to fit content
                    height: "28px", // Adjust height to 28px to account for padding
                    borderRadius: "100px",
                    gap: "4px",
                    paddingTop: "8px",
                    paddingRight: "12px",
                    paddingBottom: "8px",
                    paddingLeft: "16px",
                    backgroundColor: "#242424",
                    display: "flex",
                    alignItems: "center", // Align elements vertically center
                    marginBottom: "16px" // Add margin to separate from other content
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
                        marginLeft: "8px" // Optional: Add some space between the image and text
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
                    marginTop: "60px", // Apply 60px margin on top
                }}
            >
                <div
                    id="text"
                    style={{
                        width: "1076px",
                        height: "114px",
                        gap: "8px", // Reduce gap to 8px
                        display: "flex", // Ensure flex display to align text and image
                        alignItems: "center", // Center items vertically
                        justifyContent: "center", // Center items horizontally
                        flexDirection: "column" // Add this to stack the text vertically
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px" // Reduce gap to 8px
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
                                // Optional: Add some space between the image and text
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
                            // marginTop: "16px" // Optional: Add some space between the existing content and new text
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
                            color: "#F37F0C", // Set text color to #F37F0C
                            // marginTop: "8px" // Optional: Add some space between the existing text and new text
                        }}
                    >
                        Supported File Types: .docx, .pdf, .epub, and many text filetypes
                    </div>
                </div>
                {/* Add the new div here */}
                <div
                    id="folders" // Name this div as folders
                    style={{
                        width: "820px",
                        height: "330px",
                        gap: "20px",
                        marginTop: "90px", // Add 30px top margin
                        display: "flex", // Ensure flex display to align text and image
                        alignItems: "center", // Center items vertically
                        justifyContent: "center", // Center items horizontally
                        flexDirection: "column", // Add this to stack the text vertically
                        marginLeft: "auto", // Center horizontally
                        marginRight: "auto" // Center horizontally
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
                            //padding: "16px",
                            gap: "6px",
                            backgroundColor: "#242424"
                        }}
                    />
                </div>
            </div>
        </main>
    );
}
