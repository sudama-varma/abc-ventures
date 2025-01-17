import { scrollToElement } from '@lib/utils'
import React from 'react'

interface Heading {
  heading: string,
  id: string,
  childs?: Heading[],
}
interface Headings {
  headings: Heading[],
  customClass?: string,
  isChild?:boolean
}

const TableContent = ({ headings, customClass,isChild }: Headings) => {
  return (

      <ul className={customClass + (headings?.length==0 ? " hidden":"")}>
        {
          headings?.map((heading: Heading, index: number) =>
            <>
              
              <li key={index} onClick={()=>scrollToElement(heading?.id)} className='cursor-pointer'>
                <ul className='mainTitle'>
                  <li key={index} onClick={()=>scrollToElement(heading?.id)} className='cursor-pointer'>
                    <span className={isChild? "hidden":""}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                    {heading?.heading}
                  </li>
                    {heading?.childs && <TableContent customClass={"table-children subtitle children"+index} headings={heading.childs} isChild={true} />}
                </ul>

               
              </li>
            </>
          )
        }
      </ul>
  )
}

export default TableContent