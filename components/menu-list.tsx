'use client'

import { useEffect, useState } from 'react'
import { Spinner } from '@/components/ui/spinner'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
}

export function MenuList() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch('/api/menu')
        const data = await response.json()
        if (response.ok && Array.isArray(data)) {
          setItems(data)
        } else {
          console.error('API Error:', data)
          setItems([]) // Fallback to empty array
        }
      } catch (error) {
        console.error('Error fetching menu:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  const categories = Array.from(new Set(items.map(item => item.category)))
  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner className="text-primary w-8 h-8 opacity-50" />
      </div>
    )
  }

  // To group items by category when displaying 'All'
  const groupedItems = categories.reduce((acc, category) => {
    acc[category] = items.filter(item => item.category === category);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const renderItems = (itemsToRender: MenuItem[]) => (
    <ul className="space-y-12">
      {itemsToRender.map(item => (
        <li key={item.id} className="group cursor-default">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            {/* The dotted leader line */}
            <div className="flex-grow border-b border-dotted border-muted-foreground/30 mx-4 opacity-70"></div>
            <span className="text-lg font-serif text-foreground w-16 text-right tabular-nums">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-muted-foreground font-light text-sm max-w-2xl leading-relaxed">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-8 mb-20 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`text-sm uppercase tracking-[0.2em] transition-colors pb-2 border-b-2 ${
            selectedCategory === null
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Tasting Menu
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm uppercase tracking-[0.2em] transition-colors pb-2 border-b-2 ${
              selectedCategory === category
                ? 'border-primary text-primary font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Output */}
      <div className="animate-in fade-in duration-700">
        {selectedCategory ? (
          <div>
            <h2 className="text-2xl font-serif text-center mb-12 capitalize tracking-wider text-primary">
              {selectedCategory}
            </h2>
            {renderItems(filteredItems)}
          </div>
        ) : (
          <div className="space-y-24">
            {categories.map(category => (
              <div key={category}>
                <h2 className="text-2xl font-serif text-center mb-12 capitalize tracking-wider text-primary relative">
                  <span className="bg-background px-6 relative z-10">{category}</span>
                  <div className="absolute inset-0 top-1/2 -z-0 border-b border-border"></div>
                </h2>
                {renderItems(groupedItems[category] || [])}
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-24 border border-dashed border-border/50">
            <p className="text-muted-foreground font-serif text-lg italic tracking-wide">
              The menu is currently being reimagined. Explore with us soon.
            </p>
          </div>
        )}
      </div>
      
    </div>
  )
}
