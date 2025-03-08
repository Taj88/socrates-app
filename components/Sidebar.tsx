import { Button } from "@/components/ui/button";

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
            <h1 className="text-xl font-bold flex items-center gap-2">
                <span className="text-yellow-500">⚡</span> Socrates
            </h1>
            <Button className="mt-4 bg-gray-800 w-full">+ Add Folder</Button>
            <Button className="mt-2 bg-gray-800 w-full">+ Create Chat</Button>
            <div className="mt-auto">
                <Button className="w-full bg-yellow-600">Upgrade Plan</Button>
                <div className="flex items-center mt-4">
                    <img src="/profile.jpg" alt="User" className="w-8 h-8 rounded-full" />
                    <span className="ml-2">Jessica Mills</span>
                </div>
            </div>
        </aside>
    );
}

