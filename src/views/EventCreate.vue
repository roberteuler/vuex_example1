<template>
  <div>
    <h1>Create Event, {{ user.id }}</h1>
    <p>Event was created by {{ user.name}}</p>
    <p> {{ getEventById(1)}}</p>


    <p><strong>There are {{ catLength }} categories: </strong></p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getEventById', 'catLength']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style>
</style>
