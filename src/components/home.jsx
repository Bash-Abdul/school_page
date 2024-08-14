import home_image from "../assets/home_image.png";

function Home() {
  return (
    <div className="bg-colorBg">
      <div className="px-4 lg:px-32 max-w-screen-2xl mx-auto max-h-[90vh] h-screen">
        <div className="py-12 h-full flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={home_image} alt="" />
          </div>

          {/* HOME TEXTS */}
          <div className="md:w-1/2 text-center md:text-start">
            <h3 className="text-4xl font-semibold mb-4 md:w-[90%] leading-snug">
              Streamline your Institutions Education Process with our <span className="text-figmaBlue">School
              Management Software</span>
            </h3>
            <p className="md:w-[70%] mb-4 leading-normal">
              Explore a world of seamless management of school activities which
              makes all processing easy.
            </p>
            <button className="bg-figmaBlue text-white px-4 py-2 text-center duration-300 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
