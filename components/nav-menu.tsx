"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Echo Dot (5th Gen)",
    href: "/product/1",
    description: "Amazon's most popular smart speaker.",
  },
  {
    title: "Fire TV Stick 4K",
    href: "/product/2",
    description: "Amazon's most popular smart TV stick.",
  },
  {
    title: "Kindle Paperwhite",
    href: "/product/3",
    description: "Amazon's most popular e-reader.",
  },
  {
    title: "Amazon Basics AA Batteries (20-Pack)",
    href: "/product/4",
    description: "Amazon's most popular AA batteries.",
  },
];

export function NavMenu() {
  return (
    <div className="relative w-full py-4 px-4 flex items-center">
      <div className="flex items-center z-10">
        <Link
          href="/"
          className="mr-6 flex items-center group"
          aria-label="Home"
        >
          <span className="text-3xl select-none transition-transform group-hover:scale-110">
            🦆
          </span>
          <span className="ml-2 font-extrabold text-lg text-gray-900 hidden sm:inline">
            Transparency Duck
          </span>
        </Link>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent className="z-50">
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Transparency Duck
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Are your products working for you or against you? Lets
                          see the Quack meter!
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about" title="About">
                    About us
                  </ListItem>
                  <ListItem href="/quack-meter" title="Quack Meter">
                    Show us the Quack meter
                  </ListItem>
                  <ListItem href="/contact" title="Contact">
                    Contact us
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">About us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Popular Products</NavigationMenuTrigger>
              <NavigationMenuContent className="z-50">
                <ul className="grid w-[300px] gap-4">
                  <li>
                    {products.map((product) => (
                      <NavigationMenuLink asChild key={product.href}>
                        <Link href={product.href}>
                          <div className="font-medium">{product.title}</div>
                          <div className="text-muted-foreground">
                            {product.description}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <QuackMeButton className={navigationMenuTriggerStyle()} />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

import { useRouter } from "next/navigation";
import { fakeProducts } from "@/lib/constants";

function QuackMeButton({ className }: { className?: string }) {
  const router = useRouter();
  function handleClick() {
    const random = Math.floor(Math.random() * fakeProducts.length);
    const product = fakeProducts[random];
    if (product) {
      router.push(`/product/${product.id}`);
    }
  }
  return (
    <NavigationMenuLink asChild className={className}>
      <button
        type="button"
        className="w-full h-full text-left px-3 py-2 hover:bg-yellow-100 rounded transition-colors focus:bg-yellow-100"
        onClick={handleClick}
      >
        Quack Me!
      </button>
    </NavigationMenuLink>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
