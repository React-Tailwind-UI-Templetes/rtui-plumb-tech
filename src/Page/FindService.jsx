const FindService = () => {
  const cards = [
    {
      id: 1,
      icon: "https://s3-alpha-sig.figma.com/img/516c/b3f2/cdb2b8cfdd2105cc9964c3a79e0b0694?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zlcb1BE~W--g8~FAY31J-DMBLnlqugOIZR6YzjTwrsEKf2V2-fCoVhd59q7J5VT7DmrMd~MN9X8HrFmT7pvAXbbgwDVm2QdEEDXvAkEj9xYdU6vdYaB8dJrGnwhxQWavZusvfVQOhVf1lvNXnBFSZOHNwmqPObClEPTIYhvyFeMLs4QvWyLT~Fh0EJ~eX3a3EvlRbMCZm9ql0hyK4fesP1G9EgOC5Xc4aJZCnvAmjWoB6YHGgbUl8B2wyweZV7fiCbaoT4TGh3T4s0nzTOmLLlTWjoNhDwFJq4-OuMblGj-XutKAEC58n4dP0f8rg~H1AMnEZKrbgjEEOJ9o~AQ7ig__",
      name: "Schedule your experience",
    },
    {
      id: 2,
      icon: "https://s3-alpha-sig.figma.com/img/0593/ecf6/0435b9997239f719c05467af41bd9c7f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dETUs36uPMeBV6vUm7VAoYNs5DN3xSDXDLDKBYiq-DhxGCeg8XVh8LFMLxhxdd9UbUfYaTeZtaC0ft6~mjWNHLUK-JrL99Qm6i8~30gadDbq3wTiTsGuLd6IH0zpt6f4jShZn~bxg4ToWpxiIq4c~jCJ85D~iLRwMFKOQWP9RVuE~tdrCWY35VOWPjJYYqVFyloDgNqUV5TljvzB1W3YiRav3qZkH82Pr1jilT2clatWBh0dBgwefEvc9rc~X-pwG85aMnRXdP23PRmPOoSvsiY2TslWJEivwlkBT8YrZs7e1ZO52Pu5YKvF-A9~fG8MT0661lcj1LClOOOeK8kvvQ__",
      name: "Get Professional Advice",
    },
    {
      id: 3,
      icon: "https://s3-alpha-sig.figma.com/img/9797/f046/46c533ec0947b20e1215bb8440de7026?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TU-rdUfIWcrvEny4bRKIs5vbHnL-1Dln2m-L3M-HmxVQ98bkGR6qW~xWLeIs~SjwEQtnPLyWATta81lwATOgKeblu693w6bJsjQo64mYC27UriRqHYUKYhcxnXbok-gDLLhtEVRXg9grU20hcHzsxryLfqSYBFdRf-9n8qkSjd8hHyTNThfXosjGFIR5iEFTkDG~vATw5iT9F8pBVq9oat66HYw1QxSFAmHBrXlJN-KccdcBSf5xBCW6b~BWRTFbYuT5j6K~IXSNBKD6fotXcZzTaeQXjxgeioMBJhO-sDTndl~6NoRXAr6NkuCTNktJm5trMZqDQtSVjqLukR8ftw__",
      name: "Meet our Expert Workers",
    },
    {
      id: 4,
      icon: "https://s3-alpha-sig.figma.com/img/b5c3/c3fc/245d5f3dcec0f722e4490c9715f60b9a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R96rp9LYiAagDcLPEpudRR3y72tfdeT2ndVHw1WcfjXLh78BYzW-hZVtPEv1tqYHegAVu0RsLeH0eGG8judssH4L1a-97LfQLwlOfzuCbfw5C9nQoxpYaLOwtkOiC71g0Ka~qG05gRwmbcKHwmtTiFSzhRlDpoim6bI1o2tgEH2Gj6d8vWc3sG-1J5Ekvr~fT8KaZXSUTThdN-vHDSi8DYs72MaFq~jvHcmL0I5fnPdx1WsMpsKEG21vN7TLMdY02B-JFlw07LecnFoplSOANDI2CEFzYYyovGQ0jUFdhSm7s4d1lAS-P7PAAfm-XPLcMOVL8~U8bKKJ2xGVc8EaVg__",

      name: "Get our Best Services At Door",
    },
  ];
  return (
    <div className="bg-[#F7FBFF] p-2 ">
      <div className="container mx-auto ">
        <div className="">
          <h1 className="text-2xl font-bold">
            Easiest Way to get Our Services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quos
            magnam nulla commodi reiciendis libero! Quaerat ipsum corporis error
            adipisci?
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 bg-slate-50 md:grid-cols-2 lg:grid-cols-4 gap-2 py-2  p-3">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col items-center  relative rounded-xl p-4 m-2">
             <div className="relative">
             <img src={card.icon} alt="" className="w-60 h-60 rounded-full" />
              <div className="absolute top-0 right-10 bg-red-500 rounded-full w-6 h-6 flex justify-center items-center text-white text-sm">
                {i + 1}
              </div>
             </div>
              <p className="text-2xl  font-semibold text-black py-2">
                {card.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindService;
