<template>
    <section class="signin-container">
        <h3>Sign Up</h3>
        <el-form ref="signUpForm" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="Username" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Sex" prop="sex">
                <el-radio v-model="form.sex" label="0">Male</el-radio>
                <el-radio v-model="form.sex" label="1">Female</el-radio>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="Verify" prop="verifypassword">
                <el-input type="password" v-model="verifyPassword"></el-input>
            </el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onSubmit">Sign Up</el-button>
        </el-form>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Form } from 'element-ui';
import { emailRule } from '../utils/CustomValidator';
@Component
export default class Signup extends Vue {
    private form: object = {
        username: '',
        email: '',
        sex: '',
        password: '',
    };
    private verifyPassword: string = '';
    private rules = {
        username: [{ required: true, message: 'Please enter username', trigger: 'blur' }],
        email: [
            { required: true, message: 'Please enter E-mail', trigger: 'blur', },
            { pattern: emailRule, message: 'Enter a valid email address', trigger: 'blur', }
        ],
        password: [{ required: true, message: 'Please enter password', trigger: 'blur' }],
    };
    private onSubmit() {
        (this.$refs.signUpForm as Form).validate(async (validate) => {
            if (validate) {
                const res = await (<any> Window).$http.post('/softsheep/signup', this.form);
                if (res === '注册成功') {
                    this.$message({
                        message: '恭喜你，注册成功!',
                        type: 'success',
                    });
                    this.$router.push('/signin');
                }
            } else {
                console.log('error submit!!');
                return;
            }
        });

    }
}
</script>