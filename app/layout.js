import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import '@/app/_styles/global.css'

export const metadata = {
  title: "Hotel Name"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo/>
        <Navigation/>
        </header>
        <main>{children}</main>
        <footer>Copyright</footer>
      </body>
    </html>
  )
}
