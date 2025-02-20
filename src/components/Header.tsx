import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="py-3 px-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/"></Link>
            <Menu className="h-6 w-6 md:hidden" />
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-8">
                <li>
                  <Link href="/link1">Products</Link>
                </li>
                <li>
                  <Link href="/link2/new">New Product</Link>
                </li>
                <li>
                  <Button className="cursor-pointer hover:bg-destructive/90">
                    Sign In
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
