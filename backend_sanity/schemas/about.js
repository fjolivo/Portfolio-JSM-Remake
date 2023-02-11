export default{
    name:'about',
    title:'About',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'text'
        },
        {
            name:'description2',
            title:'Description2',
            type:'text'
        },
        {
            name:'description3',
            title:'Description3',
            type:'text'
        },
        {
            name:'profileImg',
            title:'ProfileImg',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
} 