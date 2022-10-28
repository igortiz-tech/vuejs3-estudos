<template>
  <div class="contact">
    <h1>Calendar</h1>
    <vue-cal  locale="pt-br"
              resize-x
              :events="events"
              :time-step="30" :disable-views="['years', 'year']" class="vuecal--blue-theme"></vue-cal>
  </div>
</template>

<script>
import { ref } from 'vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: { VueCal },


  data: () => ({
    events: [
      {
        start: '2022-10-28 10:30',
        end: '2022-10-28 11:30',
        title: 'Need to go shopping',
        content: '<i class="icon material-icons">shopping_cart</i>',
        class: 'leisure'
      },
      {
        start: '2022-10-28 10:30',
        end: '2022-10-28 11:30',
        title: 'Need to go shopping 2',
        content: '<i class="icon material-icons">shopping_cart</i>',
        class: 'leisure'
      },
      {
        start: '2022-10-28 10:30',
        end: '2022-10-28 11:30',
        title: 'Need to go shopping 2',
        content: '<i class="icon material-icons">shopping_cart</i>',
        class: 'leisure'
      },
      {
        start: '2022-10-28 10:30',
        end: '2022-10-28 11:30',
        title: 'Need to go shopping 2',
        content: '<i class="icon material-icons">shopping_cart</i>',
        class: 'leisure'
      },
      {
        start: '2018-11-21',
        end: '2018-11-21',
        title: 'Golf with John',
        content: '<i class="icon material-icons">golf_course</i>',
        class: 'sport'
      },
      {
        start: '2018-11-22',
        end: '2018-11-22',
        title: 'Dad\'s birthday!',
        content: '<i class="icon material-icons">cake</i>',
        class: 'sport'
      }
    ]
  }),
  setup() {
    const icons = ref([
      { name: 'Calendar', text: 'by email'},
    ])
    return { icons }
  }
}
</script>

<style scoped>
.vuecal {height: 90vh;}
.vuecal__now-line {color: orangered;}
.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>
