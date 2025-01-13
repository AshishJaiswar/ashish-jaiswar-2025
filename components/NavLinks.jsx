import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "My work",
    href: "/work",
    description: "View my work and experience.",
    target: "_self",
  },
  {
    title: "Blogs",
    href: "https://medium.com/@ashishjaiswar",
    description:
      "Read my blogs on various topics like web development, design, and more.",
    target: "_blank",
  },
  {
    title: "Resume",
    href: "https://media.graphassets.com/coeeoLRTeql2Qnmqe4EM",
    description:
      "View my resume and download it in PDF format for offline viewing.",
    target: "_blank",
  },
  {
    title: "About me",
    href: "/me",
    description: "Learn more about me and my journey.",
    target: "_self",
  },
];

export default function NavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[270px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  target={component.target}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <ul className="flex">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
                target={component.target}
              ></ListItem>
            ))}
          </ul>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-bisque/40 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground md:hidden">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
