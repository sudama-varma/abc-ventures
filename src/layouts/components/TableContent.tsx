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
            <li key={index} onClick={()=>scrollToElement(heading?.id)} className='cursor-pointer'>
              {heading?.heading}
              {heading?.childs && <TableContent customClass={"ml-3 children"+index} headings={heading.childs} />}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default TableContent