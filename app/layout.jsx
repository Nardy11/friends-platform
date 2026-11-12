import './globals.css';
import ThemeToggle from '../components/ThemeToggle';
export const metadata={title:'Friends — Make room for connection',description:'Find meaningful offline connections through volunteering, visits and shared social activities.'};
export default function RootLayout({children}){return <html lang="en"><body>{children}<ThemeToggle/></body></html>}
