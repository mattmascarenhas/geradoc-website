import SocialLinks from "./Social-Links";

export function Footer() {
  return (
    <div>
      <footer className=" text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Geradoc
          </p>
          <nav className="flex items-center gap-8">
            <span> About Us</span>
            <SocialLinks />
          </nav>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
