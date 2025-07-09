"use client";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Mock data for each pipeline
const pipelineDetails = {
  "product-generator": {
    name: "Product Generator",
    description: "AI-powered product ideation, market analysis, and opportunity identification",
    lastRun: "July 4",
    conversionLift: "+15.2%",
    revenueImpact: "$1,250.40",
    status: "🟢 Healthy",
    inputs: [
      { name: "Product Category", type: "select", value: "Electronics", options: ["Electronics", "Fashion", "Home", "Sports", "Beauty", "Food", "Automotive", "Pet Supplies"] },
      { name: "Target Market", type: "text", value: "Tech-savvy millennials, 25-40" },
      { name: "Price Range", type: "select", value: "$50-$200", options: ["$10-$50", "$50-$200", "$200-$500", "$500+"] },
      { name: "Market Trend", type: "select", value: "Growing", options: ["Growing", "Stable", "Declining", "Emerging"] },
      { name: "Competition Level", type: "select", value: "Medium", options: ["Low", "Medium", "High", "Saturated"] },
      { name: "Seasonality", type: "multiselect", value: ["Year-round"], options: ["Year-round", "Holiday", "Seasonal", "Event-based"] },
      { name: "Keywords & Features", type: "textarea", value: "wireless, portable, smart, sustainable, eco-friendly" },
      { name: "Profit Margin Target", type: "range", value: "30%" },
      { name: "Production Complexity", type: "select", value: "Medium", options: ["Low", "Medium", "High", "Very High"] }
    ],
    outputs: [
      "📦 Smart Cooling Mug - Temperature-controlled beverage container with app connectivity",
      "📦 Portable Solar Charger - Foldable solar panel with wireless charging pad",
      "📦 Smart Plant Monitor - IoT sensor system for indoor gardening",
      "📦 Eco-Friendly Phone Case - Biodegradable material with wireless charging",
      "📦 Fitness Recovery Device - Muscle stimulation with heat therapy",
      "📦 Smart Pet Feeder - Automated feeding with portion control and health monitoring"
    ],
    performance: [
      { date: "July 4", conversion: "15.2%", revenue: "$1,250.40", action: "View Logs" },
      { date: "June 27", conversion: "12.8%", revenue: "$980.20", action: "View Logs" },
      { date: "June 20", conversion: "11.4%", revenue: "$875.60", action: "View Logs" }
    ],
    relatedActions: [
      "Generate Product Specifications",
      "Create Market Analysis Report",
      "Design Product Mockups",
      "Calculate Profit Margins",
      "Research Manufacturing Options"
    ]
  },
  "page-builder": {
    name: "Page Builder",
    description: "AI-powered page generation with SEO optimization and conversion-focused design",
    lastRun: "July 3",
    conversionLift: "+23.1%",
    revenueImpact: "$2,450.80",
    status: "🟢 Healthy",
    inputs: [
      { name: "Product Name", type: "text", value: "Smart Cooling Mug" },
      { name: "Page Type", type: "select", value: "Product Page", options: ["Product Page", "Landing Page", "Category Page", "Comparison Page", "Review Page"] },
      { name: "Template Style", type: "select", value: "Modern", options: ["Modern", "Classic", "Minimal", "Bold", "Elegant"] },
      { name: "Target Audience", type: "text", value: "Tech-savvy professionals, 25-45" },
      { name: "Primary CTA", type: "select", value: "Buy Now", options: ["Buy Now", "Add to Cart", "Learn More", "Get Started", "Free Trial"] },
      { name: "SEO Keywords", type: "textarea", value: "smart mug, temperature control, wireless charging, coffee mug" },
      { name: "Page Sections", type: "multiselect", value: ["Hero", "Features", "Reviews"], options: ["Hero", "Features", "Reviews", "Specifications", "FAQ", "Related Products", "Video"] },
      { name: "Mobile Optimization", type: "select", value: "Priority", options: ["Priority", "Standard", "Desktop First"] },
      { name: "Loading Speed Target", type: "select", value: "Under 3s", options: ["Under 2s", "Under 3s", "Under 5s"] }
    ],
    outputs: [
      "📄 Product Page: Smart Cooling Mug - Complete with specs, reviews, and CTAs",
      "📄 Landing Page: Temperature Control Collection - Hero section with video",
      "📄 Category Page: Smart Home Accessories - Grid layout with filters",
      "📄 Comparison Page: Smart Mugs vs Traditional Mugs",
      "📄 Review Page: Customer testimonials and ratings",
      "📄 Mobile-optimized version with 2.1s load time"
    ],
    performance: [
      { date: "July 3", conversion: "23.1%", revenue: "$2,450.80", action: "View Logs" },
      { date: "June 26", conversion: "19.8%", revenue: "$1,890.40", action: "View Logs" },
      { date: "June 19", conversion: "17.2%", revenue: "$1,650.20", action: "View Logs" }
    ],
    relatedActions: [
      "Create Ad for New Page",
      "Generate SEO Content for Page",
      "A/B Test Page Elements",
      "Optimize for Mobile",
      "Add Analytics Tracking"
    ]
  },
  "forecasting-pricing": {
    name: "Forecasting & Pricing",
    description: "Advanced demand forecasting, dynamic pricing, and market opportunity analysis",
    lastRun: "July 1",
    conversionLift: "-8.4%",
    revenueImpact: "$0.00",
    status: "🟠 Outdated",
    inputs: [
      { name: "Product Category", type: "select", value: "Electronics", options: ["Electronics", "Fashion", "Home", "Sports", "Beauty", "Food", "Automotive", "Pet Supplies"] },
      { name: "Historical Data", type: "file", value: "sales_data_2024.csv" },
      { name: "Forecast Period", type: "select", value: "3 months", options: ["1 month", "3 months", "6 months", "12 months"] },
      { name: "Confidence Level", type: "range", value: "85%" },
      { name: "Market Data Sources", type: "multiselect", value: ["Amazon", "Google Trends"], options: ["Amazon", "Google Trends", "Social Media", "Industry Reports", "Competitor Data"] },
      { name: "Pricing Strategy", type: "select", value: "Dynamic", options: ["Dynamic", "Fixed", "Penetration", "Skimming", "Bundle"] },
      { name: "Seasonal Factors", type: "multiselect", value: ["Holiday Season"], options: ["Holiday Season", "Back to School", "Summer", "Winter", "None"] },
      { name: "Competitor Price Range", type: "text", value: "$75-$150" },
      { name: "Target Profit Margin", type: "range", value: "25%" }
    ],
    outputs: [
      "📊 Demand Forecast: Smart Cooling Mug - 23% growth expected in Q4",
      "📊 Price Optimization: $89.99 optimal price point (15% above competition)",
      "📊 Seasonal Trends: Peak demand during summer months (June-August)",
      "📊 Inventory Planning: Stock 750 units for Q4 holiday season",
      "📊 Market Opportunity: $2.4M addressable market size",
      "📊 Competitive Analysis: 3 main competitors, pricing gap identified"
    ],
    performance: [
      { date: "July 1", conversion: "-8.4%", revenue: "$0.00", action: "View Logs" },
      { date: "June 24", conversion: "12.1%", revenue: "$1,120.80", action: "View Logs" },
      { date: "June 17", conversion: "14.3%", revenue: "$1,340.60", action: "View Logs" }
    ],
    relatedActions: [
      "Update Pricing Strategy",
      "Adjust Inventory Levels",
      "Create Seasonal Campaign",
      "Generate Market Report",
      "Set Up Price Monitoring"
    ]
  },
  "competitor-intelligence": {
    name: "Competitor Intelligence",
    description: "ASIN scraper, spy tools, trend matchers",
    lastRun: "June 29",
    conversionLift: "0%",
    revenueImpact: "$0.00",
    status: "🔴 Broken",
    inputs: [
      { name: "Competitor ASINs", type: "textarea", value: "B08N5WRWNW, B07ZPKBL9V" },
      { name: "Market Category", type: "select", value: "Electronics", options: ["Electronics", "Fashion", "Home", "Sports"] },
      { name: "Data Points", type: "multiselect", value: ["Price", "Reviews", "Ranking"], options: ["Price", "Reviews", "Ranking", "Inventory"] },
      { name: "Update Frequency", type: "select", value: "Daily", options: ["Hourly", "Daily", "Weekly"] }
    ],
    outputs: [
      "⚠️ Connection Error: Unable to fetch competitor data",
      "⚠️ API Limit Exceeded: Please upgrade plan",
      "⚠️ Data Source Unavailable: Service temporarily down"
    ],
    performance: [
      { date: "June 29", conversion: "0%", revenue: "$0.00", action: "View Logs" },
      { date: "June 22", conversion: "8.7%", revenue: "$720.40", action: "View Logs" },
      { date: "June 15", conversion: "11.2%", revenue: "$890.20", action: "View Logs" }
    ],
    relatedActions: [
      "Fix API Connection",
      "Upgrade Data Plan",
      "Contact Support"
    ]
  },
  "bundle-creator": {
    name: "Bundle Creator",
    description: "Intelligent product bundling with profit optimization and customer segmentation",
    lastRun: "June 28",
    conversionLift: "+18.7%",
    revenueImpact: "$890.30",
    status: "🟢 Healthy",
    inputs: [
      { name: "Base Product", type: "select", value: "Smart Cooling Mug", options: ["Smart Cooling Mug", "Wireless Charger", "Bluetooth Speaker", "Fitness Tracker", "Smart Watch"] },
      { name: "Bundle Type", type: "select", value: "Cross-sell", options: ["Cross-sell", "Upsell", "Seasonal", "Lifestyle", "Premium"] },
      { name: "Target Customer Segment", type: "select", value: "Premium", options: ["Budget", "Standard", "Premium", "Enterprise"] },
      { name: "Discount Strategy", type: "select", value: "Percentage", options: ["Percentage", "Fixed Amount", "BOGO", "Free Shipping"] },
      { name: "Discount Value", type: "range", value: "15%" },
      { name: "Bundle Name", type: "text", value: "Smart Office Essentials Bundle" },
      { name: "Bundle Theme", type: "select", value: "Productivity", options: ["Productivity", "Wellness", "Entertainment", "Home Office", "Travel"] },
      { name: "Inventory Availability", type: "multiselect", value: ["In Stock"], options: ["In Stock", "Low Stock", "Pre-order", "Made to Order"] },
      { name: "Seasonal Relevance", type: "select", value: "Year-round", options: ["Year-round", "Holiday", "Back to School", "Summer", "Winter"] }
    ],
    outputs: [
      "📦 Bundle 1: Smart Cooling Mug + Wireless Charger (15% discount) - $89.99",
      "📦 Bundle 2: Office Essentials Kit (Mug + Charger + Speaker) (20% discount) - $149.99",
      "📦 Bundle 3: Premium Workspace Bundle (All items + stand) (25% discount) - $199.99",
      "📦 Bundle 4: Gift Set (Mug + Gift Card + Packaging) (10% discount) - $79.99",
      "📦 Bundle 5: Subscription Bundle (Mug + Monthly Coffee) (30% discount) - $69.99/month"
    ],
    performance: [
      { date: "June 28", conversion: "18.7%", revenue: "$890.30", action: "View Logs" },
      { date: "June 21", conversion: "16.3%", revenue: "$720.80", action: "View Logs" },
      { date: "June 14", conversion: "14.8%", revenue: "$650.40", action: "View Logs" }
    ],
    relatedActions: [
      "Create Ad for Best Bundle",
      "Generate Landing Page for Bundle",
      "Email Customers Bundle Offer",
      "Set Up Bundle Analytics",
      "Create Bundle Comparison Page"
    ]
  },
  // Promote modules
  "ad-generators": {
    name: "Ad Generators",
    description: "Meta/TikTok/Google ad copy + visuals",
    lastRun: "July 3",
    conversionLift: "+12.4%",
    revenueImpact: "$1,890.50",
    status: "🟢 Healthy",
    inputs: [
      { name: "Platform", type: "select", value: "Meta", options: ["Meta", "TikTok", "Google", "Instagram"] },
      { name: "Product", type: "text", value: "Smart Fitness Tracker" },
      { name: "Target Audience", type: "text", value: "Fitness enthusiasts, 25-40" },
      { name: "Ad Type", type: "select", value: "Video", options: ["Video", "Image", "Carousel"] }
    ],
    outputs: [
      "📺 Video Ad: 'Transform Your Fitness Journey' - 15s dynamic video",
      "📷 Image Ad: 'Track Your Progress' - Lifestyle photography",
      "📱 Carousel Ad: 'Complete Health Solution' - 3-card format"
    ],
    performance: [
      { date: "July 3", conversion: "12.4%", revenue: "$1,890.50", action: "View Logs" },
      { date: "June 26", conversion: "10.8%", revenue: "$1,650.30", action: "View Logs" },
      { date: "June 19", conversion: "9.2%", revenue: "$1,420.80", action: "View Logs" }
    ],
    relatedActions: [
      "Launch Campaign on Meta",
      "Create TikTok Version",
      "A/B Test Ad Variations"
    ]
  },
  "trend-targeting": {
    name: "Trend Targeting",
    description: "AI product-trend matcher",
    lastRun: "July 2",
    conversionLift: "+8.9%",
    revenueImpact: "$1,240.60",
    status: "🟡 Needs Re-run",
    inputs: [
      { name: "Product Category", type: "select", value: "Electronics", options: ["Electronics", "Fashion", "Home", "Sports"] },
      { name: "Trend Sources", type: "multiselect", value: ["Google Trends", "TikTok", "Instagram"], options: ["Google Trends", "TikTok", "Instagram", "Twitter"] },
      { name: "Time Period", type: "select", value: "Last 30 days", options: ["Last 7 days", "Last 30 days", "Last 90 days"] },
      { name: "Match Threshold", type: "range", value: "75%" }
    ],
    outputs: [
      "📈 Trending: 'Smart Home Security' - 45% increase in searches",
      "📈 Trending: 'Fitness Wearables' - 32% growth in interest",
      "📈 Trending: 'Wireless Audio' - 28% rise in demand"
    ],
    performance: [
      { date: "July 2", conversion: "8.9%", revenue: "$1,240.60", action: "View Logs" },
      { date: "June 25", conversion: "11.2%", revenue: "$1,560.40", action: "View Logs" },
      { date: "June 18", conversion: "13.8%", revenue: "$1,890.20", action: "View Logs" }
    ],
    relatedActions: [
      "Update Product Strategy",
      "Create Trend-Based Content",
      "Adjust Ad Targeting"
    ]
  },
  "seo-content": {
    name: "SEO Content",
    description: "Blog generator, YouTube script generator",
    lastRun: "June 30",
    conversionLift: "+31.2%",
    revenueImpact: "$2,890.40",
    status: "🟢 Healthy",
    inputs: [
      { name: "Content Type", type: "select", value: "Blog Post", options: ["Blog Post", "YouTube Script", "Product Review", "How-to Guide"] },
      { name: "Topic", type: "text", value: "Best Fitness Trackers 2024" },
      { name: "Target Keywords", type: "textarea", value: "fitness tracker, health monitor, smart watch" },
      { name: "Content Length", type: "select", value: "1500 words", options: ["500 words", "1000 words", "1500 words", "2000+ words"] }
    ],
    outputs: [
      "📝 Blog: 'Top 10 Fitness Trackers for 2024' - 1500 words, SEO optimized",
      "📹 YouTube: 'Fitness Tracker Comparison' - 8-minute script",
      "📝 Review: 'Smart Fitness Tracker Deep Dive' - Detailed analysis"
    ],
    performance: [
      { date: "June 30", conversion: "31.2%", revenue: "$2,890.40", action: "View Logs" },
      { date: "June 23", conversion: "28.7%", revenue: "$2,650.80", action: "View Logs" },
      { date: "June 16", conversion: "25.4%", revenue: "$2,340.60", action: "View Logs" }
    ],
    relatedActions: [
      "Publish Blog Post",
      "Record YouTube Video",
      "Share on Social Media"
    ]
  },
  "email-social": {
    name: "Email & Social Posts",
    description: "Email campaigns, tweets, Insta captions",
    lastRun: "July 3",
    conversionLift: "+15.8%",
    revenueImpact: "$1,560.20",
    status: "🟢 Healthy",
    inputs: [
      { name: "Campaign Type", type: "select", value: "Product Launch", options: ["Product Launch", "Newsletter", "Promotion", "Educational"] },
      { name: "Platform", type: "multiselect", value: ["Email", "Instagram"], options: ["Email", "Instagram", "Twitter", "Facebook"] },
      { name: "Tone", type: "select", value: "Professional", options: ["Professional", "Casual", "Friendly", "Urgent"] },
      { name: "Call to Action", type: "text", value: "Shop Now" }
    ],
    outputs: [
      "📧 Email: 'New Fitness Tracker Launch' - Welcome series",
      "📱 Instagram: 'Track Your Progress' - Lifestyle post",
      "🐦 Twitter: 'Smart Health Monitoring' - Product announcement"
    ],
    performance: [
      { date: "July 3", conversion: "15.8%", revenue: "$1,560.20", action: "View Logs" },
      { date: "June 26", conversion: "13.4%", revenue: "$1,320.80", action: "View Logs" },
      { date: "June 19", conversion: "11.9%", revenue: "$1,180.40", action: "View Logs" }
    ],
    relatedActions: [
      "Send Email Campaign",
      "Post to Instagram",
      "Schedule Social Posts"
    ]
  },
  "ab-testing": {
    name: "A/B Testing Tools",
    description: "Headline or visual testing modules",
    lastRun: "June 29",
    conversionLift: "+5.3%",
    revenueImpact: "$890.70",
    status: "🟡 Needs Re-run",
    inputs: [
      { name: "Test Type", type: "select", value: "Headline", options: ["Headline", "Image", "CTA", "Layout"] },
      { name: "Test Elements", type: "textarea", value: "Version A: 'Transform Your Fitness' vs Version B: 'Track Your Progress'" },
      { name: "Traffic Split", type: "select", value: "50/50", options: ["70/30", "50/50", "80/20"] },
      { name: "Test Duration", type: "select", value: "7 days", options: ["3 days", "7 days", "14 days"] }
    ],
    outputs: [
      "🧪 Test: 'Transform Your Fitness' vs 'Track Your Progress'",
      "📊 Results: Version B wins with 23% higher CTR",
      "📈 Recommendation: Implement winning version"
    ],
    performance: [
      { date: "June 29", conversion: "5.3%", revenue: "$890.70", action: "View Logs" },
      { date: "June 22", conversion: "7.8%", revenue: "$1,240.50", action: "View Logs" },
      { date: "June 15", conversion: "9.2%", revenue: "$1,480.30", action: "View Logs" }
    ],
    relatedActions: [
      "Implement Winning Version",
      "Start New Test",
      "Analyze Results"
    ]
  },
  // Convert modules
  "testimonials-reviews": {
    name: "Testimonials & Reviews",
    description: "Real/fake generator or uploader",
    lastRun: "July 2",
    conversionLift: "+22.1%",
    revenueImpact: "$2,340.80",
    status: "🟢 Healthy",
    inputs: [
      { name: "Review Type", type: "select", value: "Product Review", options: ["Product Review", "Service Review", "Testimonial"] },
      { name: "Rating", type: "select", value: "5 stars", options: ["3 stars", "4 stars", "5 stars"] },
      { name: "Review Length", type: "select", value: "Detailed", options: ["Short", "Medium", "Detailed"] },
      { name: "Customer Profile", type: "text", value: "Fitness enthusiast, 30s" }
    ],
    outputs: [
      "⭐ 'Amazing fitness tracker! Tracks everything perfectly.' - Sarah M.",
      "⭐ 'Best investment for my health journey.' - Mike R.",
      "⭐ 'Accurate and easy to use. Highly recommend!' - Lisa K."
    ],
    performance: [
      { date: "July 2", conversion: "22.1%", revenue: "$2,340.80", action: "View Logs" },
      { date: "June 25", conversion: "19.8%", revenue: "$2,120.40", action: "View Logs" },
      { date: "June 18", conversion: "17.5%", revenue: "$1,890.60", action: "View Logs" }
    ],
    relatedActions: [
      "Display Reviews on Product Page",
      "Create Review Video",
      "Share Customer Stories"
    ]
  },
  "landing-optimizer": {
    name: "Landing Page Optimizer",
    description: "CTA testing, heatmap analysis",
    lastRun: "July 1",
    conversionLift: "+18.9%",
    revenueImpact: "$2,890.50",
    status: "🟢 Healthy",
    inputs: [
      { name: "Page URL", type: "text", value: "/fitness-tracker" },
      { name: "Optimization Focus", type: "select", value: "CTA", options: ["CTA", "Headline", "Images", "Layout"] },
      { name: "Test Variations", type: "textarea", value: "Version A: 'Buy Now' vs Version B: 'Get Started'" },
      { name: "Success Metric", type: "select", value: "Conversions", options: ["Conversions", "Click-through", "Time on Page"] }
    ],
    outputs: [
      "🎯 CTA Test: 'Get Started' performs 23% better than 'Buy Now'",
      "📊 Heatmap: Users focus on product images and reviews",
      "💡 Recommendation: Move CTA above the fold"
    ],
    performance: [
      { date: "July 1", conversion: "18.9%", revenue: "$2,890.50", action: "View Logs" },
      { date: "June 24", conversion: "16.2%", revenue: "$2,480.30", action: "View Logs" },
      { date: "June 17", conversion: "14.8%", revenue: "$2,240.70", action: "View Logs" }
    ],
    relatedActions: [
      "Implement Optimized Version",
      "Run Additional Tests",
      "Monitor Performance"
    ]
  },
  "offer-stacker": {
    name: "Offer Stacker",
    description: "Bonuses, timers, bundle tools",
    lastRun: "June 30",
    conversionLift: "+14.2%",
    revenueImpact: "$1,890.40",
    status: "🟢 Healthy",
    inputs: [
      { name: "Base Offer", type: "text", value: "Smart Fitness Tracker" },
      { name: "Bonus Type", type: "select", value: "Free Shipping", options: ["Free Shipping", "Extended Warranty", "Free App", "Discount"] },
      { name: "Urgency", type: "select", value: "24 hours", options: ["2 hours", "24 hours", "48 hours", "1 week"] },
      { name: "Stack Limit", type: "select", value: "3 bonuses", options: ["1 bonus", "2 bonuses", "3 bonuses", "Unlimited"] }
    ],
    outputs: [
      "🎁 Offer: Fitness Tracker + Free Shipping + 1-Year Warranty",
      "⏰ Limited Time: 24 hours only",
      "💰 Total Value: $199 (Save $45)"
    ],
    performance: [
      { date: "June 30", conversion: "14.2%", revenue: "$1,890.40", action: "View Logs" },
      { date: "June 23", conversion: "12.8%", revenue: "$1,720.60", action: "View Logs" },
      { date: "June 16", conversion: "11.5%", revenue: "$1,540.80", action: "View Logs" }
    ],
    relatedActions: [
      "Launch Offer Campaign",
      "Create Urgency Email",
      "Track Offer Performance"
    ]
  },
  "faq-objection": {
    name: "FAQ + Objection Handling",
    description: "Chatbot builder, FAQ gen",
    lastRun: "June 28",
    conversionLift: "-12.3%",
    revenueImpact: "$0.00",
    status: "🟠 Outdated",
    inputs: [
      { name: "FAQ Topics", type: "textarea", value: "Product features, shipping, returns, warranty" },
      { name: "Tone", type: "select", value: "Helpful", options: ["Helpful", "Professional", "Friendly", "Technical"] },
      { name: "Response Length", type: "select", value: "Concise", options: ["Brief", "Concise", "Detailed"] },
      { name: "Chatbot Style", type: "select", value: "Conversational", options: ["Conversational", "Professional", "Casual"] }
    ],
    outputs: [
      "❓ Q: How accurate is the heart rate monitor? A: 99% accuracy with medical-grade sensors",
      "❓ Q: What's the battery life? A: Up to 7 days with normal use",
      "❓ Q: Is it waterproof? A: Yes, IP68 rated for swimming"
    ],
    performance: [
      { date: "June 28", conversion: "-12.3%", revenue: "$0.00", action: "View Logs" },
      { date: "June 21", conversion: "8.9%", revenue: "$1,240.60", action: "View Logs" },
      { date: "June 14", conversion: "11.2%", revenue: "$1,560.40", action: "View Logs" }
    ],
    relatedActions: [
      "Update FAQ Content",
      "Improve Chatbot Responses",
      "Add More Objection Handlers"
    ]
  },
  "checkout-flow": {
    name: "Checkout Flow",
    description: "Funnel builder or integration guide",
    lastRun: "June 25",
    conversionLift: "0%",
    revenueImpact: "$0.00",
    status: "🔴 Broken",
    inputs: [
      { name: "Payment Methods", type: "multiselect", value: ["Credit Card", "PayPal"], options: ["Credit Card", "PayPal", "Apple Pay", "Google Pay"] },
      { name: "Shipping Options", type: "select", value: "Free Shipping", options: ["Free Shipping", "Express", "Standard", "Pickup"] },
      { name: "Upsell Position", type: "select", value: "After Payment", options: ["Before Payment", "After Payment", "During Payment"] },
      { name: "Trust Badges", type: "multiselect", value: ["SSL", "Money Back"], options: ["SSL", "Money Back", "Warranty", "Reviews"] }
    ],
    outputs: [
      "⚠️ Error: Payment gateway connection failed",
      "⚠️ Error: Shipping calculator not responding",
      "⚠️ Error: Trust badges not displaying"
    ],
    performance: [
      { date: "June 25", conversion: "0%", revenue: "$0.00", action: "View Logs" },
      { date: "June 18", conversion: "9.8%", revenue: "$1,340.20", action: "View Logs" },
      { date: "June 11", conversion: "12.4%", revenue: "$1,680.50", action: "View Logs" }
    ],
    relatedActions: [
      "Fix Payment Gateway",
      "Test Checkout Flow",
      "Contact Technical Support"
    ]
  },
  // Retain modules
  "fulfillment-tools": {
    name: "Fulfillment Tools",
    description: "Order tracking templates, delivery checklists",
    lastRun: "July 3",
    conversionLift: "+9.8%",
    revenueImpact: "$890.30",
    status: "🟢 Healthy",
    inputs: [
      { name: "Order Status", type: "select", value: "Shipped", options: ["Processing", "Shipped", "Delivered", "Returned"] },
      { name: "Tracking Template", type: "select", value: "Professional", options: ["Professional", "Friendly", "Detailed"] },
      { name: "Update Frequency", type: "select", value: "Real-time", options: ["Daily", "Real-time", "On milestone"] },
      { name: "Customer Notifications", type: "multiselect", value: ["Email", "SMS"], options: ["Email", "SMS", "Push", "None"] }
    ],
    outputs: [
      "📦 Order #12345: Shipped via FedEx - Tracking: 123456789",
      "📧 Email: 'Your order is on its way!' - Professional template",
      "📱 SMS: 'Package delivered! Rate your experience'"
    ],
    performance: [
      { date: "July 3", conversion: "9.8%", revenue: "$890.30", action: "View Logs" },
      { date: "June 26", conversion: "8.4%", revenue: "$720.60", action: "View Logs" },
      { date: "June 19", conversion: "7.2%", revenue: "$650.40", action: "View Logs" }
    ],
    relatedActions: [
      "Send Tracking Updates",
      "Follow Up After Delivery",
      "Collect Delivery Feedback"
    ]
  },
  "onboarding-flows": {
    name: "Onboarding Flows",
    description: "Welcome emails, tutorials",
    lastRun: "July 2",
    conversionLift: "+16.4%",
    revenueImpact: "$1,240.80",
    status: "🟢 Healthy",
    inputs: [
      { name: "Welcome Series", type: "select", value: "3 emails", options: ["1 email", "3 emails", "5 emails", "7 emails"] },
      { name: "Tutorial Type", type: "select", value: "Video", options: ["Video", "Step-by-step", "Interactive", "PDF"] },
      { name: "Onboarding Goal", type: "select", value: "Feature Adoption", options: ["Feature Adoption", "Account Setup", "Product Education", "Community Building"] },
      { name: "Success Metric", type: "select", value: "Completion Rate", options: ["Completion Rate", "Time to First Use", "Feature Usage", "Retention"] }
    ],
    outputs: [
      "📧 Welcome Email 1: 'Welcome to Smart Fitness!' - Setup guide",
      "📧 Welcome Email 2: 'Getting Started' - Feature tutorial",
      "📧 Welcome Email 3: 'Join the Community' - Social features"
    ],
    performance: [
      { date: "July 2", conversion: "16.4%", revenue: "$1,240.80", action: "View Logs" },
      { date: "June 25", conversion: "14.2%", revenue: "$1,080.40", action: "View Logs" },
      { date: "June 18", conversion: "12.8%", revenue: "$960.20", action: "View Logs" }
    ],
    relatedActions: [
      "Send Welcome Series",
      "Create Tutorial Videos",
      "Track Onboarding Progress"
    ]
  },
  "subscription-loyalty": {
    name: "Subscription & Loyalty",
    description: "Auto-renewal flows, referral tools",
    lastRun: "June 30",
    conversionLift: "+11.2%",
    revenueImpact: "$1,560.40",
    status: "🟡 Needs Re-run",
    inputs: [
      { name: "Program Type", type: "select", value: "Points System", options: ["Points System", "Tier System", "Cashback", "Referral"] },
      { name: "Reward Value", type: "select", value: "5% back", options: ["2% back", "5% back", "10% back", "Points multiplier"] },
      { name: "Auto-renewal", type: "select", value: "Enabled", options: ["Enabled", "Disabled", "Opt-in"] },
      { name: "Referral Bonus", type: "text", value: "$10 credit" }
    ],
    outputs: [
      "🎁 Loyalty Program: Earn 5 points per $1 spent",
      "🔄 Auto-renewal: Never miss a subscription",
      "👥 Referral: Get $10 when friends join"
    ],
    performance: [
      { date: "June 30", conversion: "11.2%", revenue: "$1,560.40", action: "View Logs" },
      { date: "June 23", conversion: "13.8%", revenue: "$1,890.60", action: "View Logs" },
      { date: "June 16", conversion: "15.4%", revenue: "$2,120.80", action: "View Logs" }
    ],
    relatedActions: [
      "Launch Loyalty Program",
      "Send Referral Invites",
      "Optimize Renewal Flow"
    ]
  },
  "churn-clv": {
    name: "Churn & CLV Models",
    description: "Who's likely to cancel or buy again",
    lastRun: "June 29",
    conversionLift: "-6.7%",
    revenueImpact: "$0.00",
    status: "🟠 Outdated",
    inputs: [
      { name: "Model Type", type: "select", value: "Churn Prediction", options: ["Churn Prediction", "CLV Prediction", "Next Purchase", "Lifetime Value"] },
      { name: "Data Period", type: "select", value: "Last 90 days", options: ["Last 30 days", "Last 90 days", "Last 6 months", "All time"] },
      { name: "Risk Threshold", type: "range", value: "70%" },
      { name: "Intervention Type", type: "select", value: "Email Campaign", options: ["Email Campaign", "Discount Offer", "Personal Call", "Feature Demo"] }
    ],
    outputs: [
      "📊 High Risk: 234 customers likely to churn in next 30 days",
      "📊 Medium Risk: 567 customers need attention",
      "📊 Low Risk: 1,234 customers stable"
    ],
    performance: [
      { date: "June 29", conversion: "-6.7%", revenue: "$0.00", action: "View Logs" },
      { date: "June 22", conversion: "8.9%", revenue: "$1,240.60", action: "View Logs" },
      { date: "June 15", conversion: "11.4%", revenue: "$1,580.20", action: "View Logs" }
    ],
    relatedActions: [
      "Send Retention Campaign",
      "Update Prediction Model",
      "Personalize Interventions"
    ]
  },
  "feedback-collectors": {
    name: "Feedback Collectors",
    description: "Review prompts, surveys, auto-analyze tools",
    lastRun: "June 25",
    conversionLift: "0%",
    revenueImpact: "$0.00",
    status: "🔴 Broken",
    inputs: [
      { name: "Survey Type", type: "select", value: "Product Feedback", options: ["Product Feedback", "Service Quality", "Website Experience", "Overall Satisfaction"] },
      { name: "Trigger Event", type: "select", value: "After Purchase", options: ["After Purchase", "After Support", "Periodic", "Exit Intent"] },
      { name: "Question Count", type: "select", value: "5 questions", options: ["3 questions", "5 questions", "10 questions", "Custom"] },
      { name: "Incentive", type: "text", value: "10% discount" }
    ],
    outputs: [
      "⚠️ Error: Survey form not loading",
      "⚠️ Error: Response collection failed",
      "⚠️ Error: Analysis engine offline"
    ],
    performance: [
      { date: "June 25", conversion: "0%", revenue: "$0.00", action: "View Logs" },
      { date: "June 18", conversion: "7.8%", revenue: "$1,120.40", action: "View Logs" },
      { date: "June 11", conversion: "9.4%", revenue: "$1,340.60", action: "View Logs" }
    ],
    relatedActions: [
      "Fix Survey System",
      "Test Feedback Collection",
      "Restore Analysis Tools"
    ]
  }
};

