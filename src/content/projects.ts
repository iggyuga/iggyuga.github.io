export type Project = {
  slug: string
  title: string
  pitch: string
  tags: string[]
  liveUrl?: string
  /** Link text for liveUrl. Defaults to "Live". */
  liveLabel?: string
  repoUrl?: string
  /** Repo is private — keep the URL, but don't render a link that 404s. */
  repoPrivate?: boolean
  gradient: string
  meta: {
    role: string
    timeframe: string
    stack: string[]
  }
  caseStudy: {
    problem: string
    approach: string
    architectureNote: string
    outcome: string
    lessons: string[]
  }
}

export const projects: Project[] = [
  {
    slug: 'options-ally',
    title: 'options-ally',
    pitch:
      'A robot that watches the market, backtests strategies, and actually executes real trades in my account.',
    tags: ['Python', 'Tradier API', 'SQLite', 'Railway', 'Claude API', 'Discord'],
    repoUrl: 'https://github.com/iggyuga/options-ally',
    repoPrivate: true,
    gradient: 'from-amber-900/40 to-green-900/30',
    meta: {
      role: 'Solo — design, build, deploy',
      timeframe: '2023 – present',
      stack: ['Python', 'Tradier API', 'SQLite', 'Railway', 'Claude API', 'Discord webhooks'],
    },
    caseStudy: {
      problem:
        'Manual options trading is slow and emotional. You see a setup, you hesitate, you miss it — or you don\'t hesitate and you shouldn\'t have. I wanted a system that could watch tickers I care about, evaluate setups against defined criteria, and actually pull the trigger without me in the loop for every trade.',
      approach:
        'The scanner polls a list of tickers against configurable strategy criteria: delta ranges, IV rank thresholds, days to expiration, spread width. When it finds a candidate, it runs a backtest against historical data before doing anything. Only if the backtest clears a minimum win rate and expected value threshold does the trade get queued for execution. The whole thing runs on Railway and alerts via Discord.',
      architectureNote:
        'Scanner → Strategy evaluator → Backtester → Executor → Trade logger → Discord alert. Each stage is decoupled — the backtester doesn\'t know about the executor, the logger doesn\'t care what triggered it.',
      outcome:
        'The bot has been running live since early 2024. It operates on a cash account to avoid PDT constraints. Win rate and P&L data are logged per-trade.',
      lessons: [
        'PDT rule: started with a margin account, hit the 3-trade limit inside a week. Switched to a cash account — slower to deploy capital but eliminates the rule entirely.',
        'Trust the backtest: the few trades I\'ve manually overridden have underperformed the bot\'s selections. The emotional override is almost always wrong.',
        'The Claude integration is for analysis, not execution. The scanner sends a plain-language summary of each setup — Greeks, backtest results, market context — to Claude, which writes a narrative review. Claude doesn\'t decide whether to trade. It reads. The decision logic is deterministic Python.',
        'Broker API reliability matters more than you think. Tradier has been solid; the one outage I hit taught me to build retry logic from the start, not as an afterthought.',
      ],
    },
  },
  {
    slug: 'catdad',
    title: 'catdad',
    pitch:
      'A 2D platformer built in Unity — hand-animated cat protagonist, enemy AI with patrol paths, collectibles, and full level design.',
    tags: ['C#', 'Unity', 'ShaderLab', 'HLSL'],
    repoUrl: 'https://github.com/iggyuga/catdad',
    repoPrivate: true,
    gradient: 'from-purple-900/40 to-pink-900/30',
    meta: {
      role: 'Solo — design, art, code',
      timeframe: '2024 – present',
      stack: ['C#', 'Unity', 'ShaderLab', 'HLSL', 'Unity Animator'],
    },
    caseStudy: {
      problem:
        'I wanted to build something completely outside my day-to-day stack — something tactile, visual, and fun. Game dev forces you to think about state machines, physics, frame-rate-dependent logic, and user experience in ways web dev just doesn\'t.',
      approach:
        'Built from scratch in Unity. The player character has full animation states — idle, run, jump, land — driven by an Animator controller. Enemies use a patrol path system with a custom editor tool for placing waypoints in the scene. Collectible tokens, death zones, victory zones, and a spawn system round out the core loop.',
      architectureNote:
        'Simulation core (event-driven) → Gameplay event handlers (PlayerJumped, EnemyDeath, TokenCollision, etc.) → Mechanics layer (AnimationController, EnemyController, DeathZone) → Custom editors for level design tooling.',
      outcome:
        'Playable platformer with multiple levels, enemy types, and a complete game loop from spawn to victory. The custom patrol path editor made level iteration fast enough to actually be fun.',
      lessons: [
        'Event-driven architecture translates: the simulation core uses a priority queue and event dispatch pattern that feels a lot like backend event sourcing. Good patterns are portable.',
        'Custom editor tooling pays off immediately. The patrol path editor took an afternoon to build and saved hours of manual coordinate entry during level design.',
        'Frame-rate independence is non-negotiable. Early bugs from mixing Time.deltaTime and fixed-step logic taught me to be deliberate about which update loop owns what.',
        'Shader code is a different brain. HLSL and ShaderLab require thinking about rendering pipelines in a way that\'s totally orthogonal to application code — humbling and fun.',
      ],
    },
  },
  {
    slug: 'grocery-run',
    title: 'grocery-run',
    pitch:
      'A mobile app that scans barcodes, scores nutrition, finds nearby stores, and plans your grocery run on a budget.',
    tags: ['TypeScript', 'React', 'Capacitor', 'Supabase', 'Google Vision', 'Zustand'],
    repoUrl: 'https://github.com/iggyuga/grocery-run',
    repoPrivate: true,
    gradient: 'from-green-900/40 to-teal-900/30',
    meta: {
      role: 'Solo — design, build, deploy',
      timeframe: '2025 – present',
      stack: ['TypeScript', 'React', 'Capacitor', 'Supabase', 'Google Vision API', 'Google Places API', 'Open Food Facts', 'Zustand'],
    },
    caseStudy: {
      problem:
        'Grocery shopping is deceptively complex. You want to eat well, stay on budget, avoid certain additives, maybe buy organic — and you\'re making those decisions for dozens of items across multiple stores with zero tooling beyond a notes app list.',
      approach:
        'The app lets you scan a barcode and instantly see a nutrition score (Nutri-Score, NOVA processing level, additive risk flags) pulled from Open Food Facts. You build lists with dietary preferences — organic, vegan, gluten-free — and the app plans a "grocery run" that splits items across nearby stores found via Google Places. Receipt scanning with Google Vision closes the loop by logging what you actually spent.',
      architectureNote:
        'Capacitor shell → React + Zustand state → API layer (Google Vision for receipt OCR, Google Places for store finder, Open Food Facts for product data) → Supabase for persistence and auth. Native camera access via Capacitor plugins on iOS and Android.',
      outcome:
        'Cross-platform app running on iOS and Android via Capacitor. Barcode scanning, store routing, budget tracking, and receipt capture all functional. Dietary preference filtering works across the entire product catalog.',
      lessons: [
        'Open Food Facts is underrated. Free, community-maintained, and surprisingly complete for US grocery products. The API is rough around the edges but the data is solid.',
        'Capacitor over React Native: Capacitor let me keep the entire app as a standard React SPA and just wrap it for native. No bridge debugging, no native module headaches for the features I needed.',
        'Zustand for mobile state: lightweight, no boilerplate, and the persist middleware made offline-first trivial with Capacitor Preferences as the storage backend.',
        'Google Vision OCR on receipts is good but not perfect. Thermal paper receipts with faded ink are the worst case — had to build fuzzy matching to handle partial reads.',
      ],
    },
  },
  {
    slug: 'reclaim',
    title: 'reclaim',
    pitch:
      'Membership revenue OS for Discord communities — unifies paid-member state across Patreon and Stripe, recovers failed payments, and flags churn risk before it cancels.',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'Postgres', 'BullMQ', 'Stripe', 'Discord'],
    repoUrl: 'https://github.com/iggyuga/reclaim',
    repoPrivate: true,
    gradient: 'from-indigo-900/40 to-sky-900/30',
    meta: {
      role: 'Solo — architecture, build, deploy',
      timeframe: '2026 – present',
      stack: [
        'TypeScript',
        'Next.js',
        'discord.js',
        'Prisma',
        'Postgres',
        'Redis',
        'BullMQ',
        'Stripe API',
        'Patreon API',
        'Zod',
        'Railway',
      ],
    },
    caseStudy: {
      problem:
        'Creators running paid Discord communities bleed revenue they never see. A member\'s card fails and they silently lose their role. Someone drifts off for three weeks before cancelling and nobody notices until the charge stops. Paid state is scattered across Patreon, Stripe, and Discord native subs, and none of those systems agree with each other or tell the owner what retention actually looks like.',
      approach:
        'A pnpm monorepo with a provider-agnostic core: webhooks land in the Next.js app, jobs go on a BullMQ queue, workers reconcile member state, and the Discord bot owns every write back to Discord. On top of that sit four retention features — dunning (spaced DMs with a fresh billing-portal link, grace window, then revoke), expiring-card reminders off invoice.upcoming, cancel-save offers while the member still has access, and a nightly win-back sweep for lapsed or high-churn-risk members. Churn risk comes from Discord activity rollups, not message content.',
      architectureNote:
        'Webhook receiver (web) → BullMQ queue → workers (reconcile, dunning, activity rollup, win-back) → bot (all Discord writes, rate-limited). Queues carry ids, never payloads, so the worker re-fetches authoritative state from the provider instead of trusting a stale or out-of-order body. Job shapes live in a shared package so producers and consumers cannot drift.',
      outcome:
        'Stripe Connect OAuth, Patreon integration, the dunning engine, reconciliation, and the analytics dashboard are built and running against a real database. Entitlements re-pull every six hours so the system never depends on catching a live event.',
      lessons: [
        'Money code has to fail safe. The rule throughout: if the system is unsure, do not revoke and do not DM — flag it for the owner. A wrongly revoked role costs more trust than a day of delay.',
        'Idempotency is a design constraint, not a cleanup task. Every webhook is assumed re-deliverable and out-of-order, so dedupe keys and deterministic job ids went in before any feature did.',
        'Append-only events pay for themselves twice. The member event log is both the audit trail and the retention funnel — adding a new event type needs no migration, and the dashboard gets it for free.',
        'Least privilege shapes the product. No Message Content intent, so churn signals come from activity rollups rather than reading what people say. The constraint made the feature simpler, not worse.',
        'Provider APIs drift under you. Stripe moved the invoice-to-subscription link mid-build; reading both the old and new shape is the only thing that kept webhooks working.',
      ],
    },
  },
  {
    slug: 'ricochet',
    title: 'ricochet',
    pitch:
      'A one-thumb aim roguelite for mobile web — bounce, break, upgrade. Shipping on itch.io and Google Play from a single URL.',
    tags: ['TypeScript', 'Canvas 2D', 'Vite', 'Fastify', 'Railway', 'Google Play'],
    liveUrl: 'https://ricochet-production.up.railway.app',
    liveLabel: 'Play game',
    repoUrl: 'https://github.com/iggyuga/ricochet',
    repoPrivate: true,
    gradient: 'from-blue-900/40 to-cyan-900/30',
    meta: {
      role: 'Solo — design, code, balance, release',
      timeframe: '2026 – present',
      stack: ['TypeScript', 'Canvas 2D', 'Vite', 'Fastify', 'Railway', 'discord.js', 'PWA / TWA'],
    },
    caseStudy: {
      problem:
        'I wanted a game I could actually play one-handed on a phone — aim, release, watch it bounce — with enough roguelite depth that runs stay different. The hard part is not the shot; it is shipping a real game to real app stores as one person and keeping the balance honest without a QA team.',
      approach:
        'Hand-written Canvas 2D renderer and simulation in TypeScript, no engine. Runs are built from layered progression systems — upgrades, perks, augments, pacts, and evolutions — plus a seeded daily run and a leaderboard served by a small Fastify app. The whole thing is a PWA; the Android build is a Trusted Web Activity pointing at the same production URL, so gameplay changes reach Play testers with no new AAB, no upload, and no review.',
      architectureNote:
        'Canvas 2D render + simulation core (TypeScript, seeded RNG) → Fastify server for leaderboard and static hosting → Railway deploy → PWA served to the open web, itch.io as a packaged zip, and Google Play via a TWA wrapper over the same URL. A Discord bot handles release and daily-run announcements.',
      outcome:
        'Playable on the open web and itch.io, with closed testing live on Google Play. A single deploy updates every surface at once. Monetization is decided but deliberately not built yet: free, with a one-time supporter unlock rather than content gating.',
      lessons: [
        'Measure before tuning. Balance claims come from simulation probes, not vibes — but the bot player is much weaker than a strong human, so its numbers describe the bot, not the game. Saying which one you measured matters more than the number.',
        'Screenshot the canvas. Two bugs shipped that only a rendered image caught: a composite that was mathematically invisible against a near-black background, and white text surviving a color blend. Tests that assert state cannot see what the player sees.',
        'Derive lists, never duplicate them. Four separate bugs came from two places independently answering the same question — including two bits of code that disagreed about whether a phase was still part of the run, in opposite directions.',
        'TWA is the cheat code for solo mobile release. Wrapping the live site means store review is a one-time cost instead of a per-update tax; only the native wrapper itself needs a rebuild.',
        'Caching is the first suspect on mobile. The TWA does not navigate on resume, so backgrounding and returning keeps the old bundle in memory — a fix that looks broken on device is usually a stale cache, not bad code.',
      ],
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
