import '@atlaskit/css-reset';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import tw from 'twin.macro';
import CommonTitle from '../components/atoms/CommonTitle';
import CategoryItem from '../components/molecules/CategoryItem';
import MissionCard from '../components/molecules/MissionCard';
import MyInfoCard from '../components/molecules/MyInfoCard';
import SkillCard from '../components/molecules/SkillCard';
import StatusCard from '../components/molecules/StatusCard';
import TipsCard from '../components/molecules/TipsCard';

type missionType = { id: string; content: string };
type columnType = { id: string; title: string; missionIds: string[] };
interface IDnD {
  missions: Record<string, missionType>;
  columns: Record<string, columnType>;
  columnOrder: string[];
}

const AboutPage: NextPage = () => {
  const [windowReady, setWindowReady] = useState(false);
  useEffect(() => {
    setWindowReady(true);
  }, []);
  const initialData: IDnD = {
    missions: {
      'mission-1': { id: 'mission-1', content: '1' },
      'mission-2': { id: 'mission-2', content: '2' },
      'mission-3': { id: 'mission-3', content: '3' },
      'mission-4': { id: 'mission-4', content: '4' },
      'mission-5': { id: 'mission-5', content: '5' },
      'mission-6': { id: 'mission-6', content: '6' }
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Not Started',
        missionIds: ['mission-1', 'mission-2']
      },
      'column-2': {
        id: 'column-2',
        title: 'In Progress',
        missionIds: ['mission-3', 'mission-4']
      },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        missionIds: ['mission-5', 'mission-6']
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
  };
  const [dndData, setDndData] = useState<IDnD>(initialData);
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { draggableId, source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination?.droppableId === source?.droppableId &&
      destination?.index === source?.index
    ) {
      return;
    }
    const start = dndData?.columns[source?.droppableId];
    const finish = dndData?.columns[destination?.droppableId];
    if (start === finish) {
      const newMissionIds = Array.from(start?.missionIds);
      newMissionIds.splice(source?.index, 1);
      newMissionIds.splice(destination?.index, 0, draggableId);
      const newColumn = {
        ...start,
        missionIds: newMissionIds
      };

      return setDndData((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [newColumn.id]: newColumn
        }
      }));
    }
    const startMissionIds = Array.from(start.missionIds);
    startMissionIds.splice(source.index, 1);
    const newStart = {
      ...start,
      missionIds: startMissionIds
    };

    const finishMissionIds = Array.from(finish.missionIds);
    finishMissionIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      missionIds: finishMissionIds
    };
    return setDndData((prev) => ({
      ...prev,
      columns: {
        ...prev.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }));
  };
  const DnDContainer = tw.div`inline-flex`;
  const DropContainer = tw.div`inline-flex flex-col gap-2`;
  const DragContainer = tw.div`inline-block`;
  return (
    <div>
      {windowReady && (
        <DragDropContext onDragEnd={onDragEnd}>
          <DnDContainer>
            {dndData?.columnOrder.map((columnId) => {
              const column = dndData?.columns?.[columnId];
              const missions = column?.missionIds.map(
                (missionId) => dndData?.missions?.[missionId]
              );
              return (
                <div key={columnId}>
                  <StatusCard title={column.title} number={20} />
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <DropContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {missions?.map((mission, index) => (
                          <Draggable
                            key={mission.id}
                            draggableId={mission.id}
                            index={index}
                          >
                            {(provided) => (
                              <DragContainer
                                {...provided?.draggableProps}
                                {...provided?.dragHandleProps}
                                ref={provided?.innerRef}
                              >
                                <MissionCard />
                              </DragContainer>
                            )}
                          </Draggable>
                        ))}
                      </DropContainer>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </DnDContainer>
        </DragDropContext>
      )}
      <SkillCard color="red" title="UX Design" name="ETC Skill" percentage={80} />
      <SkillCard color="green" title="UX Design" name="ETC Skill" percentage={60} />
      <SkillCard color="blue" title="UX Design" name="ETC Skill" percentage={40} />
      <SkillCard color="red" title="UX Design" name="ETC Skill" percentage={20} />
      <CategoryItem title={'All Skills'} number={24} selected={false} />
      <CategoryItem title={'UX Research'} number={18} selected={true} />
      <StatusCard title={'In Progress'} number={0} />
      <StatusCard title={'Done'} number={10} />
      <CommonTitle title={'Skills'} />
      <CommonTitle title={'My Career Roadmap'} />
      <MyInfoCard />
      <TipsCard
        content={
          '데이터 분석 능력을 기르기 위해선 Python과 SQL에 대한 이해도가 필요한 경우가 있기 때문에 두가지 개발 언어에 대한 학습을 한다면 광범위한 데이터 분석을 진행할 수 있을 것입니다.'
        }
      />
      <CommonTitle title={'Add My Missions'} />
      <CommonTitle title={'Add My Memo'} />
    </div>
  );
};

export default AboutPage;
