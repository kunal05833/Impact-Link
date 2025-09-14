export const APP_NAME = 'ImpactLink'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION = 'Connecting changemakers with opportunities that matter'

export const ROUTES = {
  HOME: '/',
  EXPLORE: '/explore',
  DASHBOARD: '/dashboard',
  ORG_DASHBOARD: '/org-dashboard',
  APPLICATIONS: '/applications',
  CHAT: '/chat',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
}

export const JOB_TYPES = {
  VOLUNTEER: 'Volunteer',
  JOB: 'Job',
  INTERNSHIP: 'Internship',
  FELLOWSHIP: 'Fellowship',
}

export const JOB_CATEGORIES = {
  TECHNOLOGY: 'Technology',
  HEALTHCARE: 'Healthcare',
  EDUCATION: 'Education',
  ENVIRONMENT: 'Environment',
  SOCIAL_WORK: 'Social Work',
  ARTS: 'Arts & Culture',
  DISASTER_RELIEF: 'Disaster Relief',
  ANIMAL_WELFARE: 'Animal Welfare',
}

export const APPLICATION_STATUS = {
  PENDING: 'pending',
  REVIEWING: 'reviewing',
  SHORTLISTED: 'shortlisted',
  INTERVIEW: 'interview',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
}

export const SKILL_CATEGORIES = {
  TECHNICAL: [
    'Web Development',
    'Mobile Development',
    'Data Analysis',
    'UI/UX Design',
    'Digital Marketing',
    'Content Writing',
  ],
  SOFT: [
    'Leadership',
    'Communication',
    'Team Work',
    'Problem Solving',
    'Time Management',
    'Adaptability',
  ],
  DOMAIN: [
    'Teaching',
    'Healthcare',
    'Counseling',
    'Project Management',
    'Fundraising',
    'Event Planning',
  ],
}

export const AVAILABILITY_OPTIONS = [
  'Weekdays',
  'Weekends',
  'Evenings',
  'Flexible',
  'Full-time',
  'Part-time',
]

export const IMPACT_METRICS = {
  HOURS: 'Volunteer Hours',
  PEOPLE: 'People Helped',
  PROJECTS: 'Projects Completed',
  SKILLS: 'Skills Developed',
}

export const BADGE_TYPES = {
  MILESTONE: {
    FIRST_HOUR: { name: 'First Step', icon: '👣', requirement: 1 },
    TEN_HOURS: { name: 'Dedicated', icon: '⭐', requirement: 10 },
    FIFTY_HOURS: { name: 'Committed', icon: '🌟', requirement: 50 },
    HUNDRED_HOURS: { name: 'Champion', icon: '🏆', requirement: 100 },
    THOUSAND_HOURS: { name: 'Legend', icon: '👑', requirement: 1000 },
  },
  SKILL: {
    TEACHER: { name: 'Educator', icon: '👨‍🏫' },
    TECH_MENTOR: { name: 'Tech Guru', icon: '💻' },
    HEALTH_HERO: { name: 'Health Hero', icon: '🏥' },
    ECO_WARRIOR: { name: 'Eco Warrior', icon: '🌱' },
  },
  SPECIAL: {
    TOP_CONTRIBUTOR: { name: 'Top Contributor', icon: '🥇' },
    TEAM_PLAYER: { name: 'Team Player', icon: '🤝' },
    INNOVATOR: { name: 'Innovator', icon: '💡' },
  },
}

export const NOTIFICATION_TYPES = {
  APPLICATION_UPDATE: 'application_update',
  NEW_OPPORTUNITY: 'new_opportunity',
  MESSAGE: 'message',
  ACHIEVEMENT: 'achievement',
  REMINDER: 'reminder',
}

export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/impactlink',
  LINKEDIN: 'https://linkedin.com/company/impactlink',
  GITHUB: 'https://github.com/impactlink',
  INSTAGRAM: 'https://instagram.com/impactlink',
}