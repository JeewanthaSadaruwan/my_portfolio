import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import {
  SiDassaultsystemes,
  SiEspressif,
  SiGit,
  SiGithub,
  SiNvidia,
  SiRaspberrypi,
  SiStmicroelectronics,
} from 'react-icons/si'
import { portfolio } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import opencvLogo from '@/assets/icons/ai/opencv.svg'
import pytorchLogo from '@/assets/icons/ai/pytorch.svg'
import scikitLearnLogo from '@/assets/icons/ai/scikit-learn.svg'
import tensorflowLogo from '@/assets/icons/ai/tensorflow.svg'
import ultralyticsYoloLogo from '@/assets/icons/ai/ultralytics-yolo.svg'
import chromadbLogo from '@/assets/icons/agentic-ai/chromadb-icon.png'
import huggingFaceLogo from '@/assets/icons/agentic-ai/hugging-face.svg'
import langchainLogo from '@/assets/icons/agentic-ai/langraph.jpeg'
import langgraphLogo from '@/assets/icons/agentic-ai/download.svg'
import postgresqlLogo from '@/assets/icons/agentic-ai/postgresql.svg'
import strandsAgentsLogo from '@/assets/icons/agentic-ai/strands-agents-light.svg'
import gazeboLogo from '@/assets/icons/simulators/gazebo.svg'
import habitatSimLogo from '@/assets/icons/simulators/habitat-sim.png'
import isaacSimLogo from '@/assets/icons/simulators/isaac-sim.png'
import mujocoLogo from '@/assets/icons/simulators/mujoco.png'
import rosLogo from '@/assets/icons/simulators/ros.svg'
import webotsLogo from '@/assets/icons/simulators/webots.png'
import cLogo from '@/assets/icons/languages/c.svg'
import cppLogo from '@/assets/icons/languages/cpp.svg'
import matlabLogo from '@/assets/icons/languages/matlab.svg'
import pythonLogo from '@/assets/icons/languages/python.svg'
import altiumDesignerLogo from '@/assets/icons/electronics/altium-designer.png'
import ltspiceLogo from '@/assets/icons/electronics/ltspice.png'
import multisimLogo from '@/assets/icons/electronics/ni-multisim.jpg'

interface SkillLogo {
  icon?: IconType
  image?: string
  mark?: string
  color: string
  imageSize?: 'sm' | 'md' | 'lg'
  imageTone?: 'light'
}

const categoryAccentClasses = [
  'skill-accent-cyan',
  'skill-accent-teal',
  'skill-accent-blue',
  'skill-accent-emerald',
  'skill-accent-amber',
  'skill-accent-violet',
  'skill-accent-slate',
]

const skillLogoMap: Record<string, SkillLogo> = {
  OpenCV: { image: opencvLogo, color: '#5c3ee8' },
  PyTorch: { image: pytorchLogo, color: '#ee4c2c' },
  'scikit-learn': { image: scikitLearnLogo, color: '#f7931e' },
  TensorFlow: { image: tensorflowLogo, color: '#ff6f00' },
  'Ultralytics YOLO': { image: ultralyticsYoloLogo, color: '#111827', imageSize: 'lg' },
  'Hugging Face': { image: huggingFaceLogo, color: '#ffcc4d', imageSize: 'lg' },
  LangChain: { image: langchainLogo, color: '#1c3c3c', imageSize: 'lg' },
  LangGraph: { image: langgraphLogo, color: '#1f6feb', imageSize: 'lg', imageTone: 'light' },
  ChromaDB: { image: chromadbLogo, color: '#fbbf24', imageSize: 'lg' },
  PostgreSQL: { image: postgresqlLogo, color: '#4169e1' },
  'Strands Agents': { image: strandsAgentsLogo, color: '#38bdf8', imageSize: 'lg' },
  'ROS 2': { image: rosLogo, color: '#38bdf8', imageSize: 'lg', imageTone: 'light' },
  Nav2: { mark: 'N2', color: '#2dd4bf' },
  'SLAM Toolbox': { mark: 'SLAM', color: '#38bdf8' },
  Gazebo: { image: gazeboLogo, color: '#f97316' },
  Webots: { image: webotsLogo, color: '#38bdf8' },
  'Habitat-Sim': { image: habitatSimLogo, color: '#0ea5e9' },
  'Isaac Sim': { image: isaacSimLogo, color: '#76b900' },
  MuJoCo: { image: mujocoLogo, color: '#f97316', imageSize: 'lg' },
  STM32: { icon: SiStmicroelectronics, color: '#03234b' },
  ESP32: { icon: SiEspressif, color: '#e7352c' },
  'Raspberry Pi': { icon: SiRaspberrypi, color: '#a22846' },
  'NVIDIA Jetson': { icon: SiNvidia, color: '#76b900' },
  'Altium Designer': { image: altiumDesignerLogo, color: '#a91d3a', imageSize: 'lg' },
  LTspice: { image: ltspiceLogo, color: '#900028', imageSize: 'lg' },
  'NI Multisim': { image: multisimLogo, color: '#57b957', imageSize: 'lg' },
  Git: { icon: SiGit, color: '#f05032' },
  GitHub: { icon: SiGithub, color: '#f5f7fb' },
  Simulink: { mark: 'SL', color: '#f59e0b' },
  SolidWorks: { icon: SiDassaultsystemes, color: '#005386' },
  'Visual Studio Code': { mark: 'VS', color: '#007acc' },
  Python: { image: pythonLogo, color: '#3776ab', imageSize: 'lg' },
  C: { image: cLogo, color: '#a8b9cc', imageSize: 'lg' },
  'C++': { image: cppLogo, color: '#00599c', imageSize: 'lg' },
  MATLAB: { image: matlabLogo, color: '#e16737', imageSize: 'lg' },
}

export function SkillsSection() {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <h2 className="skills-title" id="skills-title" data-reveal>
        Skills
      </h2>
      <div className="skills-grid skills-visual-grid">
        {portfolio.skills.map((category, categoryIndex) => (
          <article
            className={cn(
              'surface-card skill-card skill-category-card',
              categoryAccentClasses[categoryIndex % categoryAccentClasses.length],
            )}
            key={category.title}
            data-reveal
          >
            <div className="skill-card-header">
              <h3>{category.title}</h3>
            </div>
            <div className="skill-logo-grid">
              {category.items.map((skill) => {
                const logo = skillLogoMap[skill]
                const Icon = logo?.icon

                return (
                  <span
                    className="skill-logo-item"
                    key={skill}
                    style={logo ? ({ '--skill-logo-color': logo.color } as CSSProperties) : undefined}
                  >
                    <span
                      className={cn('skill-logo-mark', logo?.imageSize && `skill-logo-mark-${logo.imageSize}`)}
                      aria-hidden="true"
                    >
                      {logo?.image ? (
                        <img
                          className={cn(logo.imageTone && `skill-logo-image-${logo.imageTone}`)}
                          src={logo.image}
                          alt=""
                          loading="lazy"
                        />
                      ) : Icon ? (
                        <Icon size={34} />
                      ) : (
                        <span>{logo?.mark ?? skill.slice(0, 2).toUpperCase()}</span>
                      )}
                    </span>
                    <span className="skill-tool-label">{skill}</span>
                  </span>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
