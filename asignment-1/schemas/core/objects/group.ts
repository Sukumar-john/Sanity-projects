import { defineField, defineType } from "sanity";


export default defineType({
    title: "Group",
    name: "group",
    type: "object",
    groups: [
        { name: "main", title: "Main" },
        { name: "configuration", title: "Configuration" },
      ],
    preview: {
        select: {
          title: "title",
          variant: "variant",
           items: "items"
      },
      prepare({title, variant, items}){
        return {
          title,
          subtitle: `${variant},  items: ${items.length}`,
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
                    {title: "Novel", value: "novel"},
                    {title: "Sci-fi", value: "sci-fi"},
                    {title: "Adventure", value: "adventure"},
                    {title: "Dao", value: "dao"},
                    
                ]
            }
        }),
        defineField({
            title: "Items",
            type: "array",
            name: "items",
            of: [{type: "reference", to: {type: "movie"}}, {type: "magazine"}],
            
        }),
        defineField({
            title: "Has Background",
            type: "boolean",
            name: "hasbackground"
        }),
        defineField({
            title: "Bg Image",
            type: "image",
            name: "bgimage",
             hidden: ({parent}) => !parent?.hasbackground
        
            
        })
    ]
})