// Type for product tab keys
type ProductTabKey = 'performance' | 'outputActions' | 'generalConfig' | 'actionConfig';

// Actions SVG icon for Run button
const ActionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M232.4 114.49L88.32 26.35a16 16 0 0 0-16.2-.3A15.86 15.86 0 0 0 64 39.87v176.26A15.94 15.94 0 0 0 80 232a16.07 16.07 0 0 0 8.36-2.35l144.04-88.14a15.81 15.81 0 0 0 0-27ZM80 215.94V40l143.83 88Z"/></svg>
);

// Export SVG icon
const ExportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42ZM21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Z"/></svg>
);

// Pipeline-specific buttons and configs for Add Action tab
const pipelineActions = {
  'competitor-intelligence': {
    buttons: [
      { icon: '🧠', label: 'Analyze Competitor' },
      { icon: '🔍', label: 'Show Product Gaps' },
      { icon: '📈', label: 'Track Pricing & Positioning' },
    ],
    configs: [
      'Competitor URLs/Names',
      'Focus Product/Feature',
      'Market Region',
    ],
  },
  'bundle-creator': {
    buttons: [
      { icon: '➕', label: 'Generate Bundle' },
      { icon: '🏷️', label: 'Suggest Price Points' },
      { icon: '📊', label: 'Compare Bundles' },
    ],
    configs: [
      'Main Product',
      'Add-on Options',
      'Pricing Tier',
      'Seasonality / Use Case',
    ],
  },
  'ad-generators': {
    buttons: [
      { icon: '📢', label: 'Generate Ad (FB/IG/Google/etc.)' },
      { icon: '✍️', label: 'Rewrite Headline' },
      { icon: '🎯', label: 'Match Audience' },
    ],
    configs: [
      'Ad Platform',
      'Hook Angle (discount, urgency, emotion)',
      'Call-to-Action Type',
    ],
  },
  'trend-targeting': {
    buttons: [
      { icon: '📊', label: 'Show Trending Keywords' },
      { icon: '🔮', label: 'Forecast Opportunity' },
      { icon: '🛒', label: 'Match Product to Trend' },
    ],
    configs: [
      'Industry',
      'Time Frame',
      'Region',
    ],
  },
  'seo-content': {
    buttons: [
      { icon: '��', label: 'Generate Blog/Article' },
      { icon: '🔍', label: 'Suggest Keywords' },
      { icon: '🔧', label: 'Fix SEO Errors' },
    ],
    configs: [
      'Keyword / Topic',
      'Word Count',
      'Funnel Stage (Top/Mid/Bottom)',
    ],
  },
  'email-social': {
    buttons: [
      { icon: '✉️', label: 'Generate Email' },
      { icon: '🐦', label: 'Generate Social Post' },
      { icon: '📅', label: 'Suggest Calendar' },
    ],
    configs: [
      'Channel (Twitter, IG, Email)',
      'Post Type (promo, tip, testimonial)',
      'Hashtag Bank',
    ],
  },
  'ab-testing': {
    buttons: [
      { icon: '➕', label: 'Create A/B Variant' },
      { icon: '🧪', label: 'Simulate Performance' },
      { icon: '✅', label: 'Recommend Winner' },
    ],
    configs: [
      'Test Variable (headline, CTA, layout)',
      'Audience Split',
      'Traffic Volume',
    ],
  },
  'testimonials-reviews': {
    buttons: [
      { icon: '🗣️', label: 'Generate Fake Review (for demo/mocks)' },
      { icon: '📥', label: 'Summarize User Reviews' },
      { icon: '💬', label: 'Highlight Social Proof' },
    ],
    configs: [
      'Product or Feature Name',
      'Source (Amazon, Trustpilot, etc.)',
      'Tone (Genuine, Playful, Corporate)',
    ],
  },
  'landing-optimizer': {
    buttons: [
      { icon: '🧠', label: 'Analyze Page' },
      { icon: '✍️', label: 'Rewrite Section' },
      { icon: '✅', label: 'Suggest Layout' },
    ],
    configs: [
      'Page URL / Copy',
      'Conversion Goal',
      'Device Type (Mobile/Desktop)',
    ],
  },
  'offer-stacker': {
    buttons: [
      { icon: '➕', label: 'Build Offer Stack' },
      { icon: '🧲', label: 'Add Bonuses / Scarcity' },
      { icon: '💰', label: 'Compare with Market' },
    ],
    configs: [
      'Core Offer',
      'Bonus Options',
      'Urgency Tactics',
    ],
  },
  'faq-objection': {
    buttons: [
      { icon: '❓', label: 'Generate FAQ' },
      { icon: '🚫', label: 'Handle Objection' },
      { icon: '🧠', label: 'Categorize Questions' },
    ],
    configs: [
      'Common Objections',
      'Product Details',
      'Audience Type',
    ],
  },
  'checkout-flow': {
    buttons: [
      { icon: '��', label: 'Optimize Checkout' },
      { icon: '🧾', label: 'Add Trust Seals / Guarantees' },
      { icon: '📉', label: 'Reduce Drop-Off' },
    ],
    configs: [
      'Funnel Steps',
      'Product Price',
      'Cart Abandonment Rate',
    ],
  },
  'fulfillment-tools': {
    buttons: [
      { icon: '🚀', label: 'Suggest Fulfillment Options' },
      { icon: '��', label: 'Optimize Delivery Messaging' },
      { icon: '🧾', label: 'Return Policy Templates' },
    ],
    configs: [
      'Region',
      'Fulfillment Provider',
      'Handling Time',
    ],
  },
  'onboarding-flows': {
    buttons: [
      { icon: '🧑‍🏫', label: 'Generate Flow' },
      { icon: '🎯', label: 'Match to User Type' },
      { icon: '✅', label: 'Add Checkpoints' },
    ],
    configs: [
      'Product Complexity',
      'User Intent',
      'Support Channels',
    ],
  },
  'subscription-loyalty': {
    buttons: [
      { icon: '🔁', label: 'Suggest Loyalty Perks' },
      { icon: '💡', label: 'Create Retention Email' },
      { icon: '📈', label: 'Forecast Lifetime Value' },
    ],
    configs: [
      'Subscription Tier',
      'Churn Risk',
      'Loyalty Points Setup',
    ],
  },
  'churn-clv': {
    buttons: [
      { icon: '📉', label: 'Predict Churn' },
      { icon: '📈', label: 'Calculate CLV' },
      { icon: '🧪', label: 'Test Interventions' },
    ],
    configs: [
      'Purchase History',
      'Engagement Rate',
      'Account Age',
    ],
  },
  'feedback-collectors': {
    buttons: [
      { icon: '✍️', label: 'Generate Survey' },
      { icon: '📈', label: 'Summarize Responses' },
      { icon: '🧠', label: 'Extract Insights' },
    ],
    configs: [
      'Feedback Type (NPS, Feature Request)',
      'Channel (Email, Site Widget)',
      'Target Audience',
    ],
  },
};

