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
            type:'string'
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