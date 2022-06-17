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
    title: 'Project',
    path: '/about',
    subtitles: [
      {
        title: '시작하며',
        path: '/about',
      },
      {
        title: '서동고개',
        path: '/project/seodong',
      },
      {
        title: '고개서동 프로젝트',
        path: '/project/gogaeseodong',
      },
      {
        title: '만든이들',
        path: '/project/operators',
      },
    ],
  },
  {
    number: '02',
    title: 'Local Space',
    path: '/localspace',
    subtitles: [
      {
        title: '공유주방',
        path: '/localspace/sharedkitchen',
      },
      {
        title: '파티룸&스튜디오',
        path: '/localspace/partyroomandstudio',
      },
    ],
  },
  {
    number: '03',
    title: 'Local Life',
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
    title: 'Local Place',
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
    title: 'Local Goods',
    path: '',
    subtitles: [
      {
        title: '준비중',
        path: '',
      },
    ],
  },
];
export const mainBgImgs = ['/bg/bg1.png', '/bg/bg2.png'];
