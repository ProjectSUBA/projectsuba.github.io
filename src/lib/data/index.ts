import type {
  Publication,
  Initiative,
  Programme,
  NewsItem,
  Stat,
  Testimonial,
  GalleryEntry,
  ValueItem,
} from '@/lib/types';

/* ------------------------------------------------------------------ *
 *  All editable content lives here. See CONTENT_GUIDE.md for how to
 *  add or change entries. Dates are ISO (YYYY-MM-DD).
 * ------------------------------------------------------------------ */

export const publications: Publication[] = [
  {
    id: 'pub-001',
    slug: 'urban-mobility-shillong-policy-framework',
    title: 'Urban Mobility in Shillong: A Policy Framework for Sustainable Transport',
    date: '2025-03-15',
    category: 'Policy Brief',
    author: 'Symboh Research Team',
    summary: 'An assessment of traffic congestion, public transport gaps and actionable policy proposals for Shillong’s mobility challenges, grounded in primary data collected across 12 wards.',
    wing: 'Symboh',
    readTime: '12 min',
    tags: ['Mobility', 'Urban Policy', 'Shillong'],
    body: [
      {
        heading: 'The problem',
        paragraphs: [
          'Shillong was designed for a population a fraction of its current size. Streets laid out for foot and cart traffic now carry a daily volume of private vehicles the city was never built to hold. The result is a city where a five-kilometre journey during peak hours can take forty minutes, and where public transport has not kept pace with demand.',
          'This brief is based on field surveys conducted across twelve wards between October 2024 and February 2025, combining traffic counts, commuter interviews and route-time logging by our research volunteers.',
        ],
      },
      {
        heading: 'What we found',
        paragraphs: [
          'Three findings stood out. First, over sixty percent of surveyed commuters reported no viable public transport option for their daily route, forcing reliance on private vehicles or shared taxis with unpredictable wait times. Second, peak congestion is concentrated at a small number of junctions, which means targeted intervention could have outsized impact rather than requiring a city-wide infrastructure overhaul. Third, pedestrian infrastructure is close to absent on several arterial roads, despite high foot traffic.',
        ],
        quote: {
          text: 'We are not proposing a master plan. We are proposing five interventions at five junctions, each independently fundable and independently measurable.',
          attribution: 'Symboh Research Team, internal review note',
        },
      },
      {
        heading: 'What we recommend',
        paragraphs: [
          'The brief proposes a phased approach: junction-level signal timing studies, a pilot shared-shuttle route connecting two of the highest-demand corridors, and a pedestrian safety audit of three arterial roads. None of these require large capital outlay, and all are designed to produce measurable before and after data within a single budget cycle.',
          'A full methodology section, ward-by-ward data tables and a proposed implementation timeline are available in the complete brief, submitted to the Shillong Municipal Board in March 2025.',
        ],
      },
    ],
  },
  {
    id: 'pub-002',
    slug: 'plastic-recovery-khasi-hills-informal-economy',
    title: 'Plastic Recovery in the Khasi Hills: Mapping the Informal Waste Economy',
    date: '2025-02-01',
    category: 'Research Paper',
    author: 'SUBA & Comma Initiative',
    summary: 'A ground-level mapping of waste flows, informal collectors and recovery infrastructure across Greater Shillong, with recommendations for circular economy integration.',
    wing: 'Comma',
    readTime: '18 min',
    tags: ['Circular Economy', 'Waste', 'Khasi Hills'],
    body: [
      {
        heading: 'Why we mapped this',
        paragraphs: [
          'Most policy conversations about waste management in Shillong start from the assumption that an informal recovery economy does not exist, or is too fragmented to engage with. Our fieldwork found the opposite: a functioning, if invisible, network of waste pickers, scrap dealers and small recycling operators already recovering a meaningful share of the city’s plastic waste, without any institutional support.',
        ],
      },
      {
        heading: 'The network we found',
        paragraphs: [
          'Over four months, our researchers interviewed waste pickers and scrap dealers across six collection points in Greater Shillong, tracing where plastic actually goes after it leaves a household bin. We found a multi-tier system: individual collectors sell to neighbourhood aggregators, who sell to larger scrap dealers, who in turn sell sorted plastic to recyclers, some local and some as far as Guwahati.',
          'This system recovers real volume. But it operates with no safety equipment, no price stability and no formal recognition, leaving collectors vulnerable and the system itself fragile.',
        ],
      },
      {
        heading: 'What integration could look like',
        paragraphs: [
          'We do not recommend replacing this network. We recommend strengthening it. Formal recognition, basic safety equipment and a stable price floor for recovered plastic would meaningfully improve both recovery volume and the lives of the people doing this work. The full paper includes a proposed pilot structure modelled on similar interventions in other Northeastern cities.',
        ],
      },
    ],
  },
  {
    id: 'pub-003',
    slug: 'environmental-education-meghalaya-schools',
    title: 'Environmental Education in Meghalaya Schools: Gaps, Opportunities, and a Pilot Curriculum',
    date: '2025-01-10',
    category: 'Report',
    author: 'Symboh Education Working Group',
    summary: 'Drawing on surveys of 340 students across 6 Shillong schools, this report identifies gaps in environmental education and proposes a culturally grounded curriculum for implementation.',
    wing: 'Symboh',
    readTime: '22 min',
    tags: ['Education', 'Environment', 'Meghalaya'],
    body: [
      {
        heading: 'What we set out to learn',
        paragraphs: [
          'Environmental education exists on paper in most Meghalaya school curricula. We wanted to know what it looks like in practice, and whether it connects to the ecological knowledge students already carry from their communities.',
          'We surveyed 340 students across six Shillong schools, supplemented by interviews with 14 teachers and three sessions observing existing environmental science classes.',
        ],
      },
      {
        heading: 'The gap we found',
        paragraphs: [
          'Most environmental curricula taught in Meghalaya schools are generic. They are built for a national syllabus with no reference to Khasi ecological knowledge, local biodiversity, or traditional land stewardship practices like sacred groves or living root bridge cultivation. Students could describe global concepts like the carbon cycle in textbook terms, but few could connect those concepts to the ecosystems outside their own classroom windows.',
        ],
        quote: {
          text: 'We are teaching children about rainforests they will never see, in a state that contains some of the most biodiverse forest in South Asia.',
          attribution: 'Interview with a Shillong secondary school science teacher, 2024',
        },
      },
      {
        heading: 'The pilot we propose',
        paragraphs: [
          'The report outlines a supplementary curriculum module, six sessions designed to run alongside existing science classes, that grounds core ecological concepts in Khasi Hills examples: local watershed health, indigenous tree species and traditional sustainable practices. The module was piloted with 38 students in one school in late 2024, with positive teacher feedback. The full report includes the session plans and pilot evaluation.',
        ],
      },
    ],
  },
  {
    id: 'pub-004',
    slug: 'suba-field-letter-vol-1',
    title: 'The SUBA Field Letter, Vol. I',
    date: '2024-12-01',
    category: 'Newsletter',
    author: 'SUBA Editorial Team',
    summary: 'Our first published newsletter: clean-up drive notes from Ward 16, a reflection on the Mawkhar tree plantation, and notes from the founding year.',
    wing: 'SUBA',
    readTime: '8 min',
    tags: ['Community', 'Shillong', 'Field Notes'],
    body: [
      {
        heading: 'From the founding year',
        paragraphs: [
          'This is our first newsletter, and it feels strange to write “Vol. I” after a year that didn’t feel like a volume of anything. It felt like a lot of Saturdays. Clean-up drives that started with four people and grew to forty. A tree plantation where half the saplings were planted by people who had never planted a tree before. A logo that took a long time to settle into its final shape.',
          'We are publishing this newsletter because we think the small, specific things are worth writing down before they become “the early days” in someone’s memory instead of an actual record.',
        ],
      },
      {
        heading: 'Ward 16, so far',
        paragraphs: [
          'Our Ward 16 clean-up series has now run for six drives since January 2024, with a growing crew of regular volunteers and one junction that genuinely looks different than it did a year ago. The people who live near that junction have started reporting illegal dumping to us directly, which feels like the actual win, more than any kilogram count.',
        ],
      },
      {
        heading: 'What is next',
        paragraphs: [
          'In 2025 we are formally launching Symboh, our policy and research wing, and building out Comma, our circular economy initiative. Both have been working informally until now. This is the year they get proper names and structure. More on both in the next letter.',
        ],
      },
    ],
  },
  {
    id: 'pub-005',
    slug: 'solid-waste-management-citizen-led-model',
    title: 'Solid Waste Management in Shillong: Towards a Citizen-Led Model',
    date: '2024-10-20',
    category: 'White Paper',
    author: 'Symboh Research Team',
    summary: 'An evidence-based white paper proposing a decentralised, community-first approach to solid waste management, with Shillong as the pilot geography.',
    wing: 'Symboh',
    readTime: '25 min',
    tags: ['Waste Management', 'Policy', 'Urban'],
  },
  {
    id: 'pub-006',
    slug: 'living-root-bridges-bioregional-knowledge',
    title: 'Living Root Bridges and Bioregional Knowledge: What Development Can Learn',
    date: '2024-09-05',
    category: 'Research Paper',
    author: 'SUBA Research Team',
    summary: 'Exploring the traditional ecological knowledge embedded in Khasi living root bridge systems, and what these bioregional practices reveal about sustainable development at community scale.',
    wing: 'SUBA',
    readTime: '20 min',
    tags: ['TEK', 'Bioregional', 'Khasi Heritage'],
  },
];

