import { defineField, defineType } from "sanity";


export default defineType({
    title: "Items",
    name: "items",
    type: "object",
    groups: [{name: "main", title: "Main"}],
    // options: {},
    fields: [
        defineField({
            title: "Placeholder",
            name: "placeholder",
            type: "array",
            of: [
                {
                    title: "Placeholder",
                    name: "placeholder",
                     type: "object",
                    //  of: [
                    //     {type: "placeholder"}
                    //  ],
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
        defineField({
            title: "Banner",
            name: "banner",
            type: "array",
            group: "main",
            of: [
               { type: "banner"}
            ]
        }),
        defineField({
            title: "Magazines",
            type: "magazine",
            name: "magaz" ,        
         }),

]

})
    
               
                // {
                // title: "Books",
                // type: "object",
                // fields: [
                //     defineField({
                //         title: "Book Name",
                //         type: "string",
                //         name: "bookname",
                       
                //     }),
                //     defineField({
                //         title: "Published At",
                //         type: "date",
                //         name: "publishedat"
                //     }),
               
                // ]
                // },
               