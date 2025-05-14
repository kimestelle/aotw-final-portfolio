import { useNavigate } from 'react-router-dom';

import '../styles/stairs.css';

const Stairs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upstairs");
  };

    return (
        <div className="room w-[25svh]">
            <div className="stairs clickable"
              onClick={handleClick} >
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="step" style={{ '--i': i } as React.CSSProperties}></div>
                ))}
            </div>
            <div className="floor"></div>
        </div>
    );
};

export default Stairs;
