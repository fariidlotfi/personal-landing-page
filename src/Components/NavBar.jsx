import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhone } from "react-icons/fa6";

export default function NavBar() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 bg-mainBgColor shadow items-center p-3">
          <h1 className="text-white md:col-span-3">Farid Lotfi</h1>

          <nav className="hidden md:block md:col-span-6 border-r">
            <ul className="list-none text-white  md:flex md:gap-3 justify-center">
              <Link to="/">
                <li className="text-textYellow">Home</li>
              </Link>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Resume</li>
              </a>
              <a href="#">
                <li>Portfolio</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
            </ul>
          </nav>

          <div className="text-white flex justify-end md:col-span-3 md:hidden">
            <RxHamburgerMenu size={"1.5rem"} />
          </div>

          <div className="text-white justify-end md:col-span-3 hidden md:flex md:items-center md:gap-2">
            <FaPhone size={"1.2rem"} className="text-textYellow" />
            <a href="tel:09195399423">0919 539 9423</a>
          </div>
        </div>
      </div>
      <div className="border-b"></div>
    </>
  );
}
