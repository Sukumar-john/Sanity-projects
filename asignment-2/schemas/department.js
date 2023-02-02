import { defineField, defineType } from "sanity";

export default defineType({
        title: "Department",
        name: "department",
        type: "document",
        groups: [
            {title: 'Work', name: 'work'},
            {title: 'Main', name: 'main'},
            {title: 'Optional', name: 'optional'}
          ],
          previw: {
            select: {
                title: "deptName",
                subtitle: "deptId",
            },
            prepare({title, subtitle}) {
                return {
                    title,
                    subtitle
                }
            }
          },
        fields: [
            defineField({
                name: "deptId",
                title: "DeptId",
                type: "string",
                group: "main",
                validation: Rule => Rule.required().max(5).error('deptID should contain within 5 characters')
                .custom((deptId) => {
                     if (typeof deptId === "undefined") return true
                      const regex = /(^[0-9A-Z]+$)/
                       if (regex.test(deptId)) {
                         return true
                        } else {
                             return "Special characaters are not allowed"
                             }
                            })
            }),
            defineField({
                name: "deptName",
                title: "DeptName",
                type: "string",
                group: "main",
                validation: Rule => Rule.required().max(20).error('deptName should contain within 20 characters')
                .custom((deptName) => {
                     if (typeof deptName === "undefined") return true
                      const regex = /(^[a-zA-Z ]+$)/
                       if (regex.test(deptName)) {
                         return true
                        } else {
                             return "Special characaters are not allowed"
                             }
                            })
                 
            }),
            defineField({
                name: "depthead",
                title: "Dept Head",
                type: "reference",
                to: [{type: "person"}],
                group: "main",
                validation: (Rule) => Rule.required()   
            }),
            defineField({
                name: "skillset",
                title: "Skill Set",
                type: "reference",
                to: [{type: "skillSet"}],
                group: "main",
                validation: (Rule) => Rule.required()   
            }),
        ]
})