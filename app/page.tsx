import Navbar from "./navbar";
import Main from "./main";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#242424]">
      <Navbar />
      <Main />
    </div>
  );
}
