Vue.component('test',{
    template: '<button @click="count++">{{count}}</button>',
    data () {
        return{
            const: 0
        }
    }
})

new Vue({
    el: '#app'
})
