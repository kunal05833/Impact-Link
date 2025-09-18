import { Building2, Briefcase, Users, CalendarCheck, ShieldCheck, Star } from 'lucide-react'

export default function SimpleHeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-gray-800/70 bg-gradient-to-br from-white/5 to-white/0 dark:from-gray-900/40 dark:to-transparent p-5 h-[min(40vh,360px)]">
      {/* Soft glows */}
      <div className="pointer-events-none absolute -top-12 -right-8 w-52 h-52 rounded-full bg-primary-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 w-60 h-60 rounded-full bg-secondary-500/15 blur-3xl" />

      {/* Live badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 text-xs text-gray-800 dark:text-gray-200">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Posting live for organizations
        <Building2 className="h-4 w-4 text-primary-600" />
      </div>

      {/* Content grid */}
      <div className="mt-4  grid grid-cols-1 gap-3">
        {/* Mini job card */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 grid place-items-center text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Frontend Developer</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">InternCell • Remote</div>
              </div>
            </div>
            <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Open
            </span>
          </div>
          {/* shimmer line */}
          <div className="mt-3 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 animate-pulse rounded-full" />
          </div>
        </div>

        {/* Applicants + Interviews row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Applicants */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 grid place-items-center text-white">
                  <Users className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Applicants</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">238</div>
            </div>
           
          </div>

          {/* Interviews */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 grid place-items-center text-white">
                  <CalendarCheck className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Interviews</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">9</div>
            </div>
            {/* tiny progress */}
            <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* bottom trust row */}
    
    </div>
  )
}