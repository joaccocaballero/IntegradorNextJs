import Link from "next/link";
import Heading from "@/components/Heading";
import {getReviews} from "@/lib/reviews";
import Image from "next/image";

export const metadata = {
    title: 'Reviews'
}

export default async function ReviewsPage() {
    const reviews = await getReviews()
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-col justify-center items-center sm:flex-row gap-3">
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
