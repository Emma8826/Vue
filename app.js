const app =  Vue.createApp({
    //data, functions
    data(){
        //return data object
        return{
            url: 'https://www.notion.so/Jenny-Lin-Note-d45c5182333943c0b7616a1972e31fb1',
            showMovie : true,
            title:'The final empire',
            ep:'Session 1',
            time:123,
            showBooks:true,
            books:[
                {title:'An apple',author:'A'},
                {title:'Banana',author:'B'},
                {title:'Cat',author:'C'}
            ],
            x:0,y:0,          
        }
    },
    methods:{
        change(title,time){
            console.log('Click button')
            this.title =  title
            this.time = time
        },
        toggleShowBook(){
            this.showMovie = !this.showMovie
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if(data != null){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.Y = e.offsetY
        }
    }
})
//mount = 發動
app.mount('#app')