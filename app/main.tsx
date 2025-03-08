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
        </main>
    );
}
