import { FaAngleDoubleRight } from "react-icons/fa";

const FindService = () => {
    const cards = [
      {
        id: 1,
        icon: "https://s3-alpha-sig.figma.com/img/b5d0/045b/0d25849f169d6c8e588e2c49566eacc9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3gSmSdzWqAYxWbNx6IrswB3FlCnK8uRhB~6F7gnt~2aGU6u8O9NdabR1dFs6KgUOrcSWeQLTcaaeYCaZSZFeGh4aNQdbCms5x69E-BfKj2Gh7B-qj~M~xSdO~erc1HZG40m5G8lqBlCycPsT-q3k6Y4WD3~GKp~jkESiPOlRZtDGPeXJFSNJmQgnyA6IbXGyLfE7DAj4B5txE0mx7WJ1G1U93P4lNiI8CKp6xVFgXNtJmuAlExn7E~0-3TFCOaifOeY4flrX92pbFHQ3WEU2JgVZzWyu6oAGq2POnDEMvN6uReD4ogCGWi6BeZYAG-nKcpyQAyQ9nc-EMkPgEYB1Q__",
        name: "Sewage Disposal in Buildings",
      },
      {
        id: 2,
        icon: "https://s3-alpha-sig.figma.com/img/faac/bc3f/4c77e0a51950f027f701a7ad7ca39a2a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8Zma87gWN143xFad1~U08rTThQj1R4lidapbsYsX7cBY94RjUxGfO5IBpbFN3fiaDM0MwvYyxXSacV4Xxg86cYBUnvOmvnrog6rfE-gaTB-SiWZWR29Jr5gwGHCYag3M~2AWvVkgPPpNbkv~PLQ2Ztpw-lZtp8bc825W22wiv~yI1zfK~Wd32TEyzqjuMGKpuUjWXvys9XAZPfCShoWQWNlZ5ycRStIfO~h7dpQAjMQ3SFs7XAZrugNaDzSbtz9KS~oJTuLoKxmr-TXfK6tdBzmVYK-WRM143fFasRWnj47WxddFL2AZr9SzAppGI8f9Ld0o0GyvRlPa2KTQ3dgrw__",
        name: "Sewage Disposal in Buildings",
      },
      {
        id: 3,
        icon: "https://s3-alpha-sig.figma.com/img/3dde/0daf/c87b1fe90074f51576dbeb475f70cde0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSnk~cojfhBCAQ37lsIHjp9n~xHkS8nfmFwn2K5rMhyMZZQp~sCD8UXWx1kTNnaNmzs2Uff9L6wn7Zw9YJGH7k2H82j1YhsaHc1coEMpYjWT8N5p4ZQQSWKqs3FsCgpmXb0SlXEKp9qEQCHg0RbB4F2V4KfcNmNJqqGIjmjXQqLQsDtljlzMtqFy6Uhf0EJTNRlIWy3Dg0yqrewmBaMQsfmMm9ymI7f-rZ4VAi1I5UO-WytKh3g4eN-pluX1upf2~5ziW0OpC2GSzAWwJTmD4HBtkvW7alqUDko1o1N107WERjJfwpcwKkpGL9wmH2Xk3OSRcdb8HxlKoEOIdV3t3g__",
        name: "Blocked Drains Solutions in USA",
      },
      {
        id: 4,
        icon: "https://s3-alpha-sig.figma.com/img/dd9d/95cf/26bf61972c87476d0bf6c291e5f16b4c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxUHVzIhSuXE4ATkA3eu9r1bAiXkGtA3U0y-jvdI6sVEWHvsY96HzqFxp~4eE-uGTjVfw9LhWUK5Fd3YVY~~BFHAIIhNybIZgaZqS6SsWGA6Fu5I5Stw9V0g1svuEqUw8FrfbTmoPHWogLHYDg70KIaopYhN~Sofj4FQyQTDbTBf5gjVDUkIOehefUpCeNdi8JlT3dvk9Os~EMQlTVq0e~8DIhvIGpHt99e0isHOuKA8ptBA6kJt6D6iJSJs-O6fyHgwPtCbxRCNizVqGFPalEDHy-vU3zp81Ht1ILXtwVCrI~lvGZzsrSkqRQQfjvWucz2ul0QGqjpKmId5r~oTlA__",
  
        name: "Bathroom Plumbing Works",
      },
    ];
    return (
      <div className="px-5 py-10">
        <div className="container mx-auto py-10 px-2">
          <div className="flex flex-col lg:flex-row justify-between">
            <div>
            <h1 className="text-2xl font-bold">
             Our Latest Work
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quos
              magnam nulla commodi reiciendis libero! Quaerat ipsum corporis error
              adipisci?
            </p>
            </div>
            <div className="py-2">
                <button className="btn flex flex-row  w-1/3 lg:w-full items-center justify-center  hover:bg-blue-700 border-blue-700 border-2 font-bold text-black  py-2 px-4 rounded-lg">View All Works<FaAngleDoubleRight className="text-2xl"/> </button>
            </div>
          </div>
          <div className="  grid grid-cols-1 bg-slate-50  md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 py-2">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col justify-center items-center   border-r-2 border-1 border-gray-400 shadow-xl hover:shadow-gray-500 hover:h-full px-4 rounded-xl ">
               <div className="relative">
               <img src={card.icon} alt="" className="w-full h-full " />
                
               </div>
                <p className="text-xl  font-semibold text-black p-3">
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
  