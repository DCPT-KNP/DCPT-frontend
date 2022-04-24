import ChooseSkillCard from '@/components/ChooseSkillCard/ChooseSkillCard';
import Btn from '@/components/common/Btn';
import MainLayout from '@/components/layout/MainLayout';
import SelectionMap from '@/components/SelectionMap/SelectionMap';
import { IShapeModelCard } from '@/interfaces/shapemodel';
import { chooseSkillsMetaData, ChooseSkillType } from '@/metadata/choose-skills';
import { navList, NavListMetaDataType } from '@/metadata/nav';
import { cardList } from '@/metadata/shape-model';
import { SubHeadline, Title1 } from '@/styles/typography';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import tw from 'twin.macro';
const LayoutEffectService = dynamic(() => import('@/components/LayoutEffectService'), {
  ssr: false
});

const LeftSection = tw.section`flex flex-col flex-1 pr-16 border-r py-[104px]`;
const Title = tw(Title1)`font-bold text-[#666666] mb-12`;
const RightSection = tw.section`flex flex-col flex-1 pl-16 py-[104px]`;
const HeadLine = tw(SubHeadline)`font-bold whitespace-nowrap mb-8`;
const SkillsBox = tw.div`grid grid-cols-[repeat(2, minmax(0, 383px))] gap-4`;
const BtnBox = tw.div`flex self-end gap-4`;

const TypePage = (
  props: ReturnType<GetStaticProps> & {
    data: IShapeModelCard &
      NavListMetaDataType & {
        skillIndex: number[];
        prevStep: string | null;
        nextStep: string;
      };
  }
) => {
  const { push } = useRouter();
  const [selectedMaps, setSelectedMaps] = useState<{
    primary_skill?: any[];
    secondary_skill?: any[];
    etc_skill?: any[];
  }>({});
  const [skillIndex, setSkillIndex] = useState<number[]>();
  useEffect(() => {
    setSkillIndex(props?.data?.skillIndex);
  }, [props?.data?.skillIndex]);

  const selectedSkillsData = useMemo(() => {
    let selectedSkills = [];
    let selectedSkillsByDifferentKey = [];
    for (const [skill] of Object.entries(selectedMaps)) {
      selectedSkills = [...selectedSkills, ...selectedMaps[skill]];
      if (skill !== props?.data?.key) {
        selectedSkillsByDifferentKey = [
          ...selectedSkillsByDifferentKey,
          ...selectedMaps[skill]
        ];
      }
    }
    return { selectedSkills, selectedSkillsByDifferentKey };
  }, [selectedMaps, props?.data?.key]);

  const isDisabled = useCallback(
    (skillKey) => {
      const { selectedSkillsByDifferentKey } = selectedSkillsData;
      return selectedSkillsByDifferentKey.findIndex((v) => v.key === skillKey) > -1;
    },
    [selectedSkillsData]
  );

  const handleClickSelectMap = useCallback(
    (key: ChooseSkillType['key']) => {
      if (
        skillIndex.length === selectedMaps[props?.data?.key]?.length &&
        selectedMaps[props?.data?.key]?.findIndex((v) => v.key === key) < 0
      ) {
        return;
      }

      setSelectedMaps((prev) => {
        if (!prev[props?.data?.key]?.find((v) => v.key === key)) {
          const spread = prev?.[props?.data?.key] ? [...prev?.[props?.data?.key]] : [];
          const data = {
            ...prev,
            [props?.data?.key]: [
              ...spread,
              { index: skillIndex[prev?.[props?.data?.key]?.length ?? 0], key }
            ]
          };
          return data;
        }
        if (
          selectedMaps[props?.data?.key][selectedMaps[props?.data?.key].length - 1]
            .key !== key
        ) {
          return prev;
        }
        const copySkill = [...prev[props?.data?.key]];
        const findIndex = copySkill.findIndex((v) => v.key === key);
        copySkill.splice(findIndex, 1);
        return { ...prev, [props?.data?.key]: copySkill };
      });
    },
    [selectedMaps, skillIndex, props?.data]
  );
  const isSelected = useCallback(
    (key: string) =>
      selectedMaps[props?.data?.key]?.findIndex((v) => v.key === key) > -1,
    [selectedMaps, props?.data?.key]
  );

  const isDisabledNext = useMemo(() => {
    switch (props?.data?.key) {
      case 'primary_skill':
      case 'secondary_skill':
        if (selectedMaps[props?.data?.key]?.length === 1) {
          return false;
        }
        return true;
      case 'etc_skill':
        if (selectedMaps[props?.data?.key]?.length >= 1) {
          return false;
        }
        return true;
      default:
        break;
    }
  }, [selectedMaps, props?.data]);

  const shouldGoRoot = useMemo(() => {
    const {
      data: { prevStep }
    } = props;
    if (prevStep && Object.keys(selectedMaps).length < 1) {
      return true;
    }
    return false;
  }, [props, selectedMaps]);

  return (
    <>
      <LayoutEffectService
        shouldGoRoot={shouldGoRoot}
        selectedMaps={selectedMaps}
        setSelectedMaps={setSelectedMaps}
      />
      {props?.data?.key === 'final' ? null : (
        <>
          <LeftSection>
            <Title>{props?.data?.title}</Title>
            <SelectionMap
              type={props?.data?.type}
              skillIndex={skillIndex}
              selectedSkillsByKey={selectedMaps[props?.data?.key]}
              selectedSkills={selectedSkillsData?.selectedSkills}
            />
          </LeftSection>
          <RightSection>
            <HeadLine>Choose {props?.data?.navTitle}</HeadLine>
            <SkillsBox>
              {chooseSkillsMetaData?.map(
                ({ key, title, content, color }: ChooseSkillType) => (
                  <ChooseSkillCard
                    key={key}
                    title={title}
                    content={content}
                    color={color}
                    onClick={() => handleClickSelectMap(key)}
                    disabled={isDisabled(key)}
                    isSelected={isSelected(key)}
                  />
                )
              )}
            </SkillsBox>
            <BtnBox>
              <Btn
                className="place-self-end"
                onClick={() => {
                  if (props?.data?.prevStep !== null) {
                    push(`../${props?.data?.type}/${props?.data?.prevStep}`);
                  } else {
                    push(`../`);
                  }
                }}
                arrow={'left'}
                styles={{
                  size: '20',
                  bgColor: '#FAFAFA',
                  color: '#666666',
                  margin: '4rem 0 0 0'
                }}
                name={'Back'}
              />
              <Btn
                disabled={isDisabledNext}
                className="place-self-end"
                onClick={() => {
                  push(`../${props?.data?.type}/${props?.data?.nextStep}`);
                }}
                arrow={'right'}
                styles={{
                  size: '20',
                  bgColor: '#1A1A1A',
                  color: '#FFFFFF',
                  margin: '4rem 0 0 0'
                }}
                name="Next"
              />
            </BtnBox>
          </RightSection>
        </>
      )}
    </>
  );
};

TypePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const cardPaths = cardList.map((item) => ({ type: item.type }));
  const navPaths = navList
    .map((item) => {
      if (item.key !== 'shape_model') {
        return { nav: item.key, containTypes: item.containTypes };
      }
    })
    .filter((i) => i);
  const paths: GetStaticPathsResult['paths'] = cardPaths
    .flatMap((cardPath) => {
      return navPaths.map(
        (navPath) =>
          navPath?.containTypes.includes(cardPath.type) && {
            params: {
              type: cardPath.type,
              nav: navPath?.nav
            }
          }
      );
    })
    .filter((i) => i) as NonNullable<GetStaticPathsResult['paths']>;
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  const typeKey = context?.params?.type as IShapeModelCard['type'];
  const navKey = context?.params?.nav;
  let skillIndex = [];
  let prevStep = navKey;
  let nextStep = navKey;
  switch (typeKey) {
    case 'i':
      if (navKey === 'primary_skill') {
        skillIndex = [3];
        prevStep = null;
        nextStep = 'final';
      }
      break;
    case 't':
      if (navKey === 'primary_skill') {
        skillIndex = [3];
        prevStep = null;
        nextStep = 'etc_skill';
      }
      if (navKey === 'etc_skill') {
        skillIndex = [2, 4, 1, 5, 0, 6];
        prevStep = 'primary_skill';
        nextStep = 'final';
      }
      break;
    case 'pi':
      if (navKey === 'primary_skill') {
        skillIndex = [2];
        prevStep = null;
        nextStep = 'secondary_skill';
      }
      if (navKey === 'secondary_skill') {
        skillIndex = [4];
        prevStep = 'primary_skill';
        nextStep = 'etc_skill';
      }
      if (navKey === 'etc_skill') {
        skillIndex = [3, 1, 5, 0, 6];
        prevStep = 'etc_skill';
        nextStep = 'final';
      }
      break;
    default:
      skillIndex = [3];
      break;
  }
  if (!typeKey) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data: {
        prevStep,
        nextStep,
        skillIndex,
        ...cardList.find(({ type }) => type === typeKey),
        ...navList.find(
          ({ key, containTypes }) => key === navKey && containTypes.includes(typeKey)
        )
      }
    }
  };
};

export default TypePage;
