import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "Proven results you can trust.",
    description: "Helping clients secure their future through smart insurance and wealth strategies.",
    scoreData: [
       {
            number: 5,
            numberValue: 'M',
            scoreDescp: "Total client assets protected and invested"
        },
        
             {
            number: 100,
            numberValue: '%',
            scoreDescp: "Commitment to ethical and personalized service"
        },
        {
            number: 500,
            scoreDescp: "Families and professionals guided toward financial stability"
        },
   
     
    ]
};

const servicesData = {
    number: '02',
    name: "Services",
    heading: "What We Offer",
    description: "Helping individuals and business owners protect their income, grow their wealth, and secure their future with personalized financial solutions.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
        heading: "Insurance Planning",
            descp: "Comprehensive life, health, and critical illness coverage designed to protect your family and assets from life’s uncertainties."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
             heading: "Investment Solutions",
            descp: "Build long-term wealth through smart investment strategies like RRSP, TFSA, RESP, and corporate investment planning."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
              heading: "Tax & Retirement Planning",
            descp: "Reduce tax liabilities and plan ahead for a comfortable retirement with tailored financial guidance."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
           heading: "Career Opportunities",
            descp: "Join our growing team and build a rewarding career in financial services with mentorship, training, and flexible growth options."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Client stories",
        title: "They helped me organize my finances and save more effectively for my family's future.",
        author: "Daniel Roberts",
        company: "Business Owner"
    },
    data_2: {
        preTitle: "Client stories",
        title: "Thanks to their guidance, I built a solid investment plan and reduced my taxes significantly.",
        author: "Sophia Lee",
        company: "Senior Consultant"
    },
    data_3: {
        preTitle: "Client stories",
        title: "Professional, clear, and reliable. I now feel fully confident about my financial goals.",
        author: "Michael Chen",
        company: "Entrepreneur"
    },
};


const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Martha Finley",
            position: "Creative Director",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Floyd Miles",
            position: "Marketing Strategist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "Glenna Snyder",
            position: "Lead Designer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Albert Flores",
            position: "UX/UI Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Launch",
            planPrice: "$699",
            planDescp: "Ideal for startups and small businesses taking their first steps online.",
            planIncludes: ["Competitive research & insights","Wireframing and prototyping","Basic tracking setup (Google Analytics, etc.)","Standard contact form integration"]
        },
        {
            planName: "Scale",
            tag: "Most popular",
            planPrice: "$1,699",
            cancelPrice: "$2,199",
            planDescp: "Perfect for growing brands needing more customization and flexibility.",
            planIncludes: ["Everything in the Launch Plan","Custom design for up to 10 pages","Seamless social media integration","SEO enhancements for key pages"]
        },
        {
            planName: "Elevate",
            planPrice: "$3,499",
            planDescp: "Best suited for established businesses wanting a fully tailored experience.",
            planIncludes: ["Everything in the Scale Plan","E-commerce functionality (if needed)","Branded email template design","Priority support for six months after launch"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What services do you provide?",
            faq_ans: "We help clients with financial planning, tax strategies, wealth building, and creating multiple income streams through personalized solutions."
        },
        {
            faq_que: "Who can benefit from your services?",
            faq_ans: "We work with professionals, business owners, and families who want to grow their wealth, protect their assets, and plan for financial freedom."
        },
        {
            faq_que: "Do you charge for consultations?",
            faq_ans: "Our first consultation is completely free. It helps us understand your goals and see how we can best assist you."
        },
        {
            faq_que: "How do you help reduce taxes?",
            faq_ans: "We use proven strategies to optimize income, investments, and savings—helping clients legally minimize their taxes and maximize returns."
        },
        {
            faq_que: "Can I get ongoing financial support?",
            faq_ans: "Yes, we provide continuous support, regular reviews, and updates to keep your financial plan aligned with your goals."
        }
    ]
};

const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Courtney Henry",
        position:"Onboarding & Success Manager"
    }
}

const aboutusStats = [
    {
        number: 45,
        postfix:"+",
        title: 'Presence in global markets',
        descp: "Expanding reach across international regions with localized expertise and worldwide impact."
    },
    {
        number: 15,
        prefix: "$",
        postfix: "M",
        title: 'In strategic investments',
        descp: "Driving growth with curated partnerships and high-performing, audience-driven initiatives."
    },
    {
        number: 158,
        postfix: "+",
        title: 'Trusted brand collaborations',
        descp: "Shaping industry conversations through innovation, creativity, and lasting influence."
    },
]

const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};