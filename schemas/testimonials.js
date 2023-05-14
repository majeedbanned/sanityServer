export default{
    name:'testimonial',
    title:'Testimonial',
    type:'document',
    fields:[
        {
            name:'mame',
            title:'Name',
            type:'string',
        },
        {
            name:'company',
            title:'Company',
            type:'string',
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        },
        {
            name:'feedback',
            title:'Feedback ',
            type:'string',
        
        }


        
]
}