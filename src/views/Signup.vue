<template>
    <section class="signin-container">
        <h3>Sign Up</h3>
        <el-form ref="form" :model="form" label-position="top">
            <el-form-item label="Username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="Email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Sex">
                <el-radio v-model="form.sex" label="0">Male</el-radio>
                <el-radio v-model="form.sex" label="1">Female</el-radio>
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="Verify Password">
                <el-input v-model="verifyPassword"></el-input>
            </el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onSubmit">Sign Up</el-button>
        </el-form>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Signup extends Vue {
    private form: object = {
        username: '',
        email: '',
        sex: '',
        password: '',
    };
    private verifyPassword: string = '';
    private onSubmit() {
        console.log('-----onsubmit');
    }
}
</script>