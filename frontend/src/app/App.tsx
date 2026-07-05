import { useState } from "react";
import {
  Activity, AlertTriangle, Award, BarChart2,
  ChevronRight, Clock, Cpu, Database,
  Filter, Menu, Play, RefreshCw, Settings,
  Shield, Star, Target, TrendingUp, Upload,
  Users, X, Zap, ArrowRight, CheckCircle,
  Wifi, Home, LogOut, User, Lock, Mail,
  Search, Trash2, Download, MapPin, Globe,
  Bell, Plus, Info, Flame, Radio,
  TrendingDown, Eye, ChevronDown, ChevronUp
} from "lucide-react";
import {
  AreaChart, Area,
  BarChart, Bar,
  LineChart, Line,
  RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  green: "#6ee7f9",
  blue: "#8b5cf6",
  gold: "#fbbf24",
  red: "#fb7185",
  purple: "#a78bfa",
  orange: "#f59e0b",
};

// ── Mock Data ─────────────────────────────────────────────────────────────────
const winProbData = [
  { over: 0, pak: 50, ind: 50 },
  { over: 2, pak: 48, ind: 52 },
  { over: 4, pak: 44, ind: 56 },
  { over: 6, pak: 52, ind: 48 },
  { over: 8, pak: 45, ind: 55 },
  { over: 10, pak: 40, ind: 60 },
  { over: 12, pak: 35, ind: 65 },
  { over: 14, pak: 42, ind: 58 },
  { over: 16, pak: 32, ind: 68 },
  { over: 16.2, pak: 30, ind: 70 },
];

const playerRadar = [
  { stat: "Batting", babar: 95, virat: 97 },
  { stat: "Strike Rate", babar: 82, virat: 88 },
  { stat: "vs Spin", babar: 78, virat: 92 },
  { stat: "vs Pace", babar: 90, virat: 85 },
  { stat: "Pressure", babar: 85, virat: 95 },
  { stat: "Form", babar: 88, virat: 82 },
];

const economyData = [
  { name: "Shaheen", economy: 6.2, wickets: 18 },
  { name: "Bumrah", economy: 5.8, wickets: 22 },
  { name: "Nortje", economy: 7.1, wickets: 15 },
  { name: "Rashid", economy: 6.6, wickets: 20 },
  { name: "Cummins", economy: 7.4, wickets: 14 },
  { name: "Ngidi", economy: 8.1, wickets: 11 },
];

const momentumData = [
  { over: 1, runs: 8, wickets: 0 },
  { over: 2, runs: 12, wickets: 0 },
  { over: 3, runs: 6, wickets: 1 },
  { over: 4, runs: 14, wickets: 0 },
  { over: 5, runs: 9, wickets: 0 },
  { over: 6, runs: 16, wickets: 0 },
  { over: 7, runs: 5, wickets: 2 },
  { over: 8, runs: 11, wickets: 0 },
  { over: 9, runs: 18, wickets: 0 },
  { over: 10, runs: 7, wickets: 1 },
  { over: 11, runs: 13, wickets: 0 },
  { over: 12, runs: 9, wickets: 0 },
  { over: 13, runs: 15, wickets: 0 },
  { over: 14, runs: 10, wickets: 0 },
  { over: 15, runs: 8, wickets: 1 },
  { over: 16, runs: 17, wickets: 0 },
];

const pitchPieData = [
  { name: "Pace", value: 45 },
  { name: "Spin", value: 25 },
  { name: "Batting", value: 20 },
  { name: "Balanced", value: 10 },
];

const players = [
  { name: "Rohit Sharma", role: "Batsman (C)", form: 87, country: "IND", jersey: 45 },
  { name: "Shubman Gill", role: "Batsman", form: 91, country: "IND", jersey: 77 },
  { name: "Virat Kohli", role: "Batsman (VC)", form: 95, country: "IND", jersey: 18 },
  { name: "Suryakumar Yadav", role: "Batsman", form: 93, country: "IND", jersey: 63 },
  { name: "Hardik Pandya", role: "All-Rounder", form: 84, country: "IND", jersey: 228 },
  { name: "Rishabh Pant", role: "WK-Batsman", form: 88, country: "IND", jersey: 17 },
  { name: "Ravindra Jadeja", role: "All-Rounder", form: 82, country: "IND", jersey: 8 },
  { name: "Jasprit Bumrah", role: "Bowler", form: 97, country: "IND", jersey: 93 },
  { name: "Mohammed Shami", role: "Bowler", form: 85, country: "IND", jersey: 11 },
  { name: "Yuzvendra Chahal", role: "Bowler (Spin)", form: 80, country: "IND", jersey: 3 },
  { name: "Arshdeep Singh", role: "Bowler", form: 83, country: "IND", jersey: 2 },
];

const datasets = [
  { name: "IPL 2024 Complete Stats", source: "ESPN Cricinfo", records: "84,230", status: "Active", size: "142 MB" },
  { name: "T20 World Cup 2024", source: "ICC Official", records: "32,540", status: "Active", size: "56 MB" },
  { name: "PSL Season 9 Data", source: "PCB / Cricbuzz", records: "28,100", status: "Processing", size: "48 MB" },
  { name: "BBL 2023-24 Season", source: "Cricket Australia", records: "19,870", status: "Active", size: "34 MB" },
  { name: "Test Match Archive (10yr)", source: "Kaggle", records: "210,000", status: "Active", size: "890 MB" },
  { name: "Player Biometric Data", source: "Internal", records: "4,200", status: "Pending", size: "12 MB" },
];

const overLog = [
  { over: 16, score: "145/6", runs: 9, event: "Dot ball, boundary, single, wicket", recommendation: "Bring back Bumrah — his yorker avg vs LHB is 78% dot rate" },
  { over: 15, score: "136/5", runs: 7, event: "Two boundaries, 3 dots", recommendation: "Maintain spin from pavilion end — pitch taking turn" },
  { over: 14, score: "129/5", runs: 12, event: "Sixer, boundary, 2 singles", recommendation: "Field restriction: extra cover deeper for SKY matchup" },
  { over: 13, score: "117/5", runs: 8, event: "Wicket (caught at mid-on), 2 boundaries", recommendation: "Pressure delivery: back-of-length outside off stump" },
];

// ── Shared Components ─────────────────────────────────────────────────────────

function GlassCard({
  children,
  className = "",
  glow = false,
  greenBorder = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  greenBorder?: boolean;
}) {
  return (
    <div
      className={`bg-white/[0.04] backdrop-blur-md rounded-2xl ${
        greenBorder ? "border border-[#6ee7f9]/20" : "border border-white/[0.08]"
      } ${glow ? "shadow-[0_0_40px_rgba(110,231,249,0.12)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  color = C.green,
  icon: Icon,
  trend,
}: {
  label: string;
  value: string;
  sub?: string;
  color?: string;
  icon?: React.ElementType;
  trend?: "up" | "down";
}) {
  return (
    <GlassCard className="p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/40 uppercase tracking-widest font-['Inter']">{label}</span>
        {Icon && (
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}18` }}>
            <Icon size={14} style={{ color }} />
          </div>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold font-['Rajdhani']" style={{ color }}>
          {value}
        </span>
        {trend && (
          <span className={`text-xs mb-1 flex items-center gap-0.5 ${trend === "up" ? "text-[#6ee7f9]" : "text-[#fb7185]"}`}>
            {trend === "up" ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          </span>
        )}
      </div>
      {sub && <span className="text-xs text-white/40 font-['Inter']">{sub}</span>}
    </GlassCard>
  );
}

function ConfidenceBar({ value, color = C.green, label }: { value: number; color?: string; label?: string }) {
  return (
    <div className="w-full">
      {label && <div className="flex justify-between mb-1.5">
        <span className="text-xs text-white/50 font-['Inter']">{label}</span>
        <span className="text-xs font-mono font-['JetBrains_Mono']" style={{ color }}>{value}%</span>
      </div>}
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  );
}

function Badge({ children, color = C.green }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-['Rajdhani']"
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
      {children}
    </span>
  );
}

function NavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 font-['Rajdhani'] font-semibold tracking-wide ${
        active
          ? "bg-[#6ee7f9]/10 text-[#6ee7f9] shadow-[0_0_20px_rgba(110,231,249,0.08)]"
          : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
      }`}
    >
      <Icon size={16} className={active ? "text-[#6ee7f9]" : "text-white/30"} />
      {label}
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6ee7f9]" />}
    </button>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "bowler", label: "Bowler Recommendation", icon: Target },
  { id: "batting", label: "Batting Strategy", icon: TrendingUp },
  { id: "players", label: "Player Selection", icon: Users },
  { id: "pitch", label: "Pitch Analysis", icon: MapPin },
  { id: "strategy", label: "Match Strategy", icon: Shield },
  { id: "realtime", label: "Real-Time Engine", icon: Activity },
  { id: "probability", label: "Win Probability", icon: BarChart2 },
  { id: "weakness", label: "Weakness Detection", icon: AlertTriangle },
  { id: "dataset", label: "Dataset Management", icon: Database },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "settings", label: "Settings", icon: Settings },
];

function Sidebar({ page, setPage, mobile, onClose }: {
  page: string;
  setPage: (p: string) => void;
  mobile?: boolean;
  onClose?: () => void;
}) {
  return (
    <aside className={`flex flex-col h-full bg-[#0e172a] border-r border-[#6ee7f9]/10 ${mobile ? "w-72" : "w-64"}`}>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/[0.06]">
        <div className="w-9 h-9 rounded-xl bg-[#6ee7f9]/10 border border-[#6ee7f9]/30 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border-2 border-[#6ee7f9] relative">
            <div className="absolute inset-0.5 rounded-full bg-[#6ee7f9]/40" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-white font-['Rajdhani'] tracking-wide leading-none">CricVision</div>
          <div className="text-[10px] text-[#6ee7f9] font-['JetBrains_Mono'] mt-0.5">AI ENGINE v2.4</div>
        </div>
        {mobile && (
          <button onClick={onClose} className="ml-auto text-white/40 hover:text-white">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Live badge */}
      <div className="mx-4 mt-4 mb-2 bg-[#6ee7f9]/5 border border-[#6ee7f9]/15 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6ee7f9] animate-pulse" />
          <span className="text-[10px] text-[#6ee7f9] font-bold font-['JetBrains_Mono'] uppercase">Live Match</span>
        </div>
        <div className="text-xs text-white/80 font-['Rajdhani'] font-semibold">IND vs PAK — T20</div>
        <div className="text-[10px] text-white/40 font-['Inter'] mt-0.5">Over 16.2 | PAK: 145/6</div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={page === item.id}
            onClick={() => { setPage(item.id); onClose?.(); }}
          />
        ))}
      </nav>

      {/* User footer */}
      <div className="px-3 py-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.04] cursor-pointer transition-all">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6ee7f9] to-[#8b5cf6] flex items-center justify-center text-black text-xs font-bold font-['Rajdhani']">
            AA
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white font-['Rajdhani'] leading-none">Asif Ahmed</div>
            <div className="text-[10px] text-white/40 font-['Inter'] mt-0.5">Head Analyst</div>
          </div>
          <LogOut size={14} className="text-white/30 hover:text-[#fb7185] transition-colors" />
        </div>
      </div>
    </aside>
  );
}

