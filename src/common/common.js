import scrollReveal from 'scrollreveal';
import axios from 'axios'
import { Message, Loading } from 'element-ui'
// import qs from 'qs'
axios.defaults.timeout = 30* 1000
axios.defaults.withCredentials = true
// multipart/form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//axios.defaults.baseURL = 'http://192.168.1.5:80'

axios.defaults.baseURL = 'https://www.zhengshangwl.com'

function ser(obj) {
  var ne = {};
  for (var i in obj) {
    ne["data." + i] = obj[i];
  }
  return ne;
};

axios.interceptors.request.use(
  config => {
    //console.log(config)
    // if(config.method==='get'){
    //   config.params={
    //     pageIndex:config.params.pageIndex||1,
    //     PageSize:config.params.pageSize||20,
    //     ...ser(config.params)
    //   }
    // }
    return config
  },
  err => {
    // Message.error('请求错误')
    console.log('请求错误')
    return
    // Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    // console.log(err)
    // debugger
    // Message.error('请求失败，请稍后再试');
    return
    // Promise.reject(err);
    // Promise.reject(err)
  }
)

export function fetchFormPost (url, params) {
  return new Promise((resolve, reject) => {
    axios({
	    method:'post',
	    url:url,
	    data:params,
	    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
	    transformRequest: function(obj) {
	      var str = [];
	      for(var p in obj){
	          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	      }
	      return str.join("&");
	    }
	  })
    .then(
      res => {
        resolve(res)
        //Promise.reject(res)
      },
      err => {
        reject(err)
      }
    )
    .catch(err => {
      reject(err)
    })
  })
}
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url,params)
      .then(
        res => {
          resolve(res)
          //Promise.reject(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}

export function fetchPut (url, params) {
  return new Promise((resolve,reject) => {
    axios
      .put(url, params)
      .then(
        res => {
          resolve(res)
          //Promise.reject(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}
export function fetchDelete (url, params,type) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, param)
      .then(
        res => {
          resolve(res)
          //Promise.reject(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
        //get传递参数方式this.$http.get(url,{params: {id: 1}}).then(function(r){})
      })
      .then(res => {
        // console.log(res)
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}




















export function animateFun(className,delayTime,originDirection,distanceLength,scaleRatio,resetAgain){
  scrollReveal().reveal(className, {
    // 动画的时长
    duration: 500,
    // 延迟时间
    delay: delayTime,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: originDirection,
    // 回滚的时候是否再次触发动画
    reset: resetAgain,
    // 在移动端是否使用动画
    mobile: false,
    // 滚动的距离，单位可以用%，rem等
    distance: distanceLength,
    // 其他可用的动画效果
    opacity: 0.001,
    easing: 'linear',
    scale: scaleRatio,
  })
}
export function animateDes(){
  //scrollReveal().destroy();
  scrollReveal().sync();
}
