---
name: ria-website-designer
description: Designs, builds, and refines high-converting, trust-building websites for boutique Registered Investment Advisors (RIAs). Use this skill when asked to create, design, update, or overhaul website files, landing pages, component layouts, or copy for a wealth management firm. Trigger phrases: "design our RIA website", "build the homepage", "update wealth management site", "create landing page for boutique firm", "review RIA site layout". Do NOT use for general software engineering or non-financial website builds.
license: MIT
metadata:
  author: Prompt Architect
  version: "1.0"
---

# RIA Website Designer & Architect

## Critical Instructions & Governing Philosophy
1. **Trust First, Hook Second:** Wealth management client acquisition is driven by trust, clarity, and authority—never high-pressure sales jargon or flashy gimmicks. Every design choice must reduce friction and risk.
2. **Directory Awareness:** Work directly within the project files. Read existing code and content structures before writing or changing files. Preserve working configurations (e.g., build tools, framework setups).
3. **Compliance Readiness:** High-converting RIA copy must respect SEC/FINRA advisory regulations (e.g., clear fee disclosures, no guaranteed returns, explicit fiduciary statements). Consult `references/brand-and-compliance.md` before finalizing text.

---

## Workflow Sequence

Follow this step-by-step process for all site creation or major updates:

### Step 1: Directory Audit & Context Load
- Scan the directory to identify existing assets, existing UI components, tech stack (e.g., React, Tailwind, HTML/CSS), and media files.
- Review `references/brand-and-compliance.md` for firm specifics (target demographic, niche, compliance boundaries).

### Step 2: Architecture & Visual Hierarchy
Ensure the page layout follows the high-conversion RIA structural pattern:
1. **Hero Section:** Clear value proposition targeting a specific audience persona, warm/professional imagery, and a low-friction primary CTA (e.g., "Schedule a Discovery Call" or "Request a Portfolio Audit").
2. **Social Proof & Authority Bar:** Press mentions, custodian trust badges (e.g., Schwab, Fidelity), or fiduciary declaration.
3. **The Core Problem/Solution:** Address typical high-net-worth pain points (tax drag, retirement readiness, complex estate transitions) and how the firm solves them.
4. **Interactive or Visual Hook:** A clear, interactive fee comparison, process roadmap, or interactive retirement checklist.
5. **Meet the Advisor:** Humanizing bio emphasizing local roots, credentials (CFP®, CFA), and fiduciary obligation.
6. **Final CTA & Disclosure Footer:** Simple form + required SEC ADV Part 2 link and legal disclosures.

### Step 3: Execution & File Generation
- Write modular, clean, and responsive code fitting the project stack.
- Ensure high contrast ratios (WCAG AA standard), sophisticated color palettes (deep navy, forest green, warm slate, cream accents), and clean typography.
- Avoid generic stock text—use conversion-driven copy frameworks from `references/core-copy-framework.md`.

### Step 4: Quality Check
Run through the verification checklist before completing task execution:
- [ ] Is mobile responsiveness preserved across all breakpoints?
- [ ] Is the value proposition understandable in under 5 seconds?
- [ ] Are SEC-mandated fiduciary disclaimers included in the footer?
- [ ] Are CTAs prominent and consistent throughout the page?

---

## Examples

### Example 1: Creating a High-Converting Hero Section
**User Request:** "Build a hero section for my dad's RIA targeting tech executives nearing retirement."

**Action & Execution:**
1. Read project directory to determine CSS styling strategy (e.g., Tailwind CSS).
2. Generate component code with a direct value statement:
   - *Headline:* "Turn Tech Equity & Stock Options into Lasting Retirement Wealth."
   - *Subhead:* "Fiduciary financial planning tailored for senior tech leaders navigating ISOs, NQSOs, and multi-million dollar transitions."
   - *Primary CTA:* "Book Your 15-Min Strategy Session" (Button)
   - *Secondary CTA:* "Explore Our Process" (Ghost Link)
3. Include trust indicators directly below the CTAs: "Independent • Fiduciary • Fee-Only".

---

## Troubleshooting & Edge Cases

| Issue / Error | Root Cause | Solution |
| :--- | :--- | :--- |
| **Copy feels generic or like a retail bank** | Lacks hyper-targeted persona focus | Consult `references/core-copy-framework.md`. Reframe messaging from generic "wealth management" to specific pain points. |
| **Layout looks cluttered on mobile** | Multi-column desktop grids not breaking gracefully | Refactor layout to stack elements vertically on screens under 768px. Prioritize Hero CTA visibility above the fold. |
| **Compliance risk in text** | Absolute claims (e.g., "Maximized returns", "Guaranteed security") | Scan text for superlative terms and replace with process-focused wording ("Risk-managed strategies", "Tax-efficient planning"). |