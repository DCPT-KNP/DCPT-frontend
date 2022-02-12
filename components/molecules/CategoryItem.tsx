import { useMemo } from 'react';
import tw from 'twin.macro';
import CategoryItemTitle from '../atoms/Category/CategoryItemTitle';
import CategoryItemUnderline from '../atoms/Category/CategoryItemUnderline';
import Chip from '../atoms/Chip';

interface ICategoryMenuProps {
  title: string;
  number: number;
  selected: boolean;
}

const CategoryItemWrapper = tw.div`inline-block`;
const TitleBox = tw.div`flex gap-2 mb-1.5`;
const CategoryItem = ({ title, number, selected }: ICategoryMenuProps) => {
  const titleStyles = useMemo(() => {
    if (selected) {
      return {
        color: '#000000',
        fontWeight: 500
      };
    }
    return {
      color: '#BDBDBD',
      fontWeight: 400
    };
  }, [selected]);
  return (
    <CategoryItemWrapper>
      <TitleBox>
        <CategoryItemTitle title={title} styles={titleStyles} />
        {selected ? (
          <Chip
            styles={{
              bgColor: '#1A1A1A',
              color: '#ffffff',
              fontSize: '11px',
              padding: '4px 8px',
              fontWeight: 500
            }}
            content={number}
          />
        ) : null}
      </TitleBox>
      {selected ? <CategoryItemUnderline /> : null}
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
