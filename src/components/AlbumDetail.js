import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerTextContainer,
    headerTitleText,
    thumbnailStyle,
    thumbnailContainer,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerTextContainer}>
          <Text style={headerTitleText}>
            {title}
          </Text>
          <Text>
            {artist}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerTitleText: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
