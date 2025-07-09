"use client";
import Link from "next/link";
import { useState } from "react";

const emailPipelines = [
  {
    name: "Campaign Scheduler",
    description: "Automate scheduling of email campaigns",
    processed: 3201,
    success: 94.7,
    lastRun: "1 hour ago",
    nextRun: "In 2 hours",
    isActive: true,
  },
  {
    name: "Personalization Engine",
    description: "Send personalized emails based on customer data",
    processed: 2104,
    success: 96.2,
    lastRun: "3 hours ago",
    nextRun: "In 5 hours",
    isActive: true,
  },
  {
    name: "A/B Testing",
    description: "Test different subject lines and content for best results",
    processed: 1456,
    success: 92.1,
    lastRun: "Yesterday",
    nextRun: "Tomorrow",
    isActive: false,
  },
  {
    name: "Deliverability Monitor",
    description: "Track and improve email deliverability rates",
    processed: 1892,
    success: 98.3,
    lastRun: "2 days ago",
    nextRun: "Paused",
    isActive: true,
  },
];

export default function EmailMarketingPage() {
  const [activeTab, setActiveTab] = useState("pipelines");
  const [pipelines, setPipelines] = useState(emailPipelines);

  const togglePipeline = (idx: number) => {
    setPipelines((prev) =>
      prev.map((p, i) =>
        i === idx ? { ...p, isActive: !p.isActive } : p
      )
    );
  };

  return (
    <main className="min-h-screen bg-white text-[var(--text-primary)] px-4 py-8">
      <div className="max-w-3xl mx-auto mb-8 flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <Link href="/pipeline-controller" className="border border-[var(--border)] text-[var(--text-primary)] px-3 py-1 rounded hover:bg-gray-100 text-xs font-semibold">← Back to Pipelines</Link>
          <span className="text-2xl font-bold ml-4">Email Marketing</span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mb-8 flex gap-4 border-b">
        <button
          className={`px-4 py-2 font-semibold border-b-2 transition-colors ${activeTab === "pipelines" ? "border-[var(--border)] text-[var(--text-primary)]" : "border-transparent text-gray-500 hover:text-[var(--text-primary)]"}`}
          onClick={() => setActiveTab("pipelines")}
        >
          Pipelines
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 transition-colors ${activeTab === "analytics" ? "border-[var(--border)] text-[var(--text-primary)]" : "border-transparent text-gray-500 hover:text-[var(--text-primary)]"}`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
      </div>
      {activeTab === "pipelines" && (
        <div className="space-y-6">
          {pipelines.map((pipeline, idx) => (
            <div key={idx} className="bg-white border rounded-xl shadow p-6 flex flex-col gap-4 relative">
              <button
                className={`absolute top-6 right-6 px-4 py-2 rounded font-semibold flex items-center gap-2 shadow-sm ${pipeline.isActive ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-300 text-gray-500"}`}
                onClick={() => togglePipeline(idx)}
              >
                {pipeline.isActive ? <span>Pause</span> : <span>Activate</span>}
              </button>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div className="text-xl font-bold mb-1">{pipeline.name}</div>
                  <div className="text-gray-500 mb-4">{pipeline.description}</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex gap-12">
                    <div>
                      <div className="text-gray-400 text-sm font-semibold">Emails Sent</div>
                      <div className="text-2xl font-bold">{pipeline.processed}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-semibold">Success Rate</div>
                      <div className="text-2xl font-bold">{pipeline.success}%</div>
                    </div>
                  </div>
                  <div className="flex gap-8 mt-2 text-gray-500 text-sm items-center">
                    <span>🕒 Last run: {pipeline.lastRun}</span>
                    <span>⏩ Next: {pipeline.nextRun}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <button className="flex items-center gap-1 border border-gray-300 rounded px-4 py-2 font-semibold bg-gray-50 hover:bg-gray-100">
                    <span role="img" aria-label="Configure">⚙️</span> Configure
                  </button>
                  <button className="flex items-center gap-1 border border-gray-300 rounded px-4 py-2 font-semibold bg-gray-50 hover:bg-gray-100">
                    <span role="img" aria-label="Stats">📊</span> View Stats
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "analytics" && (
        <div className="max-w-3xl mx-auto bg-white border rounded shadow p-8 text-center text-gray-500">
          <h2 className="text-xl font-bold mb-4">Analytics</h2>
          <p>Email marketing analytics and reporting will appear here.</p>
        </div>
      )}
    </main>
  );
} 