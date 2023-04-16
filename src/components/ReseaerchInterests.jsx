import ResearchCard from "./ResearchInterestCard";

const ResearchInterest = () => {
  return (
    <div class="w-[99%] py-24 bg-green-50">
      <div class="text-center mb-20">
        <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
          Research Interests
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          The following card sows the different fields in which different
          members of faculty are working or have worked on.
        </p>
        <div class="flex mt-4 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div class="flex flex-wrap justify-start">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <ResearchCard key={num} />
        ))}
      </div>
    </div>
  );
};

export default ResearchInterest;
