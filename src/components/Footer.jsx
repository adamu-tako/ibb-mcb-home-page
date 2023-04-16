const Footer = () => {
  return (
    <div className="">
      <footer className="rounded-lg w-[97vw] p-12 px-10">
        <div className="grid place-items-center sm:flex sm:items-center sm:justify-between">
          <a href="/">
            <span className="font-mono font-semibold text-base">
              DEPARTMENT OF <br />
            </span>
            <span className="font-mono font-bold text-5xl">MICROBIOLOGY</span>
          </a>
          <div className="grid place-items-center mt-2">
            <p className="font-mono">
              Ibrahim Badamasi Babangida University, Lapai
            </p>
            <p className="font-mono">Faculty of Natural Sciences</p>
            <p className="font-mono">Biological Sciences Complex,</p>
            <p className="font-mono">Lapai, Niger State </p>
            <br />
            <p className="font-mono">08067406886</p>
            <p className="font-mono">info@ibbu.edu.ng</p>
            <p className="font-mono">microbiology@ibbu.edu.ng</p>
          </div>
          <div>
            <ul className="grid place-items-center mt-4">
              <header>
                <h2 className="text-black font-bold underline text-lg">
                  Useful Links
                </h2>
              </header>
              <li className="text-blue-800 hover:underline">
                <a href="#">Postgraduate Handbook</a>
              </li>
              <li className="text-blue-800 hover:underline">
                <a href="#">Undergraduate Handbook</a>
              </li>
              <li className="text-blue-800 hover:underline">
                <a href="#">Download a Form</a>
              </li>
              <li className="text-blue-800 hover:underline">
                <a href="#">Submit a complaint</a>
              </li>
              <li className="text-blue-800 hover:underline">
                <a href="#">Internet and Wireless</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-green-500 lg:my-8" />
        <span className="margin grid place-items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://ibbu.edu.ng" className="hover:underline">
            IBBUL Microbiology Dept™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
