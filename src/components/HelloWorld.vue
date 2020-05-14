<template>

    <el-container>
        <el-dialog
                title="登录"
                :visible.sync="dialogVisible"
                width="30%"
        >

            <el-form :rules="rules" :model="login" ref="login">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="login.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="login.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <div style="margin-top: 20px">
                    <el-button type="primary" @click="userLogin(login)" style="width: 100%" >登 录</el-button>
                    </div>
                </el-form-item>
            </el-form>


        </el-dialog>


        <el-header style="margin-bottom: 10px">
            <el-image src="https://img-1252891025.cos.ap-chengdu.myqcloud.com/logo.png"
                      style="width: 25%;height: 100%"></el-image>
            <el-row style="float: right;margin-right: 50px;margin-top: 8px">


                <el-button v-if="this.$cookies.get('username')==''" type="primary" @click="dialogVisible = true">登录</el-button>
                <el-divider v-if="this.$cookies.get('username')==''" direction="vertical"></el-divider>
                <el-button v-if="this.$cookies.get('username')==''" type="primary">注册</el-button>


                <el-link v-if="this.$cookies.get('username')!=''">{{this.$cookies.get('username')}}</el-link>
                <el-divider v-if="this.$cookies.get('username')!=''" direction="vertical"></el-divider>
                <el-link v-if="this.$cookies.get('username')!=''">退出登录</el-link>

            </el-row>

        </el-header>
        <div class="block">

            <el-carousel trigger="click" height="300px">
                <el-carousel-item v-for="item in items" :key="item">
                    <div style="text-align: center">
                        <el-image :src=item.img style="height: 100%;width: auto"></el-image>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <el-container>

            <el-main style="background-color: bisque;">
                <div class="grid-content bg-purple" style="background-color: chartreuse;border-radius: 30px;">
                    <el-divider></el-divider>
                    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                </div>
            </el-main>
            <el-aside width="200px" style="background-color: azure;">
                <div class="grid-content bg-purple-light" style="background-color: cornflowerblue;">
                    <el-divider></el-divider>
                    <span>青春是一个短暂的美梦, 当你醒来时,它早已消失无踪</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                    <el-divider></el-divider>
                </div>
            </el-aside>
        </el-container>
    </el-container>


</template>

<script>
    import axios from 'axios'
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                items: [
                    {img: 'https://img-1252891025.cos.ap-chengdu.myqcloud.com/img1.jpg'},
                    {img: 'https://img-1252891025.cos.ap-chengdu.myqcloud.com/img2.jpg'},
                    {img: 'https://img-1252891025.cos.ap-chengdu.myqcloud.com/img3.jpg'},
                    {img: 'https://img-1252891025.cos.ap-chengdu.myqcloud.com/img4.jpg'}
                ],
                dialogVisible: false,
                change:true,
                login: {
                    username: "",
                    password: ""
                },
                rules: {
                    username: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            userLogin(data){
                axios.post("user/login",data).then(
                    this.dialogVisible = false
                )

            }
        }
    }
</script>
