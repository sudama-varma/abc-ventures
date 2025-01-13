import { scrollToElement } from '@lib/utils'
import React from 'react'

interface Props {
    elementId: string,
    customClass?: string,
    children: React.ReactNode
}
const ScrollButton = ({ elementId,customClass, children }: Props) => {
    return (
        <button onClick={() => scrollToElement(elementId)}
            className={customClass}>
            {children}
        </button>
    )
}

export default ScrollButton;