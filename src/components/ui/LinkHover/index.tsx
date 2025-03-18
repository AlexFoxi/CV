import { PropsWithChildren } from 'react'

import styles from './linkHover.module.scss'

interface LinkData {
  href: string
  target?: boolean
  text?: string
}

const LinkHover: React.FC<PropsWithChildren<LinkData>> = ({
  href,
  target,
  text,
  children
}) => {
  return (
    <div className={styles.link}>
      <a href={href} target={target ? '_blank' : '_self'}>
        {children}
      </a>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default LinkHover
