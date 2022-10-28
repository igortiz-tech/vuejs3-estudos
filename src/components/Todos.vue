<template>
  <div class="todos">
    <input
        type="text"
        v-model="newTodo"
        @keypress.enter="addTodo"
        placeholder="Add a new todo..."
    />
    <input v-model.lazy="amount" v-money3="config" />
    <div v-if="todos.length">
      <ul>
        <li v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <div v-else>Woohoo, nothing left todo!</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Money3Directive } from 'v-money3'

export default {
  directives: { money3: Money3Directive },
  data () {
    return {
      amount: '12345.67',
      config: {
        prefix: 'R$ ',
        suffix: '',
        thousands: '.',
        decimal: ',',
        precision: 2,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
      }
    }
  },
  setup(props, { emit }) {
    const todos = ref([
      { text: 'make the bed', id: 1 },
      { text: 'play video games', id: 2 },
    ])
    const newTodo = ref('')
    const addTodo = () => {
      if (newTodo.value) {
        const id = Math.random()
        todos.value = [{ text: newTodo.value, id }, ...todos.value]
        newTodo.value = ''
      } else {
        emit('badValue', 12)
      }
    }
    const deleteTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id != id)
    }
    return { todos, addTodo, deleteTodo, newTodo }
  }
}
</script>

<style>
.todos {
  max-width: 400px;
  margin: 20px auto;
  position: relative;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.todos ul {
  position: relative;
  padding: 0;
}
.todos li {
  list-style-type: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}
.todos li:hover {
  cursor: pointer;
}
</style>
