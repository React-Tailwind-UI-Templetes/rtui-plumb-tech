import { CiCircleChevUp, CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
    const cards = [
      {
        id: 1,
        icon: "https://s3-alpha-sig.figma.com/img/efb6/f620/56dfdd8faea9ed52a81fbdcd844baa28?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjtRDKOc8AU1F6O45etcyHYpKyKiiKz0gJH4qzHV8rLJ~o0BPrX~AqfuUGs2VVu~s-Tykof0~CpTJjq0i2fNRw5lkXgkHXyT4qHlelN0mWYS9lk9KS36td0DQhRngkWmXcWPGJbDkBH15rSf6zI4CVPOwJi-Ovn5EZEpdY9l7gEEfy0Yx54xM5e53LNOYFo7Ys8R0wI83dqyTF9VbMEDoZpp5bICIvsBCzDJ~eagpXHe3dLURBZ1joL1ewBSw48biqgry838Uyy0T1~DC2u8FiI-6IXMUl-mpEesADOau8MSUNaTRyzz35c0ROnCCB8cvtwwWs-VEr3c5ND--1gziw__",
       work:"Plumber",
        name: "Harly Rayan",
      },
      {
        id: 2,
        icon: "https://s3-alpha-sig.figma.com/img/22aa/3b45/6260f5c114826d26f0063851b8322353?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4IFGNmm~LDw1f2~x727IIt8zb9vmFqzl46cT6EnjEIJW-8a75nBCRj9kNem1hgQCie7WaBbWL5sUROB~tvy3s~z9AXlNAFq~vTRcf-n1SSrDaSG9B52mEi-3RdaYzcAPUdHZ-dvMgRBkHoqLfZMNcZEImr~Bi7XlAfmbp-3kGU-OPWkVRGbsoIewGaKHl1pu5iBLXEA8AGEgWQbWgRTtYyq2ZWq8EUoQKZQQ-a-ItIlpk3l7HRE0A4joViCryIypsATDr6naW9NM2HWKZJDBLpCE6Dd-Dh7kftm-w50h3bx65DD722jDnvOv~Pr6S~Bx0495ajYOwJ2t2ok~6qHnA__",
       work:"Electrician",
        name: "Harly Rayan",
      },
      {
        id: 3,
        icon: "https://s3-alpha-sig.figma.com/img/5824/acac/b3b76175bc84084ec18597109498f96d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnhFzLQ9ONQExF7jAXhSxQ5N9Nt6eQnFy4hyfdjL4GP1hU1XcDVaQruRO5NoFRbbT-URvpYi3ttPBsw49g3lNNpoDAbwb5BUxt~ZlPmqh4gdl6DUsLZNCO7TpakAiWZh4BC5av5ekiX~dvwNr1xnqGNe5xuxYuvZ~OeA258HN-HYFvwI3~fhkjzWh0KB2d4JOMNqho4wXhyyF0b8qv-Zt4mx6anICktXE94RzCgheoxfCQOKOQrA4kYIkwPX~I~k2EOYcR0vL~TWNxn0TMUo9f0UgcT3YTYq-0KjcMaj2waP1TU-FjgJb2I3X7kZKLtrNjo38vB9vSrypqw6doTaaw__",
       work:"Plumber",
        name: "Harly Rayan",
      },
      {
        id: 4,
        icon: "https://s3-alpha-sig.figma.com/img/83fb/3e04/056cc892636460bee5791aa3f243854c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V0FSDNUsWgavVsKIUbA7PnngJDRcav2KWKZvH8VZ0hI9o8FbAnmgpJ5dG9YvgLWJ~xZzTKx-amePjocxyyvv5sOz3ZD~azqeK~Z~WNiceuKI4wB54JlRnNmMKrSbbubyY7f33AtDaVEwf8usWuTUkvTRsZcV2BPH~hudJbhQd7kSbpPG6NPqyIgLEJTVF7wMWErHIr9dO7qC3VlljRI5yjfUkU5L88mFIORvgrlTUtIz0s82wAgEhkRSNioAZw0fCKG7iR0EhH9l3yxr9aEaBvpam40J7y7jgD22pclJyI7tAjC3npnAYyInl-KYKk6ACxoSHRo8Ipb-Eze0XmkpAA__",
  
       work:"Electrician",
        name: "Harly Rayan",
      },
    ];
    return (
      <div className=" py-10 font-['Poppins']" id="team">
        <div className="container mx-auto">
          <div className="">
            <h1 className="text-4xl font-bold flex justify-center  font-['Poppins']">
              Our Team
            </h1>
           
          </div>
          <div className=" grid grid-cols-1 bg-slate-50 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10 px-5">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col items-center  relative rounded-xl ">
               <div className="relative">
               <img src={card.icon} alt="" className="w-80" />
                
               </div>
                <p className="text-2xl  font-semibold text-black py-2">
                  {card.name}
                </p>
                <p>{card.work}</p>
                <div className="flex flex-row gap-5 p-3 text-xl">
                <FaFacebook/>
                <CiTwitter/>
                <CiCircleChevUp/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;
  