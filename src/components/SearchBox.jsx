'use client';
import { Combobox } from "@headlessui/react"
import { useIsClient } from "@/lib/hooks";
import { useEffect, useState } from "react"; 
import { useRouter } from "next/navigation";

export default function SearchBox(){
    const router = useRouter()
    const isClient = useIsClient()
    const [query, setQuery] = useState('')
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        if(query.length > 1){
            (async () => {
                const response = await fetch('/api/search?query=' + encodeURIComponent(query))
                const reviews = await response.json()
                console.log(reviews)
                setReviews(reviews)
            })();
        }
        else{
            setReviews([])
        }
    }, [query])
    const handleChange = (review)=>{
        router.push(`/reviews/${review.slug}`);
    }
    if(!isClient){
        return null
    }
    return(
        <div className="relative w-48">
            <Combobox onChange={handleChange}>
                <Combobox.Input placeholder="Search..." className="rounded border px-2 py-1"
                    value={query} onChange={(event)=> setQuery(event.target.value)}
                />
                    <Combobox.Options className="absolute bg-white py-1 w-full">
                        {   reviews.map((review)=>(
                                <Combobox.Option key={review.slug} value={review}>
                                    {({active}) => (
                                    <span className={`block px-2 truncate w-full 
                                    ${active ? 'bg-orange-100' : ''}`}>{review.title}</span>
                                    )}
                                </Combobox.Option>
                        ))}
                    </Combobox.Options>
            </Combobox>
        </div>
    )
}

