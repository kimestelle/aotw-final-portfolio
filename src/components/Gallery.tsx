'use client';
import { useNavigate } from 'react-router-dom';
import Cat from "./gallery/Cat";

const Gallery = () => {
  const navigate = useNavigate();
  const openModal = (keyword: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set('modal', keyword);
    navigate({ search: params.toString() }, { replace: true });
  };

  return (
    <div className="room w-[90svh]">

      <div onClick={() => openModal('s1a1')}
      className="absolute cursor-pointer left-[10svh] top-[20svh] border-[2svh] bg-black border-black">
        <Cat/>
      </div>

      <div onClick={() => openModal('s2a3')}
      className="absolute cursor-pointer left-[50svh]  top-[20svh] rounded-full">
        <img src="/gallery/clock-static.png" alt="clock" className="w-[20svh] h-full rounded-full object-cover" />
      </div>


      <div className="floor"></div>
    </div>
  );
};

export default Gallery;
