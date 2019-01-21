<template>
    <section class="signin-container">
        <h3>Sign In</h3>
        <el-form ref="form" :model="form" label-position="top">
            <el-form-item label="Email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Passord">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onSubmit">Sign In</el-button>
        </el-form>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '../bus';

interface formType{
    email: string,
    password: string,
}
@Component
export default class Signin extends Vue {
    private form: formType = {
        email: '',
        password: '',
    };
    private async onSubmit() {
        const res = await (<any>Window).$http.post('/softsheep/signin', this.form);
        if (res.data) {
            const body = res.data;
            window.localStorage.setItem('email', body.email);
            window.localStorage.setItem('userName', body.userName);
            Bus.$emit('isSignin', {
                email: body.email,
                userName: body.userName,
            });
            this.$router.push('home');
        }
    }
}
</script>
<style lang="less">
@import '../assets/css/var.less';
.signin-container {
    width: 314px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px dashed @pink-color;
    padding: 30px;
    h3 {
        text-align: center;
        color: @pink-color;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .el-form-item__label {
        font-weight: 500;
        color: @font-color;
    }
    .el-button.el-button--primary {
        margin-top: 20px;
        background: @button-color;
        &:hover {
            background: @pink-color;
        }
    }
}
</style>