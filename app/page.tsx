import Sidebar from "@/components/Sidebar";
import FileUploader from "@/components/document";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 flex items-center justify-center">
        <FileUploader />
      </main>
    </div>
  );
}
