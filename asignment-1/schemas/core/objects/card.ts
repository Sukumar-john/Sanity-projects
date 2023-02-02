import { defineType, defineField } from "sanity";


export default defineType({
    title: "Card",
    name: "card",
    type: "object",
    groups: [
        { name: "main", title: "Main" },
        { name: "configuration", title: "Configuration" },
      ],
      preview: {
        select: {
          title: "title",
          variant: "variant",
           media: "bgimage"
      },
      prepare({title, variant, media}){
        return {
          title,
          media,
          subtitle: `${variant}`,
      }
     },
    },
    fields: [
        defineField({
            name:"title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name:"subtitle",
            title: "Subtitle",
            type: "string"
        }),
   
        defineField({
            title: "Variant",
            type: "string",
            name: "variant",
            options: {
                list: [
                    {title: "Highlighted-title", value: "highlighted-title"},
                    {title: "center", value: "center"},
                    {title: "Adventure", value: "adventure"},
                    {title: "Dao", value: "dao"},
                    
                ]
            }
        }),
        defineField({
            title: "Bg Image",
            type: "image",
            name: "bgimage",
        })
    ]
})