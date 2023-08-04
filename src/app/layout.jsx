import Link from "next/link"
import './globals.css'

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        <header>
          <ul>
            <li>
              <Link href='/'>HOME</Link> 
            </li>
            <li>
              <Link href='/reviews'>REVIEWS</Link>
            </li>
            <li>
              <Link href='/about'>ABOUT</Link>
            </li>
          </ul>
        </header>
        <main>
          {children}
        </main>
        <footer>
          Game data and images courtesy of <a href='hhtps://rawg.io/' target="_blank">RAWG</a>
        </footer>
      </body>
    </html>
  )
}