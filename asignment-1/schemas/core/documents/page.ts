import { defineField, defineType } from "sanity"


const STATES = [
    { "title": "Alabama", "value": "AL"},
    { "title": "Alaska", "value": "AK"},
    { "title": "Arizona", "value": "AZ"},
    // ...
  ]
export default defineType( {
   
        title: "Page",
        name: "page",
        type: "document",
        groups: [{name: "main", title: "Main"},  { name: "configuration", title: "Configuration" },],
        initialValue: {
            firstname: "John Doe",
            // image: "image",
        },
        preview: {
            select: {
                title: "title",
                state: "state",
                //  subtitle: "firstname",
            },
            prepare({title, subtitle, state}) {
                const stateName = state && STATES.flatMap(option => option.value === state ? [option.title] : [])

                return {
                    title,
                    // subtitle,
                 // subtitle: date.split('-')[0],
                   subtitle: state ? `${state} is ${stateName}` : 'No state selected',

                }
            }
        },
        fields: [
          
            defineField({
                title:"Title",
                name:"title",
                type:"string",
            }),
            defineField({
                title: "FirstName",
                name: "firstname",
                type: "string",
            }),
            defineField({
                title: "LastName",
                name: "lastname",
                type: "string",
            }),
            defineField({
                title: "D.O.B",
                name: "dob",
                type: "date",
            }),
            defineField({
                title: "Avatar",
                name: "avatar",
                type: "image",
            }),
            defineField({
                    name: "pagedata",
                    type: "string",
                    title: "Pagedata",
                    group: "configuration",
                  
            }),
            defineField({
                    title: 'state',
                    name: 'state',
                    type: 'string',
                    options: {
                      list: STATES,
                    //   [
                    //     { "title": "Hyderabad", "value": "HYD"},
                    //     { "title": "Chennai", "value": "CN"},
                    //     { "title": "Delhi", "value": "DL"},
                    //     // ...
                    //   ],
                      layout: 'dropdown'
                    }
            }),
            defineField({
                title: "Items",
                name: "items",
                type: "array",
                group: "main",
                of: [
                    {type: "banner"},
                    {type: "card"},
                    {type: "group"},
                    {type: "placeholder"},
                ]
            }),
        
            defineField({
                name: 'sizeChart',
                title: 'Table',
                type: 'table', // Specify 'table' type
              }),    
        
        ],
    
})