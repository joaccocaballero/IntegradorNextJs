import Link from "next/link";
import Heading from "@/components/Heading";
import {getReviews, getSearchableReviews} from "@/lib/reviews";
import Image from "next/image";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
    title: 'Reviews'
}
const PAGE_SIZE = 6
export default async function ReviewsPage({searchParams}) {
    const page = parsePageParam(searchParams.page)
    const {reviews, pageCount} = await getReviews(PAGE_SIZE, page)
    return (
        <>
            <Heading>Reviews</Heading>
            <div className="flex justify-between pb-3">
                <PaginationBar href={'/reviews'} page={page} pageCount={pageCount} />
                <SearchBox/>
            </div>
            <ul className="flex  flex-wrap flex-col justify-center items-center sm:flex-row gap-3">
                {reviews.map((review)=>{
                    return(
                        <li key={review.gameName} className="bg-white border rounded shadow w-60 hover:shadow-xl">
                            <Link href={'/reviews/'+review.slug} className="hover:underline">
                                <Image src={review.image} alt="gameimg" className="rounded-t " width="640" height="360" />
                                <h2 className="text-center py-1">
                                    {review.title}
                                </h2>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

function parsePageParam(paramValue){
    if(paramValue){
        const page = parseInt(paramValue)
        if(isFinite(page) && page > 0){
            return page;
        }
    }
    return 1
}