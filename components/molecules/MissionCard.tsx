import React from 'react';

const MissionCard = () => {
  return (
    <div className="card md:flex-col max-w-sm p-6">
      <div className="flex items-center md:text-left mb-2">
        <div className="mr-1">🐱</div>
        <h5 className="subheading text-base ">데이터 분석 능력</h5>
      </div>
      <p className="text-[12px] mb-4">
        사용자의 데이터를 기반으로 다양한 정량/정성적인 접근 방식을 활용하여 유의미한
        인사이트를 도출합니다.
      </p>
      <div className="flex justify-between items-center md:text-left mb-4">
        <div className="text-[12px]">UXR</div>
        <button className="text-[12px] text-gray-500">Add your Mission</button>
      </div>
      <progress className="progress ~neutral" value="75" max="100">
        75%
      </progress>
    </div>
  );
};

export default MissionCard;
