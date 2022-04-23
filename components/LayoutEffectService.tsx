import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useLayoutEffect } from 'react';

const LayoutEffectService = ({
  shouldGoRoot,
  selectedMaps,
  setSelectedMaps
}: {
  shouldGoRoot: boolean;
  selectedMaps: {
    primary_skill?: any[];
    secondary_skill?: any[];
    etc_skill?: any[];
  };
  setSelectedMaps: Dispatch<
    SetStateAction<{
      primary_skill?: any[];
      secondary_skill?: any[];
      etc_skill?: any[];
    }>
  >;
}) => {
  const { push } = useRouter();
  useEffect(() => {
    if (shouldGoRoot) {
      console.log('보내버려');
      sessionStorage.removeItem('selectedMaps');
      push('/shapemodel');
    }
  }, [shouldGoRoot, push]);

  useEffect(() => {
    sessionStorage.setItem('selectedMaps', JSON.stringify(selectedMaps));
  }, [selectedMaps]);

  useLayoutEffect(() => {
    if (sessionStorage.getItem('selectedMaps')) {
      setSelectedMaps(() => JSON.parse(sessionStorage.getItem('selectedMaps')));
    } else {
      sessionStorage.setItem('selectedMaps', JSON.stringify(selectedMaps));
    }
  }, []);
  return <></>;
};

export default LayoutEffectService;
