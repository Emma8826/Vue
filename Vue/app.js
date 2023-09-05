const app =  Vue.createApp({
    //data, functions
    data(){
        return{
            showMovie : true,
            title:'The final empire',
            ep:'Session 1',
            time:123
        }
    },
    methods:{
        change(title,time){
            this.title = title
            this.time = time
        },
        toggleShowBook(){
            this.showMovie = !this.showMovie
        }
    }
})
//mount = 發動
app.mount('#app')