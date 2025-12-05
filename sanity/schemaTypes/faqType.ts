import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Select the category this FAQ belongs to',
      options: {
        list: [
          { title: 'Questions Pertaining Digital Banking (E-Channels)', value: 'digital-banking' },
          { title: 'Questions Pertaining Loans/Investments', value: 'loans-investments' },
          { title: 'Questions Pertaining Accounts', value: 'accounts' },
          { title: 'General Questions', value: 'general' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'text',
      description: 'The frequently asked question',
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      description: 'The answer to the question',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
   
  
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
   
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: `${subtitle}`,
      }
    },
  },
  orderings: [
    {
      title: 'Category, Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'desc' },
        { field: 'order', direction: 'desc' },
      ],
    },
  ],
})