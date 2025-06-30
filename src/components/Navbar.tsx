"use client";
import {
  Navbar,
  NavBody,
  // NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";


export function NavbarDemo() {
  // const navItems = [
  //   {
  //     name: "Features",
  //     link: "#features",
  //   },
  //   {
  //     name: "Pricing",
  //     link: "#pricing",
  //   },
  //   {
  //     name: "Contact",
  //     link: "#contact",
  //   },
  // ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full ">
      <Navbar className="text-white border-neutral-800">
        {/* Desktop Navigation */}
        <NavBody className="bg-white/70">
          <NavbarLogo />
          {/* <NavItems items={navItems} /> */}
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              className=" bg-black text-white border-white hover:bg-gray-800"
              onClick={() => window.location.href = 'https://app.getden.io/login'}
            >
              Login
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => window.location.href = 'https://app.getden.io/signup'}
            >
              Get started for free
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="text-black dark:text-white"
          >
            {/* {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative component-text font-medium"
              >
                <span className="block">{item.name}</span>
              </a>
            ))} */}
            <div className="flex w-full flex-col gap-4 ">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = 'https://app.getden.io/login';
                }}
                variant="primary"
                className="w-full text-black"
              >
                Login
              </NavbarButton>
                <NavbarButton
                  onClick={() => { setIsMobileMenuOpen(false); window.location.href = 'https://app.getden.io/signup'; }}
                  variant="primary"
                  className="w-full"
                >
                  Get started for free
                </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
