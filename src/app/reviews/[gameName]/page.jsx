import { notFound } from 'next/navigation'
import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview } from "@/lib/reviews";
import Image from "next/image";


export async function generateMetadata({params: {gameName}}){
    const review = await getReview(gameName);
    if(!review){
        notFound();
    }
    return {
        title: review.title,
    };
}

export default async function ReviewPage({params: {gameName}}) {
    const review = await getReview(gameName);
    if(!review){
        notFound()
    }
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className="font-semibold pb-3">{review.subtitle}</p>
            <div className="flex gap-3 items-baseline">
                <p className='pb-2 italic text-justify mb-0'> {review.date}</p>
                <ShareButtons/>
            </div>
            <div className="flex justify-center items-center">
                <Image src={review.image} alt="gameimg" className="rounded mb-2" width="440" height="360" />
            </div>
            
            <article dangerouslySetInnerHTML={{__html: review.body}}
                className='text-justify gap-3 [&>p]:m-0 [&>p]:p-1'
            />
        </>
    );
}
