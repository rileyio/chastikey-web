<template>
  <v-row>
    <v-col cols="12">
      <v-row
        align="center"
        justify="center"
        class="grey lighten-5"
        style="height: 300px;"
      >
        <span class="headline">Coming soon!</span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

// API
// import { fetchRunningLocks } from '@/api/keyholder'

// Defaults
import { $KeyholderView } from '@/defaults/keyholder'

// Objects
import { KeyholderLock } from '@/objects/lock'

@Component({
  // components: {
  //   KHListLock
  // }
})
export default class LockeeView extends Vue {
  // @Prop({ default: () => $KeyholderView })
  // private data!: typeof $KeyholderView
  // private isLoading = false
  // private async mounted() {
  //   this.isLoading = true
  //   const res = await fetchRunningLocks()
  //   if (res)
  //     this.data.locks = res.locks.map(
  //       (l: KeyholderLock) => new KeyholderLock(l)
  //     )
  //   this.isLoading = false
  //   console.log(this.data.locks)
  // }
}
</script>
