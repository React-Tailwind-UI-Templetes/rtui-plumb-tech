

const Contact = () => {
  return (
    <div className="container mx-auto  " id="Contact">
        <div className=" flex flex-col md:flex-row">
        <form className="contact w-full md:w-[60%]  shadow-lg flex flex-col px-5 gap-6 py-6">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
         <div className="px-5">
         <div className="flex md:flex-row flex-col items-center gap-5 w-full py-2">
            <div className="flex flex-col gap-1 w-full">

              <input
                type="text"
                name="name"
                id="name"
                className="border border-[#e9e9e9] py-3 px-4 bg-yellow-50  rounded-xl w-full"
                placeholder="Full Name"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              
              <input
                type="text"
                name="Email"
                id="Email"
                className="border border-[#e9e9e9] py-3 px-4 bg-yellow-50  rounded-xl w-full"
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-5 w-full py-2">
            <div className="flex flex-col gap-1 w-full">

              <input
                type="phone"
                name="phone"
                id="phone"
                className="border border-[#e9e9e9] py-3 px-4 bg-yellow-50  rounded-xl w-full"
                placeholder="Phone No"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              
              <input
                type="select"
                name="select"
                id="select"
                className="border border-[#e9e9e9] py-3 px-4 bg-yellow-50  rounded-xl w-full"
                placeholder="Service"
              />
            </div>
          </div>

          <div className="flex flex-col py-2 gap-1 w-full">
         
            <textarea
              type="text"
              name="Subject"
              id="Subject"
              className="border border-[#e9e9e9] py-3 px-4 outline-none w-full h-[220px]"
              placeholder="Write Your message"
            />
          </div>

          <button
           
            className="mx-auto w-fll py-2 px-6 bg-brandColor outline-none rounded text-white bg-blue-900 text-[1rem]  mb-9"
          >
            Send Message
          </button>
         </div>
        </form>
        <div className="flex justify-center items-center w-full h-full mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466756.93577578734!2d90.6956585407359!3d23.94138871518079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375410a874799185%3A0xaf4b58f0925d6a00!2sBrahmanbaria%20District!5e0!3m2!1sen!2sbd!4v1708974839862!5m2!1sen!2sbd"
              className="border-0 w-3/4 h-[400px]"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    </div>
  )
}

export default Contact