<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md card" >
      <q-card>
        <q-tabs
          v-model="tab"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
          align="justify"
          narrow-indicator
        >
          <q-tab name="blind75">
            <div class="tab">
              <label for="blind75">{{ $t('blind75') }}</label>
              <q-knob
                show-value
                disable
                v-model="blindFinishRate"
                size="50px"
                color="teal"
                track-color="grey-4"
                class="q-ma-md"
              >
                {{ blindFinishRate }}%
              </q-knob>
            </div>
          </q-tab>
          <q-tab name="NeetCode150">
            <div class="tab">
              <label for="NeetCode150">{{ $t('NeetCode150') }}</label>
              <q-knob
                show-value
                disable
                v-model="ncFinishRate"
                size="50px"
                color="teal"
                track-color="grey-4"
                class="q-ma-md"
              >
                {{ ncFinishRate }}%
              </q-knob>
            </div>
          </q-tab>
          <q-tab name="NeetCodeAll">
            <div class="tab">
              <label for="NeetCodeAll">{{ $t('NeetCodeAll') }}</label>
              <q-knob
                show-value
                disable
                v-model="allFinishRate"
                size="50px"
                color="teal"
                track-color="grey-4"
                class="q-ma-md"
              >
                {{ allFinishRate }}%
              </q-knob>
            </div>
          </q-tab>
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
const blindFinishRate = ref(20)
const ncFinishRate = ref(40)
const allFinishRate = ref(60)
</script>
<style lang="less" scoped>
.card {
  width: 100%;
  .tab {
    display: flex;
    align-items: center;
  }
}
</style>
