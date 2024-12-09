import React from 'react'

interface Props {
    id: string
    text: string
    icon: React.ReactNode
    // children?: React.ReactNode
}

const Tooltop = ({ id, text, icon }: Props) => {
    return (
        <>
            <button data-tooltip-target={id} data-tooltip-style="dark" type="button" className="text-blue-700 font-medium rounded-lg text-sm text-center dark:bg-transparent px-2">{icon}</button>

            <div id={id} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip transition-all duration-300">
                {text}
            </div>
        </>
    )
}

export default Tooltop