'use client';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import WindowShader from "./living-room/WindowShader";

const LivingRoom = () => {
  const navigate = useNavigate();
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [isWindowReady, setIsWindowReady] = useState(false);

  useEffect(() => {
    if (windowRef.current) {
      setIsWindowReady(true);
    }
  }, []);

  const openModal = (keyword: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set('modal', keyword);
    navigate({ search: params.toString() }, { replace: true });
  };

  return (
    <div className="room w-[120svh]">
      
      {/* Ceiling */}
      <div 
        className="felt-texture absolute left-0 top-0 w-[37svh] h-[29.5svh] bg-gray-300" 
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)" }} 
      />
      
      {/* Wall */}
      <div 
        className="felt-texture absolute left-0 bottom-[1.5svh] w-[10svh] h-[80svh] bg-gray-200 z-[1]" 
        style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }} 
      />

      {/* Window */}
      <div ref={windowRef} 
      onClick={() => openModal('s3a3')}
        className="absolute cursor-pointer left-[0svh] bottom-[7svh] w-[9svh] h-[67svh] bg-window z-[5]" 
        style={{ clipPath: "polygon(0% 0%, 100% 7%, 100% 93%, 0% 100%)" ,
          backgroundImage: "url(/living-room/outside.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "65% 50%",
          backgroundRepeat: 'no-repeat'
        }}
        />

      {/* Windowsill */}
      <div
        className="absolute left-[0svh] bottom-[6svh] w-[9.5svh] h-[69svh] bg-gray-200 z-[1]" 
        style={{ clipPath: "polygon(0% 0%, 100% 7.5%, 100% 92.5%, 0% 100%)" }}
      />

      {isWindowReady && windowRef.current && <WindowShader/>}
            
      {/* Hanging Light */}
      <div className="absolute top-[0svh] flex flex-col right-[45svh] transform w-[0.1svh]">
        <div className="transform w-[0.1svh] h-[50svh] border border-dotted border-black" />
        <div className="z-[10] transform w-[10svh] h-[3svh] translate-x-[-50%] bg-black rounded-t-full" />
        <div className="transform w-[3svh] h-[1.5svh] translate-x-[-50%] bg-yellow-200 rounded-b-full glowing-light" />
      </div>
    
      {/* Title */}
      <div className="absolute top-[35svh] left-[35svh] text-black text-[5svh] font-serif">estelle kim</div>
      <div className="absolute top-[43svh] left-[35svh] text-black text-[2svh] font-serif">DSGN1020 final portfolio</div>
      <div className="absolute top-[46svh] left-[35svh] text-black text-[2svh] font-serif">click colored things!</div>
      
      {/* Couch */}
      <div className="absolute left-[15svh] bottom-[10svh] z-[2] w-[45svh]">
        {/* Top cushion as 3 rounded sections */}
        <div className="flex flex-row gap-[0.5svh] justify-center px-2 items-center w-full h-[8svh] mb-[0.5svh]">
          <div className="bg-black w-full h-full rounded-md rounded-tl-[2svh]" />
          <div className="bg-black w-full h-full rounded-md" />
          <div className="bg-black w-full  h-full rounded-md rounded-tr-[2svh]" />
        </div>

        {/* Bottom base */}
        <div className="relative w-full h-[8svh] bg-black rounded-md">
          {/* Legs */}
          <div className="absolute bottom-[-1.5svh] left-[5svh] w-[2svh] h-[2svh] bg-black rounded-full" />
          <div className="absolute bottom-[-1.5svh] right-[5svh] w-[2svh] h-[2svh] bg-black rounded-full" />
        </div>
      </div>

      {/* Door */}
      <div onClick={() => openModal('s3a1')}
      className='group cursor-pointer absolute z-[5] flex p-[1svh] pb-0 right-[5svh] bottom-[9.5svh] w-[20svh] h-[41svh] bg-red-900'>
      <div className="absolute top-0 right-0 h-full w-[6svh] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-[1]"
       style={{
         background: 'linear-gradient(to left, rgba(255, 255, 150, 0.6), transparent)',
         filter: 'blur(1.5svh)',
         mixBlendMode: 'screen'
       }}
  />

        <div className='relative group-hover:scale-x-90 group-hover:skew-y-[2deg] origin-left w-full h-full grid grid-cols-2 grid-rows-2 p-[1.5svh] gap-[1.5svh] bg-black '>
          <div className='absolute bg-neutral-800 w-[2svh] h-[2svh] rounded-full bg-red-800 top-[20svh] right-[2svh]' />
          <div className='w-full h-full border border-neutral-800'/>
          <div className='w-full h-full border border-neutral-800'/>
          <div className='w-full h-full border border-neutral-800'/>
          <div className='w-full h-full border border-neutral-800'/>
        </div>
      </div>

      <div className="floor"></div>
    </div>
  );
};

export default LivingRoom;
