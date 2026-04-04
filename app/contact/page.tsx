import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Elegance Fine Dining',
  description: 'Get in touch with Elegance Restaurant. We&apos;d love to hear from you.',
}

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=2000&auto=format&fit=crop"
            alt="Elegance Wine Glasses"
            fill
            className="object-cover"
            priority
          />
          {/* Dark luxury overlay */ }
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background to-black/30 z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16 animate-in slide-in-from-bottom-8 fade-in duration-1000">
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">Inquiries</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            We are here to assist with special requests, private events, and general questions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Phone */}
          <div className="bg-transparent border border-border p-10 text-center group hover:border-primary transition-colors duration-500 rounded-sm">
            <div className="flex justify-center mb-6">
              <Phone className="text-primary/70 group-hover:text-primary transition-colors duration-500" size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-foreground mb-4">Phone</h3>
            <p className="text-muted-foreground font-light">
              +1 (555) 123-4567
            </p>
            <p className="text-sm text-muted-foreground/70 mt-4 uppercase tracking-widest">
              During business hours
            </p>
          </div>

          {/* Email */}
          <div className="bg-transparent border border-border p-10 text-center group hover:border-primary transition-colors duration-500 rounded-sm">
            <div className="flex justify-center mb-6">
              <Mail className="text-primary/70 group-hover:text-primary transition-colors duration-500" size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-foreground mb-4">Email</h3>
            <p className="text-muted-foreground font-light">
              reservations@elegance.com
            </p>
            <p className="text-sm text-muted-foreground/70 mt-4 uppercase tracking-widest">
              24-hour response
            </p>
          </div>

          {/* Location */}
          <div className="bg-transparent border border-border p-10 text-center group hover:border-primary transition-colors duration-500 rounded-sm">
            <div className="flex justify-center mb-6">
              <MapPin className="text-primary/70 group-hover:text-primary transition-colors duration-500" size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-foreground mb-4">Location</h3>
            <p className="text-muted-foreground font-light">
              123 Elegance Avenue<br />
              Metropolis, NY 10001
            </p>
            <p className="text-sm text-muted-foreground/70 mt-4 uppercase tracking-widest">
              Valet Available
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="bg-card p-8 md:p-12 border border-border relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50" />
            
            <h2 className="text-3xl font-serif text-foreground mb-8 text-center">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Hours */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="text-primary" size={28} strokeWidth={1} />
              <h2 className="text-3xl font-serif text-foreground">Hours of Service</h2>
            </div>
            <div className="w-12 h-[1px] bg-primary/50 mb-8"></div>

            <div className="space-y-6">
              <div className="flex justify-between border-b border-border/50 pb-4">
                <h3 className="font-light text-muted-foreground tracking-wide">Monday - Thursday</h3>
                <p className="text-foreground">5:30 PM - 10:30 PM</p>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-4">
                <h3 className="font-light text-muted-foreground tracking-wide">Friday - Saturday</h3>
                <p className="text-foreground">5:30 PM - 11:30 PM</p>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-4">
                <h3 className="font-light text-muted-foreground tracking-wide">Sunday</h3>
                <p className="text-foreground">5:00 PM - 10:00 PM</p>
              </div>
              <div className="pt-6">
                <h3 className="text-primary uppercase tracking-widest text-sm mb-2">Private Events</h3>
                <p className="text-muted-foreground font-light">Available 7 days a week for daytime buyouts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
