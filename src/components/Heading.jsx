import { orbitron } from '@/app/font'

export default function Heading({children}){
    return(
        <h1 className={`font-bold text-2xl pb-1 m-0 ${orbitron.className}`}>
            {children}
        </h1>
    )
}