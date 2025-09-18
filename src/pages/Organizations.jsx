import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SimpleHeroVisual from '@/components/organizations/SimpleHeroVisual'

import {
  Video, ClipboardCheck, GraduationCap, FileCheck,
  KanbanSquare, LifeBuoy, Building2, Users, Star, ArrowRight
} from 'lucide-react'

// OPTIONAL: if dialog added already, keep this import
// Comment it out if not needed yet
import PostOpportunityDialog from '@/components/organizations/PostOpportunityDialog'

const features = [
  { icon: Video, title: 'Live Interviews', desc: 'Real-time video interviews with candidates.', color: 'from-blue-500 to-cyan-500' },
  { icon: ClipboardCheck, title: 'Mock Tests', desc: 'Create custom tests for role-specific skills.', color: 'from-purple-500 to-fuchsia-500' },
  { icon: GraduationCap, title: 'Courses', desc: 'Offer micro-courses and track progress.', color: 'from-amber-500 to-orange-500' },
  { icon: FileCheck, title: 'Test Library', desc: 'Reusable question banks and assignments.', color: 'from-emerald-500 to-teal-500' },
  { icon: KanbanSquare, title: 'Applicant Tracking', desc: 'Kanban pipeline to manage applicants.', color: 'from-indigo-500 to-violet-500' },
  { icon: LifeBuoy, title: 'Priority Support', desc: 'Dedicated support for hiring drives.', color: 'from-rose-500 to-pink-500' },
]

export default function Organizations() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Empower Your Organization, Find Your Talent
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Connect with the right candidates for your jobs, volunteering activities, and internships.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="gradient" className="h-11" onClick={() => setOpen(true)}>
                  Post an Opportunity
                </Button>
                <Button asChild variant="outline" className="h-11">
                  <Link to="/register?role=organization">Register Your Organization</Link>
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
                <span className="inline-flex items-center gap-1">
                  <Building2 className="h-4 w-4 text-primary-500" /> 800+ orgs
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="h-4 w-4 text-emerald-500" /> 25k applicants
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500" /> 4.9/5
                </span>
              </div>
            </div>

            {/* Right subtle blobs (pure CSS, no motion) */}
            <div className="relative h-56 md:h-64">
              <div className="absolute right-10 top-2 w-40 h-50 rounded-full bg-primary-500/20 blur-3xl" />
              <div className="absolute right-0 bottom-0 w-56 h-56 rounded-full bg-secondary-500/20 blur-3xl" />
              {/* <div className="absolute inset-0 rounded-3xl border border-gray-200/70 dark:border-gray-800/70" /> */}
              <div className="relative">
              <SimpleHeroVisual />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white">
            Powerful Features to Help You Connect
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:shadow-md transition"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${f.color} text-white grid place-items-center mb-3`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{f.title}</h4>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-500 transition" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{f.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 rounded-2xl p-6 bg-gradient-to-br from-primary-600/10 to-secondary-600/10 dark:from-primary-400/10 dark:to-secondary-400/10 border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ready to start?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Post your opportunity or onboard your team today.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="gradient" onClick={() => setOpen(true)}>Post an Opportunity</Button>
                <Button asChild variant="outline">
                  <Link to="/register?role=organization">Register Organization</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog (kept optional) */}
      <PostOpportunityDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}