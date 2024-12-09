import React from 'react'

interface Props {
    className?: string
    children: React.ReactNode
}

const TableHeader = ({ className, children }: Props) => {
    return (
        <th scope="col" className={`px-6 py-3 ${className}`}>
            {children}
        </th>
    )
}

export default TableHeader