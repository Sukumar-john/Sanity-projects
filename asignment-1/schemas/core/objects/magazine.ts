import { defineType, defineField } from "sanity"


export default defineType ({

        title: "Magazines",
        type: "object",
        name: "magazine",
        fields: [
            defineField({
                title: "Magazine Name",
                type: "string",
                name: "magazinename",
               
            }),
            defineField({
                title: "Published At",
                type: "date",
                name: "publishedat"
            })
        ]
})