export const initiatives: Initiative[] = [
  {
    id: 'ward16-cleanup',
    title: 'Ward 16 Restoration Series',
    tagline: 'Regular clean-up drives, Ward 16, Shillong',
    description: 'A recurring community clean-up and awareness programme running since January 2024, with a drive roughly every two months. 847 kg of waste recovered across 9 drives so far.',
    wing: 'Comma',
    status: 'Active',
    area: 'Waste Recovery',
    href: '/our-work',
    accentColor: '#259745',
  },
  {
    id: 'mawkhar-plantation',
    title: 'The Mawkhar Plantation',
    tagline: 'Native tree reforestation, Upper Shillong',
    description: 'A reforestation initiative using indigenous Khasi Hills species. 312 saplings planted across four plantation days, with 94% of the first 80 still alive at the six-month check.',
    wing: 'Comma',
    status: 'Active',
    area: 'Reforestation',
    href: '/our-work',
    accentColor: '#1A5C2E',
  },
  {
    id: 'symboh-schools',
    title: 'Schools Environmental Curriculum',
    tagline: 'Environmental education pilot in Shillong schools',
    description: 'A supplementary curriculum designed with educators and rooted in Meghalayan ecology and traditional knowledge. Piloted with 38 students in one school; the supporting survey covered 340 students across six schools.',
    wing: 'Symboh',
    status: 'Active',
    area: 'Education',
    href: '/symboh',
    accentColor: '#1F8EC8',
  },
  {
    id: 'shillong-mobility-study',
    title: 'Shillong Mobility Study',
    tagline: 'Primary research on urban transport',
    description: 'An ongoing data collection and analysis project mapping commute patterns, public transport usage and infrastructure gaps across Shillong.',
    wing: 'Symboh',
    status: 'Active',
    area: 'Urban Policy',
    href: '/symboh',
    accentColor: '#FEC110',
  },
];

