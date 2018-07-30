import React, { Component } from 'react';
import { getCarousel, getNewAlbum } from '@/api/recommend';
import Swiper from 'swiper'
import { CODE_SUCCESS } from '../../api/config';
class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderList: []
    }
  }
  componentDidMount() {
    getCarousel().then( res => {
      console.log("mount" + res)
      if(res) {
        if(res.code === CODE_SUCCESS){
          console.log(res.data.slider)
          this.setState({
            sliderList: res.data.slider
          }, () => {
            if(!this.sliderSwipers) {
              this.sliderSwiper = new Swiper ('.slider-container', {
                loop: true,
                autoplay: 3000,
                autoplayDisabledOnInteraction: 'swiper-pagination'
              })
            }
          })
        }
      }
    })
  }
  toLink(linkUrl) {
    return () => {
      console.log("toLink"+ this)
      window.location.href = linkUrl;
    }
  }
  render () {
    return (
      <div>
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
                this.state.sliderList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <a onClick={this.toLink(slider.linkUrl)} className="slider-nav">
                      <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
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
export default Recommend;