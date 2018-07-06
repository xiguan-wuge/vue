export const cityGuess = () => fetch('https://elm.cangdu.org/v1/cities?type=guess')
// 获取城市地点不是前端可以搞定的，应该提供一个api 让后端处理，至少要有这个思想
export const hotcity = () => fetch('https://elm.cangdu.org/v1/cities?type=hot')