import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { UtensilsCrossed, Wine, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
            alt="Elegance Restaurant Interior"
            fill
            className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
            priority
          />
          {/* Dark luxury overlay */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-black/40 to-black/60 z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both">
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">Est. 2026</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Taste the <br/>
            <span className="italic text-primary/90">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            A symphony of flavors awaits. Experience culinary artistry in an atmosphere of unparalleled refinement and grace.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/menu"
              className="group relative px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Explore Menu
            </Link>
            <Link
              href="/reservations"
              className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-24 md:py-32 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              An Exquisite Dining Journey
            </h2>
            <div className="w-24 h-[1px] bg-primary/50 mx-auto my-8"></div>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              We source the finest seasonal ingredients to craft precise, evocative dishes. Our award-winning chefs blend timeless technique with modern innovation to create moments that linger on the palate and in the memory.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full border border-border group-hover:border-primary transition-colors duration-500">
                <UtensilsCrossed className="text-primary/70 group-hover:text-primary transition-colors duration-500" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">Masterful Cuisine</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Every plate is a canvas. We elevate pristine ingredients through rigorous technique and artistry.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full border border-border group-hover:border-primary transition-colors duration-500">
                <Wine className="text-primary/70 group-hover:text-primary transition-colors duration-500" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">Curated Cellar</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                An extensive selection of rare vintages and thoughtful pairings chosen by our sommelier.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full border border-border group-hover:border-primary transition-colors duration-500">
                <Sparkles className="text-primary/70 group-hover:text-primary transition-colors duration-500" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">Impeccable Service</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Anticipatory, graceful, and unobtrusive. True hospitality tailored to your distinct preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dish Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full aspect-square relative md:max-w-md lg:max-w-none mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop"
                alt="Signature Dish"
                fill
                className="object-cover rounded-sm border border-border/50"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Signature Dish</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Truffle Infused Wagyu</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                A5 Japanese Wagyu gently seared and rested, accompanied by wild mushroom duxelles, pommes purée, and a rich Perigord truffle jus. A testament to simplicity and perfection.
              </p>
              <Link
                href="/reservations"
                className="inline-block px-8 py-3 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm"
              >
                Experience It
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary tracking-widest uppercase text-sm">Hours</h3>
              <ul className="space-y-4 font-light text-muted-foreground">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Monday - Thursday</span>
                  <span className="text-foreground">5:30 PM - 10:30 PM</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Friday - Saturday</span>
                  <span className="text-foreground">5:30 PM - 11:30 PM</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Sunday</span>
                  <span className="text-foreground">5:00 PM - 10:00 PM</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary tracking-widest uppercase text-sm">Location</h3>
              <p className="font-light text-muted-foreground leading-relaxed mb-4">
                123 Elegance Avenue<br/>
                Culinary District<br/>
                Metropolis, NY 10001
              </p>
              <p className="font-light text-muted-foreground">
                Valet parking is available at the front entrance for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
