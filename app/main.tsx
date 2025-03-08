export default function Main() {
    return (
        <main
            className="flex-1 flex items-center justify-center"
            style={{
                width: "1440px",
                height: "900px",
                borderRadius: "32px",
                padding: "16px",
                gap: "12px",
                backgroundColor: "#242424",
                backgroundImage: "url('/HeroPattern.svg')", // Correct the path
                backgroundSize: "cover" // Optional: Ensure the background image covers the entire area
            }}
        >
        </main>
    );
}
