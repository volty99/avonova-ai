"use client";
import Link from "next/link";
import { useState } from "react";

// Mock data for analytics
const productPerformanceData = {
  totalAIGenerated: 247,
  revenueFromAI: 125000,
  bestPerforming: "Smart Fitness Tracker",
  lowPerforming: 12,
  salesOverTime: [
    { month: "Jan", ai: 15000, manual: 12000 },
    { month: "Feb", ai: 18000, manual: 14000 },
    { month: "Mar", ai: 22000, manual: 16000 },
    { month: "Apr", ai: 25000, manual: 18000 },
    { month: "May", ai: 28000, manual: 20000 },
    { month: "Jun", ai: 32000, manual: 22000 },
  ],
  topProducts: [
    { name: "Smart Fitness Tracker", revenue: 32000 },
    { name: "Wireless Earbuds", revenue: 28000 },
    { name: "Smart Watch", revenue: 25000 },
    { name: "Bluetooth Speaker", revenue: 22000 },
    { name: "Phone Case", revenue: 18000 },
  ],
  aiRevenuePercentage: 65
};

const contentEffectivenessData = {
  averageCTR: 3.2,
  bounceRate: 42,
  timeOnPage: 145,
  topAddToCart: "Smart Fitness Tracker",
  ctrByProduct: [
    { product: "Smart Fitness Tracker", ctr: 4.8 },
    { product: "Wireless Earbuds", ctr: 3.9 },
    { product: "Smart Watch", ctr: 3.2 },
    { product: "Bluetooth Speaker", ctr: 2.8 },
    { product: "Phone Case", ctr: 2.1 },
  ],
  contentPerformance: [
    { type: "Q&A", performance: 85 },
    { type: "Specs", performance: 72 },
    { type: "Description", performance: 68 },
  ]
};

const automationImpactData = {
  cartRecoveryRate: 23.5,
  welcomeEmailOpenRate: 67.8,
  chatbotSuccessRate: 89.2,
  abTestWinnerRate: 73.4,
  emailPerformance: [
    { type: "Welcome", opens: 67.8, clicks: 12.3 },
    { type: "Abandoned Cart", opens: 45.2, clicks: 18.7 },
    { type: "Promotional", opens: 34.1, clicks: 8.9 },
    { type: "Newsletter", opens: 28.5, clicks: 6.2 },
  ]
};

const forecastAccuracyData = {
  accuracyPercentage: 87.3,
  matchedForecasts: 156,
  flaggedFailures: 23,
  averageDeviation: 12.4,
  forecastVsActual: [
    { forecast: 1000, actual: 1050 },
    { forecast: 800, actual: 780 },
    { forecast: 1200, actual: 1180 },
    { forecast: 900, actual: 920 },
    { forecast: 1100, actual: 1080 },
  ]
};

const customerBehaviorData = {
  segments: [
    { name: "High Value", conversion: 8.9, returns: 2.1, ltv: 450 },
    { name: "Mid Value", conversion: 5.2, returns: 4.8, ltv: 180 },
    { name: "Low Value", conversion: 2.1, returns: 8.5, ltv: 65 },
    { name: "New Customers", conversion: 3.8, returns: 6.2, ltv: 95 },
  ]
};

