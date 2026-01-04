import Icon from "@/components/icon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-gradient-to-br from-purple-400 to-white">
     <div className="flex justify-center items-center w-screen mt-12">
      <input className="p-4 max-w-full w-4xl border rounded-xl outline-none "/>
     </div>
     <div>
      <Icon/>
     </div>
    </div>
  );
}
