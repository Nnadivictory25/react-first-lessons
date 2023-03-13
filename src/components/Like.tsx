import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  
  const toggle = () => { 
    setLiked(!liked);
    onClick();
  }

  return liked ? <AiFillHeart color='red' size={100} onClick={toggle} /> : <AiOutlineHeart size={100} onClick={toggle} />;
};

export default Like;
