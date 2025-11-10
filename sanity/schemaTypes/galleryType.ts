import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery Albums',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Album Title',
      type: 'string',
      description: 'Title for this gallery album (e.g., "15th Annual General Meeting", "Customer Service Week 2025")',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the album title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of this gallery album',
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Main cover image that represents this album (shown in album grid)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for accessibility and SEO',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Album Media',
      type: 'array',
      description: 'All images in this album (shown when viewing album details)',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for accessibility and SEO',
              validation: (rule) => rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the image',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1).error('Please add at least 1 image to the album'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category this album belongs to',
      options: {
        list: [
          { title: 'Events', value: 'events' },
          { title: 'Branch Activities', value: 'branch-activities' },
          { title: 'Community Outreach', value: 'community-outreach' },
          { title: 'Staff Activities', value: 'staff-activities' },
          { title: 'Awards & Recognition', value: 'awards-recognition' },
          { title: 'CSR Activities', value: 'csr-activities' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      description: 'Date when this event or activity took place',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where this event or activity took place',
      placeholder: 'e.g., Lagos Branch, Victoria Island',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags to help categorize and search for this album',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this album should be visible on the website',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this album should appear (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
      isActive: 'isActive',
      eventDate: 'eventDate',
    },
    prepare(selection) {
      const { title, subtitle, media, isActive, eventDate } = selection
      const status = isActive ? '✅' : '❌'
      const date = eventDate ? new Date(eventDate).toLocaleDateString() : ''
      
      return {
        title: title,
        subtitle: `${subtitle} ${date ? `• ${date}` : ''} ${status}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Event Date, Newest',
      name: 'eventDateDesc',
      by: [{ field: 'eventDate', direction: 'desc' }],
    },
    {
      title: 'Category, Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
})