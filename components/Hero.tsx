const Hero = ({ personalInformation, spanRef }: any) => {
  return (
    <section className="font-sans" id="hero">
      <div
        className="bg-fixed bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center px-6 lg:px-0"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
          {personalInformation?.name}{" "}
          {personalInformation?.surname}{" "}
        </h1>
        <p className="mt-4 text-2xl md:text-4xl text-white">
          <span className="block text-center lg:inline lg:text-left md:mb-4">
            I&apos;m &nbsp;
          </span>
          <span
            ref={spanRef}
            className="underline underline-offset-8 decoration-[#41cc76]"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
