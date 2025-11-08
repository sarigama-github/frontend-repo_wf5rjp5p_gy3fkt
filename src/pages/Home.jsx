import UnwrapHero from '../components/UnwrapHero';
import ProductShowcase from '../components/ProductShowcase';
import CustomizeSection from '../components/CustomizeSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import WhatsAppFloating from '../components/WhatsAppFloating';

export default function Home() {
  return (
    <div>
      <UnwrapHero />
      <ProductShowcase />
      <CustomizeSection />
      <TestimonialsCarousel />
      <WhatsAppFloating />
    </div>
  );
}
