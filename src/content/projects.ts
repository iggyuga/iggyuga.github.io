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
    slug: 'options-scanner',
    title: 'options-scanner',
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
        'Scanner → Strategy evaluator → Backtester → Executor → Trade logger → Discord alert. Each stage is decoupled — the backtester doesn\'t know about the executor, the logger doesn\'t care what triggered it. // TODO: add architecture diagram',
      outcome:
        // TODO: replace with real numbers once you're comfortable sharing them
        'The bot has been running live since early 2024. It operates on a cash account to avoid PDT constraints. Win rate and P&L data are logged per-trade — // TODO: add real trade log highlights here.',
      lessons: [
        'PDT rule: started with a margin account, hit the 3-trade limit inside a week. Switched to a cash account — slower to deploy capital but eliminates the rule entirely.',
        'Trust the backtest: the few trades I\'ve manually overridden have underperformed the bot\'s selections. The emotional override is almost always wrong.',
        'The Claude integration is for analysis, not execution. The scanner sends a plain-language summary of each setup — Greeks, backtest results, market context — to Claude, which writes a narrative review. Claude doesn\'t decide whether to trade. It reads. The decision logic is deterministic Python.',
        'Broker API reliability matters more than you think. Tradier has been solid; the one outage I hit taught me to build retry logic from the start, not as an afterthought.',
      ],
    },
  },
  {
    slug: 'hu-bot',
    title: 'hu-bot',
    pitch:
      'A Slack bot that knows where everything is — internal docs on demand, on a path toward conversational querying.',
    tags: ['Node.js', 'Bolt for JS', 'Slack', 'REST'],
    gradient: 'from-blue-900/40 to-purple-900/30',
    meta: {
      role: 'Solo — design, build, maintain',
      timeframe: '2022 – present',
      stack: ['Node.js', 'Bolt for JavaScript', 'Slack Events API', 'REST integrations'],
    },
    caseStudy: {
      problem:
        'Team docs live in five places. Someone asks where the deployment runbook is. Someone else asks the same question six weeks later. The institutional knowledge is all there — it\'s just scattered, and finding it takes longer than just asking a person.',
      approach:
        'Bolt for JavaScript handles the Slack event plumbing. I built a category system: `/docs [category]` returns a curated list of links with short descriptions. No vector search, no embeddings — just well-organized content that\'s actually maintained. The focus was on making it fast to use and cheap to run, not impressive to demo.',
      architectureNote:
        'Slack event → Bolt middleware → category router → formatted Block Kit response → Slack. Integrations with internal REST APIs pull live data for a handful of command types. // TODO: add architecture sketch',
      outcome:
        'In daily use by the team. Reduced repeat questions noticeably in the first month. Hard to put a number on "time saved asking where things are" but the signal is clear in the channels.',
      lessons: [
        'Bolt over Hubot: Hubot is legacy at this point. Bolt is actively maintained by Slack, has first-class TypeScript support, and the event model is much cleaner.',
        'The no-API-key constraint: the team wanted to extend the bot with conversational querying but didn\'t want to pay for OpenAI. GitHub Models (free for GitHub users) and local Ollama are the two options on the roadmap.',
        'MCP is the right next step: Model Context Protocol would let the bot query the actual doc sources directly instead of maintaining a hand-curated list. That\'s the plan once a zero-cost LLM backend is wired in.',
        'Curated beats automated at this scale. A manually maintained list of 40 well-described links beats a RAG pipeline over 400 poorly-maintained ones.',
      ],
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
