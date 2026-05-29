import work1 from '../assets/work/work1.webp'
import work2 from '../assets/work/work2.webp'
import work3 from '../assets/work/work3.webp'

export type Project = {
  href: string
  thumbnail: string
  alt: string
  cursorName: string
  tags: string[]
  title: string
}

export const projects: Project[] = [
  {
    href: 'https://organized-panama-944.notion.site/Portfolio-11abb50dd07b4b5aa348c80d7b762f9f',
    thumbnail: work1,
    alt: '포트폴리오 제작일지',
    cursorName: '#JavaScript',
    tags: ['#JavaScript', '#SVG'],
    title: '포트폴리오 제작일지',
  },
  {
    href: 'https://organized-panama-944.notion.site/Weather-a974a4973cd8441680d3ebf217139b73',
    thumbnail: work2,
    alt: '날씨와 미세먼지',
    cursorName: '#React',
    tags: ['#React', '#반응형 웹'],
    title: '날씨와 미세먼지',
  },
  {
    href: 'https://organized-panama-944.notion.site/0c4665c0d24c4f1da47239fe74bafe26',
    thumbnail: work3,
    alt: '도서 검색과 내 책 저장',
    cursorName: 'toy project',
    tags: ['#React', '# localStorage'],
    title: '도서 검색과 내 책 저장',
  },
  {
    href: 'https://next-js-practice-messageboard.vercel.app/',
    thumbnail: work1,
    alt: 'Next.js SSR 게시판',
    cursorName: '#Next.js',
    tags: ['#Next.js', '#SSR'],
    title: '누구나 읽고 쓸 수 있는 게시판',
  },
  {
    href: 'https://monorepo-project-ai-kwater.vercel.app/',
    thumbnail: work2,
    alt: '수자원 관제 사이트 mockdata',
    cursorName: '#monorepo',
    tags: ['#Next.js', '#monorepo', '#msw'],
    title: '수자원 관제 mockdata',
  },
  {
    href: 'https://monorepo-saju-hskim.vercel.app/',
    thumbnail: work3,
    alt: '재미로 보는 사주',
    cursorName: '#사주',
    tags: ['#Next.js', '#monorepo'],
    title: '재미로 보는 사주',
  },
  {
    href: 'https://next-js-practice-seven-black.vercel.app/',
    thumbnail: work1,
    alt: '익명 게시판',
    cursorName: '#익명게시판',
    tags: ['#Next.js', '#SSR'],
    title: '익명 게시판',
  },
  {
    href: 'https://yourlog-red.vercel.app/docs',
    thumbnail: work2,
    alt: 'Yourblog swagger 문서',
    cursorName: '#backend',
    tags: ['#Koa', '#mongodb', '#TS'],
    title: 'Yourblog swagger 문서',
  },
  {
    href: 'https://yourlog-v447.vercel.app/',
    thumbnail: work3,
    alt: 'Yourblog 서비스',
    cursorName: '#Yourblog',
    tags: ['#React.js', '#TS'],
    title: 'Yourblog 블로그 서비스',
  },
  {
    href: 'https://kim-hyosun.github.io/counter-todolist/',
    thumbnail: work1,
    alt: 'todo-list, counter',
    cursorName: '#todo',
    tags: ['#React.js'],
    title: 'todo-list, counter',
  },
  {
    href: 'https://kim-hyosun.github.io/ReactPracticePart1/',
    thumbnail: work2,
    alt: '퍼블리싱 연습',
    cursorName: '#퍼블리싱',
    tags: ['#React.js', '#퍼블리싱'],
    title: '퍼블리싱 연습',
  },
]
