export const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer Volunteer",
    organization: "TechForGood NGO",
    type: "Volunteer",
    location: "Remote",
    duration: "3 months",
    salary: null,
    posted: "2 days ago",
    description: "Help us build a platform for connecting blood donors with patients in need.",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    category: "Technology"
  },
  {
    id: 2,
    title: "Community Health Worker",
    organization: "HealthFirst Foundation",
    type: "Job",
    location: "Delhi, India",
    duration: "Full-time",
    salary: "₹25,000/month",
    posted: "1 day ago",
    description: "Work with rural communities to improve healthcare access and awareness.",
    skills: ["Healthcare", "Communication", "Hindi"],
    category: "Healthcare"
  },
  {
    id: 3,
    title: "Teaching Assistant",
    organization: "EduBright",
    type: "Internship",
    location: "Mumbai, India",
    duration: "6 months",
    salary: "₹10,000/month",
    posted: "3 days ago",
    description: "Support teachers in providing quality education to underprivileged children.",
    skills: ["Teaching", "English", "Patience"],
    category: "Education"
  },
  {
    id: 4,
    title: "Environmental Campaign Coordinator",
    organization: "GreenEarth Initiative",
    type: "Volunteer",
    location: "Bangalore, India",
    duration: "Flexible",
    salary: null,
    posted: "1 week ago",
    description: "Lead awareness campaigns for environmental conservation in urban areas.",
    skills: ["Marketing", "Social Media", "Event Planning"],
    category: "Environment"
  }
]

export const mockOrganizations = [
  {
    id: 1,
    name: "TechForGood NGO",
    logo: "T",
    verified: true,
    category: "Technology",
    location: "Pan India",
    description: "Using technology to solve social problems",
    activeJobs: 5,
    volunteers: 234
  },
  {
    id: 2,
    name: "HealthFirst Foundation",
    logo: "H",
    verified: true,
    category: "Healthcare",
    location: "Delhi, Mumbai, Bangalore",
    description: "Providing healthcare access to underserved communities",
    activeJobs: 8,
    volunteers: 567
  }
]

export const mockStats = {
  totalVolunteers: 10234,
  totalOrganizations: 567,
  totalOpportunities: 1234,
  successRate: 95,
  totalHours: 45678,
  totalImpact: 234567
}