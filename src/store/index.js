import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

export default  new Vuex.Store({
    state:{
        selected:'profile',
        user:{
            id:'123',
            username:''
        },
        resume:{
                    config:[
                        {field:'profile',icon:'id'},
                        {field:'workHistory',icon:'work'},
                        {field:'education',icon:'book'},
                        {field:'projects',icon:'heart'},
                        {field:'awards',icon:'cup'},
                        {field:'contacts',icon:'phone'},
                    ],
                    profile:{
                        name:'冷漠铁锤王富贵',
                        city:'衡水',
                        title:'辣鸡~',
                        birthday:'1990-01-01'
                    },
                    workHistory: [
                        { company: 'AL', content: '我的第二份工作是' },
                        { company: 'TX', content: '我的第一份工作是' },
                    ],
                    education: [
                        { school: '古城一中', content: '高中' },
                        { school: '华理', content: '本科' },
                    ],
                    projects: [
                        { name: 'project A', content: '文字' },
                        { name: 'project B', content: '文字' },
                    ],
                    awards: [
                        { name: '再来一瓶', content: '运气真好' },
                        { name: '吊车尾', content: '' },
                    ],
                    contacts: [
                        { contact: '手机', content: '13812345678' },
                        { contact: 'qq', content: '12345678' },
                    ],
        }
    },
    mutations:{
        initState(state,payload){
            Object.assign(state,payload)
        },
        switchTab(state,payload){
            state.selected=payload
            localStorage.setItem('state',JSON.stringify(state))
        },
        updateResume(state,{path,value}){
            objectPath.set(state.resume,path,value)
            localStorage.setItem('state',JSON.stringify(state))
        },
        setUser(state,payload){
            Object.assign(state.user,payload)
        },
        removeUser(state){
            state.user.id = ''
        }
    }
})
