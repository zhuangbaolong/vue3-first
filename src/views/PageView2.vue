<template>
  <div>
    <h1>用户数据表</h1>
    <div class="about">
      <el-table :data="tableData" stripe style="width: 100%;height: 80vh;">
        <!-- prop属性值对应user对象属性 -->
        <el-table-column prop="cid" label="Cid" width="180" />
        <el-table-column prop="userName" label="Username" width="180" />
        <el-table-column prop="mail" label="Mail" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="age" label="Age" width="180" />
        <el-table-column prop="gender" label="Gender" />
        <el-table-column prop="avatar" label="Avatar" />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
  }
} */
</style>
<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

onMounted(() => {
  // get请求  写参数
  axios.get("/api/first/selectAllUser", {
    // params: {
    //   username: ruleForm.username,
    //   password: ruleForm.password
    // },
  }).then((res: { data: any; }) => {
    tableData.value = res.data;
    console.log(tableData);
    console.log(tableData.value);
    console.log(res.data);
  })

})

const selectAllUser = ()=> {
  
}
//仅限于描述对象类型
interface User {
  userName:string
  cid:number
  name: string
  mail:string
  age:number
  gender:number
  avatar:string
}
const tableData = ref<User[]>([
  /* {
    cid:1,
    username:"zhang",
    mail:"123@qq.com",
    name: 'Tom',
    age:22,
    gender:1,
    avatar:"aa"
  },
  {
    cid:2,
    username:"li",
    mail:"123@qq.com",
    name: 'Li',
    age:22,
    gender:1,
    avatar:"aa"
  },
  {
    cid:3,
    username:"wang",
    mail:"123@qq.com",
    name: 'wang',
    age:22,
    gender:1,
    avatar:"aa"
  }, */
]) 

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

</script>