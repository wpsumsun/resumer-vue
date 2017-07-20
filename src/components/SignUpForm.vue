<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="row">
                <label for="">用户名</label>
                <input type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label for="">密码</label>
                <input type="password" v-model="formData.password" required>
            </div>
            <div class="action">
                <input type="submit" value="提交">
                <span class="errorMessage">{{errorMessage}}</span>
            </div>
        </form>
    </div>
</template>

<script>
    import AV from '../lib/leancloud'
    import getErrorMessage from '../lib/getErrorMessage'

    export default {
        name: 'signUpForm',
        data: function () {
            return {
                formData: {
                    username: '',
                    password: ''
                },
                errorMessage:''
            }
        },
        created() {

        },
        methods: {
            signUp() {
                let {username, password} = this.formData
                // 新建 AVUser 对象实例
                var user = new AV.User();
                // 设置用户名
                user.setUsername(username);
                // 设置密码
                user.setPassword(password);
                // 设置邮箱
                // user.setEmail('tom@leancloud.cn');
                user.signUp().then((loginedUser) =>{
                    this.$emit('success',{
                        username:loginedUser.attributes.username,
                        id:loginedUser.id
                    })
                }, function (error) {
                    this.errorMessage=getErrorMessage(error)
                }); 
            },
        }
    }

</script>