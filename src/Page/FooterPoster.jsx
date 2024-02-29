
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const FooterPoster = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/9797/f046/46c533ec0947b20e1215bb8440de7026?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TU-rdUfIWcrvEny4bRKIs5vbHnL-1Dln2m-L3M-HmxVQ98bkGR6qW~xWLeIs~SjwEQtnPLyWATta81lwATOgKeblu693w6bJsjQo64mYC27UriRqHYUKYhcxnXbok-gDLLhtEVRXg9grU20hcHzsxryLfqSYBFdRf-9n8qkSjd8hHyTNThfXosjGFIR5iEFTkDG~vATw5iT9F8pBVq9oat66HYw1QxSFAmHBrXlJN-KccdcBSf5xBCW6b~BWRTFbYuT5j6K~IXSNBKD6fotXcZzTaeQXjxgeioMBJhO-sDTndl~6NoRXAr6NkuCTNktJm5trMZqDQtSVjqLukR8ftw__)`,
        backgroundPosition: "center",

        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",

        height: "50vh",
      }}
      className=" text-white flex flex-col justify-center h-full text-center w-full items-center  mb-12  "
    >
      <div className="flex flex-col justify-center items-center w-full h-full inset-0 bg-black opacity-70">
        <MdOutlineSlowMotionVideo className="text-3xl text-blue-700" />
        <p className="text-2xl font-semibold">
          Don’t Know What to Do Start With Us?
        </p>
      </div>
    </div>
  );
};

export default FooterPoster;
