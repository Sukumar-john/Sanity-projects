import {defineType, defineField} from 'sanity'

export default defineType({
        title: 'Movies',
        name: 'movie',
        type: 'document',
        description: 'Movies List',
        preview: {
            select: {
                title: 'moviename',
                subtitle: 'director'
            },
        },
        fields: [
            defineField({
                name: 'moviename',
                title: 'Moviename',
                type:'string'
                }),
            defineField({
                name: 'director',
                title: 'Director',
                type: 'string',
            }),
             
                defineField({
                name: 'year',
                title: 'Year',
                type:'date',
                })
            ]
})