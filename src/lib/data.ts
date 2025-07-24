import { imageUrls } from './images';

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  hint: string;
  tags: string[];
  links: {
    github?: string;
    report?: string; // slug of a report
  };
}

export const projects: Project[] = [
  {
    slug: 'seismic-performance-rc-buildings',
    title: 'Seismic Performance of Reinforced Concrete Buildings',
    category: 'Academic Project',
    description: 'A comprehensive study on the seismic behavior of RC frame structures using non-linear time-history analysis in SAP2000.',
    longDescription: 'This academic project involved an in-depth investigation into the seismic performance of multi-story reinforced concrete buildings. The core of the project was to model various structural configurations in SAP2000 and subject them to a suite of earthquake ground motion records. We performed non-linear time-history analysis to accurately capture material non-linearity and geometric effects. The results were used to evaluate key performance indicators like inter-story drift, plastic hinge formation, and overall structural stability, providing recommendations for improving seismic-resistant design practices.',
    image: imageUrls.projectDefault,
    hint: 'building blueprint',
    tags: ['Structural Engineering', 'Seismic Analysis', 'SAP2000', 'Finite Element Analysis'],
    links: { github: '#', report: 'seismic-analysis-report' },
  },
  {
    slug: 'sustainable-urban-drainage-system',
    title: 'Sustainable Urban Drainage System (SUDS) Design',
    category: 'Professional Project',
    description: 'Designed a SUDS for a new residential development, incorporating permeable pavements and green roofs to manage stormwater runoff effectively.',
    longDescription: 'As part of a professional team, I was responsible for designing a Sustainable Urban Drainage System (SUDS) for a new 5-hectare residential development. The design aimed to mimic natural drainage patterns and minimize the impact on the local water table. Key features included the strategic placement of permeable pavements in parking areas, the design of vegetated swales along roadways, and the integration of green roofs on apartment blocks. The system was modeled to manage a 1-in-100-year storm event, significantly reducing peak runoff rates and improving water quality.',
    image: imageUrls.projectDefault,
    hint: 'green roof',
    tags: ['Sustainability', 'Water Resources', 'AutoCAD', 'Stormwater Management'],
    links: { report: 'suds-design-report' },
  },
  {
    slug: 'geotechnical-investigation-high-rise',
    title: 'Geotechnical Investigation for a High-Rise Building',
    category: 'Academic Project',
    description: 'Led a team to conduct soil testing, analysis, and foundation design recommendations for a proposed 20-story building.',
    longDescription: 'This team-based academic project focused on a complete geotechnical investigation for a proposed 20-story commercial building. My role as team lead involved planning the site investigation, which included borehole drilling and standard penetration tests (SPT). We collected soil samples for laboratory testing to determine properties like shear strength, compressibility, and permeability. Using the data, we analyzed bearing capacity and settlement, ultimately recommending a piled raft foundation system to ensure the building\'s long-term stability.',
    image: imageUrls.projectDefault,
    hint: 'soil core sample',
    tags: ['Geotechnical', 'Foundation Design', 'Team Project', 'Site Investigation'],
    links: {},
  },
];

export interface Report {
  slug: string;
  title: string;
  project: string; // Project title
  date: string;
  summary: string;
  sections: {
    title: string;
    content: string;
  }[];
}

