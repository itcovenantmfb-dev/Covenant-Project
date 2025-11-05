import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'Title for this gallery collection (e.g., "Annual Event 2024", "Branch Opening")',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the gallery title',
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
      description: 'Brief description of this gallery collection',
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image that represents this gallery (will be shown as the large image)',
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
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional caption for the image',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      description: 'Additional images for this gallery (exactly 4 images needed for the grid layout)',
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
      validation: (rule) => rule.required().min(4).max(4).error('Please add exactly 4 images for the gallery grid'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category this gallery belongs to',
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
      description: 'Tags to help categorize and search for this gallery',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this gallery should be visible on the website',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this gallery should appear (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'featuredImage',
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