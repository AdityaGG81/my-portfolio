import { Trophy, Medal } from 'lucide-react'

/** Honors and awards entries for the Honors & Awards section. */
export const awardsData = [
  {
    title: 'Shortlisted in SIH 2025 (Waitlisted)',
    organization: 'Smart India Hackathon',
    description: (
      <>
        Shortlisted for <b className="text-[hsl(var(--ink))]">IndraLink</b>, selected from 181+ teams nationwide; led a team of 6.
      </>
    ),
    icon: Trophy,
  },
  {
    title: (
      <>
        Best Performer at Equinox <br />
        Assemble Tech Competition
      </>
    ),
    organization: 'Equinox',
    description: (
      <>
        Recognized as <b className="text-[hsl(var(--ink))]">Best Performer</b> for PC hardware assembly and configuration in 2024.
      </>
    ),
    icon: Medal,
  },
]
