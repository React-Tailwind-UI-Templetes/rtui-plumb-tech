const Blog = () => {
    const cards = [
      {
        id: 1,
        icon: "https://s3-alpha-sig.figma.com/img/f1ca/8d90/50201a006bb44c38c5f7f3ab9105502a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frT8pc7ES~~8ILuNKCBg4-cqST7~7D-MKsRarG0nRz3qwZqeAMyWBKGkcVAJsPphXCqSGX3yH0KuxoqJkABRTqVk5jcr0~6QB3HbyttVDfClfcuQkgfb5Au-yOhDSs6Etz74aTp4DLxAuEflNVLwqzOLrEU11LQ-cBBELJxpkP-DcbifbVTl6VgtYdQWDEPt4PJp-MCdlN5u1L8ctJdIqpXo-viM4eKt4Cemx668gaucrNAp7CtAtHCraA9TYj6piBfCIzVWEvJZHrkNa8XMeHwSubBGa5CUrjvUifeQjxLvAgQK-18Kda-lK4~acJOrpAU4rGXi0SdtbUS2a44UsA__",
       date:"04 jan, 2023 | 5 min ago",
       para:"Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Utlin elit tellus, luctus nec mattis, ",
        name: "Models & OEM Solutions I Simul Corporation",
      },
      {
        id: 2,
        icon: "https://s3-alpha-sig.figma.com/img/f1ca/8d90/50201a006bb44c38c5f7f3ab9105502a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frT8pc7ES~~8ILuNKCBg4-cqST7~7D-MKsRarG0nRz3qwZqeAMyWBKGkcVAJsPphXCqSGX3yH0KuxoqJkABRTqVk5jcr0~6QB3HbyttVDfClfcuQkgfb5Au-yOhDSs6Etz74aTp4DLxAuEflNVLwqzOLrEU11LQ-cBBELJxpkP-DcbifbVTl6VgtYdQWDEPt4PJp-MCdlN5u1L8ctJdIqpXo-viM4eKt4Cemx668gaucrNAp7CtAtHCraA9TYj6piBfCIzVWEvJZHrkNa8XMeHwSubBGa5CUrjvUifeQjxLvAgQK-18Kda-lK4~acJOrpAU4rGXi0SdtbUS2a44UsA__",
       date:"04 jan, 2023 | 5 min ago",
       para:"Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Utlin elit tellus, luctus nec mattis, ",
        name: "Models & OEM Solutions I Simul Corporation",
      },
      {
        id: 3,
        icon: "https://s3-alpha-sig.figma.com/img/f1ca/8d90/50201a006bb44c38c5f7f3ab9105502a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frT8pc7ES~~8ILuNKCBg4-cqST7~7D-MKsRarG0nRz3qwZqeAMyWBKGkcVAJsPphXCqSGX3yH0KuxoqJkABRTqVk5jcr0~6QB3HbyttVDfClfcuQkgfb5Au-yOhDSs6Etz74aTp4DLxAuEflNVLwqzOLrEU11LQ-cBBELJxpkP-DcbifbVTl6VgtYdQWDEPt4PJp-MCdlN5u1L8ctJdIqpXo-viM4eKt4Cemx668gaucrNAp7CtAtHCraA9TYj6piBfCIzVWEvJZHrkNa8XMeHwSubBGa5CUrjvUifeQjxLvAgQK-18Kda-lK4~acJOrpAU4rGXi0SdtbUS2a44UsA__",
       date:"04 jan, 2023 | 5 min ago",
       para:"Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Utlin elit tellus, luctus nec mattis, ",
        name: "Models & OEM Solutions I Simul Corporation",
      }
      
    ];
    return (
      <div className="bg-[#F7FBFF] container mx-auto px-6 " id="blog">
        <div className=" py-5">
          <div className="">
            <h1 className="text-2xl font-bold">
            Our Latest Blog
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quos
              magnam nulla commodi reiciendis libero! Quaerat ipsum corporis error
              adipisci?
            </p>
          </div>
          <div className=" grid grid-cols-1 bg-slate-50 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col   border-r-2 border-1 border-gray-400 shadow-xl hover:shadow-gray-500 hover:h-full">
               <div className="relative">
               <img src={card.icon} alt="" className="w-full " />
                <p className="p-2">{card.date}</p>
               </div>
                <p className="text-2xl  font-semibold text-black p-2">
                  {card.name}
                </p>
                <p className="p-2">{card.para}</p>
                <a className="underline  text-blue-700 flex items-start font-bold p-2" href="">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Blog;
  