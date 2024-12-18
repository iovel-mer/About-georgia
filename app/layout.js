import Header from "./_components/Header";

import './_styles/globals.css';


export const metadata = {
  title: "Hotel Name"
}

import { Josefin_Sans} from "next/font/google"

const josefin = Josefin_Sans({
  subsets:['latin'], 
  display:'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100
       min-h-screen`}>
        <Header/>
           <main>{children}</main>
        <footer>Copyright</footer>
      </body>
    </html>
  )
}
