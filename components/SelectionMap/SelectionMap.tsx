import { SelectionMapType } from '@/metadata/selection-map';
import tw from 'twin.macro';
import SelectionCard from './SelectionCard';

const SelectionBox = tw.div``;

const SelectionMap = () => {
  const iShape: SelectionMapType[] = Array(13).fill('i');
  const tShape = [2, 2, 2, 1, 2, 2, 2];
  const piShape = [2, 2, 1, 2, 1, 2, 2];
  return (
    <SelectionBox>
      <SelectionCard data={iShape} />
      {/* <div className={'grid grid-rows-selection justify-center'}>
        <div>s</div>
        <div>s</div>
      </div>
      <div className={'grid grid-rows-selection justify-center'}>
        <div>s</div>
        <div>s</div>
      </div>
      <div className={'grid grid-rows-selection justify-center'}>
        <div>s</div>
        <div>s</div>
      </div>
      <div className={'flex flex-col items-center justify-center h-full'}>
        <div>
          <ImageBox styles={{ height: '100%' }} src={Choose} alt={'choose'} />
        </div>
      </div>
      <div className={'grid grid-rows-selection justify-center'}>
        <div>s</div>
        <div>s</div>
      </div>
      <div className={'grid grid-rows-selection justify-center'}>
        <div>s</div>
        <div>s</div>
      </div>
      <div className={'grid grid-rows-selection justify-center'}>
        <div>s</div>
        <div>s</div>
      </div> */}
    </SelectionBox>
  );
};
export default SelectionMap;
