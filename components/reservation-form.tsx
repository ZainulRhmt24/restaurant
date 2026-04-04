'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from '@/components/ui/field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s\-()]{10,}$/, 'Invalid phone number'),
  date: z.string().refine(val => new Date(val) > new Date(), 'Date must be in the future'),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'),
  guests: z.string().regex(/^\d+$/, 'Number of guests must be a number').transform(Number).refine(n => n >= 1 && n <= 12, 'Guests must be between 1 and 12'),
  specialRequests: z.string().optional(),
})

type ReservationData = z.infer<typeof reservationSchema>

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ReservationData>({
    resolver: zodResolver(reservationSchema),
  })

  const onSubmit = async (data: ReservationData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to create reservation')

      toast.success('Reservation confirmed! We look forward to seeing you.')
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to create reservation. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border p-8 rounded-lg space-y-6">
      {/* Name */}
      <Field>
        <FieldLabel htmlFor="name">Full Name</FieldLabel>
        <Input
          id="name"
          placeholder="John Doe"
          {...register('name')}
        />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
      </Field>

      {/* Email */}
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
        />
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
      </Field>

      {/* Phone */}
      <Field>
        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
        <Input
          id="phone"
          placeholder="+1 (555) 123-4567"
          {...register('phone')}
        />
        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
      </Field>

      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="date">Date</FieldLabel>
          <Input
            id="date"
            type="date"
            {...register('date')}
          />
          {errors.date && <p className="text-destructive text-sm mt-1">{errors.date.message}</p>}
        </Field>

        <Field>
          <FieldLabel htmlFor="time">Time</FieldLabel>
          <Input
            id="time"
            type="time"
            {...register('time')}
          />
          {errors.time && <p className="text-destructive text-sm mt-1">{errors.time.message}</p>}
        </Field>
      </div>

      {/* Guests */}
      <Field>
        <FieldLabel htmlFor="guests">Number of Guests</FieldLabel>
        <Input
          id="guests"
          type="number"
          min="1"
          max="12"
          placeholder="4"
          {...register('guests')}
        />
        {errors.guests && <p className="text-destructive text-sm mt-1">{errors.guests.message}</p>}
      </Field>

      {/* Special Requests */}
      <Field>
        <FieldLabel htmlFor="specialRequests">Special Requests (Optional)</FieldLabel>
        <textarea
          id="specialRequests"
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Any dietary restrictions, celebration notes, etc."
          rows={4}
          {...register('specialRequests')}
        />
      </Field>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Creating Reservation...' : 'Confirm Reservation'}
      </Button>
    </form>
  )
}
