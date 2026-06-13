export const experiences = [
  {
    company: 'CareerGyan',
    logoWebp: null,
    logoFallback: null,
    position: 'Full Stack Developer - Freelance',
    duration: <b>Apr 2026 - Present</b>,
    website: 'https://careergyan.in/',
    description: (
      <>
        <ul className="list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--signal-deep))]">
          <li>Built end-to-end a <b className="text-[hsl(var(--ink))]">career guidance platform</b> for Indian students using <b className="text-[hsl(var(--ink))]">Laravel, MySQL, and Blade</b>, featuring aptitude testing, career databases, and dynamic career path pages.</li>
          <li>Integrated <b className="text-[hsl(var(--ink))]">OpenAI GPT-4o-mini chatbot</b> with session-authenticated access and backend rate-limiting middleware to prevent API abuse; synced quota state asynchronously on the frontend.</li>
          <li>Engineered a <b className="text-[hsl(var(--ink))]">global search engine</b> with debounced AJAX autocomplete querying across career fields, streams, and professions with graceful routing fallback.</li>
          <li>Set up <b className="text-[hsl(var(--ink))]">GitHub Actions CI/CD pipeline</b> for automated deployment to MilesWeb shared hosting.</li>
        </ul>
      </>
    ),
    techStack: ['Laravel', 'MySQL', 'Blade', 'OpenAI', 'GitHub Actions'],
  }
]
