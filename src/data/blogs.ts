import { images } from './assets';

export const blogs = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  slug: index === 0 ? 'email-marketing-small-businesses' : `ai-healthcare-${index + 1}`,
  title:
    index === 0
      ? 'The Benefits of Email Marketing for Small Businesses'
      : 'The Future of AI in Healthcare: Transforming Patient Care',
  category: index % 3 === 1 ? 'Business' : index % 3 === 2 ? 'Cloud Computing' : 'Healthcare',
  date: 'Feb 24, 2023',
  image: index === 0 ? images.blogHero : images.blog,
  excerpt:
    index === 0
      ? 'In this article, we discuss how email marketing can help small businesses reach their target audience, increase brand awareness, and drive sales.'
      : 'Explore the incredible potential of artificial intelligence in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes.',
}));
