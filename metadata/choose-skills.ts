export type ChooseSkillType = {
  key: string;
  title: string;
  content: string;
  color: string;
};

export const chooseSkillsMetaData: ChooseSkillType[] = [
  {
    key: 'uxr',
    title: 'UX Research',
    content:
      '다양한 리서치 프레임워크를 통해 사용자 경험을 분석하고 제품의 방향을 제안하거나 개선 사항을 발굴합니다.',
    color: '#F63E2B'
  },
  {
    key: 'uxd',
    title: 'UX Design',
    content:
      '사용자가 제품 및 서비스를 이용하면서 느끼는 전반적인 사용 경험을 설계하여 사용자 관점에서 문제를 해결합니다.',
    color: '#FA73FD'
  },
  {
    key: 'uxw',
    title: 'UX Writing',
    content:
      '정보 및 메시지를 사용자에게 효과적으로 전달하고 목적을 쉽게 달성하도록 글을 작성하여 사용 경험을 향상시킵니다.',
    color: '#FC7D08'
  },
  {
    key: 'uid',
    title: 'UI Design',
    content:
      '사용자 경험을 고려하여 사용자가 제품 및 서비스를 쉽게 이용할 수 있는 인터페이스를 제작합니다.',
    color: '#F5B72B'
  },
  {
    key: 'id',
    title: 'Interaction Design',
    content:
      '사용자가 제품 및 서비스 사용 시 용이하게 상호작용할 수 있는 인터랙션 경험을 디자인합니다.',
    color: '#60CE93'
  },
  {
    key: 'bd',
    title: 'Brand Design',
    content: '사용자가 경험하는 모든 매체의 브랜드 이미지와 아이덴티티를 제작합니다.',
    color: '#4573F3'
  },
  {
    key: 'gd',
    title: 'Graphic Design',
    content:
      '제품 및 서비스에 적합한 그래픽, 타이포, 사진 등 시각적 콘텐츠를 제작합니다.',
    color: '#7B61FF'
  }
];
