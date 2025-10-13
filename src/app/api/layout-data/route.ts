import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },

  {
    id: 5,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

];


const footerData = {
    name: "GWS",
    tagline: "Build something together?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "sadeedb626@gmail.com",
            href: ""
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Toronto, Canada",
            href: "https://maps.app.goo.gl/hpDp81fqzGt5y4bC8"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Terms", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", href: "https://x.com/" }
    ],
    copyright: "© GWS copyright 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};