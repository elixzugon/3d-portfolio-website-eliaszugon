'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/footer'
import ProjectGallery from '@/components/project-gallery'

type ProjectType = 'image' | 'video'

interface ProjectItem {
  id: string
  title: string
  description?: string
  category: string
  categories?: string[]
  thumbnail: string
  fullImage: string
  type: ProjectType
  videoUrl?: string
  thumbnailTime?: number | 'middle'
}

const youtubeProject = (
  id: string,
  title: string,
  description: string,
  youtubeId: string,
  category: string,
  categories?: string[]
): ProjectItem => ({
  id,
  title,
  description,
  category,
  categories,
  thumbnail: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
  fullImage: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
  type: 'video',
  videoUrl: `https://www.youtube.com/embed/${youtubeId}`,
})

const localVideoProject = (
  id: string,
  title: string,
  description: string,
  videoUrl: string,
  category: string,
  thumbnailTime?: number | 'middle'
): ProjectItem => ({
  id,
  title,
  description,
  category,
  thumbnail: videoUrl,
  fullImage: videoUrl,
  type: 'video',
  videoUrl,
  thumbnailTime,
})

const imageProject = (
  id: string,
  title: string,
  description: string,
  imageUrl: string,
  category: string
): ProjectItem => ({
  id,
  title,
  description,
  category,
  thumbnail: imageUrl,
  fullImage: imageUrl,
  type: 'image',
})

const motionVideoPath = (fileName: string) => `/motiongraphics/${fileName}`

