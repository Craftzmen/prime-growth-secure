export type ProcessStep = {
  num: string
  title: string
  desc: string
}

export const processSteps: ProcessStep[] = [
  {
    num: "1",
    title: "Discovery call",
    desc: "We learn how you operate today—tools, team size, and what a good month-end looks like for you.",
  },
  {
    num: "2",
    title: "Secure handoff",
    desc: "You grant access to your accounting software and banks. Everything is handled under strict confidentiality.",
  },
  {
    num: "3",
    title: "Baseline review",
    desc: "We review existing records, fix gaps, and agree on a reporting cadence before the first full close.",
  },
  {
    num: "4",
    title: "Monthly rhythm",
    desc: "Recurring close, payroll support as needed, and a standing check-in so nothing surprises you at year-end.",
  },
]
