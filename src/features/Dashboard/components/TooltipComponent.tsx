import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../../../components/ui/tooltip"


interface Props {
    text: string
    icon: React.ReactNode
    // children?: React.ReactNode
}

const Tooltop = ({ text, icon }: Props) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className=''>{icon}</TooltipTrigger>
                <TooltipContent>
                    <p>{text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default Tooltop