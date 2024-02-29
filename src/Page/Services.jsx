
import { FaAngleDoubleRight } from "react-icons/fa";
const Services = () => {
  const cards = [
    {
      id: 1,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://cdn.pixabay.com/photo/2016/07/19/22/54/faucet-1529179_1280.jpg"
          alt=""
        />
      ),
      name: "Hot Water System",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 2,
      icon: (
        <img
          className="w-full rounded-sm"
          src="https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272_640.jpg"
          alt=""
        />
      ),
      name: "Bathroom Renovations",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 3,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://cdn.pixabay.com/photo/2016/04/17/20/14/sink-1335476_640.jpg"
          alt=""
        />
      ),
      name: "Blocked Drains",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 4,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://images.unsplash.com/photo-1527383418406-f85a3b146499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
          alt=""
        />
      ),
      name: "Change Equipment",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 5,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://s3-alpha-sig.figma.com/img/9547/70ee/7fdb4bf87b5e6c92758f2c5f5787bc1f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHdph6mcqoTXyZKFD8JAHip9CD-c9Kj-je7enmO6MA0XSgJmDqMXWNcPemtgJEhbRhI3qLl7rFI-VFrW6rLybWuLhud0pEOvuNJFwbhdaaGLKO7Toid4b7FCvHWIoKcJ7af9Ruhba-9xIktbx97mS~y2siuhuL0kRubY3EGwq6e~STbNw0OKrG3EDkH~VG2D7mDKq2PkT2Sr-I5MxJ-y58PMtKktjjG5JULLZZbFKxqwGyE6DOwI7ey-3ClajEynpXtlIgXKOYxjgmGLm1f-cZCmzcyVXDFFIuM20GAeGZMBOq0vAqkHMb8a38S4E-RU2wzpckv2pTl~-bsHuimRnA__"
          alt=""
        />
      ),
      name: "Repair work",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 6,
      name: "Constracter team",
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://s3-alpha-sig.figma.com/img/3298/9d87/80fa9750bfcc2ff0ef3224d46acd1f05?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdTOdkyS9HsjwivDnz9ylsmCmZD1pFOjjC62QtVuIeQlxEXvl~71eqERGLv70xRUVuAQOrvOhrqNK8my4pO7IbtMBxpD1pQDG7FSR7ImBVmSiGrrOqfZG1LEjAIuKEvI4H5KcGQurU2FsgZXJcRP9O3nh~elqxl2mvSsKGkIX1-t08ejQF~-X58Hb5Etd~xscll390jlzI5gIEmWp-7dl-oTz2GXOmAYS6EMo-BYg5euzk5XDI7B0DS0~tTvnZEvXaPRJxOjKCG4Jr5xZ-LCv6CHFpE30dbtaWlOaHhDgdJcv0T2OW3D~vKwPNJzhCAd-6Luplbcp0eWTlP1wuh9qQ__"
          alt=""
        />
      ),
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    
  ];
  return (
    <div id="Service" className="container mx-auto py-10 px-10">
      <div className="flex flex-col   py-10">
        <p className="text-3xl text-sky-500 font-bold">Our Services</p>
        <p className="text-xl font-bold">
         We provide our best to bring smile of your face
        </p>
      </div>
      <div className=" grid grid-cols-1  md:grid-cols-2 bg-slate-50 lg:grid-cols-3 gap-5 ">
        {cards.map((card,i) => (
          <div key={i} className="grid grid-cols-1   border-r-2 border-1 border-gray-400 shadow-xl hover:shadow-gray-500 hover:h-full px-5 py-2 rounded-xl ">
          
            <p className="py-2">{card.icon}</p>
            <p className="text-2xl  font-semibold text-black py-2">
              {card.name}
            </p>
              
              { 
                <li
                  className="list-none py-2 justify-self-start "
                  
                >
                  {card.para }
                </li>
              }
              <button className="btn flex flex-row items-center justify-center  hover:bg-blue-700 border-blue-700 border-2 font-bold text-black   sm:w-2/3 md:2/3  p-2 rounded-lg">
          More Details <FaAngleDoubleRight className="text-2xl"/>
        </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
