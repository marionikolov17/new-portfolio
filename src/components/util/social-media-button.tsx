import Image from 'next/image';
import Link from 'next/link';

export default function SocialMediaButton({
  icon,
  href,
}: {
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="w-7 h-7 flex items-center justify-center group"
    >
      <Image
        src={icon}
        alt="social-media-icon"
        width={20}
        height={20}
        className="group-hover:translate-y-[-5px] transition-all duration-300"
      />
    </Link>
  );
}
