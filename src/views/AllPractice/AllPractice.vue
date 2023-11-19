<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md card" >
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
          align="justify"
          narrow-indicator
        >
          <q-tab name="blind75" :label="$t('blind75')" />
          <q-tab name="alarms" :label="$t('NeetCode150')" />
          <q-tab name="movies" :label="$t('NeetCodeAll')" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="blind75">
            <data-table></data-table>
          </q-tab-panel>
          <q-tab-panel name="alarms">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies">
            <data-table></data-table>
          </q-tab-panel>
        </q-tab-panels>

      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from './DataTable.vue'

const tab = ref('blind75')
</script>

<style lang="less" scoped>
.card {
  width: 100%;
}
</style>