export default function PipelinePage() {
  const { t } = useTranslation();
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug || '';
  const pipeline = pipelineDetails[slug as keyof typeof pipelineDetails];

  if (!pipeline) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Pipeline Not Found</h1>
          <Link href="/pipeline-controller" className="text-[var(--primary)] hover:underline">
            ← Back to Pipeline Controller
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    if (status.includes('🟢')) return 'text-green-600 bg-green-50 border-green-200';
    if (status.includes('🟡')) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (status.includes('🟠')) return 'text-orange-600 bg-orange-50 border-orange-200';
    if (status.includes('🔴')) return 'text-red-600 bg-red-50 border-red-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  const getConversionColor = (conversion: string) => {
    // Use green/red in light mode, white in dark mode
    if (conversion.startsWith('+')) return 'text-green-600 dark:text-white';
    if (conversion.startsWith('-')) return 'text-red-600 dark:text-white';
    return 'text-gray-600 dark:text-white';
  };

  // Add local tab state for Product Generator
  const [activeProductTab, setActiveProductTab] = useState('snapshot');
  const [activeModuleTab, setActiveModuleTab] = useState('performance'); // NEW: for non-product-generator modules
  const isProductGenerator = slug === 'product-generator';

  // SVG icons for Product Generator tabs
  const PerformanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41c-.39.39-1.03.39-1.42.01A9.969 9.969 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13Z" width="24" height="24"/></svg>
  );
  const ConfigIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path strokeWidth=".933" d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 0 1-.017 1.948l-1.539.508a5.567 5.567 0 0 1-.536 1.26l.704 1.46a7.041 7.041 0 0 1-1.389 1.365l-1.447-.73a5.507 5.507 0 0 1-1.27.514l-.533 1.53a7.066 7.066 0 0 1-1.948-.017l-.508-1.539a5.567 5.567 0 0 1-1.26-.536l-1.46.704a7.041 7.041 0 0 1-1.365-1.389l.73-1.447a5.565 5.565 0 0 1-.514-1.27l-1.53-.534a7.066 7.066 0 0 1 .017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 0 1 1.389-1.365l1.447.73a5.507 5.507 0 0 1 1.27-.514l.534-1.53A7.06 7.06 0 0 1 7.5.5z"/><circle cx="7.5" cy="7.5" r="3"/></g></svg>
  );
  const ActionConfigIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M18 4a1 1 0 1 0-2 0v1H4a1 1 0 0 0 0 2h12v1a1 1 0 1 0 2 0V7h2a1 1 0 1 0 0-2h-2V4ZM4 11a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h12a1 1 0 1 0 0-2H8v-1a1 1 0 0 0-2 0v1H4Zm-1 7a1 1 0 0 1 1-1h12v-1a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1-1-1Z"/></g></svg>
  );

  // Reorder Product Generator tabs: Performance, Output & Actions, Inputs (Configuration)
  const productTabs = [
    { key: 'performance', label: 'Performance', icon: <PerformanceIcon /> },
    { key: 'outputActions', label: 'Output & Actions', icon: <ActionsIcon /> },
    { key: 'generalConfig', label: 'General Configurations', icon: <ConfigIcon /> },
    { key: 'actionConfig', label: 'Action Configurations', icon: <ActionConfigIcon /> },
  ];

  // NEW: Module tabs for all other modules
  const moduleTabs = [
    { key: 'performance', label: 'Performance', icon: <PerformanceIcon /> },
    { key: 'outputActions', label: 'Output & Actions', icon: <ActionsIcon /> },
    { key: 'automationConfig', label: 'Automation Config', icon: <ConfigIcon /> },
    { key: 'actionConfig', label: 'Action Configuration', icon: <ActionConfigIcon /> },
  ];



  return (
    <main className="min-h-screen bg-[#23262f] text-[var(--text-primary)] px-0">
      {/* Enhanced Header with gradient background */}
      <div className="w-full bg-[#23262f] border-b border-[var(--border)] flex items-center justify-between px-8 py-4 shadow-sm" style={{minHeight: 72}}>
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/FullAnanovaSw.svg" alt="Avonova Logo" width={74} height={22} className="h-5 w-auto" priority />
          </Link>
          <span className="text-xl text-[var(--text-secondary)] mx-3">|</span>
          <span className="text-lg font-semibold text-[var(--text-primary)] ml-4">{pipeline.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/pipeline-controller" className="flex items-center gap-2 text-[var(--primary)] hover:underline font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Pipeline
          </Link>
        </div>
      </div>

      {/* Enhanced Title & Subtitle with action buttons */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">{pipeline.name}</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">{pipeline.description}</p>
        </div>
        {isProductGenerator && (
          <div className="flex items-center gap-3">
            <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <ActionsIcon />
              Run Pipeline
            </button>
            <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors flex items-center gap-2">
              <ExportIcon />
              Export
            </button>
          </div>
        )}
      </div>

      {/* Enhanced Product Generator Tabs */}
      {isProductGenerator && (
        <div className="w-full flex justify-center bg-[#23262f] border-b border-[var(--border)] mb-8 shadow-sm">
          <div className="flex gap-2 w-full max-w-2xl mx-auto py-2 justify-center px-4">
            {productTabs.map((tab) => (
              <button
                key={tab.key}
                className={`group relative flex flex-row items-center justify-center gap-2 px-4 py-2 w-[500px] focus:outline-none transition-all duration-200 rounded-xl font-semibold text-base border-2 whitespace-nowrap
                  ${activeProductTab === tab.key
                    ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md'
                    : 'bg-white dark:bg-[#23262f] text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'}
                `}
                onClick={() => setActiveProductTab(tab.key as ProductTabKey)}
                style={{ width: '500px' }}
              >
                <span className={`flex items-center justify-center text-2xl transition-all duration-200 ${activeProductTab === tab.key ? 'text-white' : 'text-[var(--primary)] group-hover:text-white'}`}>{tab.icon}</span>
                <span className="text-base font-semibold tracking-wide whitespace-nowrap">{tab.key === 'actionConfig' ? 'Add Action' : tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* NEW: Module Tabs for all other modules */}
      {!isProductGenerator && (
        <div className="w-full flex justify-center bg-[#23262f] border-b border-[var(--border)] mb-8 shadow-sm">
          <div className="flex gap-2 w-full max-w-2xl mx-auto py-4 justify-center px-4">
            {moduleTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveModuleTab(tab.key)}
                className={`group relative flex flex-row items-center justify-center px-6 py-3 min-w-[140px] focus:outline-none transition-all duration-300 ease-in-out rounded-xl
                  ${activeModuleTab === tab.key
                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20 transform scale-105'
                    : 'bg-[#23262f] dark:bg-[#23262f] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[#1a1d24] hover:shadow-md hover:transform hover:scale-105 border border-[var(--border)] hover:border-[var(--primary)]'}`}
                style={{ minWidth: 0 }}
              >
                <div className="relative z-10 flex flex-row items-center">
                  <span className={`mr-2 flex items-center justify-center text-xl transition-all duration-300 ${
                    activeModuleTab === tab.key 
                      ? 'text-white drop-shadow-sm' 
                      : 'text-[var(--text-secondary)] group-hover:text-[var(--primary)] group-hover:scale-110'
                  }`}>
                    {tab.icon}
                  </span>
                  <span className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                    activeModuleTab === tab.key 
                      ? 'text-white' 
                      : 'text-[var(--text-secondary)] group-hover:text-[var(--primary)]'
                  }`}>
                    {tab.label}
                  </span>
                </div>
                {activeModuleTab === tab.key && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full opacity-80"></div>
                )}
                {activeModuleTab !== tab.key && (
                  <div className="absolute inset-0 bg-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tabbed Content for Product Generator */}
      {isProductGenerator ? (
        <div className="max-w-6xl mx-auto px-4 pb-8">
          {activeProductTab === 'performance' && (
            <div className="mb-8">
              {/* Enhanced Key Performance Snapshot Panel + Run History Table */}
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 mb-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Key Performance Snapshot</h2>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 shadow-md ${getStatusColor(pipeline.status)}`}>{pipeline.status}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Last Run</div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">{pipeline.lastRun}</div>
                  </div>
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Conversion Lift</div>
                    <div className={`text-3xl font-bold ${getConversionColor(pipeline.conversionLift)}`}>{pipeline.conversionLift}</div>
                  </div>
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Revenue Impact</div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">{pipeline.revenueImpact}</div>
                  </div>
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Success Rate</div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">{pipeline.status.includes('🟢') ? '95%' : pipeline.status.includes('🟡') ? '78%' : pipeline.status.includes('🟠') ? '45%' : '12%'}</div>
                  </div>
                </div>
                {/* Enhanced Run History Table */}
                <div className="overflow-x-auto mt-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Run History</h3>
                  <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] overflow-hidden shadow-md">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[var(--surface)] border-b border-[var(--border)]">
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Date</th>
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Conversion %</th>
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Revenue Impact</th>
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pipeline.performance.map((item, index) => (
                          <tr key={index} className="border-b border-[var(--border)]">
                            <td className="py-4 px-6 text-[var(--text-primary)] font-medium">{item.date}</td>
                            <td className={`py-4 px-6 font-semibold ${getConversionColor(item.conversion)}`}>{item.conversion}</td>
                            <td className="py-4 px-6 text-[var(--text-primary)]">{item.revenue}</td>
                            <td className="py-4 px-6">
                              <button className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors text-sm font-medium px-3 py-1 rounded-lg hover:bg-[var(--background)]">{item.action}</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeProductTab === 'outputActions' && (
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Enhanced Output Preview */}
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Output Preview</h2>
                  <button className="px-4 py-2 text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-all duration-200 text-sm font-semibold border border-[var(--primary)] hover:border-[var(--primary-dark)]">Export</button>
                </div>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {pipeline.outputs.map((output, index) => (
                    <div key={index} className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 shadow-md hover:shadow-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-[var(--text-primary)] font-medium">{output}</div>
                        </div>
                        <div className="flex items-center gap-2 ml-3">
                          <button className="p-2 text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-all duration-200 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </button>
                          <button className="p-2 text-[var(--text-secondary)] hover:bg-[var(--border)] rounded-lg transition-all duration-200 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full px-6 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  ⟳ Re-run Suggestions
                </button>
              </div>
              {/* Enhanced Related Actions */}
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Related Actions</h2>
                  <button className="px-4 py-2 text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-all duration-200 text-sm font-semibold border border-[var(--primary)] hover:border-[var(--primary-dark)]">Add Action</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pipeline.relatedActions.map((action, index) => (
                    <button key={index} className="px-6 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-105">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeProductTab === 'generalConfig' && (
            <div className="mb-8">
              {/* Enhanced Inputs / Configuration */}
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Inputs / Configuration</h2>
                  <button className="px-4 py-2 text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-all duration-200 text-sm font-semibold border border-[var(--primary)] hover:border-[var(--primary-dark)]">Save Config</button>
                </div>
                <div className="space-y-6">
                  {pipeline.inputs.map((input, index) => (
                    <div key={index} className="space-y-3 p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300">
                      <label className="block text-sm font-semibold text-[var(--text-primary)]">{input.name}</label>
                      {input.type === 'select' ? (
                        <select className="w-full border-2 border-[var(--border)] rounded-xl px-4 py-3 bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] transition-all duration-200 shadow-sm">
                          {input.options?.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : input.type === 'textarea' ? (
                        <textarea className="w-full border-2 border-[var(--border)] rounded-xl px-4 py-3 bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] transition-all duration-200 shadow-sm" rows={3} defaultValue={input.value} />
                      ) : input.type === 'file' ? (
                        <div className="border-2 border-[var(--border)] rounded-xl px-4 py-3 bg-[var(--background)] text-[var(--text-primary)] flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8V4h5v4h3v10z"/>
                          </svg>
                          {input.value}
                        </div>
                      ) : input.type === 'range' ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <input type="range" className="flex-1 h-2 bg-[var(--border)] rounded-lg appearance-none cursor-pointer slider" defaultValue={parseInt((input.value as string).replace(/\D/g, '') || '0')} />
                            <span className="text-sm text-[var(--text-primary)] font-semibold px-3 py-1 bg-[var(--primary-light)] rounded-lg">{input.value}</span>
                          </div>
                        </div>
                      ) : input.type === 'multiselect' ? (
                        <div className="space-y-3">
                          {input.options?.map((option, i) => (
                            <label key={i} className="flex items-center gap-3 p-3 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200 cursor-pointer">
                              <input type="checkbox" className="rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary-light)]" 
                                     defaultChecked={input.value.includes(option)} />
                              <span className="text-sm text-[var(--text-primary)] font-medium">{option}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <input type="text" className="w-full border-2 border-[var(--border)] rounded-xl px-4 py-3 bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] transition-all duration-200 shadow-sm" defaultValue={input.value} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeProductTab === 'actionConfig' && (
            <div className="mb-8">
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 mb-8 backdrop-blur-sm flex flex-col items-center justify-center min-h-[200px]">
                <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)] flex items-center"><span className="mr-2"><ActionConfigIcon /></span>Action Configuration</h2>
                <p className="text-[var(--text-secondary)] text-lg">Action configuration options coming soon.</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 pb-8">
          {activeModuleTab === 'performance' && (
            <div className="mb-8">
              {/* Enhanced Key Performance Snapshot Panel + Run History Table */}
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 mb-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Key Performance Snapshot</h2>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 shadow-md ${getStatusColor(pipeline.status)}`}>{pipeline.status}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Last Run</div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">{pipeline.lastRun}</div>
                  </div>
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Conversion Lift</div>
                    <div className={`text-3xl font-bold ${getConversionColor(pipeline.conversionLift)}`}>{pipeline.conversionLift}</div>
                  </div>
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Revenue Impact</div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">{pipeline.revenueImpact}</div>
                  </div>
                  <div className="text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium">Success Rate</div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">{pipeline.status.includes('🟢') ? '95%' : pipeline.status.includes('🟡') ? '78%' : pipeline.status.includes('🟠') ? '45%' : '12%'}</div>
                  </div>
                </div>
                {/* Enhanced Run History Table */}
                <div className="overflow-x-auto mt-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Run History</h3>
                  <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] overflow-hidden shadow-md">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[var(--surface)] border-b border-[var(--border)]">
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Date</th>
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Conversion %</th>
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Revenue Impact</th>
                          <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pipeline.performance.map((item, index) => (
                          <tr key={index} className="border-b border-[var(--border)]">
                            <td className="py-4 px-6 text-[var(--text-primary)] font-medium">{item.date}</td>
                            <td className={`py-4 px-6 font-semibold ${getConversionColor(item.conversion)}`}>{item.conversion}</td>
                            <td className="py-4 px-6 text-[var(--text-primary)]">{item.revenue}</td>
                            <td className="py-4 px-6">
                              <button className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors text-sm font-medium px-3 py-1 rounded-lg hover:bg-[var(--background)]">{item.action}</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeModuleTab === 'outputActions' && (
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Enhanced Output Preview */}
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Output Preview</h2>
                  <button className="px-4 py-2 text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-all duration-200 text-sm font-semibold border border-[var(--primary)] hover:border-[var(--primary-dark)]">Export</button>
                </div>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {pipeline.outputs.map((output, index) => (
                    <div key={index} className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 shadow-md hover:shadow-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-[var(--text-primary)] font-medium">{output}</div>
                        </div>
                        <div className="flex items-center gap-2 ml-3">
                          <button className="p-2 text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-all duration-200 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </button>
                          <button className="p-2 text-[var(--text-secondary)] hover:bg-[var(--border)] rounded-lg transition-all duration-200 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full px-6 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  ⟳ Re-run Suggestions
                </button>
              </div>
              {/* Enhanced Related Actions */}
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Related Actions</h2>
                  <button className="px-4 py-2 text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-all duration-200 text-sm font-semibold border border-[var(--primary)] hover:border-[var(--primary-dark)]">Add Action</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pipeline.relatedActions.map((action, index) => (
                    <button key={index} className="px-6 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-105">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeModuleTab === 'automationConfig' && (
            <div className="mb-8">
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 mb-8 backdrop-blur-sm flex flex-col items-center justify-center min-h-[200px]">
                <h2 className="text-2xl font-bold mb-4 text-[var(--primary)] flex items-center"><span className="mr-2"><ConfigIcon /></span>Automation Config</h2>
                <p className="text-[var(--text-secondary)] text-lg">Automation configuration options coming soon.</p>
              </div>
            </div>
          )}
          {activeModuleTab === 'actionConfig' && (
            <div className="mb-8">
              <div className="bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border)] p-8 mb-8 backdrop-blur-sm flex flex-col items-center justify-center min-h-[200px]">
                <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)] flex items-center"><span className="mr-2"><ActionConfigIcon /></span>Action Configuration</h2>
                <p className="text-[var(--text-secondary)] text-lg">Action configuration options coming soon.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
} 