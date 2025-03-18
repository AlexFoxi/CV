import cn from 'clsx'
import React from 'react'

import LinkHover from '@/ui/LinkHover'

import LinkIco from '@/assets/icons/LinkIco'

import styles from './myProjects.module.scss'

type props = {
  title: string
}

const MyProjects: React.FC<props> = ({ title }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        <div className={styles.project}>
          <div className={styles.about}>
            <h3>Zoom-Img</h3>
            <p>
              Tool to zoom image by hovering on it with mouse. Zoomed image
              showed in separate window. You can use mouse wheel to zoom out or
              in. Zoom adapts to the image aspect ratio. And simple slider by
              clicking on image
            </p>
          </div>
          <div className={styles.links}>
            <LinkHover
              href='https://github.com/AlexFoxi/Zoom-Img'
              target
              text='Github'
            >
              <LinkIco />
            </LinkHover>
            <LinkHover
              href='https://alexfoxi.github.io/Zoom-Img/'
              target
              text='Preview'
            >
              <LinkIco />
            </LinkHover>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.about}>
            <h3>Sapper-game</h3>
            <p>Old good game. Written on Js</p>
          </div>
          <div className={styles.links}>
            <LinkHover
              href='https://github.com/AlexFoxi/sapper-game'
              target
              text='Github'
            >
              <LinkIco />
            </LinkHover>
            <LinkHover
              href='https://alexfoxi.github.io/sapper-game/'
              target
              text='Preview'
            >
              <LinkIco />
            </LinkHover>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.about}>
            <h3>Slider-coverflow</h3>
            <p>
              Slider with coverflow effect written on Js, fully adaptive. Using
              script to create and delete old slides to prevent big amount of
              slides
            </p>
          </div>
          <div className={styles.links}>
            <LinkHover
              href='https://github.com/AlexFoxi/slider-coverflow'
              target
              text='Github'
            >
              <LinkIco />
            </LinkHover>
            <LinkHover
              href='https://alexfoxi.github.io/slider-coverflow/'
              target
              text='Preview'
            >
              <LinkIco />
            </LinkHover>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