// ── Landing Page ───────────────────────────────────────────────────────────────

function LandingPage({ setPage }: { setPage: (p: string) => void }) {
  const features = [
    { icon: Cpu, title: "AI Decision Engine", desc: "ML models trained on 10M+ historical deliveries recommend optimal tactics in real time.", color: C.green },
    { icon: Target, title: "Bowler Recommendation", desc: "Match bowler to batsman based on pitch, phase, pressure, and historical matchup data.", color: C.blue },
    { icon: TrendingUp, title: "Win Probability", desc: "Dynamic probability curves updated ball-by-ball using match context and situational variables.", color: C.gold },
    { icon: Users, title: "Smart XI Selection", desc: "AI-curated playing XI suggestions based on pitch, opponent weaknesses, and recent form.", color: C.purple },
    { icon: MapPin, title: "Pitch Intelligence", desc: "Venue-specific historical analysis of surface behavior, scoring patterns, and conditions.", color: C.orange },
    { icon: AlertTriangle, title: "Weakness Detection", desc: "Identify batting and bowling vulnerabilities through pattern recognition across thousands of matches.", color: C.red },
  ];

  const steps = [
    { num: "01", title: "Feed Match Data", desc: "Input live or historical match data — player stats, pitch conditions, venue, match phase.", icon: Database },
    { num: "02", title: "AI Processes Context", desc: "Our ML engine cross-references 15+ variables against a trained dataset of 500,000+ deliveries.", icon: Cpu },
    { num: "03", title: "Recommendation Generated", desc: "Receive ranked, confidence-scored strategy recommendations with reasoning in plain English.", icon: Zap },
    { num: "04", title: "Decision & Execution", desc: "Captain and coaches act on AI-supported insights with real-time adjustments after every over.", icon: CheckCircle },
  ];

  const comparisons = [
    { feature: "Real-time AI Recommendations", cricvision: true, traditional: false, cricviz: "partial" },
    { feature: "Bowler vs Batsman Matchup AI", cricvision: true, traditional: false, cricviz: true },
    { feature: "Pitch Condition Intelligence", cricvision: true, traditional: false, cricviz: "partial" },
    { feature: "Playing XI Optimization", cricvision: true, traditional: false, cricviz: false },
    { feature: "Death Over Strategy Engine", cricvision: true, traditional: false, cricviz: "partial" },
    { feature: "Weakness Pattern Detection", cricvision: true, traditional: false, cricviz: true },
    { feature: "Multi-Format Support (T20/ODI/Test)", cricvision: true, traditional: true, cricviz: true },
  ];

  return (
    <div className="min-h-screen bg-[#060816] overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#060816]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#6ee7f9]/10 border border-[#6ee7f9]/30 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#6ee7f9]" />
            </div>
            <span className="text-lg font-bold text-white font-['Rajdhani'] tracking-wide">CricVision AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'How It Works', 'Comparison', 'Pricing'].map((l) => (
              <button
                key={l}
                onClick={() => (l === 'Pricing' ? setPage('pricing') : undefined)}
                className="text-sm text-white/50 hover:text-white transition-colors font-['Inter']"
              >
                {l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setPage("login")} className="text-sm text-white/60 hover:text-white font-['Rajdhani'] font-semibold transition-colors px-4 py-2">
              Sign In
            </button>
            <button onClick={() => setPage("dashboard")} className="text-sm font-bold px-5 py-2.5 rounded-xl bg-[#6ee7f9] text-black hover:bg-[#6ee7f9]/90 transition-all hover:shadow-[0_0_20px_rgba(110,231,249,0.4)] font-['Rajdhani']">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative min-h-screen flex items-center pt-16">
        {/* Background layers */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop&auto=format"
            alt="Cricket stadium"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060816]/60 via-[#060816]/80 to-[#060816]" />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 30% 40%, rgba(139,92,246,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(110,231,249,0.08) 0%, transparent 50%)"
          }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6ee7f9]/8 border border-[#6ee7f9]/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6ee7f9] animate-pulse" />
              <span className="text-xs text-[#6ee7f9] font-bold font-['JetBrains_Mono'] uppercase tracking-widest">AI Engine Active — v2.4.1</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-none font-['Rajdhani']">
              CricVision AI
              <span className="block text-[#6ee7f9]" style={{ textShadow: "0 0 40px rgba(110,231,249,0.5)" }}>
                Intelligent Cricket
              </span>
              Decision Support
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-10 max-w-xl font-['Inter']">
              Harness the power of machine learning, historical cricket datasets, real-time pitch analysis, and contextual match intelligence to make smarter, faster, and more confident cricket decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setPage("dashboard")} className="flex items-center gap-2 bg-[#6ee7f9] text-black font-bold px-7 py-3.5 rounded-xl hover:bg-[#6ee7f9]/90 transition-all hover:shadow-[0_0_30px_rgba(110,231,249,0.4)] font-['Rajdhani'] text-base">
                Start Analysis <ArrowRight size={16} />
              </button>
              <button onClick={() => setPage("dashboard")} className="flex items-center gap-2 bg-white/5 border border-white/15 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all font-['Rajdhani'] text-base">
                View Dashboard
              </button>
              <button className="flex items-center gap-2 border border-[#8b5cf6]/30 text-[#8b5cf6] font-bold px-7 py-3.5 rounded-xl hover:bg-[#8b5cf6]/8 transition-all font-['Rajdhani'] text-base">
                Explore Features
              </button>
            </div>
          </div>

          {/* Right: Mock dashboard card */}
          <div className="hidden lg:block">
            <GlassCard className="p-6" glow greenBorder>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-wider mb-1">Live AI Recommendation</div>
                  <div className="text-lg font-bold text-white font-['Rajdhani']">Over 16 — Death Overs</div>
                </div>
                <Badge color={C.green}>LIVE</Badge>
              </div>
              <div className="bg-[#6ee7f9]/5 border border-[#6ee7f9]/15 rounded-xl p-4 mb-4">
                <div className="text-xs text-[#6ee7f9] font-['JetBrains_Mono'] uppercase mb-2">Recommended Bowler</div>
                <div className="text-2xl font-bold text-white font-['Rajdhani']">Jasprit Bumrah</div>
                <div className="text-sm text-white/50 font-['Inter'] mt-1">Yorker specialist — 82% dot ball rate vs LHBs in death overs</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { l: "Economy", v: "5.8" },
                  { l: "Dot Ball %", v: "42%" },
                  { l: "Dismissals", v: "8" },
                ].map((s) => (
                  <div key={s.l} className="bg-white/[0.04] rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#8b5cf6] font-['Rajdhani']">{s.v}</div>
                    <div className="text-[10px] text-white/40 font-['Inter']">{s.l}</div>
                  </div>
                ))}
              </div>
              <ConfidenceBar value={94} label="AI Confidence Score" />
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-y border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "10M+", l: "Deliveries Analyzed" },
            { v: "94.7%", l: "Prediction Accuracy" },
            { v: "50+", l: "International Teams" },
            { v: "12", l: "Countries Active" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl font-bold text-[#6ee7f9] font-['Rajdhani'] mb-1" style={{ textShadow: "0 0 20px rgba(110,231,249,0.3)" }}>
                {s.v}
              </div>
              <div className="text-sm text-white/40 font-['Inter']">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-xs text-[#8b5cf6] font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Core Capabilities</div>
          <h2 className="text-4xl font-bold text-white font-['Rajdhani'] mb-4">Why CricVision AI?</h2>
          <p className="text-white/50 max-w-xl mx-auto font-['Inter'] text-sm leading-relaxed">
            Built for cricket professionals who demand precision. Every recommendation is backed by statistical evidence and contextual intelligence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-6 group hover:border-white/15 transition-all duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: `${f.color}12`, border: `1px solid ${f.color}25` }}>
                <f.icon size={20} style={{ color: f.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Rajdhani']">{f.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed font-['Inter']">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="relative py-24 border-y border-white/[0.04]" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(110,231,249,0.03) 0%, transparent 70%)"
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs text-[#6ee7f9] font-['JetBrains_Mono'] uppercase tracking-widest mb-4">The Process</div>
            <h2 className="text-4xl font-bold text-white font-['Rajdhani']">How CricVision Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-[#6ee7f9]/30 to-transparent z-10" />
                )}
                <GlassCard className="p-6 text-center">
                  <div className="text-5xl font-black font-['Rajdhani'] text-[#6ee7f9]/10 mb-3">{s.num}</div>
                  <div className="w-12 h-12 rounded-xl bg-[#6ee7f9]/8 border border-[#6ee7f9]/20 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={20} className="text-[#6ee7f9]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-['Rajdhani']">{s.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed font-['Inter']">{s.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-xs text-[#fbbf24] font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Competitive Edge</div>
          <h2 className="text-4xl font-bold text-white font-['Rajdhani']">How We Compare</h2>
        </div>
        <GlassCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-5 text-sm text-white/40 font-['Inter'] font-normal">Feature</th>
                  <th className="text-center p-5 text-sm font-bold text-[#6ee7f9] font-['Rajdhani']">CricVision AI</th>
                  <th className="text-center p-5 text-sm text-white/40 font-['Inter'] font-normal">Traditional</th>
                  <th className="text-center p-5 text-sm text-white/40 font-['Inter'] font-normal">CricViz</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="p-5 text-sm text-white/60 font-['Inter']">{row.feature}</td>
                    {[row.cricvision, row.traditional, row.cricviz].map((val, j) => (
                      <td key={j} className="p-5 text-center">
                        {val === true ? (
                          <CheckCircle size={16} className="text-[#6ee7f9] mx-auto" />
                        ) : val === false ? (
                          <X size={16} className="text-[#fb7185] mx-auto opacity-50" />
                        ) : (
                          <div className="text-[#fbbf24] text-xs font-['JetBrains_Mono'] mx-auto text-center">Partial</div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden p-12 text-center border border-[#6ee7f9]/20" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(110,231,249,0.12) 0%, rgba(2,12,24,0.8) 60%)"
        }}>
          <div className="text-xs text-[#6ee7f9] font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Ready to play smarter?</div>
          <h2 className="text-4xl font-bold text-white mb-4 font-['Rajdhani']">Start your AI-Powered<br />Cricket Journey Today</h2>
          <p className="text-white/50 mb-8 font-['Inter'] text-sm">Join 50+ international teams using CricVision AI to gain a competitive edge.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => setPage("dashboard")} className="bg-[#6ee7f9] text-black font-bold px-8 py-3.5 rounded-xl hover:bg-[#6ee7f9]/90 transition-all hover:shadow-[0_0_30px_rgba(110,231,249,0.4)] font-['Rajdhani'] text-base">
              Launch Dashboard
            </button>
            <button onClick={() => setPage("login")} className="bg-white/5 border border-white/15 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all font-['Rajdhani'] text-base">
              Create Free Account
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/30 font-['Inter']">© 2025 CricVision AI. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact", "API"].map((l) => (
              <button key={l} className="text-sm text-white/30 hover:text-white/60 transition-colors font-['Inter']">{l}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Pricing Page ─────────────────────────────────────────────────────────────

function PricingPage({ setPage }: { setPage: (p: string) => void }) {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "For individual analysts and student projects.",
      highlight: false,
      features: ["Live match dashboard", "3 AI strategy snapshots/day", "Pitch intelligence summaries", "Basic export reports"],
      cta: "Start Free Trial",
    },
    {
      name: "Pro",
      price: "$79",
      description: "For serious teams wanting deeper insights and automation.",
      highlight: true,
      features: ["Unlimited AI recommendations", "Advanced matchup analysis", "Scenario planning", "Priority support"],
      cta: "Choose Pro",
    },
    {
      name: "Elite",
      price: "Custom",
      description: "For clubs and broadcasters with dedicated support needs.",
      highlight: false,
      features: ["Custom integrations", "White-label dashboards", "Dedicated analyst workspace", "24/7 enterprise support"],
      cta: "Book Demo",
    },
  ];

  return (
    <div className="min-h-screen bg-[#060816] overflow-x-hidden">
      <nav className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#060816]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => setPage("landing")} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#6ee7f9]/10 border border-[#6ee7f9]/30 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#6ee7f9]" />
            </div>
            <span className="text-lg font-bold text-white font-['Rajdhani'] tracking-wide">CricVision AI</span>
          </button>
          <button onClick={() => setPage("login")} className="text-sm text-white/60 hover:text-white font-['Rajdhani'] font-semibold transition-colors px-4 py-2">
            Sign In
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#6ee7f9]/8 border border-[#6ee7f9]/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6ee7f9] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6ee7f9]">Flexible plans</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-['Rajdhani'] mb-4">Choose the intelligence layer that fits your team.</h1>
          <p className="text-lg text-white/60 font-['Inter'] leading-8">From student analysts to elite cricket operations, CricVision brings real-time strategy guidance, pitch insight, and predictive clarity into one elegant workspace.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <GlassCard key={plan.name} className={`p-8 ${plan.highlight ? "border-[#6ee7f9]/30 shadow-[0_0_35px_rgba(110,231,249,0.12)]" : ""}`} greenBorder={plan.highlight}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white font-['Rajdhani']">{plan.name}</h2>
                {plan.highlight && <span className="text-[10px] uppercase tracking-[0.3em] text-[#6ee7f9] font-bold">Most Popular</span>}
              </div>
              <p className="text-sm text-white/50 font-['Inter'] mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white font-['Rajdhani']">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-white/40 ml-2">/ month</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/70 font-['Inter']">
                    <CheckCircle size={16} className="text-[#6ee7f9] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full rounded-xl px-4 py-3 font-semibold font-['Rajdhani'] transition-all ${plan.highlight ? "bg-[#6ee7f9] text-black hover:bg-[#6ee7f9]/90" : "bg-white/5 text-white hover:bg-white/10"}`}>
                {plan.cta}
              </button>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <GlassCard className="p-8" greenBorder>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
                <Zap size={18} className="text-[#8b5cf6]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#8b5cf6] font-bold">Why teams switch</div>
                <h3 className="text-xl font-bold text-white font-['Rajdhani']">Revenue-ready insights in minutes</h3>
              </div>
            </div>
            <p className="text-sm text-white/60 font-['Inter'] leading-7">CricVision turns raw match data into decisions your coaching staff can trust. The platform combines predictive modelling, visual analytics, and strategy guidance into a single experience built for fast-moving games.</p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-[#6ee7f9] font-bold mb-4">Included with every plan</div>
            <div className="space-y-4 text-sm text-white/70 font-['Inter']">
              <div className="flex items-center gap-3"><Shield size={16} className="text-[#6ee7f9]" /><span>Secure match data handling</span></div>
              <div className="flex items-center gap-3"><Database size={16} className="text-[#6ee7f9]" /><span>Historical dataset access</span></div>
              <div className="flex items-center gap-3"><Star size={16} className="text-[#6ee7f9]" /><span>Weekly strategy insight briefings</span></div>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}

// ── Auth Pages ─────────────────────────────────────────────────────────────────

function AuthPage({ type, setPage }: { type: "login" | "signup" | "forgot"; setPage: (p: string) => void }) {
  return (
    <div className="min-h-screen bg-[#060816] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 30% 50%, rgba(139,92,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(110,231,249,0.06) 0%, transparent 50%)"
      }} />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 cursor-pointer" onClick={() => setPage("landing")}>
            <div className="w-8 h-8 rounded-lg bg-[#6ee7f9]/10 border border-[#6ee7f9]/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border-2 border-[#6ee7f9]" />
            </div>
            <span className="text-base font-bold text-white font-['Rajdhani']">CricVision AI</span>
          </div>
          <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-2">
            {type === "login" ? "Welcome Back" : type === "signup" ? "Create Account" : "Reset Password"}
          </h2>
          <p className="text-sm text-white/40 font-['Inter']">
            {type === "login" ? "Sign in to your analytics dashboard" : type === "signup" ? "Join 50+ teams using AI-powered cricket analytics" : "Enter your email to receive reset instructions"}
          </p>
        </div>

        <GlassCard className="p-8" greenBorder>
          <div className="space-y-5">
            {type === "signup" && (
              <div>
                <label className="block text-xs text-white/50 mb-2 font-['Inter']">Full Name</label>
                <div className="relative">
                  <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input type="text" placeholder="Babar Azam" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#6ee7f9]/40 transition-colors font-['Inter']" />
                </div>
              </div>
            )}
            <div>
              <label className="block text-xs text-white/50 mb-2 font-['Inter']">Email Address</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input type="email" placeholder="captain@cricket.ai" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#6ee7f9]/40 transition-colors font-['Inter']" />
              </div>
            </div>
            {type !== "forgot" && (
              <div>
                <label className="block text-xs text-white/50 mb-2 font-['Inter']">Password</label>
                <div className="relative">
                  <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input type="password" placeholder="••••••••••" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#6ee7f9]/40 transition-colors font-['Inter']" />
                </div>
              </div>
            )}
            {type === "login" && (
              <div className="flex justify-end">
                <button onClick={() => setPage("forgot")} className="text-xs text-[#8b5cf6] hover:text-[#6ee7f9] transition-colors font-['Inter']">
                  Forgot password?
                </button>
              </div>
            )}
            <button onClick={() => setPage("dashboard")} className="w-full bg-[#6ee7f9] text-black font-bold py-3.5 rounded-xl hover:bg-[#6ee7f9]/90 transition-all hover:shadow-[0_0_20px_rgba(110,231,249,0.4)] font-['Rajdhani'] text-base">
              {type === "login" ? "Sign In" : type === "signup" ? "Create Account" : "Send Reset Link"}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.06] text-center text-sm text-white/40 font-['Inter']">
            {type === "login" ? (
              <>Don&apos;t have an account?{" "}
                <button onClick={() => setPage("signup")} className="text-[#6ee7f9] hover:underline font-semibold">Sign up free</button>
              </>
            ) : (
              <>Already have an account?{" "}
                <button onClick={() => setPage("login")} className="text-[#6ee7f9] hover:underline font-semibold">Sign in</button>
              </>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function Dashboard() {
  const alerts = [
    { time: "Over 16.2", text: "Bring Bumrah back — batsman weak against yorkers at death", type: "action" },
    { time: "Over 16.1", text: "PAK win probability dropped to 30% after Rizwan wicket", type: "info" },
    { time: "Over 15", text: "Pitch showing spin — Chahal from pavilion end recommended", type: "action" },
  ];

  return (
    <div className="space-y-6">
      {/* Live match banner */}
      <div className="bg-gradient-to-r from-[#6ee7f9]/8 to-transparent border border-[#6ee7f9]/20 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6ee7f9] animate-pulse" />
            <Badge color={C.green}>LIVE</Badge>
          </div>
          <div>
            <div className="text-xl font-bold text-white font-['Rajdhani']">India vs Pakistan — ICC T20 World Cup 2024</div>
            <div className="text-sm text-white/50 font-['Inter']">Nassau County International Cricket Stadium, New York</div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-right">
          <div>
            <div className="text-2xl font-bold text-white font-['Rajdhani']">145/6</div>
            <div className="text-xs text-white/40 font-['JetBrains_Mono']">PAK | 16.2 ov</div>
          </div>
          <div className="text-white/20 text-2xl font-thin">vs</div>
          <div>
            <div className="text-2xl font-bold text-[#6ee7f9] font-['Rajdhani']">183/7</div>
            <div className="text-xs text-white/40 font-['JetBrains_Mono']">IND | 20 ov</div>
          </div>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="IND Win Probability" value="70%" color={C.green} icon={TrendingUp} trend="up" sub="Up 12% since over 14" />
        <StatCard label="Required RR" value="11.4" color={C.red} icon={Flame} trend="up" sub="PAK need 38 off 22 balls" />
        <StatCard label="Current RR" value="8.69" color={C.blue} icon={Activity} sub="PAK this innings" />
        <StatCard label="Wickets Remaining" value="4" color={C.gold} icon={AlertTriangle} sub="PAK innings" />
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Win probability chart */}
        <GlassCard className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-1">Real-Time Probability</div>
              <h3 className="text-lg font-bold text-white font-['Rajdhani']">Win Probability Curve</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-['Inter']">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#6ee7f9]" /><span className="text-white/50">IND</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#8b5cf6]" /><span className="text-white/50">PAK</span></div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={winProbData}>
              <defs>
                <linearGradient id="indGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.green} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={C.green} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="pakGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.blue} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={C.blue} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="over" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} label={{ value: "Over", position: "insideBottom", fill: "rgba(255,255,255,0.2)", fontSize: 10 }} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(110,231,249,0.2)", borderRadius: 12, fontFamily: "Inter", fontSize: 12 }} labelStyle={{ color: "rgba(255,255,255,0.5)" }} itemStyle={{ color: "#e1f0fa" }} formatter={(v: number) => [`${v}%`]} />
              <Area type="monotone" dataKey="ind" stroke={C.green} strokeWidth={2} fill="url(#indGrad)" />
              <Area type="monotone" dataKey="pak" stroke={C.blue} strokeWidth={2} fill="url(#pakGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* AI Alerts */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <Cpu size={15} className="text-[#6ee7f9]" />
            <h3 className="text-base font-bold text-white font-['Rajdhani']">AI Alerts</h3>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6ee7f9] animate-pulse" />
          </div>
          <div className="space-y-3">
            {alerts.map((a, i) => (
              <div key={i} className={`p-3.5 rounded-xl border ${a.type === "action" ? "bg-[#6ee7f9]/5 border-[#6ee7f9]/15" : "bg-[#8b5cf6]/5 border-[#8b5cf6]/15"}`}>
                <div className="text-[10px] font-['JetBrains_Mono'] mb-1" style={{ color: a.type === "action" ? C.green : C.blue }}>{a.time}</div>
                <div className="text-xs text-white/70 font-['Inter'] leading-relaxed">{a.text}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Bottom row */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Pitch conditions */}
        <GlassCard className="p-6">
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Pitch Conditions</div>
          <div className="space-y-3">
            {[
              { l: "Pace Assistance", v: 65, c: C.orange },
              { l: "Spin Grip", v: 40, c: C.purple },
              { l: "Batting Ease", v: 55, c: C.green },
              { l: "Bounce Variability", v: 70, c: C.red },
            ].map((p) => <ConfidenceBar key={p.l} label={p.l} value={p.v} color={p.c} />)}
          </div>
        </GlassCard>

        {/* Best bowler */}
        <GlassCard className="p-6" greenBorder glow>
          <div className="text-xs text-[#6ee7f9] font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Best Bowler Now</div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6ee7f9]/30 to-[#8b5cf6]/30 border border-[#6ee7f9]/30 flex items-center justify-center text-white font-bold font-['Rajdhani'] text-sm">
              JB
            </div>
            <div>
              <div className="text-lg font-bold text-white font-['Rajdhani']">Jasprit Bumrah</div>
              <div className="flex items-center gap-2 mt-0.5">
                <Badge color={C.green}>Fast Pace</Badge>
                <Badge color={C.blue}>Right Arm</Badge>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { l: "Economy", v: "5.8" },
              { l: "Dot %", v: "42%" },
              { l: "Wickets", v: "22" },
            ].map((s) => (
              <div key={s.l} className="bg-white/[0.04] rounded-lg p-2.5 text-center">
                <div className="text-base font-bold text-[#6ee7f9] font-['Rajdhani']">{s.v}</div>
                <div className="text-[10px] text-white/30 font-['Inter']">{s.l}</div>
              </div>
            ))}
          </div>
          <ConfidenceBar value={94} label="AI Confidence" />
        </GlassCard>

        {/* Batting recommendation */}
        <GlassCard className="p-6">
          <div className="text-xs text-[#fbbf24] font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Batting Strategy</div>
          <div className="bg-[#fbbf24]/5 border border-[#fbbf24]/15 rounded-xl p-4 mb-4">
            <div className="text-lg font-bold text-white font-['Rajdhani'] mb-1">Aggressive Assault</div>
            <div className="text-xs text-white/50 font-['Inter'] leading-relaxed">Target boundary every 2nd delivery. Avoid single-ball rotation. Prime bowler: Arshdeep Singh.</div>
          </div>
          <div className="space-y-2">
            {[
              { l: "Expected SR", v: "185+", c: C.green },
              { l: "Risk Level", v: "HIGH", c: C.red },
              { l: "Impact Score", v: "+22 runs", c: C.gold },
            ].map((s) => (
              <div key={s.l} className="flex justify-between items-center text-sm">
                <span className="text-white/40 font-['Inter']">{s.l}</span>
                <span className="font-bold font-['Rajdhani']" style={{ color: s.c }}>{s.v}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Player performance */}
      <div>
        <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Player Performance Cards</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {players.slice(0, 5).map((p) => (
            <GlassCard key={p.name} className="p-4 text-center hover:border-white/15 transition-all cursor-default">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white font-['Rajdhani'] mx-auto mb-3">
                {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div className="text-xs font-bold text-white font-['Rajdhani'] mb-0.5 truncate">{p.name.split(" ").slice(-1)[0]}</div>
              <div className="text-[10px] text-white/30 font-['Inter'] mb-3 truncate">{p.role}</div>
              <div className="text-lg font-black font-['Rajdhani']" style={{ color: p.form > 90 ? C.green : p.form > 80 ? C.blue : C.gold }}>{p.form}</div>
              <div className="text-[9px] text-white/25 font-['Inter']">Form Rating</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Bowler Recommendation ─────────────────────────────────────────────────────

function BowlerRecommendation() {
  const [selected, setSelected] = useState<string | null>(null);

  const bowlers = [
    { name: "Jasprit Bumrah", style: "Fast Pace", economy: 5.8, wickets: 22, dotPct: 42, dismissals: 8, confidence: 94 },
    { name: "Mohammed Shami", style: "Fast Medium", economy: 6.9, wickets: 15, dotPct: 35, dismissals: 5, confidence: 76 },
    { name: "Yuzvendra Chahal", style: "Leg Spin", economy: 7.2, wickets: 12, dotPct: 31, dismissals: 4, confidence: 58 },
  ];

  const rec = bowlers[0];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Bowler Recommendation</h2>
        <p className="text-sm text-white/40 font-['Inter']">AI-powered matchup analysis for optimal bowling selection</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Input panel */}
        <GlassCard className="lg:col-span-2 p-6 space-y-5">
          <div className="text-xs text-[#8b5cf6] font-['JetBrains_Mono'] uppercase tracking-widest">Match Parameters</div>
          {[
            { l: "Batsman at Crease", opts: ["Babar Azam (LHB)", "Mohammad Rizwan (RHB)", "Shadab Khan (RHB)", "Iftikhar Ahmed (RHB)"] },
            { l: "Pitch Type", opts: ["Pace-Friendly", "Spin-Friendly", "Batting Paradise", "Balanced"] },
            { l: "Match Phase", opts: ["Powerplay (1-6)", "Middle Overs (7-15)", "Death Overs (16-20)"] },
            { l: "Venue", opts: ["Nassau County, New York", "Eden Gardens, Kolkata", "MCG, Melbourne", "Lord's, London"] },
            { l: "Pressure Level", opts: ["Low", "Medium", "High", "Super Over"] },
          ].map((f) => (
            <div key={f.l}>
              <label className="block text-xs text-white/40 mb-2 font-['Inter'] uppercase tracking-widest">{f.l}</label>
              <select className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#6ee7f9]/40 transition-colors font-['Inter'] appearance-none">
                {f.opts.map((o) => <option key={o} value={o} className="bg-[#071225]">{o}</option>)}
              </select>
            </div>
          ))}
          <button className="w-full bg-[#6ee7f9] text-black font-bold py-3 rounded-xl hover:bg-[#6ee7f9]/90 transition-all hover:shadow-[0_0_20px_rgba(110,231,249,0.4)] font-['Rajdhani'] text-base flex items-center justify-center gap-2">
            <Cpu size={16} /> Generate Recommendation
          </button>
        </GlassCard>

        {/* Results panel */}
        <div className="lg:col-span-3 space-y-5">
          {/* Top recommendation */}
          <GlassCard className="p-6" greenBorder glow>
            <div className="flex items-center gap-2 mb-5">
              <Award size={16} className="text-[#fbbf24]" />
              <span className="text-xs text-[#fbbf24] font-['JetBrains_Mono'] uppercase tracking-widest">Top Recommendation</span>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6ee7f9]/20 to-[#8b5cf6]/10 border border-[#6ee7f9]/25 flex items-center justify-center text-xl font-bold text-white font-['Rajdhani'] flex-shrink-0">
                JB
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-white font-['Rajdhani'] mb-1">{rec.name}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge color={C.green}>{rec.style}</Badge>
                  <Badge color={C.blue}>Right Arm</Badge>
                  <Badge color={C.gold}>Death Specialist</Badge>
                </div>
                <p className="text-sm text-white/55 font-['Inter'] leading-relaxed">
                  Historically dominant vs LHBs in death overs with an 82% dot ball rate using toe-crushing yorkers. Batsman Babar Azam averages just 14 against Bumrah in T20 internationals.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { l: "Economy Rate", v: `${rec.economy}`, c: C.green },
              { l: "Wickets", v: `${rec.wickets}`, c: C.blue },
              { l: "Dot Ball %", v: `${rec.dotPct}%`, c: C.gold },
              { l: "Dismissals", v: `${rec.dismissals}`, c: C.purple },
            ].map((s) => (
              <GlassCard key={s.l} className="p-4 text-center">
                <div className="text-2xl font-bold font-['Rajdhani'] mb-1" style={{ color: s.c }}>{s.v}</div>
                <div className="text-[10px] text-white/35 font-['Inter'] uppercase tracking-wide">{s.l}</div>
              </GlassCard>
            ))}
          </div>

          {/* Confidence + all bowlers */}
          <GlassCard className="p-6">
            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white font-['Rajdhani'] font-semibold">AI Confidence Score</span>
                <span className="text-2xl font-black text-[#6ee7f9] font-['Rajdhani']">{rec.confidence}%</span>
              </div>
              <ConfidenceBar value={rec.confidence} />
            </div>
            <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">All Bowler Rankings</div>
            <div className="space-y-3">
              {bowlers.map((b, i) => (
                <div key={b.name} className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${selected === b.name ? "bg-[#6ee7f9]/8 border border-[#6ee7f9]/20" : "hover:bg-white/[0.03]"}`}
                  onClick={() => setSelected(b.name === selected ? null : b.name)}>
                  <div className="text-lg font-black font-['Rajdhani'] w-6 text-center" style={{ color: i === 0 ? C.gold : "rgba(255,255,255,0.2)" }}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white font-['Rajdhani']">{b.name}</div>
                    <div className="text-xs text-white/40 font-['Inter']">{b.style}</div>
                  </div>
                  <div className="text-sm font-bold font-['Rajdhani']" style={{ color: b.confidence > 80 ? C.green : b.confidence > 60 ? C.gold : C.red }}>
                    {b.confidence}%
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

// ── Batting Strategy ───────────────────────────────────────────────────────────

function BattingStrategy() {
  const [strategy, setStrategy] = useState("aggressive");

  const strategies: Record<string, { title: string; desc: string; sr: string; risk: string; impact: string; color: string; tips: string[] }> = {
    aggressive: {
      title: "Aggressive Assault",
      desc: "Maximize boundary hitting. Target 185+ SR. Attack width balls with cover drives and pull shots.",
      sr: "185–210",
      risk: "High",
      impact: "+22 runs / 4 overs",
      color: C.red,
      tips: ["Target Arshdeep Singh (9.1 econ)", "Sweep Shadab on first ball", "Use the crease depth for pace"],
    },
    rotation: {
      title: "Strike Rotation",
      desc: "Rotate strike every 2 balls. Find gaps. Build pressure with consistent singles and twos.",
      sr: "130–145",
      risk: "Low",
      impact: "+14 runs / 4 overs",
      color: C.blue,
      tips: ["Push to covers off pace", "Nudge fine leg vs spin", "Manufacture runs in singles"],
    },
    safe: {
      title: "Safe Consolidation",
      desc: "Preserve wickets. Target 130 SR. Avoid risk shots for 2 overs, then escalate.",
      sr: "120–135",
      risk: "Very Low",
      impact: "+8 runs / 4 overs",
      color: C.gold,
      tips: ["Defend straight balls", "Wait for half-volleys", "Set up acceleration post over 18"],
    },
    powerplay: {
      title: "Powerplay Attack",
      desc: "Maximise fielding restriction. Drive off front foot aggressively. Target 55+ in PP6.",
      sr: "175–200",
      risk: "Medium",
      impact: "+18 runs in PP",
      color: C.green,
      tips: ["Extra cover is up — drive straight", "Flick wrists on short mid-on balls", "Target the bowler with most wides"],
    },
    death: {
      title: "Death Hitting",
      desc: "Maximize last 4 overs. Pre-meditate sixes. Target yorker zones and wide balls.",
      sr: "200–240",
      risk: "Very High",
      impact: "+28 runs / 4 overs",
      color: C.orange,
      tips: ["Scoop over fine leg vs yorkers", "Helicopter shot on slower balls", "Back away and play through offside"],
    },
  };

  const strat = strategies[strategy];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Batting Strategy</h2>
        <p className="text-sm text-white/40 font-['Inter']">AI-recommended batting approach based on match context</p>
      </div>

      {/* Strategy selector */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(strategies).map(([key, s]) => (
          <button
            key={key}
            onClick={() => setStrategy(key)}
            className={`px-5 py-2.5 rounded-xl font-bold font-['Rajdhani'] text-sm transition-all ${strategy === key ? "text-black" : "text-white/50 bg-white/[0.04] border border-white/10 hover:text-white"}`}
            style={strategy === key ? { background: s.color, boxShadow: `0 0 20px ${s.color}50` } : {}}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Batsman card */}
        <GlassCard className="p-6">
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Current Batsman</div>
          <div className="text-center mb-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6ee7f9]/20 to-[#8b5cf6]/10 border border-[#6ee7f9]/25 flex items-center justify-center text-xl font-bold text-white font-['Rajdhani'] mx-auto mb-3">
              SKY
            </div>
            <div className="text-xl font-bold text-white font-['Rajdhani']">Suryakumar Yadav</div>
            <div className="flex justify-center gap-2 mt-1">
              <Badge color={C.blue}>RHB</Badge>
              <Badge color={C.gold}>360° Batter</Badge>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { l: "Current Form", v: 93, c: C.green },
              { l: "vs Pace", v: 88, c: C.blue },
              { l: "vs Spin", v: 79, c: C.gold },
              { l: "Death SR", v: 95, c: C.orange },
            ].map((s) => <ConfidenceBar key={s.l} label={s.l} value={s.v} color={s.c} />)}
          </div>
        </GlassCard>

        {/* Main recommendation */}
        <GlassCard className="p-6" glow>
          <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest mb-4" style={{ color: strat.color }}>
            Recommended Approach
          </div>
          <div className="text-2xl font-bold text-white font-['Rajdhani'] mb-3">{strat.title}</div>
          <p className="text-sm text-white/55 font-['Inter'] leading-relaxed mb-6">{strat.desc}</p>

          <div className="space-y-3 mb-6">
            {[
              { l: "Expected Strike Rate", v: strat.sr },
              { l: "Risk Level", v: strat.risk },
              { l: "Expected Impact", v: strat.impact },
            ].map((s) => (
              <div key={s.l} className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                <span className="text-sm text-white/40 font-['Inter']">{s.l}</span>
                <span className="text-sm font-bold font-['Rajdhani']" style={{ color: strat.color }}>{s.v}</span>
              </div>
            ))}
          </div>

          {/* Risk meter */}
          <div className="bg-white/[0.03] rounded-xl p-4">
            <div className="text-xs text-white/30 font-['Inter'] mb-2 uppercase tracking-widest">Risk Meter</div>
            <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden relative">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: strat.risk === "Very Low" ? "15%" : strat.risk === "Low" ? "30%" : strat.risk === "Medium" ? "50%" : strat.risk === "High" ? "75%" : "95%",
                  background: `linear-gradient(90deg, ${C.green}, ${strat.color})`
                }}
              />
            </div>
            <div className="flex justify-between mt-1 text-[9px] text-white/20 font-['JetBrains_Mono']">
              <span>SAFE</span><span>MODERATE</span><span>EXTREME</span>
            </div>
          </div>
        </GlassCard>

        {/* Tips */}
        <GlassCard className="p-6">
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Tactical Tips</div>
          <div className="space-y-3">
            {strat.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.03] rounded-xl">
                <div className="w-5 h-5 rounded-full border border-[#6ee7f9]/30 flex items-center justify-center text-[10px] font-bold text-[#6ee7f9] font-['JetBrains_Mono'] flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-white/60 font-['Inter'] leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 bg-[#fbbf24]/5 border border-[#fbbf24]/15 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Info size={12} className="text-[#fbbf24]" />
              <span className="text-xs text-[#fbbf24] font-['JetBrains_Mono'] uppercase">Weakness Alert</span>
            </div>
            <p className="text-xs text-white/50 font-['Inter'] leading-relaxed">
              SKY averages 14 vs back-of-length deliveries outside off. Bowlers may set this trap — anticipate and ramp over fine leg.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

// ── Player Selection ───────────────────────────────────────────────────────────

function PlayerSelection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Smart Playing XI</h2>
        <p className="text-sm text-white/40 font-['Inter']">AI-optimized team selection based on current conditions</p>
      </div>

      {/* Filters */}
      <GlassCard className="p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "Pitch Condition", opts: ["Pace-Friendly", "Spin-Friendly", "Batting"] },
            { l: "Opponent", opts: ["Pakistan", "Australia", "England", "South Africa"] },
            { l: "Format", opts: ["T20I", "ODI", "Test"] },
            { l: "Priority", opts: ["Balance", "Batting Heavy", "Bowling Heavy"] },
          ].map((f) => (
            <div key={f.l}>
              <label className="block text-[10px] text-white/35 mb-1.5 font-['Inter'] uppercase tracking-widest">{f.l}</label>
              <select className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6ee7f9]/40 font-['Inter'] appearance-none">
                {f.opts.map((o) => <option key={o} className="bg-[#071225]">{o}</option>)}
              </select>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* AI summary */}
      <GlassCard className="p-5 border-[#6ee7f9]/20 border" glow>
        <div className="flex items-center gap-3">
          <Cpu size={16} className="text-[#6ee7f9]" />
          <div>
            <div className="text-sm font-bold text-white font-['Rajdhani']">AI Selection Rationale</div>
            <p className="text-xs text-white/50 font-['Inter'] mt-0.5">
              Pace-friendly pitch at Nassau County → extra fast bowler (Arshdeep over Axar Patel). SKY retained for 360° hitting in death. Jadeja provides spin + lower-order batting depth.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* XI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {players.map((p, i) => (
          <GlassCard key={p.name} className="p-4 hover:border-white/15 transition-all group cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center font-bold text-white font-['Rajdhani']">
                  {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0e172a] border border-white/10 flex items-center justify-center text-[9px] font-mono font-bold text-white/50">
                  {p.jersey}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white font-['Rajdhani'] truncate">{p.name}</div>
                <div className="text-[10px] text-white/40 font-['Inter']">{p.role}</div>
              </div>
              <div className="text-xl font-black font-['Rajdhani']" style={{ color: p.form > 90 ? C.green : p.form > 80 ? C.blue : C.gold }}>
                {p.form}
              </div>
            </div>
            <ConfidenceBar value={p.form} color={p.form > 90 ? C.green : p.form > 80 ? C.blue : C.gold} />
            <div className="flex justify-between items-center mt-3">
              <Badge color={p.form > 90 ? C.green : p.form > 80 ? C.blue : C.gold}>
                {p.form > 90 ? "Peak Form" : p.form > 80 ? "Good Form" : "Average"}
              </Badge>
              <span className="text-[10px] text-white/25 font-['JetBrains_Mono']">#{i + 1} XI</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

// ── Pitch Analysis ─────────────────────────────────────────────────────────────

function PitchAnalysis() {
  const [pitchType, setPitchType] = useState("pace");

  const pitches: Record<string, { title: string; avgScore: string; topWicket: string; desc: string; color: string; suggestions: string[] }> = {
    pace: {
      title: "Pace-Friendly",
      avgScore: "172/7",
      topWicket: "Caught Behind (34%)",
      desc: "Hard, true surface with consistent bounce. Seam movement off the deck in first 6 overs. Death overs quicken.",
      color: C.orange,
      suggestions: ["Open with pace attack", "Back-of-length outside off stump", "Keep spin for overs 8–14 only", "Deep square leg and fine leg for LHBs"],
    },
    spin: {
      title: "Spin-Friendly",
      avgScore: "148/8",
      topWicket: "Stumped (28%)",
      desc: "Low, slow surface gripping turn. Ball stays low. Footwork issues create stumping opportunities.",
      color: C.purple,
      suggestions: ["Deploy spinners from over 4", "Toss: bat second to exploit worn surface", "Close inner ring for bat-pad catches", "Use pace bowler to break partnership only"],
    },
    batting: {
      title: "Batting Paradise",
      avgScore: "198/4",
      topWicket: "Caught Deep (42%)",
      desc: "Flat, hard track with true bounce and minimal movement. Very easy for batsmen to time the ball.",
      color: C.green,
      suggestions: ["Target 200+ batting first", "Use slower balls and variations in death", "Cutters more effective than pace", "Deep square boundary must be patrolled"],
    },
    balanced: {
      title: "Balanced Pitch",
      avgScore: "163/6",
      topWicket: "LBW (25%)",
      desc: "Fair contest between bat and ball. Toss matters — first innings advantage is around 60%.",
      color: C.blue,
      suggestions: ["Toss: bat first", "Mix pace and spin through innings", "Standard field placements apply", "Back-up spinner crucial in overs 12–16"],
    },
  };

  const pt = pitches[pitchType];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Pitch Analysis</h2>
        <p className="text-sm text-white/40 font-['Inter']">Venue-specific surface intelligence and strategy mapping</p>
      </div>

      {/* Pitch type selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(pitches).map(([key, p]) => (
          <button
            key={key}
            onClick={() => setPitchType(key)}
            className={`p-4 rounded-2xl border text-left transition-all ${pitchType === key ? "border-opacity-40" : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"}`}
            style={pitchType === key ? { background: `${p.color}10`, borderColor: `${p.color}40`, boxShadow: `0 0 20px ${p.color}20` } : {}}
          >
            <div className="text-base font-bold font-['Rajdhani'] mb-1" style={{ color: pitchType === key ? p.color : "rgba(255,255,255,0.7)" }}>
              {p.title}
            </div>
            <div className="text-xs text-white/35 font-['Inter']">Avg: {p.avgScore}</div>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Conditions detail */}
        <GlassCard className="p-6 lg:col-span-2">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest mb-2" style={{ color: pt.color }}>{pt.title}</div>
              <h3 className="text-xl font-bold text-white font-['Rajdhani']">Nassau County, New York</h3>
              <div className="text-sm text-white/40 font-['Inter'] mt-1">T20I | June 2024 | Afternoon (local)</div>
            </div>
            <Badge color={pt.color}>{pt.title.split("-")[0]}</Badge>
          </div>
          <p className="text-sm text-white/55 font-['Inter'] leading-relaxed mb-6">{pt.desc}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { l: "Avg 1st Inn Score", v: pt.avgScore, c: C.green },
              { l: "Top Wicket Type", v: pt.topWicket.split("(")[0], c: C.blue },
              { l: "Toss Winner Wins", v: "62%", c: C.gold },
              { l: "Pace vs Spin Wkts", v: "62:38", c: C.orange },
            ].map((s) => (
              <div key={s.l} className="bg-white/[0.04] rounded-xl p-3 text-center">
                <div className="text-lg font-bold font-['Rajdhani'] mb-1" style={{ color: s.c }}>{s.v}</div>
                <div className="text-[10px] text-white/30 font-['Inter'] leading-tight">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Venue history chart */}
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">Wicket Type Distribution</div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={pitchPieData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={4} dataKey="value">
                {pitchPieData.map((_, i) => (
                  <Cell key={i} fill={[C.orange, C.purple, C.green, C.blue][i]} />
                ))}
              </Pie>
              <Legend formatter={(v) => <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontFamily: "Inter" }}>{v}</span>} />
              <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12, fontFamily: "Inter" }} />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Strategy suggestion */}
        <GlassCard className="p-6">
          <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest mb-4" style={{ color: pt.color }}>
            Suggested Strategy
          </div>
          <div className="space-y-3">
            {pt.suggestions.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: `${pt.color}08`, border: `1px solid ${pt.color}15` }}>
                <ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: pt.color }} />
                <span className="text-xs text-white/65 font-['Inter'] leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">Surface Conditions</div>
            {[
              { l: "Pace", v: pitchType === "pace" ? 80 : pitchType === "batting" ? 30 : pitchType === "balanced" ? 55 : 25, c: C.orange },
              { l: "Spin Turn", v: pitchType === "spin" ? 80 : pitchType === "batting" ? 15 : pitchType === "balanced" ? 40 : 20, c: C.purple },
              { l: "Bounce", v: pitchType === "pace" ? 75 : pitchType === "batting" ? 65 : 50, c: C.blue },
            ].map((s) => <ConfidenceBar key={s.l} label={s.l} value={s.v} color={s.c} />)}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

// ── Match Strategy ─────────────────────────────────────────────────────────────

function MatchStrategy() {
  const [phase, setPhase] = useState("powerplay");

  const phases: Record<string, { title: string; overs: string; color: string; bowling: string[]; batting: string[]; field: string[]; pressure: string }> = {
    powerplay: {
      title: "Powerplay",
      overs: "Overs 1–6",
      color: C.blue,
      bowling: ["Open with strike bowler from upwind end", "Swing or seam movement — attack off stump", "Rotate two pace bowlers to maximize freshness", "Set deep point and third man — restrict boundaries"],
      batting: ["Be aggressive early — only 2 fielders outside", "Drive on the up off front foot", "Target third man and fine leg gaps", "Aim for 50+ without losing more than 2 wickets"],
      field: ["Slip + gully for first 4 overs", "No mid-off / extra cover early", "Fine leg and third man orthodox", "Squarish short mid-wicket"],
      pressure: "Wicket-taking phase. Don't let openers settle. Bowl at the stumps with nip-backers.",
    },
    middle: {
      title: "Middle Overs",
      overs: "Overs 7–15",
      color: C.gold,
      bowling: ["Deploy best spinner — grip will increase", "Slower balls and cutters to dry up runs", "Leg-side field — invite the pull shot", "Partnership-breaker: bowl dot balls in groups of 3"],
      batting: ["Rotate strike — avoid dot-ball clusters", "Re-set every 3 overs", "Accelerate if match situation allows", "Preserve top-6 for death-over surge"],
      field: ["Spread field — save boundaries", "Two men on leg-side boundary", "Sweeper at deep cover", "Mid-wicket and midOn for spin end"],
      pressure: "Containment phase. Build pressure through overs to force risk shots. Economy under 7.5.",
    },
    death: {
      title: "Death Overs",
      overs: "Overs 16–20",
      color: C.red,
      bowling: ["Yorker-length mandatory — no short or full tosses", "Wides outside off to slow scoring", "Bumrah / Shami in final 4 overs only", "Vary pace — mix 90mph yorker with 75mph slower ball"],
      batting: ["Pre-meditate shot — pick your zone", "Scoop / ramp over keeper for yorkers", "Six then single: break rhythm", "Target the weakest bowler in the over"],
      field: ["Two men patrolling cow corner", "Long-on and long-off orthodox", "Deep fine leg essential", "No slip — all boundary riders"],
      pressure: "Execution phase. Every ball is decisive. Nerve management as important as skill.",
    },
  };

  const ph = phases[phase];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Match Strategy</h2>
        <p className="text-sm text-white/40 font-['Inter']">Phase-by-phase tactical planning with AI recommendations</p>
      </div>

      {/* Phase tabs */}
      <div className="flex gap-3">
        {Object.entries(phases).map(([key, p]) => (
          <button
            key={key}
            onClick={() => setPhase(key)}
            className={`flex-1 py-3 px-5 rounded-xl font-bold font-['Rajdhani'] text-sm transition-all ${phase === key ? "text-black" : "bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white"}`}
            style={phase === key ? { background: p.color, boxShadow: `0 0 20px ${p.color}40` } : {}}
          >
            <div>{p.title}</div>
            <div className="text-[10px] opacity-70 font-normal font-['JetBrains_Mono']">{p.overs}</div>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {[
          { title: "Bowling Approach", items: ph.bowling, color: C.blue, icon: Target },
          { title: "Batting Approach", items: ph.batting, color: C.green, icon: TrendingUp },
          { title: "Field Placement", items: ph.field, color: C.gold, icon: MapPin },
        ].map((section) => (
          <GlassCard key={section.title} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <section.icon size={14} style={{ color: section.color }} />
              <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest" style={{ color: section.color }}>
                {section.title}
              </div>
            </div>
            <div className="space-y-2.5">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${section.color}15`, border: `1px solid ${section.color}30` }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: section.color }} />
                  </div>
                  <span className="text-sm text-white/60 font-['Inter'] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}

        {/* Pressure handling */}
        <GlassCard className="p-6" style={{ borderColor: `${ph.color}25`, borderWidth: 1 }}>
          <div className="flex items-center gap-2 mb-4">
            <Flame size={14} style={{ color: ph.color }} />
            <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest" style={{ color: ph.color }}>
              Pressure Handling
            </div>
          </div>
          <div className="p-4 rounded-xl mb-4" style={{ background: `${ph.color}08`, border: `1px solid ${ph.color}20` }}>
            <p className="text-sm text-white/70 font-['Inter'] leading-relaxed">{ph.pressure}</p>
          </div>
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">Phase KPIs</div>
          <div className="space-y-2">
            {[
              { l: "Wicket Target", v: phase === "powerplay" ? "2 wkts" : phase === "middle" ? "3 wkts" : "1 wkt", c: ph.color },
              { l: "Run Rate Target", v: phase === "powerplay" ? "8.3" : phase === "middle" ? "7.2" : "10.5+", c: ph.color },
            ].map((s) => (
              <div key={s.l} className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-xs text-white/40 font-['Inter']">{s.l}</span>
                <span className="text-sm font-bold font-['Rajdhani']" style={{ color: s.c }}>{s.v}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

// ── Real-Time Decision Engine ──────────────────────────────────────────────────

function RealTimeEngine() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Real-Time Decision Engine</h2>
          <p className="text-sm text-white/40 font-['Inter']">Live match analysis — recommendations update after every ball</p>
        </div>
        <div className="ml-auto flex items-center gap-2 bg-[#fb7185]/10 border border-[#fb7185]/20 rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-[#fb7185] animate-pulse" />
          <span className="text-xs text-[#fb7185] font-bold font-['JetBrains_Mono']">LIVE</span>
        </div>
      </div>

      {/* Live scoreboard */}
      <GlassCard className="p-6 border-[#fb7185]/15 border">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-white font-['Rajdhani']">145/6</div>
            <div className="text-sm text-white/40 font-['JetBrains_Mono'] mt-1">PAK | 16.2 ov</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-xs text-white/25 font-['Inter'] mb-1">Chasing</div>
            <div className="text-lg font-bold text-white font-['Rajdhani']">184</div>
            <div className="text-xs text-[#fb7185] font-['JetBrains_Mono'] mt-1">Need 39 off 22</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#6ee7f9] font-['Rajdhani']">183/7</div>
            <div className="text-sm text-white/40 font-['JetBrains_Mono'] mt-1">IND | 20 ov (set)</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-white/[0.06]">
          {[
            { l: "CRR", v: "8.69", c: C.blue },
            { l: "RRR", v: "11.45", c: C.red },
            { l: "Momentum", v: "IND", c: C.green },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-xl font-bold font-['Rajdhani']" style={{ color: s.c }}>{s.v}</div>
              <div className="text-xs text-white/30 font-['JetBrains_Mono']">{s.l}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Momentum chart */}
        <GlassCard className="lg:col-span-2 p-6">
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Match Momentum (Runs / Over)</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={momentumData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="over" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "JetBrains Mono" }} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "JetBrains Mono" }} />
              <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 8, fontSize: 12, fontFamily: "Inter" }} labelStyle={{ color: "rgba(255,255,255,0.4)" }} />
              <Bar dataKey="runs" fill={C.blue} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Win Probability Gauge */}
        <GlassCard className="p-6 flex flex-col items-center justify-center">
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-5">Win Probability</div>
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
              <circle cx="50" cy="50" r="42" fill="none" stroke={C.green} strokeWidth="10"
                strokeDasharray={`${70 * 2.639} ${100 * 2.639}`} strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 6px rgba(110,231,249,0.5))" }} />
              <circle cx="50" cy="50" r="42" fill="none" stroke={C.blue} strokeWidth="10"
                strokeDasharray={`${30 * 2.639} ${100 * 2.639}`}
                strokeDashoffset={`-${70 * 2.639}`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
              <div className="text-2xl font-black text-[#6ee7f9] font-['Rajdhani']">70%</div>
              <div className="text-[10px] text-white/40 font-['JetBrains_Mono']">IND</div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-xs font-['JetBrains_Mono']">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#6ee7f9]" /><span className="text-white/50">IND 70%</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#8b5cf6]" /><span className="text-white/50">PAK 30%</span></div>
          </div>
        </GlassCard>
      </div>

      {/* Over log */}
      <GlassCard className="p-6">
        <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Over-by-Over AI Recommendations</div>
        <div className="space-y-3">
          {overLog.map((o, i) => (
            <div key={i} className={`grid md:grid-cols-4 gap-3 p-4 rounded-xl transition-all ${i === 0 ? "bg-[#6ee7f9]/5 border border-[#6ee7f9]/15" : "bg-white/[0.02] border border-white/[0.04]"}`}>
              <div>
                <div className="text-xs font-['JetBrains_Mono'] text-white/30 mb-0.5">Over</div>
                <div className="text-base font-bold text-white font-['Rajdhani']">{o.over}</div>
              </div>
              <div>
                <div className="text-xs font-['JetBrains_Mono'] text-white/30 mb-0.5">Score</div>
                <div className="text-sm font-bold text-[#8b5cf6] font-['Rajdhani']">{o.score}</div>
              </div>
              <div>
                <div className="text-xs font-['JetBrains_Mono'] text-white/30 mb-0.5">Events</div>
                <div className="text-xs text-white/50 font-['Inter']">{o.event}</div>
              </div>
              <div>
                <div className="text-xs font-['JetBrains_Mono'] text-[#6ee7f9] mb-0.5">AI Rec.</div>
                <div className="text-xs text-white/65 font-['Inter'] leading-relaxed">{o.recommendation}</div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

// ── Win Probability ────────────────────────────────────────────────────────────

function WinProbability() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Win Probability Prediction</h2>
        <p className="text-sm text-white/40 font-['Inter']">Dynamic probability model updated every ball</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4">
        <StatCard label="IND Win Prob" value="70%" color={C.green} icon={TrendingUp} trend="up" sub="↑ 12% since over 12" />
        <StatCard label="Required RR" value="11.45" color={C.red} icon={Flame} sub="Need 39 off 22 balls" />
        <StatCard label="Wickets Left" value="4" color={C.gold} icon={AlertTriangle} sub="PAK innings" />
        <StatCard label="Pressure Index" value="8.7/10" color={C.orange} icon={Zap} sub="EXTREME pressure on PAK" />
      </div>

      <GlassCard className="p-6" glow>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white font-['Rajdhani']">Win Probability Over Time</h3>
          <div className="flex gap-4 text-xs font-['Inter']">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#6ee7f9]" /><span className="text-white/50">India</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#8b5cf6]" /><span className="text-white/50">Pakistan</span></div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={winProbData}>
            <defs>
              <linearGradient id="indGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.green} stopOpacity={0.3} />
                <stop offset="95%" stopColor={C.green} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="pakGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.blue} stopOpacity={0.25} />
                <stop offset="95%" stopColor={C.blue} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="over" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} label={{ value: "Over", position: "insideBottom", fill: "rgba(255,255,255,0.2)", fontSize: 10, offset: -4 }} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(110,231,249,0.2)", borderRadius: 12, fontFamily: "Inter", fontSize: 12 }} formatter={(v: number) => [`${v}%`]} labelStyle={{ color: "rgba(255,255,255,0.4)" }} />
            <Area type="monotone" dataKey="ind" stroke={C.green} strokeWidth={2.5} fill="url(#indGrad2)" name="India" />
            <Area type="monotone" dataKey="pak" stroke={C.blue} strokeWidth={2.5} fill="url(#pakGrad2)" name="Pakistan" />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Pressure breakdown */}
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { title: "Match Pressure Level", value: "EXTREME", sub: "PAK need boundaries every other ball", color: C.red, pct: 90 },
          { title: "Batting Difficulty", value: "VERY HIGH", sub: "Bumrah and Shami primed for death", color: C.orange, pct: 80 },
          { title: "IND Comfort Index", value: "HIGH", sub: "Defending with full-strength attack", color: C.green, pct: 75 },
        ].map((p) => (
          <GlassCard key={p.title} className="p-5">
            <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest mb-3 text-white/35">{p.title}</div>
            <div className="text-2xl font-black font-['Rajdhani'] mb-1" style={{ color: p.color }}>{p.value}</div>
            <div className="text-xs text-white/40 font-['Inter'] mb-4">{p.sub}</div>
            <ConfidenceBar value={p.pct} color={p.color} />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

// ── Weakness Detection ────────────────────────────────────────────────────────

function WeaknessDetection() {
  const weaknesses = [
    {
      category: "vs Spin",
      color: C.purple,
      icon: Target,
      players: [
        { name: "Babar Azam", severity: 72, detail: "Averages 18 vs wrist-spin, low sweep usage, often beaten on flight" },
        { name: "Mohammad Rizwan", severity: 55, detail: "Struggles against left-arm orthodox in the slot" },
      ],
    },
    {
      category: "vs Pace (Short Ball)",
      color: C.orange,
      icon: Flame,
      players: [
        { name: "Shadab Khan", severity: 84, detail: "Top-edge pull shot flaw — 3 dismissals in last 5 T20s vs short ball" },
        { name: "Iftikhar Ahmed", severity: 68, detail: "Weak on back foot outside off stump vs 145+ kmh" },
      ],
    },
    {
      category: "Death Overs Pressure",
      color: C.red,
      icon: Zap,
      players: [
        { name: "Babar Azam", severity: 61, detail: "Strike rate drops to 112 in overs 17-20 vs pace attack" },
        { name: "Asif Ali", severity: 79, detail: "High dot-ball rate under pressure — fails to rotate strike" },
      ],
    },
    {
      category: "Bowler Weakness",
      color: C.blue,
      icon: AlertTriangle,
      players: [
        { name: "Haris Rauf", severity: 70, detail: "Poor at yorker length under pressure — avg economy 9.2 in super overs" },
        { name: "Shaheen Afridi", severity: 48, detail: "Length balls against in-form RHBs tend to go for boundaries" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Weakness Detection</h2>
          <p className="text-sm text-white/40 font-['Inter']">AI-identified vulnerabilities from pattern analysis</p>
        </div>
        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5">
          <Search size={13} className="text-white/30" />
          <input type="text" placeholder="Search player..." className="bg-transparent text-sm text-white placeholder-white/25 focus:outline-none font-['Inter'] w-32" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {weaknesses.map((w) => (
          <GlassCard key={w.category} className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${w.color}15`, border: `1px solid ${w.color}25` }}>
                <w.icon size={16} style={{ color: w.color }} />
              </div>
              <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-widest" style={{ color: w.color }}>
                {w.category}
              </div>
            </div>
            <div className="space-y-4">
              {w.players.map((p) => (
                <div key={p.name} className="p-4 rounded-xl" style={{ background: `${w.color}06`, border: `1px solid ${w.color}15` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold text-white font-['Rajdhani']">{p.name}</div>
                    <div className="text-sm font-black font-['Rajdhani']" style={{ color: w.color }}>{p.severity}%</div>
                  </div>
                  <ConfidenceBar value={p.severity} color={w.color} />
                  <p className="text-xs text-white/45 font-['Inter'] leading-relaxed mt-3">{p.detail}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

// ── Dataset Management ─────────────────────────────────────────────────────────

function DatasetManagement() {
  const [trainingProgress] = useState(67);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Dataset Management</h2>
        <p className="text-sm text-white/40 font-['Inter']">Upload, manage, and train AI models on cricket datasets</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Upload zone */}
        <GlassCard className="p-6 border-dashed border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-all cursor-pointer group">
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <Upload size={22} className="text-[#8b5cf6]" />
            </div>
            <div className="text-base font-bold text-white font-['Rajdhani'] mb-2">Upload Dataset</div>
            <div className="text-xs text-white/40 font-['Inter'] mb-4 leading-relaxed">
              CSV, JSON, or Excel files accepted.<br />Max 2 GB per upload.
            </div>
            <button className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 text-[#8b5cf6] text-sm font-bold px-5 py-2 rounded-xl hover:bg-[#8b5cf6]/20 transition-all font-['Rajdhani']">
              Browse Files
            </button>
          </div>
        </GlassCard>

        {/* Training status */}
        <GlassCard className="p-6 lg:col-span-2" glow greenBorder>
          <div className="flex items-center gap-3 mb-5">
            <Cpu size={16} className="text-[#6ee7f9]" />
            <div className="text-xs text-[#6ee7f9] font-['JetBrains_Mono'] uppercase tracking-widest">Model Training Status</div>
            <div className="ml-auto">
              <Badge color={C.gold}>TRAINING</Badge>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-white/60 font-['Inter']">CricVision-ML v2.5 Training</span>
              <span className="text-sm font-bold text-[#6ee7f9] font-['Rajdhani']">{trainingProgress}%</span>
            </div>
            <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-[#6ee7f9]/80 to-[#6ee7f9] transition-all duration-1000 relative overflow-hidden"
                style={{ width: `${trainingProgress}%` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { l: "Epoch", v: "134/200", c: C.blue },
              { l: "Val Accuracy", v: "92.1%", c: C.green },
              { l: "Loss", v: "0.084", c: C.gold },
            ].map((s) => (
              <div key={s.l} className="bg-white/[0.04] rounded-xl p-3 text-center">
                <div className="text-lg font-bold font-['Rajdhani'] mb-0.5" style={{ color: s.c }}>{s.v}</div>
                <div className="text-[10px] text-white/30 font-['Inter']">{s.l}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Dataset table */}
      <GlassCard className="overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
          <div className="text-base font-bold text-white font-['Rajdhani']">Dataset Registry</div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 text-xs text-white/50 hover:text-white border border-white/10 rounded-lg px-3 py-1.5 transition-all font-['Rajdhani']">
              <Filter size={11} /> Filter
            </button>
            <button className="flex items-center gap-2 text-xs text-[#6ee7f9] bg-[#6ee7f9]/10 border border-[#6ee7f9]/20 rounded-lg px-3 py-1.5 hover:bg-[#6ee7f9]/15 transition-all font-['Rajdhani']">
              <Plus size={11} /> Add Source
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.04]">
                {["Dataset Name", "Source", "Records", "Size", "Status", ""].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-[10px] text-white/30 font-['JetBrains_Mono'] uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {datasets.map((d, i) => (
                <tr key={d.name} className={`border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                  <td className="px-5 py-4 text-sm font-semibold text-white font-['Rajdhani']">{d.name}</td>
                  <td className="px-5 py-4"><Badge color={C.blue}>{d.source}</Badge></td>
                  <td className="px-5 py-4 text-sm text-white/60 font-['JetBrains_Mono']">{d.records}</td>
                  <td className="px-5 py-4 text-sm text-white/40 font-['Inter']">{d.size}</td>
                  <td className="px-5 py-4">
                    <Badge color={d.status === "Active" ? C.green : d.status === "Processing" ? C.gold : C.blue}>
                      {d.status}
                    </Badge>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-white/20 hover:text-[#8b5cf6] transition-colors"><Download size={13} /></button>
                      <button className="text-white/20 hover:text-[#fb7185] transition-colors"><Trash2 size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}

// ── Analytics ─────────────────────────────────────────────────────────────────

function Analytics() {
  const [tab, setTab] = useState("comparison");

  const tabs = [
    { id: "comparison", label: "Player Comparison" },
    { id: "economy", label: "Bowling Economy" },
    { id: "performance", label: "Batting Performance" },
    { id: "confidence", label: "AI Confidence" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Analytics & Visualization</h2>
        <p className="text-sm text-white/40 font-['Inter']">Deep-dive insights across players, venues, and AI performance</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-2.5 rounded-xl font-bold font-['Rajdhani'] text-sm transition-all ${tab === t.id ? "bg-[#6ee7f9] text-black shadow-[0_0_20px_rgba(110,231,249,0.3)]" : "bg-white/[0.04] border border-white/10 text-white/50 hover:text-white"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "comparison" && (
        <div className="grid lg:grid-cols-2 gap-5">
          <GlassCard className="p-6">
            <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Babar Azam vs Virat Kohli — Radar</div>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={playerRadar}>
                <PolarGrid stroke="rgba(255,255,255,0.06)" />
                <PolarAngleAxis dataKey="stat" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "Inter" }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Babar" dataKey="babar" stroke={C.blue} fill={C.blue} fillOpacity={0.15} strokeWidth={2} />
                <Radar name="Virat" dataKey="virat" stroke={C.green} fill={C.green} fillOpacity={0.1} strokeWidth={2} />
                <Legend formatter={(v) => <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontFamily: "Inter" }}>{v}</span>} />
                <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12, fontFamily: "Inter" }} />
              </RadarChart>
            </ResponsiveContainer>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Stat Comparison</div>
            <div className="space-y-4">
              {playerRadar.map((r) => (
                <div key={r.stat}>
                  <div className="flex justify-between mb-1.5 text-xs font-['Inter']">
                    <span className="text-[#8b5cf6]">Babar: {r.babar}</span>
                    <span className="text-white/40">{r.stat}</span>
                    <span className="text-[#6ee7f9]">Virat: {r.virat}</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden flex">
                    <div className="h-full" style={{ width: `${r.babar / 2}%`, background: C.blue, opacity: 0.7 }} />
                    <div className="flex-1" />
                    <div className="h-full" style={{ width: `${r.virat / 2}%`, background: C.green, opacity: 0.7 }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      )}

      {tab === "economy" && (
        <GlassCard className="p-6">
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Bowling Economy Rate by Player</div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={economyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
              <XAxis type="number" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} domain={[0, 10]} />
              <YAxis type="category" dataKey="name" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "Rajdhani" }} width={80} />
              <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 8, fontSize: 12, fontFamily: "Inter" }} />
              <Bar dataKey="economy" fill={C.blue} radius={[0, 6, 6, 0]}>
                {economyData.map((entry, i) => (
                  <Cell key={i} fill={entry.economy < 6.5 ? C.green : entry.economy < 7.5 ? C.gold : C.red} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      )}

      {tab === "performance" && (
        <GlassCard className="p-6">
          <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Run Rate Over Match Overs</div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={momentumData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="over" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} />
              <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(110,231,249,0.2)", borderRadius: 8, fontSize: 12, fontFamily: "Inter" }} />
              <Line type="monotone" dataKey="runs" stroke={C.green} strokeWidth={2.5} dot={{ fill: C.green, r: 3 }} name="Runs/Over" />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      )}

      {tab === "confidence" && (
        <div className="grid md:grid-cols-2 gap-5">
          <GlassCard className="p-6">
            <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-5">AI Confidence by Module</div>
            <div className="space-y-4">
              {[
                { l: "Bowler Recommendation", v: 94, c: C.green },
                { l: "Batting Strategy", v: 87, c: C.blue },
                { l: "Win Probability", v: 91, c: C.gold },
                { l: "Pitch Intelligence", v: 82, c: C.orange },
                { l: "Weakness Detection", v: 78, c: C.purple },
                { l: "XI Selection", v: 85, c: C.red },
              ].map((s) => <ConfidenceBar key={s.l} label={s.l} value={s.v} color={s.c} />)}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Model Accuracy Over Time</div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={[
                { month: "Jan", acc: 88 },
                { month: "Feb", acc: 89 },
                { month: "Mar", acc: 90 },
                { month: "Apr", acc: 91 },
                { month: "May", acc: 93 },
                { month: "Jun", acc: 94 },
              ]}>
                <defs>
                  <linearGradient id="accGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={C.green} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={C.green} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "Inter" }} />
                <YAxis domain={[85, 96]} tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }} tickFormatter={(v) => `${v}%`} />
                <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(110,231,249,0.2)", borderRadius: 8, fontSize: 12, fontFamily: "Inter" }} formatter={(v: number) => [`${v}%`, "Accuracy"]} />
                <Area type="monotone" dataKey="acc" stroke={C.green} strokeWidth={2} fill="url(#accGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      )}
    </div>
  );
}

// ── Settings Page ─────────────────────────────────────────────────────────────

function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white font-['Rajdhani'] mb-1">Settings</h2>
        <p className="text-sm text-white/40 font-['Inter']">Configure your CricVision AI workspace</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {[
          {
            title: "Account Settings",
            fields: [
              { l: "Full Name", v: "Asif Ahmed" },
              { l: "Organization", v: "Pakistan Cricket Board" },
              { l: "Role", v: "Head Analyst" },
              { l: "Email", v: "a.ahmed@pcb.com.pk" },
            ],
          },
          {
            title: "AI Engine Config",
            fields: [
              { l: "Model Version", v: "CricVision-ML v2.5" },
              { l: "Confidence Threshold", v: "75%" },
              { l: "Default Format", v: "T20 International" },
              { l: "Data Refresh Rate", v: "Every Ball" },
            ],
          },
        ].map((section) => (
          <GlassCard key={section.title} className="p-6">
            <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-5">{section.title}</div>
            <div className="space-y-4">
              {section.fields.map((f) => (
                <div key={f.l}>
                  <label className="block text-xs text-white/35 mb-1.5 font-['Inter'] uppercase tracking-widest">{f.l}</label>
                  <input defaultValue={f.v} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#6ee7f9]/40 transition-colors font-['Inter']" />
                </div>
              ))}
            </div>
            <button className="mt-5 w-full bg-[#6ee7f9]/10 border border-[#6ee7f9]/20 text-[#6ee7f9] font-bold py-2.5 rounded-xl hover:bg-[#6ee7f9]/15 transition-all font-['Rajdhani']">
              Save Changes
            </button>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-6">
        <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-5">Notification Preferences</div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Live Match AI Alerts",
            "Win Probability Threshold Alerts (±15%)",
            "Bowler Change Recommendations",
            "Wicket Event Notifications",
            "Model Training Complete",
            "Weekly Analytics Report",
          ].map((n) => (
            <label key={n} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-5 bg-[#6ee7f9]/20 rounded-full relative flex-shrink-0 cursor-pointer border border-[#6ee7f9]/30">
                <div className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#6ee7f9] shadow transition-all" />
              </div>
              <span className="text-sm text-white/60 group-hover:text-white/80 font-['Inter'] transition-colors">{n}</span>
            </label>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────

const pageComponents: Record<string, React.FC> = {
  dashboard: Dashboard,
  bowler: BowlerRecommendation,
  batting: BattingStrategy,
  players: PlayerSelection,
  pitch: PitchAnalysis,
  strategy: MatchStrategy,
  realtime: RealTimeEngine,
  probability: WinProbability,
  weakness: WeaknessDetection,
  dataset: DatasetManagement,
  analytics: Analytics,
  settings: SettingsPage,
};

const pageTitles: Record<string, string> = {
  landing: "Landing",
  pricing: "Pricing",
  dashboard: "Dashboard",
  bowler: "Bowler Recommendation",
  batting: "Batting Strategy",
  players: "Player Selection",
  pitch: "Pitch Analysis",
  strategy: "Match Strategy",
  realtime: "Real-Time Engine",
  probability: "Win Probability",
  weakness: "Weakness Detection",
  dataset: "Dataset Management",
  analytics: "Analytics",
  settings: "Settings",
};

export default function App() {
  const [page, setPage] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const publicPages = ["landing", "login", "signup", "forgot"];
  const isPublic = publicPages.includes(page);

  if (page === "landing") return <LandingPage setPage={setPage} />;
  if (page === "pricing") return <PricingPage setPage={setPage} />;
  if (page === "login") return <AuthPage type="login" setPage={setPage} />;
  if (page === "signup") return <AuthPage type="signup" setPage={setPage} />;
  if (page === "forgot") return <AuthPage type="forgot" setPage={setPage} />;

  const PageComponent = pageComponents[page] ?? Dashboard;

  return (
    <div className="flex h-screen bg-[#060816] overflow-hidden" style={{
      background: "radial-gradient(ellipse at 20% 30%, rgba(0,46,80,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0,60,30,0.08) 0%, transparent 40%), #060816"
    }}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full z-50">
            <Sidebar page={page} setPage={setPage} mobile onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-shrink-0">
        <Sidebar page={page} setPage={setPage} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-14 flex items-center gap-4 px-6 border-b border-white/[0.06] bg-[#0e172a]/60 backdrop-blur-sm flex-shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white/50 hover:text-white transition-colors">
            <Menu size={18} />
          </button>
          <div className="text-sm font-bold text-white font-['Rajdhani'] tracking-wide">
            {pageTitles[page] ?? "Dashboard"}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-[#fb7185]/10 border border-[#fb7185]/20 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fb7185] animate-pulse" />
              <span className="text-[10px] text-[#fb7185] font-bold font-['JetBrains_Mono']">IND vs PAK LIVE</span>
            </div>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-all">
              <Bell size={15} />
            </button>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6ee7f9] to-[#8b5cf6] flex items-center justify-center text-black text-[10px] font-bold font-['Rajdhani'] cursor-pointer" onClick={() => setPage("landing")}>
              AA
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <PageComponent />
        </main>
      </div>
    </div>
  );
}
