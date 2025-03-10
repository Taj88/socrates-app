"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils'; // Correct the import path

export default function Main() {
    const [hoverVisible, setHoverVisible] = useState(false);
    const [checked, setChecked] = useState({ checkbox1: false, checkbox2: false });

    const handleCheckboxChange = (checkbox: 'checkbox1' | 'checkbox2') => {
        setChecked(prevState => ({ ...prevState, [checkbox]: !prevState[checkbox] }));
    };

    return (
        <main className={cn("w-[1440px] h-[900px] rounded-[32px] p-[16px] gap-[12px] bg-[#2b2b2b] bg-cover bg-[url('/HeroPattern.svg')] flex flex-col items-center")}>
            <div id="popup" className="w-auto h-[28px] rounded-[100px] gap-[4px] p-[8px_12px_8px_16px] bg-[#242424] flex items-center mb-[16px]">
                <img src="/info-circle.png" alt="Info" className="w-[20px] h-[20px]" />
                <span className="ml-[8px] font-Onest font-normal text-[14px] leading-[135%] tracking-[1%] text-center align-middle text-[#FFFFFF]">
                    The web version does not display local chats. To access all features, please
                </span>
                <span className="font-Onest font-normal text-[14px] leading-[135%] tracking-[1%] text-center align-middle text-[#FB9937]">
                    install the app.
                </span>
            </div>
            <div id="headline" className="w-[1076px] h-[624px] gap-[60px] mt-[60px]">
                <div id="text" className="w-[1076px] h-[114px] gap-[8px] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-[8px]">
                        <span className="font-Onest font-medium text-[54px] leading-[100%] tracking-[-3%] text-center align-middle text-[#FFFFFF]">
                            Add Files to
                        </span>
                        <img src="/app_icon.png" alt="Cloud Icon" className="w-[114px] h-[114px]" />
                        <span className="font-Onest font-medium text-[54px] leading-[100%] tracking-[-3%] text-center align-middle text-[#FFFFFF]">
                            Cloud Chat
                        </span>
                    </div>
                    <div className="font-Onest font-normal text-[14px] leading-[130%] tracking-[1%] text-center align-middle text-[#FFFFFF]">
                        Your files will not be stored on our servers and no AI models will be trained.
                    </div>
                    <div className="font-Onest font-normal text-[14px] leading-[130%] tracking-[1%] text-center align-middle text-[#F37F0C]">
                        Supported File Types: .docx, .pdf, .epub, and many text filetypes
                    </div>
                </div>
                <div id="folders" className="w-[820px] h-[330px] gap-[20px] mt-[90px] flex flex-col items-center justify-center mx-auto">
                    <div className="flex gap-[20px]">
                        <div id="folder1" className="w-[358px] h-[72px] rounded-[20px] gap-[6px] bg-[#242424] flex items-center p-[24px]">
                            <img src="/folder1.svg" alt="Folder 1" className="w-[35px] h-[35px] mr-[16px]" />
                            <span className="font-Onest font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle text-[#FFFFFF]">
                                Drag & drop local files here, or click to select
                            </span>
                        </div>
                        <div id="folder2" className="w-[358px] h-[72px] rounded-[20px] gap-[6px] bg-[#242424] flex items-center p-[24px]">
                            <img src="/folder2.svg" alt="Folder 2" className="w-[35px] h-[35px] mr-[16px]" />
                            <div className="flex flex-col relative">
                                <span className="font-Onest font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle text-[#FFFFFF]">
                                    Enter in a public URL:
                                </span>
                                <div className="flex items-center mt-[8px]">
                                    <input type="text" placeholder="https://example.com/file.pdf" className="w-[196px] h-[40px] rounded-[100px] bg-[#353535] text-[#FFFFFF] border-none opacity-60 font-Onest font-normal text-[14px] leading-[135%] tracking-[0%] align-middle pl-[16px] pr-[68px]" />
                                    <button className="absolute right-[2px] w-[60px] h-[36px] rounded-[20px] gap-[10px] bg-[#FFFFFF26] text-[#FFFFFF] border-none cursor-pointer">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[20px]">
                        <div id="folder3" className="w-[358px] h-[72px] rounded-[20px] gap-[6px] bg-[#242424] flex items-center p-[24px]">
                            <img src="/folder3.svg" alt="Folder 3" className="w-[35px] h-[35px] mr-[16px]" />
                            <span className="font-Onest font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle text-[#FFFFFF]">
                                Add files from Dropbox
                            </span>
                        </div>
                        <div id="folder4" className="w-[358px] h-[72px] rounded-[20px] gap-[6px] bg-[#242424] flex items-center p-[24px]">
                            <img src="/folder4.svg" alt="Folder 4" className="w-[35px] h-[35px] mr-[16px]" />
                            <span className="font-Onest font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle text-[#FFFFFF]">
                                Add files from Google Drive
                            </span>
                        </div>
                    </div>
                    <div id="upload" className="w-[788px] h-[30px] rounded-[34px] gap-[6px] p-[16px] bg-[#242424] flex">
                        <div className="w-[290px] h-[30px] rounded-[20px] gap-[8px] pr-[7px] pl-[12px] bg-[#2b2b2b] flex items-center">
                            <img src="/pdf.svg" alt="PDF Icon" className="w-[20px] h-[18px]" />
                            <span className="font-Onest font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-[#FFFFFF]">
                                Report_file.pdf
                            </span>
                            <input type="checkbox" checked={checked.checkbox1} onChange={() => handleCheckboxChange('checkbox1')} className="w-[20px] h-[20px] border-[#242424] ml-[14px] bg-[#363636] cursor-pointer accent-[#363636]" />
                            <span className="font-Onest font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-[#B7B7B7]">
                                Force OCR
                            </span>
                            <img src="/tooltip.svg" alt="Tooltip Icon" className="w-[20px] h-[18px]" />
                        </div>
                        <div className="w-[290px] h-[30px] rounded-[20px] gap-[8px] pr-[7px] pl-[12px] bg-[#2b2b2b] flex items-center">
                            <img src="/doc.svg" alt="Doc Icon" className="w-[20px] h-[18px]" />
                            <span className="font-Onest font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-[#FFFFFF]">
                                Article.docs
                            </span>
                            <input type="checkbox" checked={checked.checkbox2} onChange={() => handleCheckboxChange('checkbox2')} className="w-[20px] h-[20px] border-[#242424] ml-[14px] bg-[#363636] cursor-pointer accent-[#363636]" />
                            <span className="font-Onest font-normal text-[14px] leading-[100%] tracking-[0%] align-middle text-[#B7B7B7]">
                                Force OCR
                            </span>
                            <img src="/tooltip.svg" alt="Tooltip Icon" className="w-[20px] h-[18px]" />
                        </div>
                    </div>
                </div>
                <div id="buttons" className="w-[528px] h-[60px] gap-[16px] mt-[20px] flex items-center justify-center mx-auto">
                    <button className="w-[240px] h-[60px] rounded-[56px] gap-[10px] p-[17px_32px] font-Onest font-medium text-[16px] text-center cursor-pointer border-[#F37F0C] bg-transparent text-[#FFFFFF]">Start</button>
                    <span className="font-Onest font-normal text-[16px] leading-[130%] tracking-[1%] text-center align-middle text-[#FFFFFF]">or</span>
                    <button className="w-[240px] h-[60px] rounded-[56px] gap-[10px] p-[17px_32px] font-Onest font-medium text-[16px] text-center cursor-pointer border-[#F37F0C] bg-gradient-to-b from-[#FFBF00] to-[#FB9937] text-[#FFFFFF] flex items-center justify-center">
                        <img src="/stars.svg" alt="Stars" className="w-[20px] h-[20px]" />
                        Start with Deep Dive
                    </button>
                    <button className="w-[24px] rounded-full bg-[#FFFFFF] text-[#000000] font-Onest font-medium text-[16px] text-center cursor-pointer flex items-center justify-center border-[#000000] relative" onMouseEnter={() => setHoverVisible(true)} onMouseLeave={() => setHoverVisible(false)}>
                        i
                        {hoverVisible && (
                            <div id="hover" className="w-[226px] h-[94px] rounded-[20px] p-[12px] gap-[8px] bg-[#1E1E1E] absolute top-[calc(100%+10px)] left-0 z-10">
                                <span className="font-Onest font-normal text-[12px] leading-[120%] tracking-[1%] text-[#FFFFFF]">
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
