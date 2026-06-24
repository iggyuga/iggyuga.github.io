export type Project = {
  slug: string
  title: string
  pitch: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
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
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
