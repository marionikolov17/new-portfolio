import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-1/2 flex flex-col gap-y-4">
                <p className="text-secondary-text-500 text-lg">Hi, my name is</p>
                <h1 className="text-primary-text-500 text-6xl font-bold">Mario Nikolov</h1>
                <h2 className="text-secondary-text-400 text-5xl font-bold">Junior Software Engineer</h2>
                <p className="max-w-96 text-secondary-text-700 mt-4">
                    I specialize in designing and developing of complex systems and applications. I always try to look for what is happening behind the scenes.
                </p>
                <Link href="/" className="flex items-center gap-x-4 mt-8">
                    <p className="text-primary-text-500 capitalize hover:underline text-sm">See more about me</p>
                    <Image
                        src="/icons/arrow-right.svg"
                        alt="arrow-right"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
        </div>
    )
}
