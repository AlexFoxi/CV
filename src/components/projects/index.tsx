import cn from 'clsx'
import React from 'react'

import ImageCustom from '@/ui/Image'
import LinkHover from '@/ui/LinkHover'

import LinkIco from '@/assets/icons/LinkIco'
import LinkedinIco from '@/assets/icons/LinkedinIco'
import BTC from '@/assets/siteLogos/BTC.svg'
import ItHoot from '@/assets/siteLogos/ItHoot.svg'
import LeroyMerlin from '@/assets/siteLogos/LeroyMerlin.svg'
import Thermocarbon from '@/assets/siteLogos/Thermocarbon.webp'

import styles from './projects.module.scss'

type props = {
  title: string
}

const Projects: React.FC<props> = ({ title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        <div className={styles.project}>
          <div className={styles.image}>
            <ImageCustom
              width={50}
              height={50}
              src={ItHoot}
              alt='ItHoot'
              contain
            />
          </div>
          <div className={styles.about}>
            <h3>It Hoot</h3>
            <p>Outsourcing Software Development Company</p>
          </div>
          <div className={styles.links}>
            <LinkHover
              href='https://www.linkedin.com/company/it-hoot/'
              target
              text='Linkedin'
            >
              <LinkedinIco />
            </LinkHover>
            <LinkHover href='https://ithoot.com' target text='Preview'>
              <LinkIco />
            </LinkHover>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.image}>
            <ImageCustom width={50} height={50} src={BTC} alt='BTC' contain />
          </div>
          <div className={styles.about}>
            <h3>Bus Trade Center</h3>
            <p>Buy and sell transportation in Sweden</p>
          </div>
          <div className={styles.links}>
            <LinkHover
              href='https://www.bustradecenter.com'
              target
              text='Preview'
            >
              <LinkIco />
            </LinkHover>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.image}>
            <ImageCustom
              width={50}
              height={50}
              src={Thermocarbon}
              alt='Thermocarbon'
              contain
            />
          </div>
          <div className={styles.about}>
            <h3>Thermocarbon</h3>
            <p>
              Thermocarbon — world-leading wafer dicing blades and flanges
              manufacturer with 40-year experience in the market.
            </p>
          </div>
          <div className={styles.links}>
            <LinkHover href='https://dicing.com' target text='Preview'>
              <LinkIco />
            </LinkHover>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.image}>
            <ImageCustom
              width={50}
              height={50}
              src={LeroyMerlin}
              alt='LeroyMerlin'
              contain
            />
          </div>
          <div className={styles.about}>
            <h3>Leroy Merlin Україна</h3>
            <p>Chain of construction hypermarkets</p>
          </div>
          <div className={styles.links}>
            <LinkHover href='https://www.leroymerlin.ua' target text='Preview'>
              <LinkIco />
            </LinkHover>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
