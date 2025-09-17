Design a comprehensive filter section component for "The Explorimentalist" landing page using Next.js, Tailwind CSS, and ShadCN components.
Search Bar Component
Include:

Input field with search icon (lucide-react Search)
Clear button (X icon) that appears when typing
Live search matching blog post titles and content
Placeholder text: "Search experiments..."

Styling:

Container: relative w-full
Input: bg-white border-4 border-black rounded-none p-4 pl-12 pr-12 w-full text-lg font-black placeholder:text-gray-500 focus:ring-4 focus:ring-red-500 focus:border-red-500 transition-all uppercase tracking-wide
Search icon: absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-6 h-6
Clear button: absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer transition-colors w-6 h-6

Accessibility:

<label htmlFor="search"> with screen-reader-only class
Container with role="search"
aria-label="Search blog posts" on input
aria-label="Clear search" on clear button

Responsive:

Mobile: w-full with text-base p-3
Desktop (≥768px): w-full maintained with text-lg p-4
Touch targets: Min 44px height on mobile

Interactivity:

Focus ring: focus:ring-4 focus:ring-red-500
Clear button: Hidden by default, shows on input with opacity-0 to opacity-100
Debounced search: 300ms delay for performance
ESC key to clear search

Topic Select Component (ShadCN)
Include:

Select dropdown using ShadCN components
Options from DecapCMS categories
Default: "All Topics"
Categories: Technology, Design, Culture, Code, Philosophy

Styling:

SelectTrigger: bg-white border-4 border-black rounded-none p-4 w-full text-lg font-bold uppercase tracking-wide hover:bg-gray-100 data-[state=open]:ring-4 data-[state=open]:ring-red-500 data-[state=open]:border-red-500 transition-all
SelectContent: bg-white border-4 border-black rounded-none shadow-brutal
SelectItem: font-bold text-base uppercase hover:bg-black hover:text-white cursor-pointer transition-colors p-3
SelectValue: placeholder:text-gray-500

Accessibility:

aria-label="Filter by topic"
Keyboard navigation with arrow keys
ESC to close dropdown
Focus trap within dropdown

Responsive:

Mobile: w-full text-base p-3
Desktop (≥768px): w-full text-lg p-4
Dropdown max-height: max-h-60 with scroll

Interactivity:

Open/close: transition-all duration-200
Active state: Black background with white text
Selection indicator: Red accent bar
Reset option: "All Topics" clears filter

Year Select Component (ShadCN)
Include:

Select dropdown with dynamic years
Years extracted from blog post dates
Default: "All Years"
Reverse chronological order (2025 → 2020)

Styling:

SelectTrigger: bg-white border-4 border-black rounded-none p-4 w-full text-lg font-bold uppercase tracking-wide hover:bg-gray-100 data-[state=open]:ring-4 data-[state=open]:ring-red-500 data-[state=open]:border-red-500 transition-all
SelectContent: bg-white border-4 border-black rounded-none shadow-brutal
SelectItem: font-bold text-base uppercase hover:bg-black hover:text-white cursor-pointer transition-colors p-3
SelectValue: placeholder:text-gray-500

Accessibility:

aria-label="Filter by year"
Keyboard navigation support
Screen reader announcements for selections
Focus management on open/close

Responsive:

Mobile: w-full text-base p-3
Desktop (≥768px): w-full text-lg p-4
Consistent with topic select behavior

Interactivity:

Dynamic population from CMS data
Smooth dropdown animation
Selection persistence in URL params
Clear selection with "All Years"

Container Layout
Include:

Section wrapper with brutalist borders
Grid layout for filter components
Active filter indicators
Results count display

Styling:

Wrapper: bg-gray-100 py-12 lg:py-16 border-t-8 border-b-8 border-black
Inner: max-w-7xl mx-auto px-6 lg:px-12
Title: text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8
Grid: grid grid-cols-1 md:grid-cols-12 gap-6
Search: col-span-12
Selects: col-span-12 md:col-span-6 lg:col-span-6

Accessibility:

Semantic HTML with <section> and <form>
Proper heading hierarchy
Fieldset grouping for filters
Live region for results count

Responsive:

Mobile: Single column stack
Tablet (≥768px): 2-column for selects
Desktop (≥1024px): Optimized spacing
Breakpoint consistency across all elements

Interactivity:

Combined filter logic (AND operation)
URL parameter synchronization
Filter reset button when active
Loading states during filtering
Smooth transitions between states

Make it fully responsive with brutalist design principles.