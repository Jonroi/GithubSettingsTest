import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/index.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AltZone',
    description: 'Altzone tarjoaa pelaajille mahdollisuuden liittyä yhteisöön, pelata pelejä ja tutustua uusiin sarjakuviin.',
    keywords: 'altzone, peli, yhteisö, sarjakuvat, galleriat, pelaa, rekisteröidy, kirjaudu sisään',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
