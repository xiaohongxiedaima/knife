<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>当前时间</span>
                        <el-button class="button" text>自动刷新</el-button>
                    </div>
                </template>
                <!--
                <el-row>
                    <el-col>
                        <span>秒</span> 1231234
                    </el-col>
                        <span>毫秒</span> 1231234
                    <el-col>
                        <span>格式化</span> 1231234
                    </el-col>
                </el-row>
                -->
            </el-card>
        </el-col>
        <el-col :span="15" :offset="1">
            <el-form :model="form" :size="'large'" :label-position="'right'" label-width="auto">
                <el-form-item label="输入">
                    <el-input v-model="form.src" :suffix-icon="Search" @change="onChangeFormSrc" />
                </el-form-item>

                <el-form-item label="秒">
                    <el-input v-model="form.timestamp" :suffix-icon="DocumentCopy" disabled />
                </el-form-item>

                <el-form-item label="毫秒">
                    <el-input v-model="form.timestampMillis" :suffix-icon="DocumentCopy" disabled />
                </el-form-item>

                <el-form-item label="格式化">
                    <el-input v-model="form.fmtStr" :suffix-icon="DocumentCopy" disabled />
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue'
import { Search, DocumentCopy } from '@element-plus/icons-vue'
const form = reactive({
    src: '',
    timestamp: '',
    timestampMillis: '',
    fmtStr: ''
})

const onChangeFormSrc = (value: String) => {
    console.log(value)
}

</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

</style>