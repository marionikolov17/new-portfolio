import Link from 'next/link';
import BurgerMenuIcon from './util/burger-menu-icon';
import { useNavigation } from '@/context/navigation-context';
import {
  IoBriefcaseOutline,
  IoCodeOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoMailOutline,
} from 'react-icons/io5';
import { IconType } from 'react-icons';
import { CodeForkSvg } from './constants/tech-icons';

export default function Navigation() {
  const { isNavOpen } = useNavigation();

  return (
    <>
      <div
        className={`${isNavOpen ? 'fixed' : 'absolute'} lg:fixed top-0 left-0 mx-8 my-0 z-50`}
      >
        <BurgerMenuIcon />
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-64 z-40 transition-all duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="w-full h-full flex flex-col bg-background-300 z-30 transition-all duration-300 ease-in-out">
          <div className="grow flex flex-col gap-y-3 items-center mt-24 px-4">
            <NavItem href="/" Icon={IoHomeOutline} text="Home" />
            <NavItem
              href="/"
              Icon={IoInformationCircleOutline}
              text="About Me"
            />
            <NavItem href="/" Icon={IoBriefcaseOutline} text="Experience" />
            <NavItem href="/" Icon={IoCodeOutline} text="Projects" />
            <NavItem href="/" Icon={IoMailOutline} text="Contact" />
            <NavItem
              href="/"
              Icon={IoDocumentTextOutline}
              text="Certificates"
            />
          </div>
          <div className="w-full h-20 bg-background-400 flex items-center py-4 px-4 gap-x-4">
            <div className="h-full w-14 rounded-lg flex items-center justify-center border border-background-100">
              <CodeForkSvg className="text-primary-text-300 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h1 className="text-primary-text-500 text-sm">Mario Nikolov</h1>
              <p className="text-secondary-text-300 text-xs">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({
  href,
  Icon,
  text,
}: {
  href: string;
  Icon: IconType;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-start gap-x-4 py-2.5 px-4 hover:bg-background-400 transition-all duration-300 ease-in-out rounded-lg"
    >
      <Icon className="text-white text-xl" />
      <p className="text-white text-base">{text}</p>
    </Link>
  );
}
