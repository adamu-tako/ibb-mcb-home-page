import "tw-elements";
import ImagesCarousel from "./ImagesCarousel";
import Overview from "./Overview";

const NewsCarousel = () => {
  const images = [
    {
      image:
        "https://res.cloudinary.com/dye8ruhut/image/upload/v1666293682/00000PORTRAIT_00000_BURST20191012171550310_j5tcri.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dye8ruhut/image/upload/v1666293722/00000PORTRAIT_00000_BURST20191020215647277_ktyxx1.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dye8ruhut/image/upload/v1666293701/00000PORTRAIT_00000_BURST20191015140623097_fyzvos.jpg",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-full sm:flex-row mt-5">
        <div className="w-[60%] h-[100%] ">
          <ImagesCarousel data={images} />
        </div>
        <div className="border-green-300 border ml-16 w-[25%] mt-6 h-fit bg-slate-400 flex flex-col gap-2 p-2">
          <ul>
            <header>
              <h2 className="text-black font-bold underline text-lg">
                Useful Links
              </h2>
            </header>
            <li className="text-blue-800 hover:bg-green-300">
              <a href="#">Postgraduate Handbook</a>
            </li>
            <li className="text-blue-800 hover:bg-green-300">
              <a href="#">Undergraduate Handbook</a>
            </li>
            <li className="text-blue-800 hover:bg-green-300">
              <a href="#">Download a Form</a>
            </li>
            <li className="text-blue-800 hover:bg-green-300">
              <a href="#">Submit a complaint</a>
            </li>
            <li className="text-blue-800 hover:bg-green-300">
              <a href="#">Internet and Wireless</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 w-[80%] ml-10">
        <Overview />
      </div>
    </>
  );
};

export default NewsCarousel;
