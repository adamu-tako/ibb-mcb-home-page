import "tw-elements";
import ImagesCarousel from "./ImagesCarousel";

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
        <div className="-z-1 md:w-[60%] w-full h-fit md:h-[100%] ">
          <ImagesCarousel data={images} />
        </div>
        <div className="ml-0 md:ml-16 w-[95%] md:w-[25%] mt-6 h-fit bg-slate-50 flex flex-col gap-2 p-2">
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
    </>
  );
};

export default NewsCarousel;
