
import './globals.css'
import NavBar from "@/components/NavBar"

export const metadata = {
  title:{
    default: 'Indie Gamer',
    template: '%s - Indie Gamer'
  },
  description: 'Only the best indie games, reviewed for you.'
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className="bg-orange-50 flex flex-col min-h-screen px-5 py-3">
        <header>
            <NavBar></NavBar>
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="py-3 text-center text-xs border-t">
          Game data and images courtesy of <a href='hhtps://rawg.io/' target="_blank" className="text-orange-800 hover:underline">RAWG</a>
        </footer>
      </body>
    </html>
  )
}