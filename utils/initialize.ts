import { key } from 'constants/config';

if (typeof window !== 'undefined') {
  const { Kakao } = window;
}
// ...code

export default function initialize() {
  if (typeof window !== 'undefined') {
    // ...code
    Kakao.init(key.kakao);
  }
}
