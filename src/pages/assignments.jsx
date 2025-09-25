
import React from "react";
import { FileText, Upload, Calendar, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export  function Assignments() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10"
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b pb-4 mb-6">
          <FileText className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-bold">Assignment Details</h1>
        </div>

        {/* Assignment info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold">Machine Learning Project Report</h2>
            <p className="text-slate-600 mt-2 text-sm">
              Prepare a detailed report on the given machine learning problem. Submit a PDF with explanations, code snippets, and results.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
              <Calendar className="h-4 w-4" />
              <span>Deadline: 25 Sept 2025, 11:59 PM</span>
            </div>

            <div className="mt-2 flex items-center gap-3 text-sm text-slate-500">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Weight: 20% of final grade</span>
            </div>
          </div>

          {/* Submission status */}
          <div className="bg-slate-50 border rounded-xl p-4">
            <h3 className="font-semibold mb-2">Submission Status</h3>
            <div className="flex items-center gap-2 text-sm">
              <XCircle className="h-4 w-4 text-red-500" />
              <span>Not submitted</span>
            </div>
            <div className="mt-2 text-xs text-slate-500">No attempts yet</div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">Upload Your Submission</h2>

          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <Upload className="h-10 w-10 text-indigo-600 mb-3" />
            <p className="text-sm text-slate-600 mb-2">Drag & drop your file here or click below to upload</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg mt-3">Choose File</button>
            <p className="text-xs text-slate-400 mt-2">Accepted formats: PDF, DOCX (max 10MB)</p>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button className="px-4 py-2 border rounded-lg text-sm">Save Draft</button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm">Submit Assignment</button>
          </div>
        </div>

        {/* Previous Submissions */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">Previous Submissions</h2>
          <div className="bg-slate-50 border rounded-xl p-4 text-sm">
            <p className="font-medium">No submissions yet</p>
            <p className="text-slate-500 text-xs mt-1">Once you submit, your attempts will appear here with timestamps and feedback.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
