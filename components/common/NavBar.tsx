import { navList } from '@/metadata/nav';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import tw from 'twin.macro';
import CategoryItem from '../molecules/CategoryItem';

const Nav = tw.nav`flex justify-center`;
const Ul = tw.ul`flex gap-10`;
const Li = tw.li`cursor-pointer`;

const NavBar = () => {
  const { pathname, query, push } = useRouter();
  const handleClickItem = (
    e: SyntheticEvent<HTMLButtonElement, Event>,
    nav: string
  ) => {
    e.preventDefault();
    const regex = /\/\[[A-Z]+]/gi;
    const notTypePathname = pathname.replaceAll(regex, '');
    if (nav === 'shape_model') {
      return push(`${notTypePathname}`);
    }
    push(`${notTypePathname}/${query?.type}/${nav}`);
  };
  return (
    <Nav>
      <Ul>
        {navList.map(({ key, navTitle }) => (
          <Li key={key}>
            <CategoryItem
              title={navTitle}
              selected={query?.nav === key}
              onClick={(e) => handleClickItem(e, key)}
            />
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default NavBar;
