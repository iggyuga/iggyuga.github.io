import { useEffect } from 'react'

type Props = {
  title?: string
  description?: string
}

export default function Head({ title, description }: Props) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])

  return null
}
