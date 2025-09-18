import { useNavigate } from 'react-router-dom'

const chips = [
  'Engineering',
  'Software Development',
  'Web Development',
  'UI/UX Design',
  'Data Analysis',
  'Healthcare',
  'Administration',
  'Social Work',
  'Teaching',
  'Marketing',
  'Customer Service',
  'Finance',
]

export default function CategoryChips() {
  const navigate = useNavigate()
  const go = (c) => navigate(`/explore?category=${encodeURIComponent(c)}`)

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Find the right job or internship for you
        </h2>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => go(c)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm
                         hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Post your opportunity for millions of people to see
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="/org-dashboard"
              className="px-5 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition"
            >
              Post a job
            </a>
            <a
              href="/register?role=organization"
              className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700
                         text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Register Organization
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}