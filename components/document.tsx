import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FileUploader() {
    return (
        <div className="flex flex-col items-center text-white p-6 bg-[#2B2B2B] rounded-lg">
            <h2 className="text-2xl font-semibold">Add Files to <span className="text-blue-400">Cloud Chat</span></h2>
            <p className="text-sm text-gray-400">Supported File Types: .docx, .pdf, .epub, and more</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline">📁 Drag & Drop Files</Button>
                <div className="flex items-center bg-gray-700 p-2 rounded-md">
                    <Input type="text" placeholder="https://example.com/file.pdf" className="bg-transparent border-none text-white" />
                    <Button size="sm">Add</Button>
                </div>
                <Button variant="outline">🔄 Add from Dropbox</Button>
                <Button variant="outline">📂 Add from Google Drive</Button>
            </div>

            <div className="flex mt-4 space-x-2">
                <Button>Start</Button>
                <Button className="bg-yellow-600">Start with Deep Dive</Button>
            </div>
        </div>
    );
}
