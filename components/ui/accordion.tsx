"use client"
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const svgStyle = "text-slate-200 w-5 h-5";

  const downSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={svgStyle}>
      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  )

  const upSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={svgStyle}>
      <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
    </svg>
  )

  const toggleAccordion = () => setOpen(!isOpen);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center px-2 py-5 text-slate-200"
      >
        <span className="text-lg">{title}</span>
        {isOpen ? upSVG : downSVG}
      </button>
      <div className={`duration-500 ${isOpen ? 'h-[600px] overflow-y-auto' : 'overflow-hidden h-0'}`}>
        {children}
      </div>
    </div >
  )
}