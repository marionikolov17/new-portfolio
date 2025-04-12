import Link from "next/link"
import SocialMediaButton from "./util/social-media-button"

export default function FloatingElements() {
    return (
        <>
            <FloatingSocialMedia />
            <FloatingEmail />
        </>
    )
}

function FloatingSocialMedia() {
    return (
        <div className="fixed bottom-0 left-0 ps-12 flex flex-col items-center h-max w-10 gap-y-4">
            <SocialMediaButton icon="/icons/github.svg" href="https://github.com/marionikolov17" />
            <SocialMediaButton icon="/icons/linkedin.svg" href="https://github.com/marionikolov17" />
            <SocialMediaButton icon="/icons/instagram.svg" href="https://github.com/marionikolov17" />
            <div className="w-[1px] h-32 bg-primary-text-500"></div>
        </div>
    )
}

function FloatingEmail() {
    return (
        <div className="fixed top-0 right-0 pe-12 flex flex-col items-center h-max w-10 gap-y-4">
            <div className="w-[1px] h-24 bg-primary-text-500"></div>
            <Link href="mailto:marionikolovdev@gmail.com" className="rotate-90 text-primary-text-500 text-sm mt-24 hover:mt-28 transition-all duration-300">marionikolovdev@gmail.com</Link>
        </div>
    )
}