export const reports: Report[] = [
  {
    slug: 'seismic-analysis-report',
    title: 'Final Report on Seismic Performance of RC Buildings',
    project: 'Seismic Performance of Reinforced Concrete Buildings',
    date: 'May 2023',
    summary: 'This report details the methodology, analysis, and findings of the study on the seismic behavior of reinforced concrete frame structures.',
    sections: [
      {
        title: '1. Introduction',
        content: 'The study aims to provide a comprehensive understanding of the non-linear response of RC buildings under seismic loads. It highlights the importance of performance-based design in ensuring structural safety and functionality after an earthquake.'
      },
      {
        title: '2. Methodology',
        content: 'Structural models were created in SAP2000. Non-linear time-history analysis was performed using a set of seven scaled ground motion records compatible with the site\'s seismicity. P-Delta effects were included to account for geometric non-linearity.'
      },
      {
        title: '3. Results and Discussion',
        content: 'The analysis showed that buildings with regular configurations and adequate reinforcement detailing performed significantly better. Inter-story drift ratios were a key indicator of damage. Plastic hinges formed in beams before columns, consistent with the strong-column-weak-beam design philosophy.'
      },
      {
        title: '4. Conclusion',
        content: 'The study confirms the effectiveness of modern seismic design codes. Recommendations include stricter adherence to detailing requirements and the potential use of base isolation systems in high-seismicity zones for critical structures.'
      }
    ]
  },
    {
    slug: 'suds-design-report',
    title: 'Stormwater Management Design for Residential Development',
    project: 'Sustainable Urban Drainage System (SUDS) Design',
    date: 'July 2023',
    summary: 'This report outlines the design and hydraulic modeling of the Sustainable Urban Drainage System (SUDS) for the Greenfield Residential Area.',
    sections: [
      {
        title: '1. Project Overview',
        content: 'The goal was to create a comprehensive stormwater management plan that reduces flood risk, improves water quality, and enhances site amenity. The design complies with local environmental regulations and promotes sustainable development practices.'
      },
      {
        title: '2. Design Components',
        content: 'The SUDS train consists of several integrated components: \n- **Green Roofs:** Installed on all apartment buildings to intercept and retain rainfall. \n- **Permeable Pavements:** Used for all parking lots and private driveways to allow infiltration. \n- **Vegetated Swales:** Designed to convey excess water while promoting filtration and slowing flow rates. \n- **Detention Basin:** A dry basin designed to store peak flows during extreme storm events.'
      },
      {
        title: '3. Hydraulic Modeling',
        content: 'The system was modeled using industry-standard software to simulate performance under various rainfall scenarios, including 1-in-30 year and 1-in-100 year events. The model confirmed that post-development runoff rates would not exceed pre-development rates, meeting the primary design criterion.'
      },
      {
        title: '4. Maintenance Plan',
        content: 'A detailed maintenance schedule is provided to ensure the long-term effectiveness of the SUDS components, including regular inspection of permeable surfaces and vegetation management in swales.'
      }
    ]
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  hint: string;
  date: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-sustainable-construction',
    title: 'The Future of Sustainable Construction Materials',
    description: 'Exploring innovations in eco-friendly materials that are revolutionizing the construction industry.',
    image: imageUrls.blogDefault,
    hint: 'sustainable building',
    date: 'October 26, 2023',
    tags: ['Sustainability', 'Innovation'],
    content: 'The construction industry is at a turning point. With growing concerns about climate change and resource depletion, the focus is shifting towards sustainable materials. This post explores exciting innovations like self-healing concrete, transparent wood, and carbon-capturing building blocks. These materials not only reduce the environmental footprint of our buildings but also offer enhanced performance and durability. The future of construction is not just about building bigger, but building smarter and greener.'
  },
  {
    slug: 'ai-in-structural-health-monitoring',
    title: 'AI in Structural Health Monitoring',
    description: 'How artificial intelligence is being used to predict and prevent structural failures in real-time.',
    image: imageUrls.blogDefault,
    hint: 'modern bridge',
    date: 'September 15, 2023',
    tags: ['AI', 'Civil-Tech'],
    content: 'Artificial Intelligence (AI) is transforming how we maintain our critical infrastructure. Structural Health Monitoring (SHM) systems, powered by AI algorithms, can now continuously analyze data from sensors placed on bridges, buildings, and dams. These systems can detect subtle changes in structural behavior that may indicate damage or degradation long before they become visible to the human eye. This predictive capability allows for proactive maintenance, preventing catastrophic failures, extending the lifespan of structures, and ensuring public safety.'
  },
  {
    slug: 'deep-dive-geotechnical-investigation',
    title: 'A Deep Dive into Geotechnical Site Investigation',
    description: 'Best practices and modern techniques for understanding subsurface conditions before you build.',
    image: imageUrls.blogDefault,
    hint: 'soil testing',
    date: 'August 02, 2023',
    tags: ['Geotechnical', 'Engineering'],
    content: 'What lies beneath the ground is just as important as the structure that stands upon it. A thorough geotechnical site investigation is the foundation of any successful construction project. This article covers the essential steps, from initial desk studies and walkover surveys to advanced in-situ testing methods like Cone Penetration Testing (CPT) and geophysical surveys. Understanding the soil mechanics and groundwater conditions is crucial for designing safe, stable, and economical foundations.'
  },
];

// New data structures
export interface OtherPublication {
  id: number;
  title: string;
  publication: string;
  date: string;
  link: string;
  description: string;
}

export interface Column {
  id: number;
  title: string;
  outlet: string;
  date: string;
  link: string;
  summary: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  hint: string;
  caption: string;
}

export interface Literature {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  hint: string;
}

export interface MediaCoverage {
  id: number;
  title: string;
  outlet: string;
  date: string;
  link: string;
  summary: string;
}


// Mock data for new sections
export const otherPublications: OtherPublication[] = [
    {
        id: 1,
        title: "Conference Paper on Low-Cost Housing Materials",
        publication: "International Conference on Civil Engineering 2023",
        date: "2023-11-20",
        link: "#",
        description: "Presented a paper on the use of locally sourced, cost-effective materials for residential housing projects in developing regions."
    }
];

export const columns: Column[] = [
    {
        id: 1,
        title: "The Role of Engineers in Urban Planning",
        outlet: "The Engineering Post",
        date: "2023-09-05",
        link: "#",
        summary: "An opinion piece on why civil engineers must be more involved in the early stages of urban planning to create more livable and sustainable cities."
    }
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: imageUrls.galleryDefault, alt: 'Project site visit', hint: 'construction site', caption: 'On-site structural inspection' },
  { id: 2, src: imageUrls.galleryDefault, alt: 'Workshop on sustainable materials', hint: 'engineering workshop', caption: 'Sustainable Materials Workshop' },
  { id: 3, src: imageUrls.galleryDefault, alt: 'Bridge design model', hint: 'bridge model', caption: '3D model of bridge design project' },
];

export const literatures: Literature[] = [
    {
        id: 1,
        title: "Structures or Why Things Don't Fall Down",
        author: "J.E. Gordon",
        description: "A classic book that explains the basic principles of structural engineering in an accessible and engaging way. Highly recommended for aspiring engineers.",
        image: imageUrls.literatureDefault,
        hint: "classic library"
    }
];

export const mediaCoverages: MediaCoverage[] = [
    {
        id: 1,
        title: "Local Engineer Wins Bridge Design Competition",
        outlet: "City Times Newspaper",
        date: "2022-05-10",
        link: "#",
        summary: "A feature on the innovative bridge design that won first place at the National Society of Civil Engineers competition."
    }
];
