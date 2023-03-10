<script setup lang="ts">
import TheLogin from '../components/TheLogin.vue'
//引入ref和reactive
import { reactive, ref, onMounted, getCurrentInstance } from 'vue'
import { ElMessage, type MessageParams } from 'element-plus'
import type { FormInstance } from 'element-plus'
import axios from 'axios'
// import router from '@/router'
import { useRouter } from 'vue-router'
const router = useRouter()
//const声明常量
const ruleFormRef = ref<FormInstance>()

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}
/* 原来代码中 loginFrom 为非响应式数据，数据的改变不会触发视图更新。用 ref 或 reactive 定义都可以 */
const ruleForm = reactive({
  username: '',
  password: '',
})

const rules = reactive({
  /* 其中username为prop名;type：类型;required：是否必选项（此栏是否为空）;message：报错信息;
  trigger：触发方式（blur ：失去焦点时进行验证,常用：对 input 输入框的验证
                    change ：当值发生变化时进行验证,常用：下拉框select，日期选择框date-picker，复选框checkbox，单选框radio） */
  username: [{ message: "用户名不为空", trigger: 'blur', required: true },
  { min: 5, max: 15, message: '长度5到15位字符', trigger: 'blur' }],
  password: [{ validator: 2, trigger: 'blur', required: true, message: "密码不为空" }, { min: 5, max: 15, message: '长度5到15位字符', trigger: 'blur' }],
  /* checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }], */
})

const currentInstance = getCurrentInstance();

/* 提交验证 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      //验证成功发送请求
      /*  const Login = async () => {
         axios.get('localhost:9091/first/postJsonTest',{
           //参数
           params:{
             username:ruleForm.username,
             password:ruleForm.pass
           }
         }).then(res=>{
           if(res.data.value == 0){
             alert('用户名不存在');
           }
           if(res.data.value == 1){
             alert('密码错误')
           }
           if(res.data.value == 2){
             // alert('登录成功')
             router.push({ path: 'about' })
           }
         })
       } */
      // get请求  写参数
      /* axios.get("api/first/userParam", {
        params: {
          username: ruleForm.username,
          password: ruleForm.password
        },
      }).then(res => { */

      //post请求
      let data = {
        "userName": ruleForm.username,
        "passWord": ruleForm.password
      }
      //使用qs
      /* qs.stringify(ruleForm)
      let data = ruleForm; */
      //post请求  application/json数据格式
      axios.post("/api/first/userLogin", data, {
        headers: {
          'Content-Type': "application/json"
        },
      }).then(res => {
        console.log(res.data);
        let message: MessageParams = ({
          message: '',
          type: 'error',
        })
        if (res.data.result === 0) {
          console.log('用户名不存在!');
          message.message = "用户名不存在!";
          message.type = "error"
        } else if (res.data.result === 1) {
          console.log('密码错误!')
          message.message = "密码错误!";
          message.type = "error"
        } else if (res.data.result === 2) {
          console.log('登录成功')
          message.message = "登陆成功";
          message.type = "success"
          router.push({ path: 'about' })
        }
        ElMessage(message)
      })


    } else {
      console.log('error submit!')
      return false
    }
  })
}
/* 重置 */
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<template>
  <!-- <main>
        <TheLogin />
      </main> -->
  <div class="loginviewdiv">
    <el-card shadow="hover">
      <div class="logindiv">
        <h2>管理登录系统</h2>
        <div class="loginform">
          <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
            class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username" placeholder="5-15个字符" type="username" autocomplete="on" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" placeholder="5-15个字符" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
              <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.loginviewdiv {
  height: 100vh;
  display: grid;
}

.el-card {
  justify-self: center;
  align-self: center;
}

.logindiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
}

h2 {
  margin-bottom: 25px;
}

.loginform {
  width: 20vw;
  padding-right: 30px;
  margin-right: 30px;
}

.demo-ruleForm {
  display: flex;
  flex-direction: column;
}</style>
