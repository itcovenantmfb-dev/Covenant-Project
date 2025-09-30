import { Metadata } from "next";
import NumbersSection from "../_components/numbers-section";
import Testimonials from "../_components/testimonials";
import AboutHeroSection from "./_components/about-us";
import OurHistorySection from "./_components/our-history";
import WhoWeAreSection from "./_components/who-we-are";
import Carousel from "../_components/carousel";
import MeetTheTeamSection from "./_components/meet-the-team";
import TimelineSection from "./_components/timeline-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Covenant Microfinance Bank's history, mission, vision, and leadership team. Discover how we've been empowering communities through accessible financial services.",
  keywords: [
    "about covenant microfinance bank",
    "company history",
    "mission vision",
    "leadership team",
    "microfinance expertise",
    "financial inclusion",
    "community banking",
    "bank management",
    "corporate profile"
  ],
  openGraph: {
    title: "About Us - Covenant Microfinance Bank",
    description: "Learn about Covenant Microfinance Bank's history, mission, vision, and leadership team. Discover how we've been empowering communities through accessible financial services.",
    url: "/about-us",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Covenant Microfinance Bank",
      },
    ],
  },
  twitter: {
    title: "About Us - Covenant Microfinance Bank",
    description: "Learn about Covenant Microfinance Bank's history, mission, vision, and leadership team.",
  },
};

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <WhoWeAreSection />
      <NumbersSection />
      <OurHistorySection />
      <TimelineSection />
      <MeetTheTeamSection />
      <Testimonials />
      <Carousel />
    </div>
  );
};

export default AboutPage;