export const commaProgrammes: Programme[] = [
  {
    id: 'ward16',
    title: 'Ward 16 Restoration Series',
    status: 'Active',
    since: 'Jan 2024',
    metric: '847 kg',
    context: 'waste recovered',
    description: 'Clean-up drives every two months at Ward 16, Shillong, with before and after documentation and volunteer recognition.',
    color: '#259745',
  },
  {
    id: 'plastic',
    title: 'Plastic Recovery Programme',
    status: 'Active',
    since: 'Mar 2024',
    metric: '420+ kg',
    context: 'plastic separated',
    description: 'Structured plastic collection with informal waste pickers and recovery facilities in Shillong.',
    color: '#1F8EC8',
  },
  {
    id: 'plantation',
    title: 'Mawkhar Native Tree Plantation',
    status: 'Active',
    since: 'Sep 2024',
    metric: '312 saplings',
    context: '94% of the first 80 alive at 6 months',
    description: 'Reforestation using indigenous Khasi Hills species, with community stewardship.',
    color: '#1A5C2E',
  },
  {
    id: 'upcycle',
    title: 'Upcycling Workshops',
    status: 'Planned',
    metric: 'In planning',
    context: 'community skill-building',
    description: 'Hands-on workshops turning recovered materials into usable products.',
    color: '#F6A225',
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Ward 16 clean-up, drive 9: 94 kg recovered in 3 hours',
    type: 'Update',
    date: '2025-05-24',
    description: 'Forty-two volunteers, two Khoh baskets and a clear morning. The ninth Ward 16 drive left the junction a little cleaner again.',
    location: 'Ward 16, Shillong',
  },
  {
    id: 'n2',
    title: 'Symboh at the Meghalaya Urban Forum',
    type: 'Event',
    date: '2025-06-10',
    description: 'Our mobility research presented at the Meghalaya Urban Forum, alongside policymakers and researchers from across the state.',
    location: 'Shillong',
  },
  {
    id: 'n3',
    title: 'Call for Research Collaborators, Round 2',
    type: 'Announcement',
    date: '2025-05-15',
    description: 'Symboh is opening applications for research collaborators in environmental data analysis, urban governance and education policy.',
  },
  {
    id: 'n4',
    title: 'Mawkhar plantation: six-month check',
    type: 'Update',
    date: '2025-03-14',
    description: 'Of the first 80 saplings, 94% had survived at six months. Local volunteers measured growth against the original stake markers.',
    location: 'Mawkhar, Upper Shillong',
  },
  {
    id: 'n5',
    title: 'SUBA Field Letter Vol. I is out',
    type: 'Announcement',
    date: '2024-12-01',
    description: 'Our first newsletter is published, with field notes, numbers and reflections from our founding year.',
  },
  {
    id: 'n6',
    title: 'Volunteer Orientation, July 2025',
    type: 'Event',
    date: '2025-07-05',
    description: 'New to SUBA? Join our July orientation session to learn about ongoing projects, how to get involved and what to expect.',
    location: 'Shillong (venue to be confirmed)',
  },
];

