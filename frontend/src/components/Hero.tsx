import { HeroGeometric } from './ui/shape-landing-hero';

const Hero = () => {
  return (
    <HeroGeometric
      badge="Building Trust with TransparentAI"
      title1="Stop E-Commerce"
      title2="Fraud Losses Before They Happen"
      description={
        <>
          Protect your platform from fraudulent orders, fake reviews, and partner scams. Our AI-powered
          detection saves businesses an average of <span className="text-pink-500 font-bold">$2.3M</span> annually.
        </>
      }
      ctaText="Start Free Trial"
    />
  );
};

export default Hero;