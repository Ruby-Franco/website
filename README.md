# rubyfranco.dev

My personal portfolio: projects, experience, and a bit about me.

**Live site:** [rubyfranco.dev](https://rubyfranco.dev)

The landing page is a stack of folders (About Me, Portfolio, Experience, Extras). Clicking one scrolls to its section, and each section uses its folder's color. Every project has its own page with details, diagrams, and links to code and live demos.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) and React 19
- Tailwind CSS
- Statically generated project pages (`generateStaticParams`)
- Deployed on Vercel, with Vercel Speed Insights

## Project structure

```
src/app/
├── page.js                  # Home: folder landing + all sections
├── components/
│   ├── folder.js            # Landing page: headline and folder navigation
│   ├── sections.js          # Puts the sections together in order
│   ├── aboutme.js           # Bio, currently, toolbox, beyond code
│   ├── projects.js          # Project card grid
│   ├── experience.js        # Work history with category filters
│   └── extras.js            # Awards and leadership
├── data/projects.js         # Project content (one place to edit)
└── projects/[slug]/page.js  # Individual project pages
```

To add or edit a project, update `src/app/data/projects.js`. Its page is generated automatically.

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # production build
```

Note: stop `npm run dev` before running `npm run build`. They share the `.next` folder and will break each other.

## Contact

- GitHub: [Ruby-Franco](https://github.com/Ruby-Franco)
- LinkedIn: [ruby-franco](https://www.linkedin.com/in/ruby-franco/)
