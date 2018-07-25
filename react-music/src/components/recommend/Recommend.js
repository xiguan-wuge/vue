import React, { Component } from 'react';
import { getCarousel } from '@/api/recommend'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './recommend.styl';
class Recommend extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sliderList: []
    }
  }
  // ajax 会阻塞页面加载 一般吧ajax放在mounted之后
  componentDidMount() {
    getCarousel().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="music-recmmend">
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              this.state.sliderList.map(slider => {
                return (
                  <div className="swiper-slider" key={slider.id}>
                    <a href="#" className="slider-nav">
                      <img src={slider.picUrl} width="100%" height="100%" alt=""/>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    )
  }
}
export default Recommend