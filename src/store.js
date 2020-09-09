import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'abcd123', name: 'Hans Gunther'
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      {
        "id": 1,
        "title": "Beach Cleanup",
        "date": "Aug 28 2018",
        "time": "10:00",
        "location": "Daytona Beach",
        "description": "Let's clean up this beach.",
        "organizer": "Adam Jahr",
        "category": "sustainability",
        "attendees": [
          {
            "id": "abc123",
            "name": "Adam Jahr"
          },
          {
            "id": "def456",
            "name": "Gregg Pollack"
          },
          {
            "id": "ghi789",
            "name": "Beth Swanson"
          },
          {
            "id": "jkl101",
            "name": "Mary Gordon"
          }
        ]
      },
      {
        "id": 2,
        "title": "Park Cleanup",
        "date": "Nov 12 2018",
        "time": "12:00",
        "location": "132 N Magnolia Street, Orlando, Florida",
        "description": "We're going to clean up this park.",
        "organizer": "Adam Jahr",
        "category": "nature",
        "attendees": [
          {
            "id": "ghi789",
            "name": "Beth Swanson"
          },
          {
            "id": "jkl101",
            "name": "Mary Gordon"
          }
        ]
      },
      {
        "id": 3,
        "title": "Pet Adoption Day",
        "date": "Dec 2 2018",
        "time": "12:00",
        "location": "132 N Magnolia Street, Orlando, Florida",
        "description": "Help animals find new homes.",
        "organizer": "Gregg Pollack",
        "category": "animal welfare",
        "attendees": [
          {
            "id": "abc123",
            "name": "Adam Jahr"
          },
          {
            "id": "ghi789",
            "name": "Beth Swanson"
          },
          {
            "id": "jkl101",
            "name": "Mary Gordon"
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state, getters) => {
      //verwendung von getters in getters
      return state.todos.length - getters.doneTodos.length;
    },
    getEventById: state => id => {
      return state.events.find((event) => event.id === id);
    }
  }
})
