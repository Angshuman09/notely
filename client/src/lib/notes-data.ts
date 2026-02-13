export interface Note {
    id: string
    title: string
    preview: string
    content: string
    date: string
    folder?: string
    isFavorite?: boolean
  }
  
  export const initialNotes: Note[] = [
    {
      id: "1",
      title: "Weekly Planning",
      preview:
        "Review Q1 goals and align priorities with the team. Set up milestones for the product launch.",
      content:
        "Review Q1 goals and align priorities with the team. Set up milestones for the product launch.\n\nKey objectives:\n- Finalize design system components\n- Complete user testing for v2\n- Ship onboarding flow by end of month\n\nAction items:\n1. Schedule sync with engineering leads\n2. Draft launch timeline document\n3. Review analytics dashboard for key metrics\n4. Prepare stakeholder presentation",
      date: "Today",
      folder: "Work",
      isFavorite: true,
    },
    {
      id: "2",
      title: "Design System Updates",
      preview:
        "New color tokens for the light theme. Updated button component with three new variants.",
      content:
        "New color tokens for the light theme. Updated button component with three new variants.\n\nChanges:\n- Added semantic color tokens (success, warning, info)\n- Button now supports ghost, outline, and link variants\n- Updated spacing scale to match 4px grid\n- Typography scale refined for better readability\n\nNext steps:\n- Update documentation\n- Create migration guide for v1 users\n- Add dark mode token mapping",
      date: "Yesterday",
      folder: "Design",
      isFavorite: true,
    },
    {
      id: "3",
      title: "Meeting Notes: Product Sync",
      preview:
        "Discussed roadmap priorities with the PM team. Key focus areas include performance and accessibility.",
      content:
        "Discussed roadmap priorities with the PM team. Key focus areas include performance and accessibility.\n\nAttendees: Sarah, Mike, Alex, Jordan\n\nTopics covered:\n- Performance optimization plan\n- Accessibility audit results\n- Mobile-first redesign proposal\n- API versioning strategy\n\nDecisions:\n- Prioritize Core Web Vitals improvements\n- Hire accessibility consultant for audit\n- Start mobile redesign in Q2",
      date: "Feb 9",
      folder: "Work",
    },
    {
      id: "4",
      title: "Reading List",
      preview:
        "Books to read this quarter: Thinking in Systems, The Design of Everyday Things, Atomic Habits.",
      content:
        'Books to read this quarter:\n\n1. "Thinking in Systems" by Donella Meadows\n   - Systems thinking, feedback loops\n   - Started: Jan 15\n\n2. "The Design of Everyday Things" by Don Norman\n   - UX principles, affordances\n   - On the shelf\n\n3. "Atomic Habits" by James Clear\n   - Habit formation, small changes\n   - Audiobook downloaded\n\n4. "Refactoring UI" by Adam Wathan & Steve Schoger\n   - Practical design tips\n   - PDF ready',
      date: "Feb 7",
      folder: "Personal",
      isFavorite: true,
    },
    {
      id: "5",
      title: "API Architecture Notes",
      preview:
        "REST vs GraphQL comparison for the new microservices. Consider tRPC for type-safe communication.",
      content:
        "REST vs GraphQL comparison for the new microservices. Consider tRPC for type-safe communication.\n\nREST Pros:\n- Simpler to implement\n- Better caching with HTTP standards\n- Widely understood\n\nGraphQL Pros:\n- Flexible queries\n- No over-fetching\n- Strong typing\n\ntRPC:\n- End-to-end type safety\n- No code generation\n- Great DX with TypeScript\n\nDecision: Use tRPC for internal services, REST for public API",
      date: "Feb 5",
      folder: "Work",
    },
    {
      id: "6",
      title: "Recipe: Sourdough Bread",
      preview:
        "Starter feeding schedule and baking instructions. Remember to autolyse for 30 minutes.",
      content:
        "Starter feeding schedule and baking instructions.\n\nIngredients:\n- 500g bread flour\n- 350g water\n- 100g active starter\n- 10g salt\n\nSchedule:\n1. 9:00 AM - Mix flour and water (autolyse 30 min)\n2. 9:30 AM - Add starter and salt\n3. 10:00 AM - First stretch and fold\n4. Every 30 min - Stretch and fold (4 total)\n5. 2:00 PM - Shape and place in banneton\n6. Refrigerate overnight\n7. Next morning - Bake at 450F in Dutch oven",
      date: "Feb 3",
      folder: "Personal",
    },
    {
      id: "7",
      title: "Workout Plan",
      preview:
        "Upper/lower split routine. Focus on progressive overload and proper recovery days.",
      content:
        "Upper/Lower Split - 4 days per week\n\nMonday (Upper):\n- Bench Press 4x6\n- Rows 4x8\n- OHP 3x8\n- Pull-ups 3xAMRAP\n- Bicep curls 3x12\n\nTuesday (Lower):\n- Squats 4x6\n- Romanian DL 4x8\n- Leg Press 3x10\n- Calf Raises 4x15\n\nThursday: Upper (variation)\nFriday: Lower (variation)\n\nNotes:\n- Increase weight when hitting top of rep range\n- 90-120s rest between compounds\n- Track all lifts in app",
      date: "Feb 1",
      folder: "Personal",
    },
  ]
  