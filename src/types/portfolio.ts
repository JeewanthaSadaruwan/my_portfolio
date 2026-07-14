export type SocialPlatform = 'GitHub' | 'LinkedIn' | 'Email'

export type ProjectCategory =
  | 'Robotics & Autonomous Systems'
  | 'Agentic AI & Full-Stack Development'
  | 'Machine Learning & Sensor Analytics'
  | 'Embedded Systems & IoT'
  | 'Embedded AI & Assistive Technology'
  | 'Computer Vision & Mobile Robotics'

export type ProjectStatus = 'Ongoing' | 'Prototype' | 'Completed'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  href: string
}

export interface ExternalResourceLink {
  label: string
  href: string
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface TechnologyGroup {
  title: string
  items: string[]
}

export interface HeroRole {
  label: string
  image: ProjectImage
}

export type AboutIcon =
  | 'agentic-ai'
  | 'embodied-ai'
  | 'computer-vision'
  | 'robotics-autonomy'

export interface AboutExpertise {
  title: string
  description: string
  icon: AboutIcon
}

export interface AboutData {
  heading: string
  subtitle: string
  paragraphs: string[]
  expertise: AboutExpertise[]
}

export interface ExperienceItem {
  slug: string
  role: string
  organization: string
  location: string
  startDate: string
  endDate: string
  dateLabel: string
  projectTitle: string
  summary: string
  description: string
  projectIntroduction: string[]
  achievements: string[]
  responsibilities: string[]
  responsibilitiesIntro: string
  technicalOverview: string[]
  technicalImplementation: string[]
  architectureSteps: string[]
  contributions: ExperienceContribution[]
  challenges: string[]
  validationIntro: string
  validationOutcomes: string[]
  ongoingWork: string[]
  summaryTechnologies: string[]
  technologies: string[]
  galleryIntro: string
  images: ProjectImage[]
  detailIntroduction: string
  storySections: ExperienceStorySection[]
  supportingWork: ExperienceSupportingWork[]
  outcomesIntro: string
  learningParagraphs: string[]
  learningTags: string[]
  resources: ExternalResourceLink[]
  confidentialityNote: string
  media: ExperienceMedia[]
  organizationLink?: string
  example?: boolean
}

export interface EducationItem {
  id: string
  institution: string
  qualification: string
  date: string
  status?: string
  credential?: string
  description: string
  tags: string[]
  side: 'left' | 'right'
}

export interface CertificationItem {
  title: string
  issuer: string
  date: string
  link?: string
}

export interface AchievementItem {
  title: string
  type: 'Competition' | 'Award' | 'Scholarship' | 'Volunteering' | 'Leadership' | 'Club' | 'Community'
  date: string
  description: string
  image?: ProjectImage
}

export interface LeadershipItem {
  label: string
  title: string
  period: string
  description: string
  highlights: string[]
  accent: 'amber' | 'blue'
  image?: ProjectImage
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  id?: string
  type?: 'image'
  objectPosition?: string
  objectFit?: 'cover' | 'contain'
  width?: number
  height?: number
  gallery?: boolean
  hero?: boolean
}

export interface ProjectVideo {
  id: string
  type: 'video'
  title: string
  caption: string
  poster?: string
  src?: string
  embedUrl?: string
  externalUrl?: string
}

export type ProjectMedia = (ProjectImage & { id: string; type: 'image' }) | ProjectVideo

export interface ProjectLink {
  label: string
  href: string
  type: 'repository' | 'demo' | 'documentation' | 'external'
}

export interface ProjectSection {
  id: string
  eyebrow?: string
  heading: string
  paragraphs: string[]
  bullets?: string[]
  mediaIds?: string[]
  flow?: string[]
}

export interface ExperienceContribution {
  title: string
  description: string
  ongoing?: boolean
}

export interface ExperienceMediaImage {
  id: string
  type: 'image'
  src: string
  alt: string
  caption: string
  width?: number
  height?: number
}

export interface ExperienceMediaVideo {
  id: string
  type: 'video'
  title: string
  caption: string
  embedUrl: string
  externalUrl: string
  poster?: string
}

export type ExperienceMedia = ExperienceMediaImage | ExperienceMediaVideo

export interface ExperienceStorySection {
  id: string
  eyebrow?: string
  heading: string
  paragraphs: string[]
  highlights?: string[]
  mediaIds?: string[]
  links?: ExternalResourceLink[]
}

export interface ExperienceSupportingWork {
  title: string
  description: string
  points: string[]
  mediaIds?: string[]
  links?: ExternalResourceLink[]
}

export interface Project {
  title: string
  slug: string
  category: ProjectCategory
  dateLabel: string
  status: ProjectStatus
  cardDescription: string
  heroSummary: string
  technologies: string[]
  featured: boolean
  accent: string
  coverImage: ProjectImage
  sections: ProjectSection[]
  media: ProjectMedia[]
  links: ProjectLink[]
  seoTitle: string
  seoDescription: string
}

export interface ContactInfo {
  email: string
  emailHref: string
  phone: string
  phoneHref: string
  location: string
  availability: string
}

export interface PortfolioData {
  name: string
  initials: string
  mainRole: string
  secondaryRoles: string[]
  heroRoles: HeroRole[]
  headline: string
  introduction: string
  about: AboutData
  availability: string
  location: string
  email: string
  emailHref: string
  resumePath: string
  socials: SocialLink[]
  skills: SkillCategory[]
  technologies: TechnologyGroup[]
  experience: ExperienceItem[]
  education: EducationItem[]
  certifications: CertificationItem[]
  achievements: AchievementItem[]
  leadership: LeadershipItem[]
  projects: Project[]
  contact: ContactInfo
}
