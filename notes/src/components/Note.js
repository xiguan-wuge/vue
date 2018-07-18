import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import _ from 'lodash'
moment.locale('zh-CN')
class Note extends Component {
  state = {
    entity: this.props.entity,
    text: this.props.entity.text,
    open: false, //是否公开
    updated: this.props.entity.meta.update || this.props.entity.meta.created, //创建时间和修改时间
    destoryEntity: this.props.destoryEntity
  }
  updated () {
    return moment(this.state.updated).fromNow()
  }
  toggle(){
    // this.state.open =!this.state.open
    this.setState((prevState) => {
      return {
        open:!prevState.open
      }
    })
    console.log(this.state.open)
  }
  header(){
    //lodash
    return _.truncate(this.state.text, { length: 30 }) || '新建笔记';
  }
  words(){
    return this.state.text.length;
  }
  render () {
    return (
      <div className="item">
        <div className="meta">{this.updated()}</div>
        <div className="content">
          <div className="header" onClick={this.toggle.bind(this)}>
            {this.header()}
          </div>
          <div className="extra">
            {this.words()}字
            {this.state.open && <i className="right floated trash icon"
              onClick={() => this.state.destoryEntity(this.state.entity)}
            />}
          </div>
        </div>        
      </div>
    )
  }
}

export default Note
