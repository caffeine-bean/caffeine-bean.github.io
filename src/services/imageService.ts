// This service provides sample lingerie model images for the gallery
// In a real application, you would fetch these from an API

export interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
}

// Sample data for our futuristic lingerie models gallery
const sampleImages: Image[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Celestial Silver',
    description: 'Futuristic silver lingerie with holographic accents'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Neon Dreams',
    description: 'Vibrant neon-accented lingerie with LED trim'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1583100335236-43f8e16af5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Quantum Lace',
    description: 'Delicate lace with embedded fiber optic threads'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Cyber Silk',
    description: 'Smart fabric that adapts to body temperature'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Aurora Borealis',
    description: 'Color-shifting lingerie inspired by northern lights'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Galactic Velvet',
    description: 'Plush velvet with constellation patterns'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Nebula Noir',
    description: 'Black lingerie with subtle galaxy-inspired details'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Bionic Lace',
    description: 'Structured lingerie with architectural elements'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Digital Diva',
    description: 'Lingerie with embedded digital display elements'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1620315808304-66597517f188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Hologram Haze',
    description: 'Semi-transparent lingerie with holographic overlay'
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Lunar Luxe',
    description: 'Silvery white lingerie with crescent moon motifs'
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Techno Temptress',
    description: 'Lingerie with circuit-inspired embroidery'
  },
  {
    id: '13',
    url: 'https://images.unsplash.com/photo-1583934584129-0f9b9bfda026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Plasma Pink',
    description: 'Vibrant pink lingerie with energy-inspired details'
  },
  {
    id: '14',
    url: 'https://images.unsplash.com/photo-1613461920867-9ea115fee900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Quantum Quartz',
    description: 'Crystal-embedded lingerie with geometric patterns'
  },
  {
    id: '15',
    url: 'https://images.unsplash.com/photo-1583934584112-07fe7f0a267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Stellar Satin',
    description: 'Smooth satin lingerie with star-inspired cutouts'
  },
  {
    id: '16',
    url: 'https://images.unsplash.com/photo-1607189760271-abda80e81c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Cyber Chic',
    description: 'Futuristic lingerie with metallic accents'
  }
];

// Function to simulate fetching images from an API
export const getImages = (): Promise<Image[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(sampleImages);
    }, 800);
  });
};

// Function to get a single image by ID
export const getImageById = (id: string): Promise<Image> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const image = sampleImages.find(img => img.id === id);
      if (image) {
        resolve(image);
      } else {
        reject(new Error('Image not found'));
      }
    }, 300);
  });
};
