import {
  siReact,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siSharp,
  siDotnet,
  siPython,
  siNodedotjs,
  siRailway,
  siGithubactions,
  siDocker,
  siSqlite,
  siGit,
  siGithub,
  siDiscord,
  siRaspberrypi,
} from 'simple-icons'

export type TechItem = {
  name: string
  path: string
}

export type TechGroup = {
  label: string
  items: TechItem[]
}

export const techGroups: TechGroup[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', path: siReact.path },
      { name: 'TypeScript', path: siTypescript.path },
      { name: 'Next.js', path: siNextdotjs.path },
      { name: 'Tailwind', path: siTailwindcss.path },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'C#', path: siSharp.path },
      { name: '.NET', path: siDotnet.path },
      { name: 'Python', path: siPython.path },
      { name: 'Node.js', path: siNodedotjs.path },
    ],
  },
  {
    label: 'Infra',
    items: [
      { name: 'Railway', path: siRailway.path },
      { name: 'GitHub Actions', path: siGithubactions.path },
      { name: 'Docker', path: siDocker.path },
      { name: 'SQLite', path: siSqlite.path },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', path: siGit.path },
      { name: 'GitHub', path: siGithub.path },
      { name: 'Discord', path: siDiscord.path },
      { name: 'Raspberry Pi', path: siRaspberrypi.path },
    ],
  },
]
