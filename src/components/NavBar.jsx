import Link from "next/link"
import {orbitron} from '@/app/font'


export default function NavBar(){
  return(
      <nav className="content-center mb-3">
          <ul className="flex justify-between items-center gap-3">
              <li className="flex gap-2 items-center">
                  <p className={`font-bold text-base text-orange-800 m-0 ${orbitron.className}`}>Indie Gamer</p>
                  <Link href='/' className="text-orange-800 font-bold hover:underline">Home</Link>
              </li>
              <ul className="flex justify-center  gap-3">
                  <li>
                      <Link href='/reviews' className="text-orange-800 font-bold hover:underline">Reviews</Link>
                  </li>
                  <li>
                      <Link href='/about' className="text-orange-800 font-bold hover:underline">About</Link>
                  </li>
            </ul>
          </ul>
      </nav>
  )
}