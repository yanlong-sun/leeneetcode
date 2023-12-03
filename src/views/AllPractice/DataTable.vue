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
        <td>{{ row.difficulty }}</td>
        <td>{{ row.finishedDate}}</td>
        <td>{{ row.code }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const difficultyMapping = {
  1: 'easy',
  2: 'medium',
  3: 'hard'
}
const columns = computed(() => [
  { name: 'status', label: t('status') },
  { name: 'star', label: t('star') },
  { name: 'problems', label: t('problems') },
  { name: 'difficulty', label: t('difficulty') },
  { name: 'finishedDate', label: t('finishedDate') },
  { name: 'code', label: t('code')}
])
const handleStar = (row) => {
  row.star = row.star === 1 ? 0 : 1
}

const data = [
  {
    problemNameCN: '重复。。',
    problemNameEN: 'Contains Duplicate',
    problemLinkCN: 'https://leetcode.cn/problems/contains-duplicate/',
    problemLinkEN: 'https://leetcode.com/problems/contains-duplicate/',
    difficulty: '1',
    finishedDate: '1',
    star: '0'
  },
  {
    problemNameCN: '重复2',
    problemNameEN: 'Contains Duplicate1',
    problemLinkCN: 'https://leetcode.cn/problems/contains-duplicate/',
    problemLinkEN: 'https://leetcode.com/problems/contains-duplicate/',
    difficulty: '2',
    finishedDate: '1',
    star: '1'
  },
]
const rows = computed(() => data.map(problem => {
  return {
    problemName: locale.value === 'cn' ? problem.problemNameCN : problem.problemNameEN,
    problemLink: locale.value === 'cn' ? problem.problemLinkCN : problem.problemLinkEN,
    difficulty: t(difficultyMapping[problem.difficulty]),
    finishedDate: problem.finishedDate,
    star: problem.star
  }
}))
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