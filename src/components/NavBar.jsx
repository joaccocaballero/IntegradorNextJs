import Link from "next/link"

export default function NavBar(){
  return(
      <nav className="content-center">
          <ul className="flex justify-center  gap-3">
              <li>
                  <Link href='/' className="text-orange-800 font-bold hover:underline">Home</Link>
              </li>
              <li>
                  <Link href='/reviews' className="text-orange-800 font-bold hover:underline">Reviews</Link>
              </li>
              <li>
                  <Link href='/about' className="text-orange-800 font-bold hover:underline">About</Link>
              </li>
          </ul>
      </nav>
  )
}