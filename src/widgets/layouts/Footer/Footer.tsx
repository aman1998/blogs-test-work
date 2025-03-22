import { Link } from "@heroui/link";

const Footer = () => (
  <footer className="w-full flex items-center justify-center py-3">
    <Link
      isExternal
      className="flex items-center gap-1 text-current"
      href="https://github.com/aman1998"
      title="heroui.com homepage"
    >
      <span className="text-default-600">Powered by </span>
      <p>Amangeldi</p>
    </Link>
  </footer>
);

export default Footer;
