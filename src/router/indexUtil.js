import router from "../router";
import axios from 'axios'

const routerList = []

export function getChildrenPath(data) {

  // console.log(apiUrl)

  //console.log(this.apiUrl);
  axios
    .get(`https://localhost:5001/api/Login/GetPermissions?id=${data}`)
    .then((response) => {
      var menus = response.data;

      // for (let a of menus) {
      //     console.log(a)
      // }

      menus.forEach((me) => {
        setChild(me, routerList, "", "");
      });
      let rou = {
        path: "/ConTian",
        name: "ConTian",
        component: () => import("@/views/ConTian.vue"),
        children: routerList,
      };


      router.addRoute(rou);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => { });


}

//递归算法，递归循环: 在方法内部调用方法本身的过程，可以得到一个无限层级的集合对象
function setChild(me, routerList, rootName, rootPath) {

  // rootName = rootName + '/' + me.name
  // rootPath = rootPath + '/' + me.path

  var Name = me.path.substring(1, me.path.length)
  var path = me.path
  var component = rootPath + me.path

  if (me.children != null && me.children != [] && me.children.length > 0) {

    //如果有下层
    me.children.forEach(node => {
      setChild(node, routerList, Name, component)
    })
  }
  //没有下层则说明这是一个路由
  let rou = {
    name: Name,
    path: path,
    component: () => import('@/views' + component) // 注意字母大小写 @/views/common/BaiduMap
  }

  routerList.push(rou)
}





// var menus = data;
// menus.forEach(me => {
//   setChild(me, routerList, '', '')
// })
// let rou = {
//   path: '/ConTian',
//   name: 'ConTian',
//   component: () => import('../views/ConTian'),
//   children: routerList
// }
// router.addRoute(rou)



//分界线





//动态获取菜单集合
// axios
// .get(apiUrl+'?id='+id)
// .then((response) => {
//   var menus = response.data.Items;
//   menus.forEach((me) => {
//     setChild(me,  "", "");
//   });
//   let rou = {
//     path: "/index",
//     name: "index",
//     component: () => import("@/views/Main/Index"),
//     children: routerList,
//   };
//   console.info(rou)
//   router.addRoute(rou);
// })
// .catch((err) => {
//   console.log(err);
// })
// .finally(() => {}); 