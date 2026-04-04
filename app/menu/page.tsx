import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MenuList } from '@/components/menu-list'

export const metadata = {
  title: 'Menu | Elegance Fine Dining',
  description: 'Explore our exquisite menu featuring fine dining cuisine. A carefully curated selection of seasonal dishes.',
}

export default function MenuPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Menu Header with Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
            alt="Elegance Culinary Preparation"
            fill
            className="object-cover"
            priority
          />
          {/* Dark luxury overlay */ }
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background to-black/30 z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16 animate-in slide-in-from-bottom-8 fade-in duration-1000">
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">Culinary Artistry</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            The <span className="italic text-primary/90">Menu</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Carefully crafted dishes celebrating seasonal ingredients, rigorous technique, and unabashed flavor.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <MenuList />
      </section>

      <Footer />
    </main>
  )
}
