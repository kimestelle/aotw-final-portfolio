import { useNavigate } from 'react-router-dom';
import Sprite from '../components/Sprite';

export default function Upstairs () {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
    };

    const openModal = (keyword: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set('modal', keyword);
        navigate({ search: params.toString() }, { replace: true });
    };

    return (
    <div className="relative w-screen h-screen bg-[#152238] flex items-center justify-center">
        <Sprite/>
        <div className="scroll-container w-screen h-screen flex items-center px-[5svh] pt-[5svh] gap-[5svh] overflow-x-auto no-scrollbar">
        <div className="upstairs-room w-[25svh]">
            <div className="stairs clickable"
            style={{ bottom: '0svh'}}
              onClick={handleClick} >
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="step upstairs" style={{ '--i': i } as React.CSSProperties}></div>
                ))}
            </div>
        </div>

        <div className="upstairs-room w-[100svh]">

            {/* Bookshelf */}
            <div onClick={() => openModal('reading')}
            className="absolute cursor-pointer flex flex-col gap-[1svh] z-[5] bottom-[6svh] bg-neutral-800 left-[16svh] w-[15svh] h-[25svh] rounded-md p-[1svh] pb-[3svh]">
                <div className='flex-1 w-full h-full pt-[0.5svh] bg-black flex flex-row items-end'>
                    <div className='w-[1svh] h-full bg-red-800'/>
                    <div className='w-[1svh] h-full bg-red-700'/>
                    <div className='w-[1svh] h-full bg-red-600'/>
                    <div className='w-[1svh] h-full bg-red-500'/>
                    <div className='w-[1svh] h-full bg-red-400'/>
                    <div className='w-[0.6svh] h-[75%] bg-green-800'/>
                    <div className='w-[0.4svh] h-[85%] bg-blue-800'/>
                    <div className='w-[1.6svh] h-full flex flex-col justify-end items-center ml-[2svh]'>
                        <div className='w-[75%] h-full flex flex-row items-end'>
                            <div className='bg-green-200 w-full h-[25%] bg-green-300 rounded-t-full'/>
                            <div className='bg-green-200 w-full h-[35%] bg-green-500 rounded-t-full'/>
                            <div className='bg-green-200 w-full h-[15%] bg-green-400 rounded-t-full'/>
                        </div>
                        <div className='w-[1.6svh] h-[0.3svh] bg-neutral-700'/>
                        <div className='w-[1.3svh] h-[1.4svh] bg-neutral-700'/>
                    </div>
                    <div className='w-[3svh] h-full flex flex-col justify-end items-center ml-[1svh]'>
                    <div className='w-[70%] h-[0.5svh] ml-[18%] bg-purple-700'/>
                    <div className='w-[80%] h-[0.5svh] bg-purple-800'/>
                        <div className='w-full h-[0.5svh] bg-red-700'/>
                    </div>
                </div>
                <div className='flex-1 w-full h-full bg-black flex flex-row'>

                </div>
                <div className='flex-2 w-full h-full bg-black flex flex-row p-[0.8svh]'>
                <div className='w-full h-full flex justify-center items-start pt-[1svh] border border-neutral-800'>
                        <div className='w-[1svh] h-[1svh] bg-neutral-800 rounded-full' />
                   </div>
                </div>
            </div>

            
            {/* Desk */}
            <div className="absolute flex flex-col z-[5] bottom-[5svh] right-[20svh] w-[45svh] h-[23svh]">
                <div className="w-full h-[6svh] bg-black rounded-t-md px-[2svh] pb-[1svh] pt-[1.5svh]">
                   <div className='w-full h-full flex justify-center items-center border border-neutral-800'>
                        <div className='w-[1svh] h-[1svh] bg-neutral-800 rounded-full' />
                   </div>
                </div>
                <div className='w-full h-full flex flex-row justify-between'>
                    <div className="w-[2svh] h-full bg-black rounded-b-xs" />
                    <div className="w-[2svh] h-full bg-black rounded-b-xs" />
                </div>
            </div>

            {/* Computer on desk */}
            <div className="absolute flex flex-col justify-end items-center z-[6] bottom-[28svh] right-[43svh] w-[14svh] h-[10svh]">
            <div className='h-full w-[13svh] bg-neutral-400 flex flex-col gap-[0.2svh] justify-center items-center p-[0.6svh] pt-[0.4svh] rounded-t-sm'
            style={{transformOrigin: 'bottom',
                transform: 'perspective(15svh) rotateX(5deg)'}}>
                <div className='w-[0.2svh] h-[0.2svh] bg-neutral-800 rounded-xs'/>                    
                <div className='w-full h-full bg-neutral-800 rounded-xs'/>
                    
            </div>
            <div className='h-[0.6svh] bg-neutral-600 w-full flex flex-row justify-end items-center rounded-t-full'/>
            </div>
            
            {/* Books on desk */}
            <div onClick={() => openModal('s1a2')}
            className="absolute cursor-pointer flex flex-col justify-end items-center z-[6] bottom-[28svh] right-[22svh] w-[16svh] h-[15svh]">
                <div className='w-full flex flex-row gap-[1svh] justify-end items-center'>
                <div className='w-[8svh] h-[8svh] mr-[2svh] bg-white border-[0.2svh] border-white rounded-full' 
                  style={{
                    backgroundImage: `
                      radial-gradient(white 25%, #FFFFFFA0 25%, #FFFFFFA0 35%, white 35%, white 37%, #FFFFFF50 37%, #FFFFFF50 47%, white 47%, white 49%, transparent 49%, transparent 59%, white 59%, white 63%, transparent 63%, transparent 70%, white 70%),
                      conic-gradient(#928426 6%, white 6%, #FFFFFF50 16.5%, #21462e 16.5%, #21462e 22.5%, white 22.5%, white 25%, #214346 25%, #214346 31%, white 31%, white 33.5%, #233557 33.5%, #233557 39.5%, white 39.5%, white 42%, #27203c 42%, #27203c 48%, white 48%, white 50.5%, #1d162c 50.5%, #1d162c 56.5%, white 56.5%, white 67%, #6e1814 67%, #6e1814 73%, white 73%, white 83.5%, #79412b 83.5%, #79412b 89.5%, white 89.5%)
                    `,
                    backgroundBlendMode: 'normal',
                    backgroundColor: 'white',
                    transformOrigin: 'bottom',
                    transform: 'perspective(15svh) rotateX(15deg)'
                  }}/>
                </div>
                <div className="w-[14svh] h-[0.6svh] flex flex-row justify-end items-center">
                    <div className='w-[1.5svh] h-full bg-black'/>
                    <div className='w-[11svh] h-full flex flex-col'>
                        <div className='w-full h-full bg-green-700'/>
                        <div className='w-full h-full bg-white'/><div className='w-full h-full bg-white/50'/>
                        <div className='w-full h-full bg-white'/><div className='w-full h-full bg-white/50'/>
                        <div className='w-full h-full bg-white'/><div className='w-full h-full bg-white/50'/>
                        <div className='w-full h-full bg-amber-800'/>
                    </div>
                </div>
                <div className="w-[14svh] h-[2svh] flex justify-center items-center bg-[#b74434] rounded-xs px-[1svh] pt-[0.3svh]">
                    <p className="text-[1.1svh] text-white font-bold vertical-rotated tracking-tight leading-[0.8em]">
                    Type Gallery<span className="text-[0.7em] align-top">™</span> P5
                    </p>
                </div>
                <div className="w-full h-[3svh] flex justify-center items-center bg-[#836648] px-[1svh] pt-[0.6svh]">
                    <p className='calligraphy-font text-[1.1svh] text-black'>
                        EARTH CALLIGRAPHY
                    </p>
                </div>
            </div>

            {/* Bulletin Board */}
            <div onClick={() => openModal('s3a2')}
            className="absolute cursor-pointer flex flex-col p-[1.5svh] z-[5] bottom-[35svh] right-[30svh] w-[35svh] h-[25svh] bg-neutral-800/55 rounded-md">
                <div className='relative w-full h-full p-[1.3svh] rounded-md bg-neutral-800'>
                    <div className='absolute flex flex-col top-[3svh] left-0 w-[15svh] h-[10svh] bg-white/75 rounded-xs -rotate-10'>
                        <div className="bg-gray-200/75 text-[0.9svh] text-center font-bold py-[0.5svh]">
                            MAY 2025
                        </div>

                        <div className="grid grid-cols-7 text-[0.6svh] text-gray-600 text-center font-semibold">
                            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                            <div key={d}>{d}</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 grid-rows-4 text-[0.6svh] text-center gap-[0.2svh] px-[0.3svh] pt-[0.3svh]">
                            {Array.from({ length: 21}, (_, i) => (
                            <div key={i} className="aspect-square rounded-[0.1svh] bg-gray-100/75 flex items-center justify-center"/>
                            ))}
                        </div>
                    </div>
                    <div className='w-[4svh] h-[4svh] bg-yellow-400/75 absolute top-[2svh] right-[2svh] rotate-10'/>
                    <div className='w-[4svh] h-[4svh] bg-pink-400/75 absolute top-[5svh] right-[8svh]'/>
                    <div className='w-[4svh] h-[4svh] bg-green-400/75 absolute top-[7svh] right-[5svh] rotate-30'/>
                    <div className='w-full h-full'
                    style={{
                        backgroundImage: `
                          radial-gradient(rgba(255,255,255,0.3) 10%, transparent 10%)
                        `,
                        backgroundSize: '1.5svh 1.5svh',
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center center',
                      }}/>
                </div>
            </div>

            <div 
            className="felt-texture absolute right-0 top-0 w-[37svh] h-[29.5svh] bg-neutral-600" 
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)" }} 
            />

            {/* Right Wall */}
            <div 
            className="felt-texture absolute right-0 bottom-[1.5svh] w-[10svh] h-[80svh] bg-neutral-700 z-[1]" 
            style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)" }} 
            />

            {/* Right Window */}
            {/* <div
            className="absolute -right-[10svh] bottom-[40svh] w-[18svh] h-[32svh] bg-window z-[2]"
            style={{
                transformOrigin: 'bottom',
                transform: 'perspective(15svh) rotateY(-10deg)'
            }}
            >
            <img src="/living-room/outside.png" alt="window" className="w-full h-[120%] object-cover border border-neutral-800/75 border-[2svh]" />
            </div> */}

            {/* Lamp */}
            <div className="absolute flex flex-col justify-end items-center z-[5] bottom-[7svh] right-[9svh] w-[10svh] h-[50svh] overflow-hidden">
                <div className='w-full h-[20svh] bg-black rounded-t-md' 
                            style={{
                                background: `linear-gradient(to right, #111 0%, #111 50%, #222 50%, #222 100%)`,
                                backgroundSize: '10%',
                                backgroundPosition: '0% 0%',
                                backgroundRepeat: 'repeat',
                                transformOrigin: 'bottom',
                                transform: 'perspective(15svh) rotateX(45deg)'
                            }}/>
                <div className='h-full w-[0.6svh] -mb-[0.2svh] bg-black'/>
                <div className='w-[7svh] h-[2svh] -mb-[1svh] rounded-t-[100%] bg-neutral-800' />
            </div>


            <div className="floor upstairs"></div>
        </div>
        
        </div>
    </div>
    )
}