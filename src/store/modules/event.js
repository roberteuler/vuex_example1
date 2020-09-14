import EventService from '@/services/EventService'

export const namespaced = true

export const state = {
  events: [],
  eventCount: 0,
  event: {}
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT_COUNT(state, eventCount) {
    state.eventCount = eventCount
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Your Event has been created!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating the event :' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching events :' + error.message
          }
          dispatch('notification/add', notification, { root: true })
          throw(error);
        })
    }
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events :' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  getEventCount({ commit, dispatch }) {
    EventService.getEvents()
      .then(response => {
        commit('SET_EVENT_COUNT', response.data.length)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching eventCount :' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  }
}

export const getters = {
  eventCount: state => {
    return state.eventCount
  },
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
