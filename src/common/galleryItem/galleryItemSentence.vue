<template>
  <v-card
    class="ma-2"
    height="260"
    width="200"
    flat
    @click="itemClick"
  >
    <v-img
      :src=galleryItem.pictureUrl
      height="200"
    ></v-img>
    <v-card-title class="text-subtitle-1 pt-1">
      {{ galleryItem.title }}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue, Prop } from 'vue-property-decorator'
import { GalleryItemDto } from '@/model/galleryItem/galleryItemDto'

@Component({
  components: {}
})
export default class GalleryItemSentence extends Vue {
  @Prop(Object) readonly galleryItem?: GalleryItemDto

  public itemClick (): void {
    if (this.galleryItem) {
      this.$router.push({ name: 'sentenceRead' })
    }
  }
}
</script>

<style scoped>

</style>
