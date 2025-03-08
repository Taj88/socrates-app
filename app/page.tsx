import Navbar from "./navbar";
import Main from "./main";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#2B2B2B]">
      <Navbar />
      <Main />
    </div>
  );
}
