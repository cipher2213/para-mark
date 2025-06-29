const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Menu", "About Us", "Contact", "Catering", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a
            href="#"
            className="text-gray-900"
          >
            Paradise Cafe
          </a>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <a href="https://www.facebook.com/share/1BkwANYvJE/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook text-lg" />
            </a>
            <a href="https://www.instagram.com/paradise_cafe_mh22?igsh=MTh0MHJ0bmV0ZjR6cg==l">
              <i className="fa-brands fa-instagram text-lg" />
            </a>
          </div>
        </div>
        <p className="text-center mt-12 font-normal !text-gray-700">
          &copy; {CURRENT_YEAR} Paradise Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
