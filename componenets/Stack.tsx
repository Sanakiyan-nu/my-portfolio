import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiTypescript, SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiJavascript, SiExpress } from 'react-icons/si'
import { DiHtml5, DiCss3 } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
const Stacks = [
    {  name:"React", icon: FaReact, color: "#61DAFB"},
    {  name:"Node.js", icon: IoLogoNodejs, color: "#339933"},
    {  name:"Typescript", icon: SiTypescript, color: "#3178C6"},
    {  name:"MongoDB", icon: SiMongodb, color: "#47A24B"},
    {  name:"Next.js", icon: TbBrandNextjs, color: "#000000"},
    {  name:"Javascript", icon: SiJavascript, color: "#F7DF1E"},
    {  name:"Express", icon: SiExpress, color: "#000000"},
    { name:"Html5", icon: DiHtml5, color: "#ff5733"},
    { name:"Css3", icon: DiCss3, color: "#3498db"},
    { name:"Figma", icon: FiFigma, color: "#4B0082" },
]

export const Stack = () => {
  return (
   <section className='py-16 glass' id='stack'>
    <div className='max-w-[1200px] mx-auto px-4 text-center'>
        <h2 className='text-5xl text-gray-200 font-bold mb-4'>My Stack</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
            {Stacks.map((Item,index) =>(
                <div key={index} className='flex items-center justify-center flex-col rounded-xl p-4'>
                    <div className='mb-4 bg-white/10 p-6 rounded-xl'>
                    {React.createElement(Item.icon, {
                        className: "w-32 h-32",
                        style: {color: Item.color}
                    })}
                    </div>
                    <p className='text-gray-400 font-semibold'>{Item.name}</p>
                </div>
            ) )}

        </div>
    </div>
   </section>
  )
}
