export const bgColor = 'bg-teal-700';
export const title = 'The Project SEODONG';
export const menus: {
  title: string;
  path: string;
  number: string;
  subtitles: {
    title: string;
    path: string;
  }[];
}[] = [
  {
    number: '01',
    title: '소개',
    path: '/about',
    subtitles: [
      {
        title: '시작하며',
        path: '/about',
      },
      {
        title: '가깝지만 먼 동네',
        path: '/project/seodong',
      },
      {
        title: '서동 프로젝트',
        path: '/project/gogaeseodong',
      },
      {
        title: '만든이',
        path: '/project/operators',
      },
    ],
  },
  {
    number: '02',
    title: '로컬 공간',
    path: '/localspace',
    subtitles: [
      {
        title: '서동 부엌',
        path: '/localspace/sharedkitchen',
      },
      {
        title: '서동 영화',
        path: '/localspace/partyroomandstudio',
      },
      { title: '작은 사진관', path: '#' },
    ],
  },
  {
    number: '03',
    title: '로컬 생활',
    path: '/locallife',
    subtitles: [
      {
        title: '고개서동 이야기',
        path: '/locallife',
      },
      {
        title: '소셜다이닝',
        path: '/locallife/socialdining',
      },

      {
        title: '클래스',
        path: '/locallife/class',
      },
    ],
  },
  {
    number: '04',
    title: '로컬 장소',
    path: '/localplace',
    subtitles: [
      {
        title: '서동에 가면',
        path: '/localplace',
      },
    ],
  },
  {
    number: '05',
    title: '로컬 활용',
    path: '#',
    subtitles: [],
  },
];
export const mainBgImgs = ['/bg/bg1.png', '/bg/bg2.png'];
