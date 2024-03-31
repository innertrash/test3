import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.162 2.36225C20.3985 2.68242 19.5889 2.89268 18.76 2.98609C19.6337 2.49066 20.2877 1.71093 20.6 0.792229C19.78 1.25489 18.881 1.57914 17.944 1.75453C17.3146 1.11607 16.4803 0.692645 15.5709 0.550074C14.6615 0.407503 13.7279 0.553777 12.9152 0.966157C12.1026 1.37854 11.4564 2.03392 11.0771 2.83041C10.6978 3.6269 10.6067 4.51988 10.818 5.37052C9.15509 5.2915 7.52831 4.88181 6.04327 4.16803C4.55823 3.45426 3.24812 2.45237 2.19799 1.2274C1.82628 1.8327 1.63095 2.5208 1.63199 3.22122C1.63199 4.59594 2.36999 5.81043 3.49199 6.5215C2.828 6.50168 2.17862 6.33167 1.59799 6.02565V6.07495C1.59819 6.99051 1.93236 7.87784 2.54384 8.58648C3.15531 9.29512 4.00647 9.78146 4.95299 9.96304C4.3366 10.1214 3.69029 10.1447 3.06299 10.0313C3.32986 10.8194 3.84999 11.5086 4.55058 12.0025C5.25116 12.4963 6.09711 12.7701 6.96998 12.7855C6.10246 13.4314 5.10916 13.9089 4.04687 14.1907C2.98457 14.4725 1.87412 14.5529 0.778992 14.4276C2.69069 15.5932 4.91608 16.212 7.18898 16.21C14.882 16.21 19.089 10.1678 19.089 4.92777C19.089 4.75711 19.084 4.58456 19.076 4.4158C19.8948 3.8547 20.6016 3.15961 21.163 2.3632L21.162 2.36225Z'
      fill='#454444'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
