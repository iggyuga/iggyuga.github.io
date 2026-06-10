import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../content/projects'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group rounded-2xl border border-border bg-surface overflow-hidden flex flex-col"
    >
      {/* Thumbnail / gradient header */}
      <Link
        to={`/project/${project.slug}`}
        aria-label={`Read case study: ${project.title}`}
        className="block"
      >
        <div
          className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-end p-5`}
        >
          {/* TODO: replace with real screenshot/video */}
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
            // TODO: screenshot
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <Link
            to={`/project/${project.slug}`}
            className="group/title inline-block"
          >
            <h3 className="font-mono text-lg font-medium text-fg group-hover/title:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-muted text-sm mt-1.5 leading-relaxed">{project.pitch}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded-md bg-surface-raised text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto pt-2">
          <Link
            to={`/project/${project.slug}`}
            className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Case study <ArrowUpRight size={14} />
          </Link>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted hover:text-fg transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={14} /> Repo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted hover:text-fg transition-colors"
              aria-label={`${project.title} live site`}
            >
              Live <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
