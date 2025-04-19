import BurgerMenuIcon from './util/burger-menu-icon';
import { useNavigation } from '@/context/navigation-context';

export default function Navigation() {
  const { isNavOpen } = useNavigation();

  return (
    <div className="fixed top-0 left-0 h-screen w-64 z-50">
      <div className="absolute top-0 left-0 mx-8 my-0 z-40">
        <BurgerMenuIcon />
      </div>
      <div
        className={`w-full h-full bg-background-300 z-30 transition-all duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
      ></div>
    </div>
  );
}
