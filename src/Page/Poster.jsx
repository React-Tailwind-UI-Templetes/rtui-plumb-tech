import Details from "./Details";

const Poster = () => {
  return (
    <div className="bg-[#F7FBFF]" id="About">
      <div className="container mx-auto md:grid md:grid-cols-12 flex flex-col  px-10">
      <div className="relative grid col-span-5 gap-3">
        <img
          src="https://cdn.pixabay.com/photo/2019/11/07/06/03/plumber-4607899_640.jpg"
          alt=""
          className="w-4/5 md:w-2/3 lg:w-2/3 h-full"
        />

        <img
          src="https://s3-alpha-sig.figma.com/img/0a1c/93dd/9e8d720e3d8e7f8abb048e4f421f2e8b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izMp33kwQG1paZimLjfvTkgSX38bhlgwJaN3saI2zQjSVurekhLL0zY6Dt345CIsdX9BVMcPws2Nxfk0X~e2RrZk9U21m7AUcmOz2z4ctzE4ERgZTeyLfuyCq8gJqRR6x0jhRBGNvCHg4EBkC0X9CjHh4Zz1Uw18CpjV~sw88yYJ4g1uYH2dWbfYpuTHnGuD0h2nY7T7~VxbD-8CjMkMEhIR3AAPNmxULTV7akikhWam9rnlOiUhlciVnRWDdlDzKjz2AcYaBx5p4J7gdheLNBZNrg55g3v~OCm5nx6pKbDmtalVXon5K0s~Hc9BWYLB0cJBWecUF0UHihcIUg55yg__"
          alt=""
          className="absolute border-white border-4 bottom-10 right-5 z-10 w-1/2 md:w-2/3 h-1/3 lg:h-2/5 md:max-w-none"
        />
      </div>

      <div className="grid col-span-6 mx-5 lg:flex lg:flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">
          Full-service plumbing solutions for your home & business.
        </h1>
        <p className="">
          We believe that plumbing services should be reliable, efficient, and
          affordable. That is why we work hard every day to provide our
          customers with the best possible solutions. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis,
          pulvinar dapibus leo! consectetur adipiscing elit. Ut elit tellus,
          luctus nec mattis, pulvinar dapibus leo!
        </p>
        <button className="btn justify-start bg-blue-700 text-white w-1/2 p-2">
          More About Us
        </button>
       <div className="hidden md:flex"> <Details /> </div> 
      </div>
    </div>
    </div>
  );
};

export default Poster;
