import LayoutHome from "@/components/layout-home";
import { NavigationProvider } from "@/context/navigation-context";

export default function Home() {
  return (
    <NavigationProvider>
      <LayoutHome />
    </NavigationProvider>
  );
}
