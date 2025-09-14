import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Upload, FileText, Sparkles, CheckCircle, 
  AlertCircle, TrendingUp, Zap, Target 
} from 'lucide-react'

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      analyzeResume(uploadedFile)
    }
  }

  const analyzeResume = (file) => {
    setAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        score: 85,
        strengths: [
          'Strong technical skills in React and Node.js',
          'Good volunteer experience in education sector',
          'Clear and concise formatting'
        ],
        improvements: [
          'Add quantifiable achievements',
          'Include more soft skills',
          'Expand on leadership experiences'
        ],
        keywords: ['React', 'Node.js', 'Teaching', 'Healthcare', 'Volunteer'],
        matchedJobs: 3
      })
      setAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="mr-2 text-primary-600" />
              AI Resume Analyzer
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get instant feedback and improve your chances
            </p>
          </CardHeader>
          <CardContent>
            {!file ? (
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  PDF, DOC, or DOCX (Max 5MB)
                </p>
                <label htmlFor="resume-upload">
                  <Button variant="gradient" className="cursor-pointer">
                    Choose File
                  </Button>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="space-y-6">
                {/* File Info */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 mr-3 text-primary-600" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setFile(null)}>
                    Remove
                  </Button>
                </div>

                {analyzing ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30">
                      <Zap className="w-8 h-8 text-primary-600 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Analyzing Your Resume...</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Our AI is reviewing your resume for optimization opportunities
                    </p>
                  </div>                ) : results ? (
                  <div className="space-y-6">
                    {/* Score */}
                    <div className="text-center">
                      <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                        <svg className="w-32 h-32 transform -rotate-90">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-200 dark:text-gray-700"
                          />
                          <motion.circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={351.86}
                            strokeDashoffset={351.86 - (351.86 * results.score) / 100}
                            className="text-primary-600"
                            initial={{ strokeDashoffset: 351.86 }}
                            animate={{ strokeDashoffset: 351.86 - (351.86 * results.score) / 100 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div>
                            <p className="text-3xl font-bold">{results.score}%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Match Score</p>
                          </div>
                        </div>
                      </div>
                      <Badge variant={results.score >= 80 ? "success" : "warning"}>
                        {results.score >= 80 ? "Excellent Match" : "Good Match"}
                      </Badge>
                    </div>

                    {/* Strengths */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                        Strengths
                      </h3>
                      <ul className="space-y-2">
                        {results.strengths.map((strength, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Improvements */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
                        Areas for Improvement
                      </h3>
                      <ul className="space-y-2">
                        {results.improvements.map((improvement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span className="text-sm">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Keywords */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-primary-600" />
                        Detected Keywords
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {results.keywords.map((keyword, i) => (
                          <Badge key={i} variant="outline">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button variant="gradient" className="flex-1">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View {results.matchedJobs} Matched Jobs
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Download Report
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default ResumeAnalyzer