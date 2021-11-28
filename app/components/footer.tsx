import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const navigation = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/luke_bennett_",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/luke_bennett_",
    icon: FaTwitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/lukebennett88",
    icon: FaGithub,
  },
];

interface FooterProps {
  year: number;
}

export function Footer({ year }: FooterProps): JSX.Element {
  return (
    <footer>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">&copy; {year} Luke Bennett. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
