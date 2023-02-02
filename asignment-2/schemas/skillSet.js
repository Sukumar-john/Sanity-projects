import { defineField, defineType } from "sanity";


export default defineType({
        title: "Skill Set",
        name: "skillSet",
        type: "document",
        groups: [
            {title: 'Work', name: 'work'},
            {title: 'Main', name: 'main'},
            {title: 'Optional', name: 'optional'}
          ],
        preview: {
            select: {
                title: "skillName",
                items: "skills",
            },
            prepare({title, items}){
                return {
                    title,
                    subtitle: `skills: ${items.length}`,
            }
        },
    },
        fields: [
            defineField({
                name: "skillId",
                title: "SkillId",
                type: "string",
                group: "main",
                validation: Rule => Rule.required().max(5).error('skillID should contain within 5 characters')
                .custom((skillId) => {
                     if (typeof skillId === "undefined") return true
                      const regex = /(^[0-9A-Z]+$)/
                       if (regex.test(skillId)) {
                         return true
                        } else {
                             return "Special characaters are not allowed"
                             }
                         })
            }),
            defineField({
                name: "skillName",
                title: "SkillName",
                type: "string",
                group: "main",
                validation: Rule => Rule.required().max(20).error('skillName should not exceed 20 characters')
                .custom((skillName) => {
                     if (typeof skillName === "undefined") return true
                      const regex = /(^[A-Za-z, ]+$)/
                       if (regex.test(skillName)) {
                         return true
                        } else {
                             return "give proper skill names"
                             }
                         })
            }),
            defineField({
                name: "skills",
                title: "Skills",
                type: "array",
                group: "main",
                of: [
                   {
                        title: "Skill",
                        name: "skill",
                        type: "string"
                       
                    },
                ]
            //    options: {
            //     list: [
            //         {
            //             title: "Javascript",
            //             value: "javascript",
            //         },
            //         {
            //             title: "React",
            //             value: "react",
            //         },
            //         {
            //             title: "Python",
            //              value: "python",
            //         }
            //     ]
            //    },
            }),
        ]
})
                // of: [
                //    {
                //         title: "javascript",
                //         name: "javascript",
                //         type: "string"
                       
                //     },
                //     {
                //         title: "react",
                //         name: "react",
                //         type: "string"
                //     },
                //     {
                //         title: "python",
                //         name: "python",
                //         type: "string"
                //     },
                //     {
                //         title: "java",
                //         name: "java",
                //         type: "string"
                //     },
                //     {
                //         title: "html",
                //         name: "html",
                //         type: "string"
                //     }
                // ]
            // })
        
        // ]
        // fields: () => ({
        //     title: defineField({
            
// })