// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// === SITE METADATA ===
export const SITE_TITLE = 'SiteTitle';
export const SITE_DESCRIPTION = 'SiteDescription';
export const SITE_OWNER = 'SiteOwner';
export const SITE_URL = 'https://SiteUrl';
export const PAGINATION_SIZE = 10;
export const PROJECT_GITHUB = 'EricZarnosky/Obsidian-Blogger'

// === BLOG CONFIGURATION ===
export const BLOG_TITLE = 'BlogTitle';
export const BLOG_DESCRIPTION = 'BlogDesciption';

// === CONTACT INFORMATION ===
export const SITE_CONTACT = 'SiteContactEmail';
export const CONTACT_RESPONSE_TIME = {
  email: 'Within 24-48 hours',
  twitter: 'Usually within a few hours',
  github: 'Within 1-3 business days'
};

// === SOCIAL MEDIA ===
export const SOCIAL_TWITTER = 'YourTwitterHandle';
export const SOCIAL_YOUTUBE = 'YourYouTubeHandle';
export const SOCIAL_GITHUB = 'GithubAccount/Repo';
export const SOCIAL_LINKEDIN = '';

// === NAVIGATION ===
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' }
] as const;

// === DEFAULT VALUES ===
export const DEFAULT_FEATURED_IMAGE = '/blog-placeholder-1.jpg';
export const DEFAULT_OG_TYPE = 'article';
export const DEFAULT_TWITTER_CARD = 'summary_large_image';
export const SITE_BANNER = '/test1.webp';

// === ERROR MESSAGES ===
export const SITE_404 = 'Oops! The page you\'re looking for has wandered off into the digital wilderness.';
export const NO_POSTS_MESSAGE = 'No posts found. Check back soon!';

// === HERO SECTION ===
export const HERO_BADGE = '✨ The Markdown Magic';
export const HERO_TITLE = 'Write & Share Faster.';
export const HERO_SUBTITLE = 'Obsidian to beautiful blog in seconds.';
export const HERO_DESCRIPTION = 'The simplest way to transform your Obsidian vault into a modern, blazing-fast blog. No complex setup, just pure markdown magic.';

// === ABOUT PAGE ===
export const ABOUT_AUTHOR = 'Obsidian Blogger Team';
export const ABOUT_TAGS = ['About', 'Documentation'];

// === LAYOUT CONFIGURATION ===
export const POSTS_PER_PAGE = 3; // For homepage
export const CONTAINER_WIDTHS = {
  narrow: '720px',
  normal: '1200px',
  wide: '1400px'
} as const;

// === RSS FEED ===
export const RSS_TITLE = `${SITE_TITLE} RSS Feed`;
export const RSS_DESCRIPTION = SITE_DESCRIPTION;

// === CONTACT PAGE ===
export const CONTACT_INTRO = 'Have questions, suggestions, or need help? We\'d love to hear from you. Get in touch through any of the channels below.';
export const CONTACT_TIP = 'For faster responses to technical issues, please include as much detail as possible about your setup and the problem you\'re experiencing.';

// === FONT CONFIGURATIONS ===
//  Need more fonts? https://gwfh.mranftl.com/fonts
//  choose 700 and classic to download both the regualar and bold
export const FONT_CONFIGS = {
  'Ubuntu': {
    regular: '/fonts/ubuntu-v20-latin-regular.woff',
    bold: '/fonts/ubuntu-v20-latin-700.woff',
    // Add other font styles if needed (e.g., italic, bold-italic)
  },
  'Atkinson': {
    regular: '/fonts/atkinson-regular.woff',
    bold: '/fonts/atkinson-bold.woff',
  },
  'Jost': {
    regular: '/fonts/jost-v19-latin-regular.woff',
    bold: '/fonts/jost-v19-latin-700.woff',
  },
  'Gabarito': {
    regular: '/fonts/gabarito-v8-latin-regular.woff',
    bold: '/fonts/gabarito-v8-latin-700.woff',
  },
  'Lexend Deca': {
    regular: '/fonts/lexend-deca-v24-latin-regular.woff',
    bold: '/fonts/lexend-deca-v24-latin-700.woff',
  },
  'Merriweather Sans': {
    regular: '/fonts/merriweather-sans-v27-latin-regular.woff',
    bold: '/fonts/merriweather-sans-v27-latin-700.woff',
  },
  'Montserrat Alternates': {
    regular: '/fonts/montserrat-alternates-v17-latin-regular.woff',
    bold: '/fonts/montserrat-alternates-v17-latin-700.woff',
  },
  'Noto Sana Georgia': {
    regular: '/fonts/noto-sans-georgian-v47-latin-regular.woff',
    bold: '/fonts/noto-sans-georgian-v47-latin-700.woff',
  },
  'Poppins': {
    regular: '/fonts/poppins-v23-latin-regular.woff',
    bold: '/fonts/poppins-v23-latin-700.woff',
  },
  'Prompt': {
    regular: '/fonts/prompt-v11-latin-regular.woff',
    bold: '/fonts/prompt-v11-latin-700.woff',
  },
  'Readex Pro': {
    regular: '/fonts/readex-pro-v26-latin-regular.woff',
    bold: '/fonts/readex-pro-v26-latin-700.woff',
  },
  'Roboto': {
    regular: '/fonts/roboto-v48-latin-regular.woff',
    bold: '/fonts/roboto-v48-latin-700.woff',
  },
  // Add more font families here
};
export const SELECTED_FONT_FAMILY = 'Poppins'; // Set the desired font family here