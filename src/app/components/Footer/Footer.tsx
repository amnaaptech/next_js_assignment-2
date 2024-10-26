// components/Footer.js
 // Footer.tsx aur Header.tsx dono me
// components/Footer.js
// import Link from "next/link";
// export default function Footer() {
//   return (
// <div>
// <footer className="bg-pink-500 text-white p-4 text-center">
//         <p>&copy; {new Date().getFullYear()} Barbie Website. All rights reserved.</p>
//       </footer>
// </div>
//   );
// }
  
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Barbie Website. All rights reserved.</p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>

            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
              
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;