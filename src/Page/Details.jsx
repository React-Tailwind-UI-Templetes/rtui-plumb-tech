
const Details = () => {
  const cards = [
    {
      id: 1,
      
      number: "4k+",
    
      title:"Happy clients",
    },
    {
      id: 2,
      
      number: "15K+",

      title:"Order Served",
    },
    {
      id: 3,
      
      number: "4+",
      
      title:"Services",
    },
  ];
  return (
    <div 
      
      className="container text-white flex  flex-row items-center justify-center w-full mx-auto"
    >
      <div className=" flex flex-col md:flex-row   gap-6 my-5  justify-center  ">
        {cards.map((card,i) => (
          <div key={i} className="relative border-r-2 flex flex-col  text-black  items-center   px-5 lg:p-10 rounded-lg  bottom-0">
            
           <div>
           <p className="text-4xl font-bold text-gray-600">{card.number}</p>
            <p className="text-xl py-5">{card.title}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;