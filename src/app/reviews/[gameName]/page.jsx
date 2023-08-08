
import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview } from "@/lib/reviews";


export async function generateMetadata({params: {gameName}}){
    const review = await getReview(gameName);
    return {
        title: review.title,
    };
}

export default async function ReviewPage({params: {gameName}}) {
    const review = await getReview(gameName);
    return (
        <>
            <Heading>{review.title}</Heading>
            <div className="flex gap-3 items-baseline">
                <p className='pb-2 italic text-justify mb-0'> {review.date}</p>
                <ShareButtons/>
            </div>
            <img src={review.image} alt="gameimg" className="rounded mb-2" width="340" height="260"/>
            <article dangerouslySetInnerHTML={{__html: review.body}}
                className='max-w-screen-sm prose prose-slate text-justify [&>p]:m-0'
            />
        </>
    );
}
