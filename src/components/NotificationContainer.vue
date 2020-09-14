<template>
    <div class="notifcation-container">
        <NotificationBar :key="notification.id" v-for="notification in notifications" :notification="notification" />
    </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    NotificationBar
  },
  computed: {
    ...mapState('notification', ['notifications'])
  }
}
</script>

<style  scoped>
.notification-container {
  position: fixed;
  bottom: 0;
}
</style>
