<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.name">{{ col.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.problemName">
        <td><input type="checkbox"></td>
        <td @click="handleStar(row)">
          <i v-if="row.star === 1" class="bi bi-star-fill"></i>
          <i v-else class="bi bi-star"></i>
        </td>
        <td class="col-problem">{{ row.problemName }}</td>
        <td>{{ difficultyMapping[row.difficulty] }}</td>
        <td>{{ row.finishedDate}}</td>
        <td>{{ row.code }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n() 

const difficultyMapping = {
  1: t('easy'),
  2: t('medium'),
  3: t('hard')
}
const columns = [
  { name: 'status', label: t('status') },
  { name: 'star', label: t('star') },
  { name: 'problem', label: t('problems') },
  { name: 'difficulty', label: t('difficulty') },
  { name: 'finishedDate', label: t('finishedDate') },
  { name: 'code', label: t('code') }
]
const handleStar = (row) => {
  row.star = row.star === 1 ? 0 : 1
}

const rows = ref([
  {
    problemName: 'Contains Duplicate',
    problemLinkCN: 'https://leetcode.cn/problems/contains-duplicate/',
    problemLinkEN: 'https://leetcode.com/problems/contains-duplicate/',
    difficulty: '1',
    finishedDate: '1',
    star: '0'
  },
  {
    problemName: 'Contains Duplicate1',
    problemLinkCN: 'https://leetcode.cn/problems/contains-duplicate/',
    problemLinkEN: 'https://leetcode.com/problems/contains-duplicate/',
    difficulty: '1',
    finishedDate: '1',
    star: '1'
  },
])
watch(rows, () => {
  console.log(rows.value)
},
{deep: true})
</script>

<style lang="less" scoped>
table {
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  border-collapse: collapse; 
  border-spacing: 0 5px;
  input {
    vertical-align: middle;  
    height: 20px;
    width: 20px;
  }
  thead {
    height: 40px;
    border-bottom: 2px solid var(--accent-color);
    :nth-child(3) {
      text-align: left;
    }
  }
  tbody {
    tr { 
      height: 40px;
      border-bottom: 1px solid var(--accent-color);
    }
    tr:hover {
      background-color: var(--accent-color);
      transition: all 0.2s;
    }
    .col-problem {
      text-align: left;
    }
    .bi {
      color: #ffe600;
    }
  }
}

</style>