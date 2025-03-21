import cn from 'clsx'

import LinkHover from '@/ui/LinkHover'

import CheckIco from '@/assets/icons/CheckIco'
import GitIco from '@/assets/icons/GitIco'
import LinkedinIco from '@/assets/icons/LinkedinIco'
import TelegramIco from '@/assets/icons/TelegramIco'
import myImage from '@/assets/photo.jpg'

import styles from './home.module.scss'
import skillsData from './skills.json'
import MyProjects from '@/components/myProjects'
import Projects from '@/components/projects'
import CalculateAge from '@/helpers/CalculateAge'

interface Skill {
  name: string
  experience: string
}

interface SkillsCategory {
  name: string
  data: Skill[]
}

const Home = () => {
  const age = CalculateAge('1997-03-11')

  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.profile, styles.box)}>
        <div className={styles.avatar}>
          <img src={myImage} alt='photo' />
        </div>
        <div className={styles.socialInfo}>
          <h1>Kostushevich Oleksandr</h1>
          <div className={styles.socials}>
            <LinkHover href='https://github.com/AlexFoxi' target text='Github'>
              <GitIco />
            </LinkHover>
            <LinkHover
              href='https://www.linkedin.com/in/олександр-костушевич-3b5030171/?locale=en_US'
              target
              text='Linkedin'
            >
              <LinkedinIco />
            </LinkHover>
            <LinkHover href='https://t.me/MeroMori' target text='Telegram'>
              <TelegramIco />
            </LinkHover>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <div>
            <p>Position:</p>
            <span>Junior Frontend Developer (React)</span>
            <p>Developer Experience:</p>
            <span>3 years 8 months (1 year as React dev)</span>
            <p>Age:</p>
            <span>{age}</span>
            <p>Education:</p>
            <div>
              <span>Bachelor's degree in Management</span>
              <span>
                Master's degree in Management (Business Administration)
              </span>
            </div>
          </div>
        </div>
        <div className={styles.languages}>
          <h2>Languages</h2>
          <div>
            <p>Ukrainian:</p>
            <span>Native</span>
            <p>English:</p>
            <span>Intermediate</span>
          </div>
        </div>
        <div className={styles.about}>
          <h2>About me</h2>
          <p>
            I am an ambitious front-end developer who creates interactive and
            responsive web applications. I am proficient in modern front-end
            technologies such as TypeScript, Material-UI, and have experience
            working with REST APIs. I am constantly learning new technologies
            and approaches that will complement these skills to improve
            productivity and user experience. I am looking for opportunities for
            professional growth in a team of experienced developers.
          </p>
        </div>
      </header>
      <main className={cn(styles.mainSkills, styles.box)}>
        <h2>Professional skills</h2>
        <div className={styles.row}>
          {Object.entries(skillsData as Record<string, SkillsCategory>).map(
            ([key, category]) => (
              <div key={key} className={styles.col}>
                <h3>{category.name}</h3>
                <div className={styles.skills}>
                  {category.data.map(skill => (
                    <>
                      <p>{skill.name}</p>
                      {skill.experience === '' ? (
                        <CheckIco />
                      ) : (
                        <span>- {skill.experience}</span>
                      )}
                    </>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </main>
      <div className={cn(styles.projects, styles.box)}>
        <Projects title='Projects' />
        <MyProjects title='My Projects' />
      </div>
    </div>
  )
}

export default Home