export default function CustomerAnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-gray-50 text-black px-4 py-8">
      <div className="max-w-7xl mx-auto mb-8 flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <Link href="/pipeline-controller" className="border border-black text-black px-3 py-1 rounded hover:bg-gray-100 text-xs font-semibold">← Back to Pipelines</Link>
          <span className="text-2xl font-bold ml-4">Analytics Overview</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mb-8 flex gap-4 border-b">
        <button
          className={`px-4 py-2 font-semibold border-b-2 transition-colors ${activeTab === "overview" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-black"}`}
          onClick={() => setActiveTab("overview")}
        >
          Analytics Overview
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 transition-colors ${activeTab === "pipelines" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-black"}`}
          onClick={() => setActiveTab("pipelines")}
        >
          Pipelines
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* 1. Product Performance */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📦</span>
              <h2 className="text-xl font-bold">Product Performance</h2>
              <span className="text-gray-500">How your generated products are doing</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">🛍️ Total AI-generated products live</div>
                <div className="text-2xl font-bold text-blue-600">{productPerformanceData.totalAIGenerated}</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">💰 Revenue from AI-generated products</div>
                <div className="text-2xl font-bold text-green-600">${productPerformanceData.revenueFromAI.toLocaleString()}</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">🏷️ Best-performing product</div>
                <div className="text-lg font-bold text-yellow-600">{productPerformanceData.bestPerforming}</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">⚠️ Low-performing products</div>
                <div className="text-2xl font-bold text-red-600">{productPerformanceData.lowPerforming}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Sales Over Time (AI vs Manual)</h3>
                <div className="space-y-2">
                  {productPerformanceData.salesOverTime.slice(-3).map((data, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{data.month}</span>
                      <div className="flex gap-4">
                        <span className="text-blue-600">AI: ${data.ai.toLocaleString()}</span>
                        <span className="text-gray-600">Manual: ${data.manual.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Top 5 AI Products by Revenue</h3>
                <div className="space-y-2">
                  {productPerformanceData.topProducts.map((product, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{product.name}</span>
                      <span className="font-semibold">${product.revenue.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">AI Products Revenue Share</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{productPerformanceData.aiRevenuePercentage}%</div>
                  <div className="text-sm text-gray-600">of total store revenue</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Content Effectiveness */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📊</span>
              <h2 className="text-xl font-bold">Content Effectiveness</h2>
              <span className="text-gray-500">Is the AI content converting?</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">CTR from product listings</div>
                <div className="text-2xl font-bold text-blue-600">{contentEffectivenessData.averageCTR}%</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Bounce rate / time on page</div>
                <div className="text-2xl font-bold text-green-600">{contentEffectivenessData.bounceRate}% / {contentEffectivenessData.timeOnPage}s</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Highest "Add to Cart" rates</div>
                <div className="text-lg font-bold text-yellow-600">{contentEffectivenessData.topAddToCart}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Content types performance</div>
                <div className="text-sm">
                  {contentEffectivenessData.contentPerformance.map((content, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{content.type}:</span>
                      <span className="font-semibold">{content.performance}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Click-through Rate per Product</h3>
                <div className="space-y-2">
                  {contentEffectivenessData.ctrByProduct.map((product, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{product.product}</span>
                      <span className="font-semibold">{product.ctr}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Content Type Performance</h3>
                <div className="space-y-2">
                  {contentEffectivenessData.contentPerformance.map((content, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-24 text-sm">{content.type}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${content.performance}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-sm font-semibold">{content.performance}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Automation Impact */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🤖</span>
              <h2 className="text-xl font-bold">Automation Impact</h2>
              <span className="text-gray-500">How email flows, bots, etc. are performing</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Abandoned cart recovery rate</div>
                <div className="text-2xl font-bold text-blue-600">{automationImpactData.cartRecoveryRate}%</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Welcome email open/click rate</div>
                <div className="text-2xl font-bold text-green-600">{automationImpactData.welcomeEmailOpenRate}% / 12.3%</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Chatbot resolution success rate</div>
                <div className="text-2xl font-bold text-yellow-600">{automationImpactData.chatbotSuccessRate}%</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Campaign A/B test winner %</div>
                <div className="text-2xl font-bold text-purple-600">{automationImpactData.abTestWinnerRate}%</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Email Campaign Performance</h3>
                <div className="space-y-3">
                  {automationImpactData.emailPerformance.map((email, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm">{email.type}</span>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-600">Opens: {email.opens}%</span>
                        <span className="text-green-600">Clicks: {email.clicks}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Automation Funnel</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Abandoned Carts</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>→ Recovered</span>
                    <span className="font-semibold">293</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>→ Revenue Generated</span>
                    <span className="font-semibold">$18,450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Forecast Accuracy */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📈</span>
              <h2 className="text-xl font-bold">Forecast Accuracy</h2>
              <span className="text-gray-500">Is your AI good at predicting success?</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">% of products where forecast matched outcome</div>
                <div className="text-2xl font-bold text-blue-600">{forecastAccuracyData.accuracyPercentage}%</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Products where forecast flagged failure (and it was true)</div>
                <div className="text-2xl font-bold text-green-600">{forecastAccuracyData.flaggedFailures}</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Average forecast vs actual sales</div>
                <div className="text-2xl font-bold text-yellow-600">±{forecastAccuracyData.averageDeviation}%</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Total matched forecasts</div>
                <div className="text-2xl font-bold text-purple-600">{forecastAccuracyData.matchedForecasts}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Forecast vs Actual (Sample)</h3>
                <div className="space-y-2">
                  {forecastAccuracyData.forecastVsActual.map((data, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>Forecast: {data.forecast}</span>
                      <span>Actual: {data.actual}</span>
                      <span className={`font-semibold ${data.actual >= data.forecast ? 'text-green-600' : 'text-red-600'}`}>
                        {data.actual >= data.forecast ? '+' : ''}{Math.round((data.actual - data.forecast) / data.forecast * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Forecast Accuracy Gauge</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{forecastAccuracyData.accuracyPercentage}%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                  <div className="mt-4 bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full" 
                      style={{ width: `${forecastAccuracyData.accuracyPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Customer Behavior */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">👤</span>
              <h2 className="text-xl font-bold">Customer Behavior</h2>
              <span className="text-gray-500">Useful if you're using your AI customer pipelines</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Segment Performance</h3>
                <div className="space-y-4">
                  {customerBehaviorData.segments.map((segment, idx) => (
                    <div key={idx} className="border-b pb-3 last:border-b-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{segment.name}</span>
                        <span className="text-sm text-gray-600">LTV: ${segment.ltv}</span>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-600">Conv: {segment.conversion}%</span>
                        <span className="text-red-600">Returns: {segment.returns}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Audience Behavior Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>High Value Customers</span>
                    <span className="font-semibold text-green-600">Best Performance</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mid Value Customers</span>
                    <span className="font-semibold text-yellow-600">Stable</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Low Value Customers</span>
                    <span className="font-semibold text-red-600">Needs Attention</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Customers</span>
                    <span className="font-semibold text-blue-600">Growing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "pipelines" && (
        <div className="space-y-6">
          {/* Existing pipelines content would go here */}
          <div className="max-w-3xl mx-auto bg-white border rounded shadow p-8 text-center text-gray-500">
            <h2 className="text-xl font-bold mb-4">Pipelines</h2>
            <p>Pipeline management will appear here.</p>
          </div>
        </div>
      )}
    </main>
  );
} 