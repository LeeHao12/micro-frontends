import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  initGlobalState,
} from "qiankun";

// fetch api auth
setTimeout(() => {
  const apps = [
    {
      name: "react-car-repo",
      entry: "//localhost:10100",
      container: "#frame",
      activeRule: "/car",
      loader: (loading) => {
        console.log("react-car-repo loading: ", loading);
      },
      props: {},
    },
    {
      name: "react-user-repo",
      entry: "//localhost:10101",
      container: "#frame",
      activeRule: "/user",
      loader: (loading) => {
        console.log("react-user-repo loading: ", loading);
      },
      props: {},
    },
  ];

  registerMicroApps(apps, {
    beforeLoad: (app) => {
      console.log("before load: ", app.name);
      return Promise.resolve();
    },
    afterMount: (app) => {
      console.log("after mount: ", app.name);
      return Promise.resolve();
    },
  });
}, 1000);

const errorHandler = (event) => {
  console.error(event);
  const { message: msg } = event;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    console.log("微应用加载失败，请检查应用是否可运行");
  }
};

// 加入 error 回调
addGlobalUncaughtErrorHandler(errorHandler);

// 状态，返回通信方法
const StateActions = initGlobalState({
  username: "lh11",
  age: 18,
  current: "main",
});

StateActions.onGlobalStateChange((state, prev) => {
  console.log("react-main-repo state: ", state);
  console.log("react-main-repo prevState: ", prev);
});

export default start;
