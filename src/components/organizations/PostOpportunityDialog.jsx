import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import toast from 'react-hot-toast'
import {
  Briefcase,
  Users,
  HeartHandshake,
} from 'lucide-react'

export default function PostOpportunityDialog({ open, onOpenChange }) {
  const [tab, setTab] = useState('job')
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [form, setForm] = useState({
    title: '',
    org: '',
    location: '',
    type: 'full-time',
    stipend: '',
    description: '',
    remote: false,
  })

  const icons = {
    job: Briefcase,
    internship: Users,
    volunteer: HeartHandshake,
  }
  const Icon = icons[tab]

  const Field = ({ label, children }) => (
    <div>
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title || !form.org) {
      toast.error('Please fill Title and Organization')
      return
    }
    setLoading(true)
    setProgress(10)
    const timer = setInterval(
      () => setProgress((p) => Math.min(p + 15, 95)),
      250
    )
    await new Promise((r) => setTimeout(r, 1500))
    clearInterval(timer)
    setProgress(100)
    toast.success(
      `${tab === 'job' ? 'Job' : tab === 'internship' ? 'Internship' : 'Volunteer role'} posted!`
    )
    setLoading(false)
    setTimeout(() => onOpenChange(false), 500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary-600" />
            Post an Opportunity
            <Badge variant="outline" className="ml-1 capitalize">
              {tab}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Share your opportunity and reach the right candidates quickly.
          </DialogDescription>
        </DialogHeader>

        {/* Simple tabs (we vary fields below based on tab) */}
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="job">Job</TabsTrigger>
            <TabsTrigger value="internship">Internship</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          </TabsList>
        </Tabs>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Title">
              <Input
                placeholder={
                  tab === 'job'
                    ? 'e.g., Frontend Developer'
                    : tab === 'internship'
                    ? 'e.g., React Intern'
                    : 'e.g., Teaching Volunteer'
                }
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Field>
            <Field label="Organization">
              <Input
                placeholder="Organization name"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
              />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Location">
              <Input
                placeholder="Remote, Delhi, Mumbai…"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </Field>

            {tab === 'job' && (
              <Field label="Type">
                <Select
                  value={form.type}
                  onValueChange={(v) => setForm({ ...form, type: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            )}

            {tab !== 'volunteer' && (
              <Field label={tab === 'internship' ? 'Stipend' : 'Salary (CTC)'}>
                <Input
                  placeholder={
                    tab === 'internship' ? 'e.g., ₹10,000/month' : 'e.g., ₹6–10 LPA'
                  }
                  value={form.stipend}
                  onChange={(e) =>
                    setForm({ ...form, stipend: e.target.value })
                  }
                />
              </Field>
            )}
          </div>

          <Field label="Description">
            <Textarea
              rows={4}
              placeholder="Responsibilities, requirements, benefits…"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </Field>

          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Switch
                checked={form.remote}
                onCheckedChange={(v) => setForm({ ...form, remote: v })}
              />
              Remote friendly
            </label>
            {loading && (
              <div className="w-40">
                <Progress value={progress} />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="gradient" disabled={loading}>
              {loading ? 'Posting…' : 'Post'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}