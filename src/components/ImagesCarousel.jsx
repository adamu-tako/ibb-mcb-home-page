import { Carousel } from "react-carousel-minimal";

function ImagesCarousel({ data }) {
  const slideNumberStyle = {
    fontSize: "10px",
    fontWeight: "bold",
  };

  return (
    <div className="w-[100%] mx-12 h-[fit-content] display-[inline-block]">
      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="70%"
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        automatic={true}
        dots={true}
        slideImageFit="cover"
        thumbnails={true}
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}

export default ImagesCarousel;
