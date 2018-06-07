import React from 'react';
import { ImageBackground as ImgBackground, Platform, View } from 'react-native';

export default class ImageBackground extends React.Component {
  render() {
    let { backgroundColor, ...imageBackgroundProps } = this.props;
    if(Platform.OS === 'android' && (this.props.imageStyle && this.props.imageStyle.resizeMode && this.props.imageStyle.resizeMode === 'repeat')){
      return (<View style={{ flex: 1, backgroundColor: backgroundColor ? backgroundColor : 'transparent' }}>
                 {this.props.children}
              </View>);
    }

    return (<ImgBackground {...imageBackgroundProps} backgroundColor={null}>
              {this.props.children}
            </ ImgBackground>)
  }
}