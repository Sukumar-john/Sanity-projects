import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  groups: [
    {title: 'Work', name: 'work'},
    {title: 'Main', name: 'main'},
    {title: 'Optional', name: 'optional'}
  ],
  preview: {
    select: {
        title: "empName",
        media: "empImage",
        subtitle: "role",
        items: 'department.deptName',
        },
        prepare({title, media,subtitle, items}) {
            return {
              title,
              media,
              subtitle: `${subtitle} ${items ?? "" }`,
    
            }
  
        } 
    },
  fields: [
    defineField({
        name: 'empId',
        title: 'EmpId',
        type: 'string',
        group: "main",
        validation: Rule => Rule.required().max(5).error('ID should contain within 5 characters')
        .custom((empid) => {
             if (typeof empid === "undefined") return true
              const regex = /(^[0-9A-Z]+$)/
               if (regex.test(empid)) {
                 return true
                } else {
                     return "Special characaters are not allowed"
                     }
                 })
      }),
    defineField({
      name: 'empName',
      title: 'EmpName',
      type: 'string',
      group: "main",
      validation: Rule => Rule.required().max(20).error('EmpName should not exceed 20 characters')
      .custom((empName) => {
           if (typeof empName === "undefined") return true
            const regex = /(^[A-Za-z]+$)/
             if (regex.test(empName)) {
               return true
              } else {
                   return "Special characaters and numbers are not allowed"
                   }
               })
    }),
    defineField({
        name: 'empImage',
        title: 'EmpImage',
        // type: 'file',
        type: "image",
        group: "main",
        // options: {
        //   accept: 'image/*'
        // }
      }),
      defineField({
        name: 'gender',
        title: 'Gender',
        type: 'string',
        group: "main",
        options: {
          list: [
            {title: 'Male', value:'male'},
            {title: 'Female', value: 'female'},
            {title: 'Other', value: 'other'},
          ],
          layout: 'radio',
        }
      }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // }),
    defineField({
        name: 'dob',
        title: 'Date of birth ',
        type: 'date',
        group: "main"
    }),
    defineField({
        name: 'address',
        title: 'Address',
        type: 'text',
        group: "optional",
        validation: Rule => Rule.required().error('addrees is needed')
        .custom((address) => {
             if (typeof address === "undefined") return true
              const regex = /(^[0-9a-zA-Z.,#-/ ]+$)/
               if (regex.test(address)) {
                 return true
                } else {
                     return "only selected Special characaters are allowed"
                     }
                 })
    }),
    defineField({
        name: 'phone',
        title: 'Phone number',
        type:'string',
        group: "main",
        validation: Rule => Rule.required().max(10)
        // .error('phone number should have 10 characters')
        .custom((phone) => {
             if (typeof phone === "undefined") return true
            //  else  return phone.match(/\d/g).length===10;
              const regex = /\d[0-9]{10}/
               if (regex.test(phone)) {
                 return true
                } else {
                     return "only numbers are allowed"
                     }
                 })

    }),
    defineField({
        name: 'email',
        title: 'Email',
        type:'string',
        group: "main",
        validation: Rule => Rule.required().error('email is needed')
        .custom((email) => {
             if (typeof email === "undefined") return true
              const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
               if (regex.test(email)) {
                 return true
                } else {
                     return "only selected characaters are allowed"
                     }
                 })

    }),
    defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            group: "work",
            options: {
                list: [
                    {title: 'CEO', value: 'ceo'},
                    {title: 'Manager', value:'manager'},
                    {title: 'HR', value: 'hr'},
                    {title: 'Intern', value: 'intern'},
                    {title: 'IT Developer', value: 'itDeveloper'},

                ]
          }
        }),
        defineField({
            name:'empType',
            title: 'EmpType',
            type: 'string',
            group: ["main", "work"],
            options: {
                list: [
                    {title: 'Employee', value: 'employee'},
                    {title: 'Employer', value:'employer'},
                ]
            },
            // hidden: ({document}) => document?.empType !== 'employee'
        }),
        defineField({
            name:'yop',
            title: 'Years of experience ',
            type: 'number',
            group: "work",
            validation: Rule => Rule.required()
            // .error('cannot be less than 0')
            .custom( yop => {
                if (typeof yop === "undefined") return true
                else if (yop > 0) return true 
                else return "cannot be less than 0"
            }),
            hidden: ({document}) => document?.empType !== 'employee'
        }),
        defineField({
            name:'department',
            title: 'Department ',
            type: 'reference', 
            to: {type: 'department'},
            group: "work",
            hidden: ({document}) => document?.empType !== 'employee'
        }),
        defineField({
            name: 'reportingManager',
            title: 'Reporting manager ',
            type: 'reference', //refernce
            to: {type:'person'},
            group: "work",
            hidden: ({document}) => document?.empType !== 'employee'
        })

  ],

})
