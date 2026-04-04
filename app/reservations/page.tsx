import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ReservationForm } from '@/components/reservation-form'

export const metadata = {
  title: 'Make a Reservation | Elegance Fine Dining',
  description: 'Reserve your table at Elegance Restaurant for an unforgettable culinary experience.',
}

export default function ReservationsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
            alt="Elegance Dining Room"
            fill
            className="object-cover"
            priority
          />
          {/* Dark luxury overlay */ }
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background to-black/30 z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16 animate-in slide-in-from-bottom-8 fade-in duration-1000">
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">Join Us</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Reservations
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Secure your table for an evening of meticulous service and extraordinary flavor.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background relative z-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 md:p-12 border border-border shadow-2xl relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50" />
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-foreground mb-4">Book a Table</h2>
              <div className="w-12 h-[1px] bg-primary/50 mx-auto mb-4"></div>
              <p className="text-muted-foreground font-light">
                Please note that reservations require a confirmation. For parties larger than 6, kindly contact us directly.
              </p>
            </div>
            
            <ReservationForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
