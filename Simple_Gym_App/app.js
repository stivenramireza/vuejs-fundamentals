const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            obtenerTareas(this.tareas);
        },
        editarTarea(index){
            this.tareas[index].estado = true;
            obtenerTareas(this.tareas);
        },
        eliminar(index){
            this.tareas.splice(index, 1);
            obtenerTareas(this.tareas);
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.areas = datosDB;
        }
    },
});

function obtenerTareas(tareas){
    localStorage.setItem('gym-vue', JSON.stringify(tareas));
}
