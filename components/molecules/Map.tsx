import tw from 'twin.macro';
import MapPiece from '../atoms/Map/MapPiece';
import MapTitle from '../atoms/Map/MapTitle';

const MapWrapper = tw.div`flex h-24`;
const MapBox = tw.div`relative w-full`;
const Map = () => {
  return (
    <MapWrapper>
      <MapBox>
        <MapPiece styles={{ backgroundColor: '#ffffff' }} />
      </MapBox>
      <MapBox>
        <MapPiece styles={{ backgroundColor: '#F63E2B' }} />
        <MapTitle title="UXR" />
      </MapBox>
      <MapBox>
        <MapPiece styles={{ backgroundColor: '#F5B72B' }} />
        <MapTitle title="UXD" />
      </MapBox>
      <MapBox>
        <MapPiece styles={{ backgroundColor: '#60CE93' }} />
        <MapTitle title="UXW" />
      </MapBox>
      <MapBox>
        <MapPiece styles={{ backgroundColor: '#4573F3' }} />
        <MapTitle title="UID" />
      </MapBox>
      <MapBox>
        <MapPiece styles={{ backgroundColor: '#8D82F3' }} />
        <MapTitle title="UXD" />
      </MapBox>
      <MapBox>
        <MapPiece styles={{ backgroundColor: '#ffffff' }} />
      </MapBox>
    </MapWrapper>
  );
};

export default Map;
