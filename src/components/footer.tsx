import SocialMediaButton from './util/social-media-button';

export default function Footer() {
  return (
    <footer className="w-full py-4 flex flex-col justify-center items-center">
      <p className="text-secondary-text-500 text-sm sm:text-base">
        © 2025 Mario Nikolov. All rights reserved.
      </p>
      <div className="flex lg:hidden gap-x-4 mt-4">
        <SocialMediaButton
          icon="/icons/github.svg"
          href="https://github.com/marionikolov17"
        />
        <SocialMediaButton
          icon="/icons/linkedin.svg"
          href="https://www.linkedin.com/in/marionikolovdev"
        />
        <SocialMediaButton
          icon="/icons/instagram.svg"
          href="https://www.instagram.com/marionikolov17"
        />
      </div>
    </footer>
  );
}
