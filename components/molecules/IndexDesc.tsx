import tw from 'twin.macro';
import { Body1 } from '../../styles/typography';

const DescLayout = tw.div`mb-10 flex flex-col`;
const BoldDesc = tw.div`font-bold`;
const BoldP = tw(Body1)`text-[18px]`;
const Desc = tw.div`text-lg`;
const DP = tw(Body1)`text-[#666666] text-[18px]`;

const IndexDesc = () => {
  return (
    <DescLayout>
      <BoldDesc>
        <BoldP>
          NerdIT는 IT를 사랑하는, IT밖에 모르니 디자인 Nerd들을 위한 플랫폼입니다.
        </BoldP>
      </BoldDesc>
      <Desc>
        <DP
          dangerouslySetInnerHTML={{
            __html:
              "NerdIT는 개인에게 맞는 디자인 커리어 로드맵을 설계하여, <br />IT 업계에 종사하는 디자인 너드들이 탄탄한 커리어를 쌓을 수 있도록 돕습니다. <br />디자이너로써 미래를 어떻게 설계해야할지 모른다면 NerdIT 해보세요! Let's NerdIT!"
          }}
        ></DP>
      </Desc>
    </DescLayout>
  );
};

export default IndexDesc;
