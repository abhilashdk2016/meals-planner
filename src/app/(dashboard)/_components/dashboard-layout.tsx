'use client';

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import * as Collapsible from "@radix-ui/react-collapsible";
import { motion } from "framer-motion";
import {
  Apple,
  Boxes,
  ChevronDown,
  ChevronLeft,
  LogOut,
  Menu,
  Ruler,
  Utensils,
} from "lucide-react";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";

type RouteGroup = {
    group: string;
    items: {
        href: string;
        label: string;
        icon: ReactNode
    }[];
}

const ROUTE_GROUPS: RouteGroup[] = [
  {
    group: "Foods Management",
    items: [
      {
        href: "/admin/foods-management/foods",
        label: "Foods",
        icon: <Apple className="mr-2 size-3" />,
      },
      {
        href: "/admin/foods-management/categories",
        label: "Categories",
        icon: <Boxes className="mr-2 size-3" />,
      },
      {
        href: "/admin/foods-management/serving-units",
        label: "Serving Units",
        icon: <Ruler className="mr-2 size-3" />,
      },
    ],
  },
  {
    group: "Meals Management",
    items: [
      {
        href: "/client",
        label: "Meals",
        icon: <Utensils className="mr-2 size-3" />,
      },
    ],
  },
];

type RouteGroupProps = RouteGroup;
const RouteGroup = ({ group, items }: RouteGroupProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <Button
          className="text-foreground/80 flex w-full justify-between font-normal"
          variant="ghost"
        >
          {group}
          <motion.div animate={{ rotate: open ? 180 : 0 }}>
            <ChevronDown />
          </motion.div>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content forceMount>
        <motion.div
          className={`flex flex-col gap-2 ${
            !open ? "pointer-events-none" : ""
          }`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {items.map((item) => (
            <Button
              className="w-full justify-start font-normal"
              variant="link"
              asChild
              key={item.href}
            >
              <Link
                href={item.href}
                className={`flex items-center rounded-md px-5 py-1 transition-all ${
                  pathname === item.href
                    ? "bg-foreground/10 hover:bg-foreground/5"
                    : "hover:bg-foreground/10"
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </Link>
            </Button>
          ))}
        </motion.div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

type DashboardLayoutProps = {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [open, setOpen] = useState(false);
    return <div className="flex">
      <div className="bg-background fixed z-10 h-13 flex w-screen items-center justify-between border px-2">
        <Collapsible.Root className="h-full" open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className="m-2" asChild>
                <Button size={'icon'} variant={'outline'}>
                    <Menu />
                </Button>
            </Collapsible.Trigger>
        </Collapsible.Root>
        <div className="flex">
          <ThemeToggle />
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex h-9 items-center gap-2 px-2">
                      <Avatar className="size-8">
                          <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline">Admin</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="flex items-center gap-3 px-2 py-1.5">
                      <Avatar className="size-10">
                          <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                          <p className="text-sm font-medium">Admin</p>
                          <p className="text-muted-foreground text-xs">admin@test.com</p>
                      </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive" onClick={() => {}}>
                      <LogOut className="mr-2 size-4" />
                  </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
      </div>
      </div>
      <Collapsible.Root className="fixed top-0 left-0 z-20 h-dvh" open={open} onOpenChange={setOpen}>
          <Collapsible.Content forceMount>
              <div className={`bg-background fixed top-0 left-0 h-screen w-64 border p-4 transition-transform duratio-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                  <div className="flex items-center justify-center">
                      <h1 className="font-semibold">Admin Dashboard</h1>
                      <Collapsible.Trigger asChild>
                          <Button size={'icon'} variant={'outline'}>
                              <ChevronLeft />
                          </Button>
                      </Collapsible.Trigger>
                  </div>
                  <Separator className="my-2" />
                  <div className="mt-4">
                      {
                          ROUTE_GROUPS.map((group) => (
                              <RouteGroup key={group.group} group={group.group} items={group.items} />
                          ))
                      }
                  </div>
              </div>
          </Collapsible.Content>
      </Collapsible.Root>
      <main className={`transition-margin mt-13 flex-1 p-4 ${open ? 'ml-64' : 'ml-0'} `}>
          {children}
      </main>
    </div>
}
    
export default DashboardLayout;