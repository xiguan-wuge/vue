import { Utils } from '../../../src/common/utils'

let utils = new Utils() 
export const actions = {
  //获取电影列表
  getMoving( {commit, state}) {
    console.log("getMoving")
    utils.get('./movie/in_theaters', {city: state.city})
      .then(res => {
        commit('MOVING_LIST', {list: res})
        commit("MOVING_LOADING", {laoding: false})
    })
  },

  // 获取电影详情

  getMovieDetail({commit, state}) {
    console.log("actions.movieDetail")
    utils.get(`/movie/subject/${state.id}`, {})
    .then(res => {
      commit('DETAIL_LOADING', {laoding: false})
      commit('MOVING_DETAIL', {movieDetil: res})
    })
  },
  // 获取当前城市即将上映的电影列表

  getUpcoming ({commit, state}) {
    utils.get('/movie/coming_soon', {city:state.city, start: state.upComeBody.start + 1})
      .then(res => {
        if(state.upComeBody.subjects && state.upComeBody.subjects.length) {
          res.subjects = state.upComeBody.subjects.concat(res.subjects)
          commit('PAGE_LOAD', {pageload: false})
        }
        commit('UP_COMBODY', {upComeBody: res})
        commit('UP_COMING', {loading: false})
      })
  },
  // 获取排名250
  loadingtop250({commit, state}) {
    utils.get('/movie/top250', {start: state.start, count: 10})
    .then(res => {
      let subject = state.ranking250.subjects;
      if(subject !== undefined) {
        res.subjects = subject.concat(res.subjects)
      }
      commit("LOAD_TOP250", {ranking250: res});
      commit('MOVING_LOADING', {loading: false})
    })
  }
}