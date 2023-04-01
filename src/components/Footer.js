import linkedIn from "../assets/brands/LI-Logo.png";
import gitHub from "../assets/brands/GitHub_Logo_White.png";

const Footer = () => {
  return (
    <footer id="Footer">
      <div id={"Brand-Flex"}>
        <div className={"brand-wrapper"}>
          <a className="brand-1" href="https://github.com/jolarios96">
            <img className="footer-img" src={gitHub} />
          </a>
        </div>
        <div className={"brand-wrapper"}>
          <a className={"brand-2"} href="#">
            <img className="footer-img" src={linkedIn} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
