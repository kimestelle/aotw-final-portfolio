import LivingRoom from "./components/LivingRoom";
import Gallery from "./components/Gallery";
import Stairs from "./components/Stairs";
import Sprite from "./components/Sprite";

const App = () => {
  const rooms = [LivingRoom, Stairs, Gallery];

  return (
    <div className="relative w-screen h-screen bg-white flex items-center justify-center">

      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 text-xs text-gray-600 font-mono">
        Press <kbd className="px-1 border rounded">space</kbd> to stop/start sprite
      </div>

      <div className="scroll-container w-screen h-screen flex items-center px-[5svh] pt-[5svh] gap-[5svh] overflow-x-auto no-scrollbar">
      <Sprite />
        <div className="flex flex-row min-w-max h-full  gap-[5svh]">
        {rooms.map((Room, index) => (
            <div key={index} className="relative flex flex-col">
              <Room />
              {/* solid walls for sprite cover */}
              {index < rooms.length - 1 && (
                <div
                  className="absolute right-[-5svh] bottom-0 h-75 w-[5svh] bg-white z-[30]"
                  style={{ pointerEvents: "none" }}
                />
              )}
                <div
                  className="absolute right-[-5svh] bottom-0 h-75 w-[5svh] bg-white z-[30]"
                  style={{ pointerEvents: "none" }}
                />
                <div
                  className="absolute left-[-5svh] bottom-0 h-75 w-[5svh] bg-white z-[30]"
                  style={{ pointerEvents: "none" }}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
