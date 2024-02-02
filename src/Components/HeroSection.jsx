import Button from "./Button";

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-1 min-h-[80svh] lg:grid-cols-12">
        <div className="flex flex-col gap-2 items-start h-full justify-center p-3 lg:col-span-6">
          <p className="text-textYellow text-4xl">Hello, I am</p>
          <h1 className="text-[100px] text-white font-bold">
            Farid <br /> Lotfi
          </h1>
          <p className="text-textGray text-4xl mb-5">Frontend Developer</p>
          <Button
            title="Hire Me"
            textColor="black"
            backColor="#fec544"
            borderRadius="25px"
            padding="10px 50px"
          />
        </div>

        <div className="hidden lg:col-span-6 lg:flex ">
          <img src="assets/hero-img.jpg" />
        </div>
      </div>
    </>
  );
}
