import tw from 'twin.macro';

const DescLayout = tw.div`mb-10 flex flex-col`;
const BoldDesc = tw.div`font-bold`;
const Desc = tw.div`text-lg`;
const P = tw.p``;

const IndexDesc = () => {
  return (
    <DescLayout>
      <BoldDesc>
        <P>NerdIT는 IT를 사랑하는, IT밖에 모르니 디자인 Nerd들을 위한 플랫폼입니다.</P>
      </BoldDesc>
      <Desc>
        <P
          dangerouslySetInnerHTML={{
            __html:
              "NerdIT는 개인에게 맞는 디자인 커리어 로드맵을 설계하여, <br />IT 업계에 종사하는 디자인 너드들이 탄탄한 커리어를 쌓을 수 있도록 돕습니다. <br />디자이너로써 미래를 어떻게 설계해야할지 모른다면 NerdIT 해보세요! Let's NerdIT!"
          }}
        ></P>
      </Desc>
    </DescLayout>
  );
};

export default IndexDesc;
