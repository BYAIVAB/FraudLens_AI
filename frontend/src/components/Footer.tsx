import UiFooter from "@/components/ui/footer";

function Footer() {
  return (
    <UiFooter
      companyName="FraudGuard"
      socialLinks={{
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      }}
    />
  );
}

export default Footer;