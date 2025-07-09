"use client";
import Link from "next/link";
import { useState } from "react";

const miniPipelines = [
  {
    name: "Auto-Reorder System",
    description: "Automatically place orders when stock hits reorder points",
    processed: 23,
    success: 95.7,
    lastRun: "2 hours ago",
    nextRun: "In 4 hours",
    runMode: "5-batch (2 completed)",
  },
  {
    name: "Demand Forecasting",
    description: "AI-powered prediction of future inventory needs",
    processed: 156,
    success: 89.1,
    lastRun: "1 day ago",
    nextRun: "Tomorrow 9:00 AM",
    runMode: "Daily (last 7 days)",
  },
  {
    name: "Stock Level Optimization",
    description: "Optimize min/max thresholds based on sales patterns",
    processed: 89,
    success: 92.3,
    lastRun: "3 days ago",
    nextRun: "Paused",
    runMode: "Weekly (1 completed)",
  },
  {
    name: "Supplier Performance Monitor",
    description: "Track delivery times and quality metrics",
    processed: 45,
    success: 88.9,
    lastRun: "6 hours ago",
    nextRun: "In 18 hours",
    runMode: "Continuous",
  },
];

export default function InventoryManagementPage() {
  const [activeTab, setActiveTab] = useState("pipelines");
  const [showSettings, setShowSettings] = useState(false);
  return (
    <main className="min-h-screen bg-white dark:bg-[var(--bg-dark)] text-black dark:text-[var(--text-primary-dark)] px-4 py-8">
      <div className="max-w-3xl mx-auto mb-8 flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <Link href="/pipeline-controller" className="border border-black dark:border-[var(--border-dark)] text-black dark:text-[var(--text-primary-dark)] px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-[var(--surface-dark)] text-xs font-semibold">← Back to Pipelines</Link>
          <span className="text-2xl font-bold ml-4">Inventory Management</span>
        </div>
        <button
          className="border border-black dark:border-[var(--border-dark)] text-black dark:text-[var(--text-primary-dark)] px-4 py-2 rounded font-semibold hover:bg-gray-100 dark:hover:bg-[var(--surface-dark)] transition-colors"
          onClick={() => setShowSettings(true)}
        >
          Settings
        </button>
      </div>
      <div className="max-w-3xl mx-auto mb-8 flex gap-4 border-b dark:border-[var(--border-dark)]">
        <button
          className={`px-4 py-2 font-semibold border-b-2 transition-colors ${activeTab === "pipelines" ? "border-black dark:border-[var(--accent-dark)] text-black dark:text-[var(--accent-dark)]" : "border-transparent text-gray-500 dark:text-[var(--text-secondary-dark)] hover:text-black dark:hover:text-[var(--text-primary-dark)]"}`}
          onClick={() => setActiveTab("pipelines")}
        >
          Pipelines
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 transition-colors ${activeTab === "analytics" ? "border-black dark:border-[var(--accent-dark)] text-black dark:text-[var(--accent-dark)]" : "border-transparent text-gray-500 dark:text-[var(--text-secondary-dark)] hover:text-black dark:hover:text-[var(--text-primary-dark)]"}`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
      </div>
      {activeTab === "pipelines" && (
        <div className="space-y-6">
          {miniPipelines.map((pipeline, idx) => (
            <div key={idx} className="bg-white dark:bg-[var(--surface-dark)] border dark:border-[var(--border-dark)] rounded-xl shadow p-6 flex flex-col gap-4 relative">
              {/* Run Now button */}
              <button className="absolute top-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2 shadow-sm">
                <span className="inline-block">▶</span> Run Now
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
                      <div className="text-gray-400 text-sm font-semibold">Items Processed</div>
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
                  <div className="flex gap-8 mt-2 text-gray-500 text-sm items-center">
                    <span>🎲 Run Mode: {pipeline.runMode}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <button className="flex items-center gap-1 border border-gray-300 rounded px-4 py-2 font-semibold bg-gray-50 hover:bg-gray-100">
                    <span role="img" aria-label="Logs">📄</span> Logs
                  </button>
                  <button className="flex items-center gap-1 border border-gray-300 rounded px-4 py-2 font-semibold bg-gray-50 hover:bg-gray-100">
                    <span role="img" aria-label="History">🧵</span> History
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "analytics" && (
        <div className="max-w-3xl mx-auto bg-white dark:bg-[var(--surface-dark)] border dark:border-[var(--border-dark)] rounded shadow p-8 text-center text-gray-500 dark:text-[var(--text-secondary-dark)]">
          <h2 className="text-xl font-bold mb-4">Analytics</h2>
          <p>Analytics and reporting for inventory management will appear here.</p>
        </div>
      )}
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white dark:bg-[var(--surface-dark)] rounded shadow-lg p-8 w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-[var(--text-secondary-dark)] hover:text-black dark:hover:text-[var(--text-primary-dark)] text-xl font-bold"
              onClick={() => setShowSettings(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-gray-500 dark:text-[var(--text-secondary-dark)]">Settings content will appear here.</p>
          </div>
        </div>
      )}
    </main>
  );
} 