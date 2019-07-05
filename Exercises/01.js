const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Pera', cantidad: 5},
            {nombre: 'Platano', cantidad: 0}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
            this.nuevaFruta = '';   
        }
    },
    computed: {
        sumarFrutas(){
            this.frutas = 0
            for(fruta of this.frutas){
                this.total += fruta.cantidad
            }
            return this.total;
        }
    },
})
