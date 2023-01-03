export default {
    name: 'home',
    type: 'document',
    title: 'Home',
    groups: [
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        {
            name: 'entryHeadline',
            type: 'string',
            title: 'Entry Headline',
            group: 'content',
        },
        {
            name: 'entrySummary',
            type: 'string',
            title: 'Entry Summary', 
            group: 'content',
        },
        {
            name: 'aboutImage',
            type: 'image',
            title: 'About Image',
            group: 'content',
            options: {
                hotspot: true,
                
            }
        },
    ]
}