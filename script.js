const app = new Vue({
  el: '#app',
  data: {
    appName: 'GROCERIES lIST',
    tasks: [],
    newTask: ''
  },
  methods: {
    addTask () {
      this.tasks.push({
        name: this.newTask,
        status: false
      })
      window.localStorage.setItem('GROCERY_VUE', JSON.stringify(this.tasks))
      this.newTask = ''
    },
    editTask (index) {
      this.tasks[index].status = true
      window.localStorage.setItem('GROCERY_VUE', JSON.stringify(this.tasks))
    },
    deleteTask (index) {
      this.tasks.splice(index, 1)
      window.localStorage.setItem('GROCERY_VUE', JSON.stringify(this.tasks))
    }
  },
  created () {
    const localDB = JSON.parse(window.localStorage.getItem('GROCERY_VUE'))
    console.log(localDB)
    if (localDB === null) {
      this.tasks = []
    } else {
      this.tasks = localDB
    }
  },
  computed: {}
})
