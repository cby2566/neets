
import home from '../components/Home/Home.vue';
import classify from '../components/Classify/Classify.vue';
import subscribe from '../components/Subscribe/Subscribe.vue';
import isMe from '../components/wo/isMe.vue';
//用来放路由的名字


const routes=[
    {name:'home',path:'/home',component:home},
    {name:'classify',path:'/classify',component:classify},
    {name:'subscribe',path:'/subscribe',component:subscribe},
    {name:'isMe',path:'/isMe',component:isMe},
    {path:'/',redirect:to=>'/home'}
];
//把组件的path存起来
let pathIndex=new Array();
for(let i in routes){
    pathIndex.push(routes[i].path);
}
pathIndex.splice(pathIndex.length-1,1);//去掉重定向的干扰
export {routes,pathIndex};
