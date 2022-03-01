import { ButtonHTMLAttributes, SyntheticEvent, useMemo } from 'react';
import tw from 'twin.macro';
import CategoryItemTitle from './CategoryItemTitle';
import CategoryItemUnderline from './CategoryItemUnderline';
import Chip from '../common/Chip';

interface ICategoryMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  selected: boolean;
  chip?: boolean;
  number?: number;
  onClick?: (e: SyntheticEvent<HTMLButtonElement, Event>) => void;
}

const CategoryItemBtn = tw.button`inline-block`;
const TitleBox = tw.div`flex gap-2 mb-1.5`;
const CategoryItem = ({
  title,
  number,
  selected = false,
  chip = false,
  onClick,
  ...rest
}: ICategoryMenuProps) => {
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
    <CategoryItemBtn onClick={onClick} {...rest}>
      <TitleBox>
        <CategoryItemTitle title={title} styles={titleStyles} />
        {selected && chip ? (
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
    </CategoryItemBtn>
  );
};

export default CategoryItem;
