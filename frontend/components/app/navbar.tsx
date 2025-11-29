import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 text-white font-libre-caslon">
            {/* Logo */}
            <div className="text-2xl tracking-widest uppercase">
                Mythera
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-12 text-sm tracking-widest uppercase">
                <Link href="#" className="border-b border-white pb-1">Home</Link>
                <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">World</Link>
                <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">Features</Link>
                <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">Characters</Link>
                <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">Media</Link>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4">
                <div className="border border-white/20 bg-black/20 px-4 py-2 text-sm tracking-widest uppercase backdrop-blur-sm">
                    Ferdi
                </div>
                <div className="relative h-10 w-10 overflow-hidden rounded border border-white/20">
                    {/* Placeholder for user avatar, using a colored div if image fails or just a placeholder */}
                    <div className="h-full w-full bg-slate-700" />
                </div>
            </div>
        </nav>
    );
}
