import { scrollToElement } from '@lib/utils'
import React from 'react'

interface Heading {
  heading: string,
  id: string,
  childs?: Heading[]
}
interface Headings {
  headings: Heading[],
  customClass?: string,
}

const TableContent = ({ headings, customClass }: Headings) => {
  return (
    <div>
      <ul className={customClass}>
        {
          headings?.map((heading: Heading, index: number) =>
            <>
              
              <li key={index} onClick={()=>scrollToElement(heading?.id)} className='cursor-pointer'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>

                {heading?.heading}
                {heading?.childs && <TableContent customClass={"ml-3 table-children children"+index} headings={heading.childs} />}
              </li>
            </>
          )
        }
      </ul>
    </div>
  )
}

export default TableContent