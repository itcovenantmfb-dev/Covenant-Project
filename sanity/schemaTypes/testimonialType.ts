import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      description: 'Name of the person giving the testimonial',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'business',
      title: 'Business/Role',
      type: 'string',
      description: 'Business name, job title, or role of the customer',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      description: 'The testimonial content - what the customer said',
      validation: (rule) => rule.required().max(1000),
    }),
    defineField({
      name: 'avatar',
      title: 'Customer Photo',
      type: 'image',
      description: 'Photo of the customer giving the testimonial',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Describe the image for accessibility',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Customer rating (1-5 stars)',
      validation: (rule) => rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'serviceUsed',
      title: 'Service Used',
      type: 'string',
      description: 'Which service or product they are testifying about',
      options: {
        list: [
          { title: 'Mobile Banking', value: 'mobile-banking' },
          { title: 'Digital Banking', value: 'digital-banking' },
          { title: 'Loans', value: 'loans' },
          { title: 'Savings Account', value: 'savings-account' },
          { title: 'Current Account', value: 'current-account' },
          { title: 'POS Services', value: 'pos-services' },
          { title: 'Customer Service', value: 'customer-service' },
          { title: 'General Banking', value: 'general-banking' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Location of the customer (optional)',
      placeholder: 'e.g., Lagos, Nigeria',
    }),
    defineField({
      name: 'dateGiven',
      title: 'Date Given',
      type: 'datetime',
      description: 'When this testimonial was given',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Mark this testimonial as featured to highlight it',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this testimonial should be displayed on the website',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this testimonial should appear',
      validation: (rule) => rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'business',
      media: 'avatar',
      rating: 'rating',
      featured: 'featured',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, subtitle, media, rating, featured, isActive } = selection
      const stars = '⭐'.repeat(rating || 0)
      const status = isActive ? '✅' : '❌'
      const featuredIcon = featured ? '🌟' : ''
      
      return {
        title: title,
        subtitle: `${subtitle} ${stars} ${status} ${featuredIcon}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Date Given, New',
      name: 'dateGivenDesc',
      by: [{ field: 'dateGiven', direction: 'desc' }],
    },
    {
      title: 'Rating, High to Low',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
  ],
})