import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import {
  Video,
  ClipboardCheck,
  GraduationCap,
  FileCheck,
  KanbanSquare,
  LifeBuoy,
  ArrowRight,
  Building2,
  Users,
  Star,
} from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Live Interviews',
    desc: 'Schedule and conduct real-time video interviews with candidates.',
    to: '/org-dashboard',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ClipboardCheck,
    title: 'Mock Tests',
    desc: 'Create custom test flows to assess role-specific skills.',
    to: '/org-dashboard',
    color: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: GraduationCap,
    title: 'Courses',
    desc: 'Offer micro-courses and track completion in your org.',
    to: '/org-dashboard',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: FileCheck,
    title: 'Test Library',
    desc: 'Reusable question banks and assignments.',
    to: '/org-dashboard',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: KanbanSquare,
    title: 'Applicant Tracking',
    desc: 'Kanban-style pipeline to manage applicants.',
    to: '/org-dashboard',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: LifeBuoy,
    title: 'Priority Support',
    desc: 'Dedicated support for your drives.',
    to: '/org-dashboard',
    color: 'from-rose-500 to-pink-500',
  },
]

// Create a motion-enabled Link
const MotionLink = motion(Link)

export default function OrgMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200
                     hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100/70 dark:hover:bg-gray-800/60
                     transition-colors"
          aria-label="For Organizations"
        >
          Organizations
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="start"
        sideOffset={8}
        className="w-[min(92vw,900px)] p-0 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b10] shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">For Organizations</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Post opportunities, assess candidates, manage volunteers
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4 text-primary-500" />
              <span>800+ orgs</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-emerald-500" />
              <span>25k applicants</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-500" />
              <span>4.9/5</span>
            </div>
          </div>
        </div>

        {/* Grid + CTA panel */}
        <div className="grid md:grid-cols-[2fr_1fr]">
          {/* Features grid */}
          <div className="p-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <MotionLink
                    to={f.to}
                    key={f.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ y: -2 }}
                    className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40
                               hover:border-primary-500/40 hover:shadow-md transition overflow-hidden p-4"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-r ${f.color} grid place-items-center text-white mb-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{f.title}</h4>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-500 transition" />
                    </div>
                    <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                      {f.desc}
                    </p>
                  </MotionLink>
                )
              })}
            </div>
          </div>

          {/* Right CTA panel */}
          <div className="p-5 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800">
            <div className="relative rounded-xl p-5 bg-gradient-to-br from-primary-600/10 to-secondary-600/10 dark:from-primary-400/10 dark:to-secondary-400/10">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Empower your Organization
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Reach the right candidates for jobs, volunteering and internships.
              </p>

              <div className="flex flex-col gap-2">
                <Button asChild variant="gradient" className="w-full">
                  <Link to="/org-dashboard">Post an Opportunity</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/register?role=organization">Register Your Organization</Link>
                </Button>
              </div>

              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-500/0 via-primary-500/5 to-secondary-500/0 blur-2xl" />
            </div>

            <div className="mt-4 text-xs text-gray-600 dark:text-gray-400 flex flex-wrap gap-3">
              <Link className="hover:text-primary-600 dark:hover:text-primary-400" to="/explore">Browse volunteers</Link>
              <span>•</span>
              <Link className="hover:text-primary-600 dark:hover:text-primary-400" to="/org-dashboard">Manage postings</Link>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}