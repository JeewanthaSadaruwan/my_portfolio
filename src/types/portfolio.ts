export type SocialPlatform = 'GitHub' | 'LinkedIn' | 'Email'

export type ProjectCategory = 'Web' | 'Mobile' | 'AI/ML' | 'Other'

export type ProjectStatus = 'Planning' | 'In progress' | 'Ongoing' | 'Prototype' | 'Completed' | 'Archived'

export interface SocialLink {
  platform: SocialPlatform
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

export interface ExperienceItem {
  role: string
  organization: string
  location: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  technologies: string[]
  organizationLink?: string
  example?: boolean
}

export interface EducationItem {
  institution: string
  qualification: string
  dates: string
  description: string
  coursework: string[]
  link?: string
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
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  title: string
  slug: string
  shortSummary: string
  problem: string
  solution: string
  challenges: string[]
  outcome: string
  technologies: string[]
  category: ProjectCategory
  featured: boolean
  thumbnail: ProjectImage
  gallery: ProjectImage[]
  githubLink: string
  liveDemoLink: string
  status: ProjectStatus
  year: string
  goals: string[]
  contribution: string
  technicalDecisions: string[]
}

export interface ContactInfo {
  email: string
  emailHref: string
  location: string
  availability: string
  formEndpoint?: string
}

export interface PortfolioData {
  name: string
  initials: string
  mainRole: string
  secondaryRoles: string[]
  heroRoles: HeroRole[]
  headline: string
  introduction: string
  about: string[]
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
  leadership: AchievementItem[]
  projects: Project[]
  contact: ContactInfo
}
