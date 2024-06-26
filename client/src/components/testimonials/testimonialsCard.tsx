import { ChevronRight } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { useState } from "react";

const TestimonialCard = () => {
  const [background, setBackgroud] = useState("");
  const [textcolor, setTextColor] = useState("");
  const handleHover = () => {
    setBackgroud("black");
    setTextColor("white");
  };
  const handlemouseout = () => {
    setBackgroud("");
    setTextColor("black");
  };
  return (
    <div
      className="border-[0.75px] rounded-3xl bg-[#f7f7f7]"
      onMouseOver={() => {
        handleHover();
      }}
      onMouseLeave={() => {
        handlemouseout();
      }}
    >
      <div className="p-8 cursor-pointer">
        <div className="flex gap-2 jus items-center pb-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="text-black text-xl font-medium">John Doe</div>
            <div className="text-gray-500 text-left text-xs font-medium">
              @JohnDoe
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className=" mt-2 text-md text-gray-500">
            Urban design draws together the many strands of place-making,
            environmental stewardship, social equity and economic viability into
            the creation of places .
          </div>
        </div>
        <div className="w-full">
          <ChevronRight
            className={`ml-auto w-8 h-8 bg-${background} text-${textcolor} rounded-full p-2`}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
