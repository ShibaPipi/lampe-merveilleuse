import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style';
import { actionCreators } from './store';

class Home extends PureComponent {

  handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
               src='//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
               alt=''/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          this.props.showScroll ? <BackToTop onClick={this.handleScrollToTop}>回到顶部</BackToTop> : null
        }
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToTopShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollToTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },

  changeScrollToTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleToTopShow(true));
    } else {
      dispatch(actionCreators.toggleToTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
