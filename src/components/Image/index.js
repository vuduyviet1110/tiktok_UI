import { forwardRef } from 'react';
import { useState } from 'react';
import imgPlaceholder from '@/assets/image/placeholder_image.png';
function Img({ src, alt, fallback: customFallback = imgPlaceholder, ...props }) {
  // eslint-disable-next-line
  const [fallback, setFallback] = useState('');
  const HandleImgErr = () => {
    setFallback(customFallback);
  };
  return <img src={fallback || src} alt={alt} {...props} onError={HandleImgErr} />;
}

export default forwardRef(Img);
