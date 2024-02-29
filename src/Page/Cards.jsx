import { RiSecurePaymentFill } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { FaAmbulance, FaMoneyBillAlt } from "react-icons/fa";

const Cards = () => {
  const cards = [
    {
      id: 1,
      icon: <RiSecurePaymentFill />,
      title: "Bathrooms",
      paragraph:
        "lorem ipsum dolor sit amet consectur",
    },
    {
      id: 2,
      icon: <MdAddCall />,
      title: "24/7 plumber",
      paragraph:
        "lorem ipsum dolor sit amet consectur",
    },
    {
      id: 3,
      icon: <FaAmbulance />,
      title: " vehicle facilities",
      paragraph:
        "lorem ipsum dolor sit amet consectur",
    },
    {
      id: 4,
      icon: <FaMoneyBillAlt />,
      title: "Relining",
      paragraph:
        "lorem ipsum dolor sit amet consectur",
    },
  ];
  return (
    <div className=" ">
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  my-10 py-14 px-5">
        {cards.map((card,i) => (
          <div key={i} className="flex flex-row lg:flex-row items-center justify-center border-sky-800 border-1 shadow-xl shadow-gray-500 overflow-hidden bg-white hover:h-full p-2 rounded-lg transition-all duration-1000 ease-in-out hover:bg-sky-500 hover:text-white">
            <p className=" text-6xl text-blue-800  rounded-full px-4 py-2">
              {card.icon}
            </p>
           <div>
          <div className="flex flex-col px-2">
          <p className="font-semibold text-2xl text-black py-2">{card.title}</p>
            <p className="text-xl py-2">{card.paragraph}</p>
          </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
