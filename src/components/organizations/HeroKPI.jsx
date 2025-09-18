import { Briefcase, Users, CalendarCheck, ShieldCheck, Zap } from 'lucide-react'

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 p-3 flex items-center gap-3 hover:shadow-md transition">
      <div className={`w-9 h-9 rounded-lg bg-gradient-to-r ${color} grid place-items-center text-white`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900 dark:text-white">{value}</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">{label}</div>
      </div>
    </div>
  )
}

function Pill({ text, color }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-${color}/10 text-${color}`}>
      <span className={`w-1.5 h-1.5 rounded-full bg-${color}`} />
      {text}
    </span>
  )
}

export default function HeroKPI() {
  const pipeline = [
    {
      title: 'Applicants',
      items: ['AK', 'SR', 'VS', '+3'],
    },
    {
      title: 'Screening',
      items: ['PM', 'JD', '+1'],
    },
    {
      title: 'Interviews',
      items: ['RG', 'AS'],
    },
  ]

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-gray-800/70 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/10 p-5 h-[min(50vh,420px)]">
      {/* Glows */}
      <div className="pointer-events-none absolute -top-12 -right-8 w-56 h-56 rounded-full bg-primary-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-secondary-500/15 blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-medium text-gray-700 dark:text-gray-300">At a glance</div>
        <div className="flex items-center gap-2">
          <Pill text="Realtime" color="emerald-500" />
          <Pill text="Secure" color="cyan-500" />
        </div>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard icon={Briefcase} label="Active postings" value="12" color="from-blue-500 to-cyan-500" />
        <StatCard icon={Users} label="Applicants this week" value="238" color="from-purple-500 to-fuchsia-500" />
        <StatCard icon={CalendarCheck} label="Interviews scheduled" value="9" color="from-amber-500 to-orange-500" />
      </div>

      {/* Mini pipeline */}
      <div className="mt-4">
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Pipeline</div>
        <div className="grid grid-cols-3 gap-3">
          {pipeline.map((lane) => (
            <div key={lane.title} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 p-3">
              <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-2">{lane.title}</div>
              <div className="flex items-center gap-2">
                {lane.items.map((t, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full grid place-items-center text-[11px] font-bold ${
                      t.startsWith('+')
                        ? 'border border-dashed border-gray-300 dark:border-gray-700 text-gray-500'
                        : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    }`}
                    title={t}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust row */}
      <div className="absolute bottom-3 left-0 right-0 px-5">
        <div className="flex items-center justify-between text-[11px] text-gray-600 dark:text-gray-400">
          <div className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            Verified orgs
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-yellow-500" />
            Avg. response 6h
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-cyan-500" />
            25k+ applicants
          </div>
        </div>
      </div>
    </div>
  )
}