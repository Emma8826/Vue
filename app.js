const app =  Vue.createApp({
    //data, functions
    data(){
        //return data object
        return{
            url: 'https://www.notion.so/Jenny-Lin-Note-d45c5182333943c0b7616a1972e31fb1',      
            showBooks:true,           
            Books:[
                {title:'底層邏輯',author:'劉潤',img:'../20220318054356524735.jpg',price:330,isFav:true},
                {title:'理科工作術',author:'井下田久幸',price:300,img:'/../415_112937271_236_mainCoverImage1.jpg',isFav:false},
                {title:'原子習慣',author:'詹姆斯·克利爾',price:320,img:'/../ec1760858.jpg',isFav:true}
            ]        
        }
    },
    methods:{
        toggleShowBook(){
            this.showBooks = !this.showBooks
        },
        togglefav(book){
            book.isFav = !book.isFav
        },
        toggleShowDetails(){

        }        
    },
    computed: { // 存放每一个計算函數
        favTotal() {
            return this.Books.filter((book) => book.isFav).length 
        },
        priceTotal() {
            return this.Books
            .filter((book) => book.isFav)           
            .reduce((total, book) => total + book.price, 0);//(accumulator,currentItem)
            //reduce 會按順序遍歷數組中的每個元素(book)，將book.price加總到total中
        }
    }
})
//mount = 發動
app.mount('#app')