/** Homepage and Comma figures. Counts that exist in other lists are computed so they cannot drift. */
export const stats: Stat[] = [
  { value: '847 kg', label: 'Waste recovered', context: 'Across 9 clean-up drives, Jan 2024 to May 2025' },
  { value: '340', label: 'Students surveyed', context: 'Across 6 Shillong schools' },
  { value: '312', label: 'Trees planted', context: '94% of the first 80 alive at 6 months' },
  { value: String(publications.length), label: 'Publications', context: 'Briefs, papers, reports and a newsletter' },
  { value: '42+', label: 'Active volunteers', context: 'Across all initiatives' },
  { value: '2', label: 'Wings', context: 'Symboh and Comma' },
];

/** The short stat bar in the homepage hero. */
export const heroStats: Stat[] = [
  { value: '847 kg', label: 'waste recovered' },
  { value: '9', label: 'clean-up drives' },
  { value: '312', label: 'trees planted' },
  { value: String(publications.length), label: 'publications' },
];

export const focusAreas = [
  { icon: 'leaf', title: 'Environment', description: 'Forest conservation, biodiversity and ecological restoration grounded in Meghalayan landscapes.', color: '#259745' },
  { icon: 'community', title: 'Civic Action', description: 'Community mobilisation, clean-up drives and local advocacy in Shillong’s wards.', color: '#1A5C2E' },
  { icon: 'search', title: 'Research', description: 'Evidence-based analysis of urban governance, mobility, waste and education in the Khasi Hills.', color: '#1F8EC8' },
  { icon: 'book', title: 'Education', description: 'Curriculum development, school partnerships and youth-led environmental literacy.', color: '#FEC110' },
  { icon: 'recycle', title: 'Circular Economy', description: 'Plastic recovery, upcycling and waste infrastructure that works for Meghalaya.', color: '#F6A225' },
  { icon: 'document', title: 'Policy', description: 'Policy briefs and research shared with state government, urban bodies and educational institutions.', color: '#1A5C2E' },
];

export const symbohResearchAreas = [
  { title: 'Urban Mobility & Transport', description: 'Traffic, public transport gaps and infrastructure analysis across Shillong.' },
  { title: 'Solid Waste & Governance', description: 'Policy mapping and community-led models for waste management.' },
  { title: 'Environmental Education', description: 'Curriculum research and school partnership frameworks.' },
  { title: 'Urban Development', description: 'Land use, housing and planning research for Meghalayan cities.' },
  { title: 'Data & Civic Analytics', description: 'Open data, GIS and civic data pipelines for the Northeast.' },
  { title: 'Policy & Governance', description: 'Policy briefs, submissions and dialogue with government bodies.' },
];

export const symbohMethods = [
  { title: 'Primary data first', body: 'We collect our own data before citing secondary sources.' },
  { title: 'Cited and traceable', body: 'We footnote our claims and document our datasets, so anyone can check our working.' },
  { title: 'Community-validated', body: 'Findings are shared with the communities they describe before publication.' },
  { title: 'Open access', body: 'Our research is free to read. Meghalaya’s problems should not sit behind paywalls.' },
];

/** The five qualities SUBA holds itself to. Shown on the About page. */
export const values: ValueItem[] = [
  { trait: 'Rooted', description: 'In the land, language and people of Meghalaya.' },
  { trait: 'Purposeful', description: 'Deliberate, and never rushed, generic or borrowed.' },
  { trait: 'Hopeful', description: 'Acting in the face of real problems without sliding into doom.' },
  { trait: 'Community-first', description: 'We credit, we include, and we decide together.' },
  { trait: 'Action-oriented', description: 'Real work over mission statements.' },
];

