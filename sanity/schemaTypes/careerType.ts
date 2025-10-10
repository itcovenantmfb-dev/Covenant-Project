import { defineField, defineType } from 'sanity'

export const careerType = defineType({
  name: 'career',
  title: 'Career Opportunities',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'The title of the job position',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the job title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      description: 'Brief description of the job role',
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'image',
      title: 'Job Image',
      type: 'image',
      description: 'Image representing this job or department',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Experience Level',
      type: 'string',
      description: 'Required experience level for this position',
      options: {
        list: [
          { title: 'Entry-Level', value: 'Entry-Level' },
          { title: 'Mid-Level', value: 'Mid-Level' },
          { title: 'Senior', value: 'Senior' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Job Location',
      type: 'string',
      description: 'Where this job is located',
      options: {
        list: [
          { title: 'Lagos, Nigeria', value: 'Lagos, Nigeria' },
          { title: 'Abuja, Nigeria', value: 'Abuja, Nigeria' },
          { title: 'Remote', value: 'Remote' },
          { title: 'Abeokuta, Nigeria', value: 'Abeokuta, Nigeria' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Job Category',
      type: 'string',
      description: 'Category or department this job belongs to',
      options: {
        list: [
          { title: 'Technology', value: 'Technology' },
          { title: 'Finance & Accounting', value: 'Finance & Accounting' },
          { title: 'Operations', value: 'Operations' },
          { title: 'Marketing', value: 'Marketing' },
          { title: 'Customer Service', value: 'Customer Service' },
          { title: 'Human Resources', value: 'Human Resources' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      description: 'Type of employment',
      options: {
        list: [
          { title: 'Full-Time', value: 'Full-Time' },
          { title: 'Part-Time', value: 'Part-Time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'salary',
      title: 'Salary Range',
      type: 'string',
      description: 'Salary range or compensation details',
      placeholder: 'e.g., ₦150,000 - ₦300,000 per month',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags to help categorize this job',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'primaryResponsibilities',
      title: 'Primary Responsibilities',
      type: 'array',
      description: 'Main responsibilities for this role',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobSpecification',
      title: 'Job Specifications',
      type: 'array',
      description: 'Detailed job specifications and requirements',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experienceRequired',
      title: 'Experience Required',
      type: 'string',
      description: 'Detailed experience requirements',
      placeholder: 'e.g., Minimum 3 Years',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'applicationDeadline',
      title: 'Application Deadline',
      type: 'datetime',
      description: 'Last date for applications',
    }),
    defineField({
      name: 'isActive',
      title: 'Job is Active',
      type: 'boolean',
      description: 'Whether this job posting should be visible and accepting applications',
      initialValue: true,
    }),
    defineField({
      name: 'postedDate',
      title: 'Posted Date',
      type: 'datetime',
      description: 'When this job was first posted',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'image',
      category: 'category',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, subtitle, media, category, isActive } = selection
      const status = isActive ? '✅' : '❌'
      
      return {
        title: title,
        subtitle: `${category} • ${subtitle} ${status}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Posted Date, New',
      name: 'postedDateDesc',
      by: [{ field: 'postedDate', direction: 'desc' }],
    },
    {
      title: 'Category, Title',
      name: 'categoryTitle',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
})