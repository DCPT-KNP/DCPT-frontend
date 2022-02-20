import { css } from '@emotion/css';
import tw from 'twin.macro';

interface IMapTItle {
  title: string;
}

const MapTitle = ({ title }: IMapTItle) => {
  return (
    <h1 className="absolute bottom-0 left-1/2 translate-x-[-50%] font-black text-[20px] text-center text-[#ffffff]">
      {title}
    </h1>
  );
};

export default MapTitle;
