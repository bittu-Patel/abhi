import Link from "next/link"
import { FaFacebook, FaLinkedinIn, FaGithub, } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Bittu Patel</Link>
                </h1>
                <div className="flex border-rounded flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link className="text-white/50 hover:text-white" href="https://www.facebook.com/profile.php?id=100015418443412">
                        <FaFacebook />
                    </Link>
                    <Link className="text-white/50 hover:text-white" href="https://github.com/bittu-Patel">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/50 hover:text-white" href="https://www.linkedin.com/in/bittu-kumar-98ab54244/">
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
        </nav>
    )
}