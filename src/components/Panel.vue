<template>
  <div>
    <v-toolbar class="rounded-t" color="blue-grey" flat dense dark>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <v-card-text>
      <slot>no content slots</slot>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped></style>
