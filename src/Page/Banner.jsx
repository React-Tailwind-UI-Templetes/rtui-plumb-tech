import Header from "../Header/Header"

const Banner = () => {
  return (
    <div className="relative   pb-10" id='home'>
      <video
        src="https://www.shutterstock.com/shutterstock/videos/1100314429/preview/stock-footage-uniformed-plumber-is-using-a-wrench-to-repair-a-water-pipe-under-the-sink-maintenance-concept.webm"
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
        loop
      ></video>
     
      <div className="absolute inset-0 "></div>
       
     
      
      <div className="relative  z-10">
      <div className="md:px-10 ">
      <Header/>
      </div> 
        <div className="flex flex-col justify-center items-center px-4 py-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-16 text-white">
          <h1 className="text-3xl font-bold flex flex-col justify-center items-center lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize">
          We are Always Ready to <br />   <span className="font-medium bg-clip-text text-transparent bg-gradient-to-tr from-teal-500 via-cyan-300 to-slate-500">
          Service
            </span>{" "}
            
          </h1>
          <div className="">
            <p className="text-lg mb-4">
            
            </p>
            <p className="text-base mb-4">
              Welcome to our innovative online banking platform, where
              convenience meets security. With our cutting-edge technology and
              user-friendly interface, managing your finances has never been
              easier. Whether  checking your balance, transferring funds,
              or paying bills, 
            </p>
            <a
              href="#Service"
              className="flex justify-center w-6/12 mx-auto bg-gradient-to-tr from-blue-700  to-blue-600 font-bold tracking-wide text-white capitalize transition-all duration-300 py-4 px-10 lg:px-8 xl:px-10 hover:bg-gradient-to-tr hover:from-white hover:text-black hover:to-stone-600 hover:shadow-md rounded-md"
            >
              Schedule An Appointments
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner