'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
    onStartCall: () => void;
}

const backgrounds = [
    '/background.jpg',
    '/side1.jpg',
    '/side2.jpg',
    '/side3.jpg',
];

export function Hero({ onStartCall }: HeroProps) {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden font-libre-caslon text-white">
            {/* Background Image Carousel */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentBgIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 -z-10"
                >
                    <Image
                        src={backgrounds[currentBgIndex]}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                </motion.div>
            </AnimatePresence>

            <div className="container mx-auto flex h-full items-center px-12">
                <div className="grid w-full grid-cols-12 gap-3">
                    {/* Main Content */}
                    <div className="col-span-8 flex flex-col justify-center pt-15">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-2 text-9xl tracking-widest uppercase text-white drop-shadow-lg"
                        >
                            Mythera
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-8 text-4xl tracking-wider text-gray-200"
                        >
                            The Lost Realms
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-12 max-w-xl text-lg leading-relaxed text-gray-300 tracking-wide"
                        >
                            An epic open-world fantasy RPG where ancient powers clash, kingdoms fall, and heroes rise.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center gap-6"
                        >
                            <button
                                onClick={onStartCall}
                                className="group flex items-center gap-3 bg-cyan-400 px-8 py-4 text-black transition-all hover:bg-cyan-300"
                            >
                                <div className="relative h-6 w-6">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-bold tracking-widest uppercase">Play Now</span>
                            </button>

                            {/* <button className="flex items-center gap-3 border border-white/30 px-8 py-4 transition-all hover:bg-white/10">
                                <Play className="h-5 w-5 fill-current" />
                                <span className="text-sm font-bold tracking-widest uppercase">Watch Trailer</span>
                            </button> */}
                        </motion.div>
                    </div>

                    {/* Side Content - Trailers */}
                    <div className="col-span-4 flex flex-col justify-center gap-3 pt-5 ml-auto w-full max-w-md">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="mb-4 text-right text-sm tracking-widest uppercase text-gray-400"
                        >
                            Trailers
                        </motion.div>

                        {[
                            { src: '/side1.jpg', id: '01' },
                            { src: '/side2.jpg', id: '02' },
                            { src: '/side3.jpg', id: '03' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                                className="group relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/50 transition-transform hover:scale-105 cursor-pointer"
                            >
                                <Image
                                    src={item.src}
                                    alt={`Trailer ${item.id}`}
                                    fill
                                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="rounded-full border border-white/50 bg-black/50 p-3 backdrop-blur-sm">
                                        <Play className="h-6 w-6 fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 text-xs font-bold text-white">
                                    {item.id}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute bottom-12 right-12 flex gap-8 text-white/60"
            >
                <Facebook className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            </motion.div>
        </div>
    );
}
