<template>
    <el-menu router="true" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/fmtDate">日期格式化</el-menu-item>
    </el-menu>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>