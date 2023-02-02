import { defineType,defineField } from "sanity";


export default defineType({

        title: "Placeholder",
        name: "placeholder",
        type: "object",
        groups: [
            { name: "main", title: "Main" },
            { name: "configuration", title: "Configuration" },
          ],
         preview: {
            select: {
                title: "title",
                subtitle: "placeholderfield",
            },
            prepare({ title,  subtitle }) {
                return {
                    title,
                    subtitle: `no of items: ${subtitle.length}`,
                }
            },
        },
        fields: [
            defineField({
                title:"title",
                name:"title",
                type:"string",
                
            }),
            defineField({
                title: "Placeholder",
                name: "placeholderfield",
                type: "array",
                of: [
                    {
                        type: "object",
                        options: { columns: 2},
                        fields: [
                            defineField({
                               title: "Key",
                               name: "key",
                               type: "string",  
                           }),
                           defineField({
                               title: "Value",
                               name: "value",
                               type: "string",  
                           }),
                         ]
                    },
                ]
            }),
            
            
        ]
        
  
})