import Link from "next/link";

export default function ReviewsPage() {
    return (
        <>
            <h1>Reviews</h1>
            <ul>
                <li>
                    <Link href="/reviews/hollow-knight">
                        Hollow Knight
                    </Link>
                </li>
                <li>
                    <Link href="/reviews/stardrew-valley">
                        Stardrew Valley
                    </Link>
                </li>
            </ul>
        </>
    );
}
