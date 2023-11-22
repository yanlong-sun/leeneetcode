<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md card" >
      <q-card>
        <q-tabs
          class="qtabs"
          v-model="tab"
          :class="curTheme === 'dark' ? 'bg-grey-9' : 'bg-grey-3'"
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
                :color='color'
                :track-color='trackColor'
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
                :color='color'
                :track-color='trackColor'
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
                :color='color'
                :track-color='trackColor'
                class="q-ma-md"
              >
                {{ allFinishRate }}%
              </q-knob>
            </div>
          </q-tab>
        </q-tabs>
        <q-separator />
        <q-tab-panels class="tabPanel" v-model="tab" animated>
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
import { ref, watch } from 'vue'
import DataTable from './DataTable.vue'
import { useStore } from 'vuex'

const store = useStore()

const tab = ref('blind75')
const blindFinishRate = ref(20)
const ncFinishRate = ref(40)
const allFinishRate = ref(60)

const curTheme = ref(store.state.curTheme)
watch(curTheme, () => {
  console.log(curTheme.value === 'dark')
  console.log(curTheme.value)
})


const color = 'red'
const trackColor = 'green'
</script>
<style lang="less" scoped>
.card {
  width: 100%;
  .qtabs {
    background-color: var(--background-color-secondary);
    color: var(--text-primary-color);
  }
  .tab {
    display: flex;
    align-items: center;
  }
  .tabPanel {
    height: 80vh;
    background-color: var(--background-color-secondary);
    color: var(--text-primary-color);
  }
}
</style>
