import type {
  FieldEntry,
  LedgerItem,
  NewsItem,
  Programme,
  Project,
  Publication,
  TeamMember,
  ValueItem,
} from '@/lib/types';

/* ------------------------------------------------------------------ *
 *  All editable content lives here. See CONTENT_GUIDE.md for how to
 *  add or change entries. Dates are ISO (YYYY-MM-DD).
 * ------------------------------------------------------------------ */

/**
 * Headline figures, defined once so the same number can never disagree with
 * itself in two places. Edit a figure here and every page that uses it follows.
 */
const F = {
  wasteKg: '847 kg',
  drives: '9',
  saplings: '312',
  firstCohort: '80',
  survival: '94%',
  surveyed: '340',
  pilot: '38',
  wards: '12',
};

export const publications: Publication[] = [
  {
    id: 'pub-001',
    slug: 'urban-mobility-shillong-policy-framework',
    title: 'Urban Mobility in Shillong: A Policy Framework for Sustainable Transport',
    date: '2025-03-15',
    category: 'Policy Brief',
    author: 'Symboh Research Team',
    kind: 'summary',
    summary: 'An assessment of traffic congestion, public transport gaps and policy proposals for Shillong’s mobility challenges, based on primary data collected across 12 wards.',
    wing: 'Symboh',
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
          'A full methodology section, ward-by-ward data tables and a proposed implementation timeline are in the complete brief, which was submitted to the Shillong Municipal Board in March 2025.',
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
    kind: 'summary',
    summary: 'A ground-level mapping of waste flows, informal collectors and recovery infrastructure across Greater Shillong, with recommendations for circular economy integration.',
    wing: 'Comma',
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
    kind: 'summary',
    summary: `Drawing on surveys of ${F.surveyed} students across 6 Shillong schools, this report identifies gaps in environmental education and proposes a curriculum grounded in the Khasi Hills.`,
    wing: 'Symboh',
    tags: ['Education', 'Environment', 'Meghalaya'],
    body: [
      {
        heading: 'What we set out to learn',
        paragraphs: [
          'Environmental education exists on paper in most Meghalaya school curricula. We wanted to know what it looks like in practice, and whether it connects to the ecological knowledge students already carry from their communities.',
          `We surveyed ${F.surveyed} students across six Shillong schools, supplemented by interviews with 14 teachers and three sessions observing existing environmental science classes.`,
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
          `The report outlines a supplementary curriculum module, six sessions designed to run alongside existing science classes, that grounds core ecological concepts in Khasi Hills examples: local watershed health, indigenous tree species and traditional sustainable practices. The module was piloted with ${F.pilot} students in one school in late 2024, with positive teacher feedback. The full report includes the session plans and pilot evaluation.`,
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
    kind: 'full',
    summary: 'Our first newsletter: notes from the Ward 16 clean-ups, a reflection on the Mawkhar plantation, and thoughts from our first year.',
    wing: 'SUBA',
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
    tags: ['Waste Management', 'Policy', 'Urban'],
  },
  {
    id: 'pub-006',
    slug: 'living-root-bridges-bioregional-knowledge',
    title: 'Living Root Bridges and Bioregional Knowledge: What Development Can Learn',
    date: '2024-09-05',
    category: 'Research Paper',
    author: 'SUBA Research Team',
    summary: 'Explores the traditional ecological knowledge in Khasi living root bridge systems, and what these bioregional practices show about sustainable development at community scale.',
    wing: 'SUBA',
    tags: ['TEK', 'Bioregional', 'Khasi Heritage'],
  },
];

/** The four projects. Each gets its own page at /our-work/<id>. */
export const projects: Project[] = [
  {
    id: 'ward16-cleanup',
    title: 'Ward 16 clean-ups',
    wing: 'Comma',
    place: 'Ward 16, Shillong',
    since: 'January 2024',
    status: 'Active',
    summary: 'Community clean-up drives at a junction in Ward 16, about one every two months.',
    description: [
      'The Ward 16 series started in January 2024. A drive takes place roughly every two months: volunteers collect waste at the junction, sort it by type, and photograph the site from the same angle before and after.',
      `By May 2025 there had been ${F.drives} drives and ${F.wasteKg} of waste collected. People who live near the junction have started reporting illegal dumping to us directly, which we count as a result too.`,
    ],
    facts: [
      { label: 'Waste collected', value: F.wasteKg, note: `Total across ${F.drives} drives, January 2024 to May 2025.` },
      { label: 'Drives', value: F.drives, note: 'Roughly one every two months.' },
      { label: 'Latest drive', value: '94 kg', note: '24 May 2025. 42 volunteers, 3 hours.' },
    ],
    publicationSlugs: ['suba-field-letter-vol-1'],
  },
  {
    id: 'mawkhar-plantation',
    title: 'Mawkhar plantation',
    wing: 'Comma',
    place: 'Mawkhar, Upper Shillong',
    since: 'September 2024',
    status: 'Active',
    summary: 'Reforestation with native Khasi Hills species, with every sapling tagged and tracked.',
    description: [
      `The first plantation day was on 14 September 2024, when 28 volunteers planted ${F.firstCohort} saplings of four native species, many of them first-time planters. Three more plantation days followed, bringing the total to ${F.saplings} saplings.`,
      `Each sapling is staked, name-tagged and logged with GPS coordinates, so survival can be checked sapling by sapling. At the six-month check on 14 March 2025, ${F.survival} of the first ${F.firstCohort} were alive.`,
    ],
    facts: [
      { label: 'Saplings planted', value: F.saplings, note: 'Across four plantation days.' },
      { label: 'Survival at six months', value: F.survival, note: `Of the first ${F.firstCohort} saplings, checked 14 March 2025. It does not cover the later plantings.` },
      { label: 'Average growth', value: '+38 cm', note: `First ${F.firstCohort} saplings, measured at six months.` },
    ],
    publicationSlugs: ['suba-field-letter-vol-1'],
  },
  {
    id: 'symboh-schools',
    title: 'Environmental education pilot',
    wing: 'Symboh',
    place: 'Partner schools, Shillong',
    since: 'November 2024',
    status: 'Active',
    summary: 'A six-session environmental module built around the Khasi Hills, piloted in one school.',
    description: [
      `Symboh surveyed ${F.surveyed} students across six Shillong schools and found that environmental education is mostly generic, with little link to Khasi ecology or local land practices. In response we wrote a six-session module and piloted it with ${F.pilot} students in one school in November 2024.`,
      'Teacher feedback on the pilot was positive. The full report includes the session plans and the pilot evaluation.',
    ],
    facts: [
      { label: 'Students surveyed', value: F.surveyed, note: 'In six Shillong schools, for the report published January 2025.' },
      { label: 'Pilot', value: `${F.pilot} students`, note: 'One school, six sessions, November 2024.' },
    ],
    publicationSlugs: ['environmental-education-meghalaya-schools'],
  },
  {
    id: 'shillong-mobility-study',
    title: 'Shillong mobility study',
    wing: 'Symboh',
    place: 'Twelve wards, Shillong',
    since: 'October 2024',
    status: 'Active',
    summary: 'Field research on how people get around Shillong and where the system fails them.',
    description: [
      `Between October 2024 and February 2025 our researchers surveyed ${F.wards} wards, combining traffic counts, commuter interviews and route-time logging. The findings became a policy brief, which was submitted to the Shillong Municipal Board in March 2025.`,
      'The study is ongoing.',
    ],
    facts: [
      { label: 'Wards surveyed', value: F.wards, note: 'Field surveys, October 2024 to February 2025.' },
      { label: 'Policy brief', value: 'March 2025', note: 'Submitted to the Shillong Municipal Board.' },
    ],
    publicationSlugs: ['urban-mobility-shillong-policy-framework'],
  },
];

export const commaProgrammes: Programme[] = [
  {
    id: 'ward16',
    title: 'Ward 16 clean-ups',
    status: 'Active',
    since: 'Jan 2024',
    metric: F.wasteKg,
    context: `waste collected across ${F.drives} drives`,
    description: 'Clean-up drives every two months at Ward 16, with before and after documentation.',
    projectId: 'ward16-cleanup',
  },
  {
    id: 'plastic',
    title: 'Plastic recovery',
    status: 'Active',
    since: 'Mar 2024',
    metric: '420+ kg',
    context: 'plastic separated by this programme',
    description: 'Structured plastic collection with informal waste pickers and recovery facilities in Shillong. Tracked separately from the clean-up drive totals.',
  },
  {
    id: 'plantation',
    title: 'Mawkhar plantation',
    status: 'Active',
    since: 'Sep 2024',
    metric: `${F.saplings} saplings`,
    context: `${F.survival} of the first ${F.firstCohort} alive at 6 months`,
    description: 'Reforestation using native Khasi Hills species, with community stewardship.',
    projectId: 'mawkhar-plantation',
  },
  {
    id: 'upcycle',
    title: 'Upcycling workshops',
    status: 'Planned',
    metric: 'In planning',
    context: 'community skill-building',
    description: 'Hands-on workshops turning recovered materials into usable products.',
  },
];

/** The numbers shown on the homepage. Each says what it counts and when. */
export const ledger: LedgerItem[] = [
  { value: F.wasteKg, label: 'Waste collected', note: `Total across ${F.drives} Ward 16 drives, January 2024 to May 2025.`, href: '/our-work/ward16-cleanup' },
  { value: F.saplings, label: 'Saplings planted', note: `At Mawkhar, across four plantation days. ${F.survival} of the first ${F.firstCohort} were alive at six months.`, href: '/our-work/mawkhar-plantation' },
  { value: F.surveyed, label: 'Students surveyed', note: `In six Shillong schools, for our education report. The pilot module was taught to ${F.pilot} students in one school.`, href: '/our-work/symboh-schools' },
  { value: F.wards, label: 'Wards surveyed', note: 'For the mobility study, October 2024 to February 2025.', href: '/our-work/shillong-mobility-study' },
];

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Ward 16 clean-up, drive 9: 94 kg in 3 hours',
    type: 'Update',
    date: '2025-05-24',
    description: 'Forty-two volunteers, two Khoh baskets and a clear morning. The ninth Ward 16 drive left the junction a little cleaner again.',
    location: 'Ward 16, Shillong',
    project: 'ward16-cleanup',
  },
  {
    id: 'n2',
    title: 'Symboh at the Meghalaya Urban Forum',
    type: 'Event',
    date: '2025-06-10',
    description: 'Our mobility research was presented at the Meghalaya Urban Forum, alongside policymakers and researchers from across the state.',
    location: 'Shillong',
    project: 'shillong-mobility-study',
  },
  {
    id: 'n3',
    title: 'Call for research collaborators, round 2',
    type: 'Announcement',
    date: '2025-05-15',
    description: 'Symboh opened applications for research collaborators in environmental data analysis, urban governance and education policy.',
  },
  {
    id: 'n4',
    title: 'Mawkhar plantation: six-month check',
    type: 'Update',
    date: '2025-03-14',
    description: `Of the first ${F.firstCohort} saplings, ${F.survival} had survived at six months. Local volunteers measured growth against the original stake markers.`,
    location: 'Mawkhar, Upper Shillong',
    project: 'mawkhar-plantation',
  },
  {
    id: 'n5',
    title: 'The SUBA Field Letter, Vol. I',
    type: 'Announcement',
    date: '2024-12-01',
    description: 'Our first newsletter: field notes and reflections from our first year.',
  },
  {
    id: 'n6',
    title: 'Volunteer orientation, July 2025',
    type: 'Event',
    date: '2025-07-05',
    description: 'An orientation for new volunteers covering ongoing projects, how to get involved and what to expect.',
    location: 'Shillong',
  },
];

export const symbohResearchAreas = [
  { title: 'Urban mobility and transport', description: 'Traffic, public transport gaps and infrastructure analysis across Shillong.' },
  { title: 'Solid waste and governance', description: 'Policy mapping and community-led models for waste management.' },
  { title: 'Environmental education', description: 'Curriculum research and school partnership frameworks.' },
  { title: 'Urban development', description: 'Land use, housing and planning research for Meghalayan cities.' },
  { title: 'Data and civic analytics', description: 'Open data, GIS and civic data pipelines for the Northeast.' },
  { title: 'Policy and governance', description: 'Policy briefs, submissions and dialogue with government bodies.' },
];

/** What Symboh commits to. These are standards we hold ourselves to, not claims about every document so far. */
export const symbohMethods = [
  { title: 'Primary data first', body: 'We collect our own data before we cite anyone else’s.' },
  { title: 'Show the method', body: 'Each publication should say how its data was collected, so readers can judge the findings for themselves.' },
  { title: 'Check with the community', body: 'We share findings with the communities they describe before we publish.' },
  { title: 'Free to read', body: 'Our research is free to read online. Meghalaya’s problems should not sit behind a paywall.' },
];

/** The five qualities SUBA tries to hold to. Shown on the About page. */
export const values: ValueItem[] = [
  { trait: 'Rooted', description: 'In the land, language and people of Meghalaya.' },
  { trait: 'Purposeful', description: 'Deliberate, and never rushed, generic or borrowed.' },
  { trait: 'Hopeful', description: 'Acting on real problems without sliding into doom.' },
  { trait: 'Community-first', description: 'We credit, we include, and we decide together.' },
  { trait: 'Action-oriented', description: 'Real work over mission statements.' },
];

/**
 * The people behind SUBA. Empty until you add real entries, and the About page
 * hides the section while it is empty. Example:
 *
 * {
 *   name: 'Full Name',
 *   role: 'Co-founder and coordinator',
 *   bio: 'One or two sentences about what they do at SUBA.',
 *   photo: '/images/team/full-name.jpg',
 * },
 */
export const team: TeamMember[] = [];

export const fieldEntries: FieldEntry[] = [
  {
    id: 'ward16-drive-9',
    project: 'ward16-cleanup',
    title: 'Drive 9',
    date: '2025-05-24',
    location: 'Ward 16 junction, Shillong',
    summary: 'The ninth drive in the series. Forty-two volunteers, two Khoh baskets, and a junction that has visibly changed over sixteen months of repeated effort.',
    stats: [
      { label: 'Waste', value: '94 kg' },
      { label: 'Volunteers', value: '42' },
      { label: 'Duration', value: '3 hours' },
    ],
    before: 'Accumulated waste at the junction, photographed the same morning.',
    during: 'Volunteers sorting recovered waste by category for separation into recycling streams.',
    after: 'The same junction three hours later. Before and after shots are taken from the identical angle every time.',
    reflection: 'The difference in baseline waste between drive one and drive nine is the real story. Less waste shows up between drives now, because residents nearby have started reporting dumping directly to us.',
    credits: ['Photography: volunteer team'],
  },
  {
    id: 'mawkhar-plantation-day',
    project: 'mawkhar-plantation',
    title: 'First plantation day',
    date: '2024-09-14',
    location: 'Mawkhar, Upper Shillong',
    summary: 'The founding plantation day for the Mawkhar series: 80 saplings of native species planted by first-time volunteers.',
    stats: [
      { label: 'Saplings', value: '80' },
      { label: 'Species', value: '4 native' },
      { label: 'Volunteers', value: '28' },
    ],
    before: 'The site before work began, cleared and marked for spacing.',
    during: 'A volunteer planting their first tree, briefed on depth and spacing beforehand.',
    after: 'Saplings staked and name-tagged for individual monitoring.',
    reflection: 'This was the first of four plantation days at the site. We log GPS coordinates for every sapling so survival can be tracked one by one rather than estimated.',
    credits: ['Photography: volunteer team'],
  },
  {
    id: 'mawkhar-6month-followup',
    project: 'mawkhar-plantation',
    title: 'Six-month survival check',
    date: '2025-03-14',
    location: 'Mawkhar, Upper Shillong',
    summary: 'Six months after the first plantation day, a return visit to check survival and measure growth.',
    stats: [
      { label: 'Survival', value: '94%' },
      { label: 'Saplings checked', value: '80' },
      { label: 'Average growth', value: '+38 cm' },
    ],
    before: 'The site overview at six months, showing canopy density compared with planting day.',
    during: 'A local volunteer measuring sapling growth against the original stake markers.',
    after: 'Close detail of new growth on one of the surviving saplings.',
    reflection: 'People want to know if their tree survived. That is why we follow up at regular intervals, not just on planting day.',
  },
  {
    id: 'schools-pilot-session',
    project: 'symboh-schools',
    title: 'Pilot session',
    date: '2024-11-08',
    location: 'Partner school, Shillong',
    summary: 'The first delivery of the supplementary environmental education module, piloted with a single class before any wider rollout.',
    stats: [
      { label: 'Students', value: '38' },
      { label: 'Sessions', value: '6' },
      { label: 'Schools', value: '1' },
    ],
    before: 'Classroom setup before the session, with materials prepared around local ecological examples.',
    during: 'Students working on a local watershed mapping exercise.',
    after: 'Student-made material from the session, displayed in the classroom afterwards.',
    reflection: 'The pilot ran in one school first. We wanted teacher feedback before scaling, not after.',
  },
];
