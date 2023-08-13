import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";



export default function PaginationBar({href, page, pageCount}){
    return(
        <div className = "flex gap-2 pb-3" >
            <PaginationLink href={`${href}?page=${page-1}`}
                enabled={page > 1}>
                <ChevronLeftIcon className="h-5 w-5"/>
            </PaginationLink>
                <span>Page {page} of {pageCount} </span>
            <PaginationLink href={`${href}?page=${page + 1}`}
                enabled={page < pageCount}>
                <ChevronRightIcon className="h-5 w-5"/>
            </PaginationLink>
            </div >
    )
}

function PaginationLink({children,enabled,href}){
    if(!enabled){
        return(
            <span className="border cursor-not-allowed item-roundedflex gap-1 px-2 py-1
            items-center text-slate-300 text-sm">
                    {children}
                </span>
        )
    }

    return(
        <Link href={href} className="border flex gap-1 px-2 py-1 rounded text-slate-500 text-sm
         hover:bg-orange-200 hover:text-slate-700 items-center">
            {children}
        </Link>
    )
}