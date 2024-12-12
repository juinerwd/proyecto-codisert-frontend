
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb"
import {
    SidebarTrigger,
} from "../../../components/ui/sidebar"
import { ModeToggle } from '../../../components/mode-toggle';

const Header = () => {
    return (
        <header className="w-full flex h-24 shrink-0 items-center gap-2 border-b px-4 text-gray-100 shadow-gray-400 shadow-sm">
            <div className='flex items-center justify-between w-full'>
                <SidebarTrigger className="-ml-1 text-gray-900 dark:text-gray-100" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink>
                                Dashboard
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header