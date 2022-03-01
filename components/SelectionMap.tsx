import tw from 'twin.macro';

const SelectionBox = tw.div``;
const SelectionCard = tw.div`border border-[#E9E9E9]`;

const SelectionMap = () => {
  const boxList = new Array(28).fill(0);
  return (
    <SelectionBox>
      {boxList.map((_, index) => (
        <SelectionCard key={index}></SelectionCard>
      ))}
    </SelectionBox>
  );
};
export default SelectionMap;
