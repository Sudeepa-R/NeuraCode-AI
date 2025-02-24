import githublogo from "../../../assets/githublogo.png";
import microsoftLogo from "../../../assets/microsoftLogo.png";

interface SocialMedia {
  key: string;
  icon: string;
  socialMediaType: string;
  navigateTo?: string;
}

const SocialMediaOptions: SocialMedia[] = [
  {
    key: "google",
    icon: "https://app.codeconvert.ai/icons/google.svg",
    socialMediaType: "Google",
    navigateTo: "",
  },
  {
    key: "microsoft",
    icon: microsoftLogo,
    socialMediaType: "Microsoft",
    navigateTo: "",
  },
  {
    key: "github",
    icon: githublogo,
    socialMediaType: "GitHub",
    navigateTo: "",
  },
];

export default SocialMediaOptions;
