import { key } from 'constants/config';

// ...code

export default function initialize() {
  if (typeof window !== 'undefined') {
    const { Kakao } = window;
    Kakao.init(key.kakao);
  }
}
