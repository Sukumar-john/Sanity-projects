import { defineField, defineType } from "sanity";


export default defineType({
    title: "Banner",
    name: "banner",
    type: "object",
    groups: [
        { name: "main", title: "Main" },
        { name: "configuration", title: "Configuration" },
      ],
    options: {
        collapsible: true,
        collapsed: true
    },
    preview: {
        select: {
          title: "title",
           subtitle: "mediaType",
           media: "mediaType"

      },
      prepare({title,  subtitle, media}){
        return {
          title,
          media,
          subtitle,
        //   subtitle,
      }
     },
    },
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        }),
        defineField({
                name: "ctaLabel",
                title: "CTA Label",
                type: "string",
                // group: "main",
              
        }),
        defineField({
            title: "Media Type",
            name: "mediaType",
            type: "string",
            options: {
                list: [
                    {
                        title: "Image", value: "image"
                    },
                    {
                        title: "Video", value: "video"
                    },
                    {
                        title: "Component", value: "component"
                    },
                ]
            },
        }),
        defineField({
            title: "Image",
            type: "image",
            name: "image",
            hidden: ({parent}) => parent?.mediaType !== "image"
        }),
        defineField({
            title: "Video",
            name: "video",
            type: "file",
            options: {
                accept: 'video/*'
            },
            hidden: ({parent}) => parent?.mediaType !== "video"
        }),
        defineField({
            title: "Component",
            name: "component",
            type: "array",
            group: "main",
            options: {
                // layout: 'dropdown'
            },
            of: [ 
                {type: "magazine"},
                {type: "card"},
                {type: "group"},
                // {type: "placeholder"}
        ],
            hidden: ({parent}) => parent?.mediaType !== "component"
        })
    ]
})