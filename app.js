const app =  Vue.createApp({
    //data, functions
    data(){
        //return data object
        return{
            showMovie : true,
            title:'The final empire',
            ep:'Session 1',
            time:123
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
        handleEvent(e){
            console.log('Trigger')
        }
    }
})
//mount = 發動
app.mount('#app')