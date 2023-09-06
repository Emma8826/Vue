const app =  Vue.createApp({
    //data, functions
    data(){
        //return data object
        return{
            showMovie : true,
            title:'The final empire',
            ep:'Session 1',
            time:123,
            x:0,
            y:0
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