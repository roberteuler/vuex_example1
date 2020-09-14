<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: {page: page -1 }}" rel="prev">Prev Page | </router-link>
    </template> 
    <router-link v-show="nextPageVisible" :to="{ name: 'event-list', query: {page: page +1 }}" rel="next">Next Page </router-link>

  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapGetters, mapState } from 'vuex';

export default {
  data(){
    return {
      itemsPerPage: 3
    }
  },
  components: {
    EventCard
  },
  
  created() {
    this.$store.dispatch('event/fetchEvents', { perPage: this.itemsPerPage, page: this.page});
    this.$store.dispatch('event/getEventCount');
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(['event', 'user']),
    nextPageVisible(){
      return this.page <= ( this.event.eventCount / this.itemsPerPage ); 
    }
    },
    
}
</script>