/**
 * Testimonials stay empty until there are real, consented quotes. The homepage
 * section hides itself while this list is empty. Example of the format:
 *
 * {
 *   id: 't1',
 *   quote: 'The words the person said or approved.',
 *   name: 'Their full name',
 *   role: 'Their role',
 *   affiliation: 'Their organisation (optional)',
 *   category: 'Volunteer',
 * },
 */
export const testimonials: Testimonial[] = [];

export const galleryEntries: GalleryEntry[] = [
  {
    id: 'ward16-drive-9',
    title: 'Ward 16 Clean-Up, Drive 9',
    date: '2025-05-24',
    location: 'Ward 16 Junction, Shillong',
    wing: 'Comma',
    summary: 'The ninth drive in our Ward 16 series. Forty-two volunteers, two Khoh baskets, and a junction that has visibly changed over sixteen months of repeated effort.',
    stats: [
      { label: 'Waste recovered', value: '94 kg' },
      { label: 'Volunteers', value: '42' },
      { label: 'Duration', value: '3 hours' },
    ],
    before: { caption: 'Site condition before the drive: accumulated waste at the junction, photographed the same morning.' },
    during: { caption: 'Volunteers sorting recovered waste by category for separation into recycling streams.' },
    after: { caption: 'Same junction, three hours later. Before and after shots are taken from the identical angle every time.' },
    reflection: 'This was our ninth drive at this junction, and the difference in baseline waste between drive one and drive nine is the real story. Less waste shows up between drives now, because residents nearby have started reporting dumping directly to us.',
    credits: ['Photography: Volunteer team'],
  },
  {
    id: 'mawkhar-plantation-day',
    title: 'Mawkhar Plantation Day',
    date: '2024-09-14',
    location: 'Mawkhar, Upper Shillong',
    wing: 'Comma',
    summary: 'The founding plantation day for our Mawkhar reforestation series: 80 saplings of indigenous species planted by first-time volunteers.',
    stats: [
      { label: 'Saplings planted', value: '80' },
      { label: 'Species', value: '4 native' },
      { label: 'Volunteers', value: '28' },
    ],
    before: { caption: 'The plantation site before work began, cleared and marked for spacing.' },
    during: { caption: 'A volunteer planting their first tree, briefed on depth and spacing beforehand.' },
    after: { caption: 'Saplings staked and name-tagged for individual monitoring.' },
    reflection: 'This was the first of four plantation days at this site. We log GPS coordinates for every sapling so survival can be tracked individually rather than estimated in aggregate.',
    credits: ['Photography: Volunteer team'],
  },
  {
    id: 'mawkhar-6month-followup',
    title: 'Mawkhar: 6 Month Survival Check',
    date: '2025-03-14',
    location: 'Mawkhar, Upper Shillong',
    wing: 'Comma',
    summary: 'Six months after the founding plantation day, a return visit to check survival and document growth.',
    stats: [
      { label: 'Survival rate', value: '94%' },
      { label: 'Saplings checked', value: '80' },
      { label: 'Avg. growth', value: '+38 cm' },
    ],
    before: { caption: 'Site overview at the six-month mark, showing canopy density relative to the planting day.' },
    during: { caption: 'A local volunteer measuring sapling growth against the original stake markers.' },
    after: { caption: 'Close detail of new growth on one of the surviving saplings.' },
    reflection: 'People want to know if their tree survived. That is why we follow up at regular intervals, not just on planting day.',
  },
  {
    id: 'schools-pilot-session',
    title: 'Environmental Curriculum: Pilot Session',
    date: '2024-11-08',
    location: 'Partner School, Shillong',
    wing: 'Symboh',
    summary: 'The first delivery of our supplementary environmental education module, piloted with a single class before any wider rollout.',
    stats: [
      { label: 'Students', value: '38' },
      { label: 'Sessions', value: '6' },
      { label: 'Schools (pilot)', value: '1' },
    ],
    before: { caption: 'Classroom setup before the session, with materials prepared around local ecological examples.' },
    during: { caption: 'Students working on a local watershed mapping exercise.' },
    after: { caption: 'Student-created material from the session, displayed in the classroom afterward.' },
    reflection: 'The pilot ran in one school first. We wanted teacher feedback before scaling, not after.',
  },
];