const allProjects: ProjectItem[] = [
  youtubeProject(
    'fashion-fruitopia-market',
    'Fruitopia Market Cosmic Factory',
    'A Cosmic Factory Collection.',
    'IUqh41Bs-nw',
    '3D Fashion'
  ),
  youtubeProject(
    'fashion-ar-funtasia-garment',
    'AR Animation | Cosmic Factory Funtasia Garment',
    'AR fashion animation made to revisit a piece from the Funtasia Collection.',
    'MFDj1mmzcb4',
    '3D Fashion',
    ['3D Fashion', 'Augmented Reality']
  ),
  youtubeProject(
    'fashion-ar-pixel-collection',
    'AR Animation | Showcasing Pixel Collection',
    'AR project made to present Pixel Collection by Cosmic Factory.',
    '0LFeKu6IvNk',
    '3D Fashion',
    ['3D Fashion', 'Augmented Reality']
  ),
  youtubeProject(
    'fashion-funtasia-runway',
    'Funtasia Collection Digital Runway',
    'Cosmic Factory presented a digital runway collection at Costa Rica Fashion Week 2024.',
    '_BE3mULdawo',
    '3D Fashion'
  ),
  localVideoProject(
    'fashion-bloke-cambio-numeros',
    'Bloke Cambio Numeros',
    '3D fashion animation piece for Cosmic Factory.',
    '/homepage-videos/blokecambionumeros.mp4',
    '3D Fashion'
  ),

  localVideoProject(
    '3d-cosmic-casino',
    'Cosmic Casino Animation',
    'Featured 3D animation piece with casino-inspired visuals and polished campaign pacing.',
    '/product-animation/COSMIC%20CASINO%20ANIMATION.mp4',
    '3D Animation'
  ),
  localVideoProject(
    '3d-bodega-lamp',
    'Bodega Design Lamp Animation',
    '3D product animation for a design lamp.',
    '/homepage-videos/bodegalamp.mp4',
    '3D Animation'
  ),
  localVideoProject(
    '3d-princesa-cosmos',
    'Coleccion Princesa del Cosmos 1 WITH SFX',
    '3D fashion animation with sound design for the Princesa del Cosmos collection.',
    '/product-animation/Colecci%C3%B3n%20Princesa%20del%20Cosmos%201%20WITH%20SFX.mp4',
    '3D Animation'
  ),
  localVideoProject(
    '3d-ajedrez',
    'Ajedrez',
    '3D animation piece built around graphic rhythm, cuts, and a concise social format.',
    '/motiongraphics/ajedrez.mp4',
    '3D Animation',
    'middle'
  ),
  youtubeProject(
    '3d-cosmic-logo',
    'Cosmic Factory Funtasia Logo Animation',
    'Cosmic Factory logo loop animation made for CRFW.',
    '4pYLd2lOsE4',
    '3D Animation'
  ),
  youtubeProject(
    '3d-jaseth-logo',
    'Jaseth Hernandez Logo Animation',
    'Logo animation created for designer Jaseth Hernandez.',
    'yuEgmFrA1GU',
    '3D Animation'
  ),
  imageProject(
    '3d-jh-logo-explosion',
    'JH Logo Explosion',
    'Rendered logo exploration with dimensional materials and motion direction.',
    '/3d-fashion-design-media/3D-LOGO-MATTE-1.webp',
    '3D Animation'
  ),
  youtubeProject(
    '3d-brite-boy-logo',
    'Brite Boy Logo Animation',
    'Animated logo piece for Brite Boy Thrift Shop.',
    'j2g3txq_xGk',
    '3D Animation'
  ),
  imageProject(
    '3d-rmi-logo',
    'The Regenerative Medicine Institute Logo Animation',
    'Rendered logo animation frame for The Regenerative Medicine Institute.',
    '/3d-fashion-design-media/0069-1024x576.png',
    '3D Animation'
  ),
  imageProject(
    '3d-grupo-rs-logo',
    'Grupo R&S Logo Animation',
    'Rendered logo animation frame for Grupo R&S.',
    '/3d-fashion-design-media/0212-1024x722.png',
    '3D Animation'
  ),
  youtubeProject(
    '3d-little-shop',
    'Little Shop of Horrors X Cosmic Factory',
    'Animation created to promote the Cosmic Factory collaboration with Oak Productions.',
    'gca7KZo1OyU',
    '3D Animation'
  ),
  youtubeProject(
    '3d-olivia-advent',
    'Olivia Advent Calendar',
    'Short-form 3D animation piece for an advent calendar campaign.',
    'rLwHgVjrT8w',
    '3D Animation'
  ),

  youtubeProject(
    'ar-fruitopia-prelaunch',
    'Fruitopia Pre-launch Animation',
    'Animation created to announce the launch of the Fruitopia Collection.',
    '1ND2z40c3sE',
    'Augmented Reality'
  ),
  youtubeProject(
    'ar-cosmic-dress-rohrmoser',
    'AR Cosmic Dress at Rohrmoser',
    'Augmented reality fashion piece placed in a real-world environment.',
    'wTJ4O6G6pkU',
    'Augmented Reality'
  ),

  youtubeProject(
    'motion-opening-mounjaro',
    'Opening Animation: Mounjaro',
    'Opening animation designed for a 20 x 3 meter panoramic LED screen. Its ultra-wide composition reflects the original venue format, so the piece may appear unusually stretched when viewed in a standard video frame.',
    'gAKPrPHfKRc',
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-secrets-halloween',
    'Reel Animacion Secrets Halloween 2025',
    'Vertical Halloween reel with campaign graphics, animated reveals, and social pacing.',
    motionVideoPath('reel-animacion-secrets-halloween-2025.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-euphoria-fade-out',
    'Reel Euphoria Fade Out',
    'Fashion and lifestyle reel using transition timing, atmosphere, and fade-out treatment.',
    motionVideoPath('reel-euphoria-fade-out.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-siku-cuts',
    'Siku Anim Cuts 1',
    'Motion edit with product-style cuts, clean staging, and fast visual changes.',
    motionVideoPath('siku-anim-cuts-1.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-outfits-amanda-2',
    'Video Outfits Amanda 2',
    'Fashion motion piece for Amanda outfits, built for short-form viewing.',
    motionVideoPath('video-outfits-amanda-2.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-revo-360',
    'Video Revo 360',
    '360-style visual animation focused on dimensional movement and product presentation.',
    motionVideoPath('video-revo-360.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-caso-pcma',
    'Caso PCMA',
    'Case-study style motion piece built to communicate process, results, and context.',
    motionVideoPath('caso-pcma.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-equifax-audio',
    'Equifax Anim con Audio',
    'Motion piece with audio-driven timing for a corporate communication asset.',
    motionVideoPath('equifax-anim-con-audio.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-planeta-ambulancia',
    'Planeta Ambulancia',
    'Animated communication piece using illustrative motion and a clear narrative structure.',
    motionVideoPath('planeta-ambulancia.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-general-fixed',
    'General Fixed',
    'General-purpose motion edit combining branded graphics and animated elements.',
    motionVideoPath('general-fixed.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-breakdown-revo',
    'Breakdown Revo 360 Teaser',
    'Teaser edit showing motion layers and the construction of a 360 visual sequence.',
    motionVideoPath('breakdown-revo-360-teaser.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-halloween-promo',
    'Animacion Promo Halloween V1',
    'Promotional Halloween animation with fast cuts and seasonal graphics.',
    motionVideoPath('animacion-promo-halloween-v1.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-amanda-outfits',
    'Amanda Outfits',
    'Fashion motion edit focused on outfit transitions and social-first delivery.',
    motionVideoPath('amanda-outfits.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-affiliation',
    'Affiliation Animation',
    'Informational animation for affiliation messaging.',
    motionVideoPath('animacion-afiliacion.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-fathers-day',
    "Father's Day Animation",
    "Campaign animation created for a Father's Day message.",
    motionVideoPath('animacion-dia-del-padre.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-marcas',
    'Marcas',
    'Brand-focused animation sequence designed to present multiple identities.',
    motionVideoPath('marcas.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-marketing-no-falla',
    'Marketing no falla',
    'Social motion asset with direct messaging and energetic timing.',
    motionVideoPath('marketing-no-falla.mp4'),
    'Motion Graphics'
  ),
  localVideoProject(
    'motion-video-pngs',
    'Video PNGs',
    'Graphic animation sequence using layered PNG assets and kinetic layouts.',
    motionVideoPath('video-pngs.mp4'),
    'Motion Graphics'
  ),

  youtubeProject(
    'video-cosmic-opening',
    'Invitation to Cosmic Factory Opening | 2025',
    'A short reel inviting guests to the Cosmic Factory opening for 2025.',
    'I8PnM0DvWss',
    'Video Production'
  ),
  youtubeProject(
    'video-maxi-skirt',
    'Maxi Skirt Cosmic Review',
    'Reel showcasing the Maxi Skirt review from Cosmic Factory.',
    '1WKcMlsob7E',
    'Video Production'
  ),
  youtubeProject(
    'video-cosmic-outfit',
    'How to wear a Cosmic Outfit',
    'Quick styling tips in a reel on wearing a Cosmic outfit.',
    'v9jbOChtcw0',
    'Video Production'
  ),
  youtubeProject(
    'video-ximena-podcast',
    'How I Built My Own Brand | Ximena Atem.at & Enovavintage',
    'Podcast conversation on building a brand solo with Ximena Atem.at & Enovavintage.',
    'Img-6ak6FPI',
    'Video Production'
  ),
  youtubeProject(
    'video-gosve-sessions',
    'Gosve Sessions EP.07',
    'Live music session from Gosve Sessions.',
    'd2mENSP-ZEc',
    'Video Production'
  ),
  youtubeProject(
    'video-cosmic-picnic',
    'Cosmic Picnic Video',
    'Reel capturing the Cosmic Picnic experience.',
    '1AtGj4UEkK4',
    'Video Production'
  ),
  youtubeProject(
    'video-rmi-liam',
    'RMI | Liam Harrison Testimonial_',
    'Reel testimonial from Liam Harrison for RMI.',
    '_IYH7tZiymY',
    'Video Production'
  ),
  youtubeProject(
    'video-rmi-cartilage',
    'RMI | Regenerate your cartilage without surgery',
    'Corporate explainer for RMI on non-surgical cartilage regeneration.',
    'SAXRr3px_Ok',
    'Video Production'
  ),
  youtubeProject(
    'video-every-minute-counts',
    'Every Minute Counts in Every Clinic',
    'Corporate video highlighting critical care response times.',
    'RgvoMzEnHng',
    'Video Production'
  ),
  youtubeProject(
    'video-emergency-services',
    'Emergency Medical Services Corporate Video',
    'Corporate reel for Emergency Medical Services.',
    '1RKadV-nlAw',
    'Video Production'
  ),
  youtubeProject(
    'video-rmi-harmony',
    'RMI | Harmony Treatment',
    'Corporate overview for RMI Harmony treatment.',
    'J_X2a7AtM0I',
    'Video Production'
  ),
  youtubeProject(
    'video-grupo-rs',
    'Grupo R&S Corporate Video',
    'Corporate profile for Grupo R&S.',
    'Uo8NAKzIXEA',
    'Video Production'
  ),

  imageProject(
    'ux-ecommerce-redesign',
    'E-Commerce Platform Redesign',
    'Modernizing user experience with improved navigation and visual hierarchy.',
    '/e-commerce-website-ui-design.jpg',
    'UX Design'
  ),
  imageProject(
    'ux-mobile-app',
    'Mobile App Experience',
    'Intuitive mobile interfaces focused on smooth navigation and interaction feedback.',
    '/mobile-app-ui-design-interface.jpg',
    'UX Design'
  ),
  imageProject(
    'ux-design-system',
    'Design System',
    'Comprehensive design system for enterprise applications.',
    '/design-system-components.png',
    'UX Design'
  ),
  imageProject(
    'ux-saas-dashboard',
    'SaaS Dashboard',
    'Dashboard design for complex data visualization and actionable insights.',
    '/saas-dashboard-design.jpg',
    'UX Design'
  ),

  imageProject(
    'graphic-brand-identity',
    'Brand Identity System',
    'Complete visual identity from logo design to brand guidelines.',
    '/graphic-design-branding-identity.jpg',
    'Graphic Design'
  ),
  imageProject(
    'graphic-print-materials',
    'Print Materials Collection',
    'Professional print design including business cards, letterheads, and packaging.',
    '/graphic-design-print-materials.jpg',
    'Graphic Design'
  ),
  imageProject(
    'graphic-poster-campaign',
    'Poster Campaign',
    'Bold poster designs for marketing campaigns.',
    '/graphic-design-poster-campaign.jpg',
    'Graphic Design'
  ),
  imageProject(
    'graphic-publication-design',
    'Publication Design',
    'Magazine and editorial layout design with strong typography and visual hierarchy.',
    '/publication-design-magazine.jpg',
    'Graphic Design'
  ),

  imageProject(
    'web-responsive-design',
    'Responsive Web Design',
    'Modern responsive websites built for performance and usability across devices.',
    '/web-development-responsive-design.jpg',
    'Web Development'
  ),
  imageProject(
    'web-admin-dashboard',
    'Admin Dashboard',
    'Data management dashboard with analytics, user management, and reporting.',
    '/web-development-dashboard.jpg',
    'Web Development'
  ),
  imageProject(
    'web-ecommerce-platform',
    'E-Commerce Platform',
    'Full-featured e-commerce solution with payment and order management flows.',
    '/ecommerce-web-development.jpg',
    'Web Development'
  ),
  imageProject(
    'web-pwa',
    'Progressive Web App',
    'PWA with offline functionality and a native-like user experience.',
    '/progressive-web-app-development.jpg',
    'Web Development'
  ),
]

export default function ProjectsPage() {
  return (
    <main className="w-full">
      <div className="pt-20 pb-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              A combined view of projects across motion graphics, video production, 3D, AR, design, and web work.
            </p>
          </motion.div>

          <ProjectGallery
            items={allProjects}
            title="Project Archive"
            description="Browse all project types except photography."
            enablePagination
            itemsPerPage={12}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
