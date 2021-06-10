import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
// import { Card } from "react-native-elements";
import { BorderPropsStyles, PropsStyles, TextPropsStyles } from "../../interface/styles/propsStyles";

interface Props {
  title?: string;
  divider?: boolean;
  contanierStyle?: PropsStyles | BorderPropsStyles;
  titleStyle?: TextPropsStyles;
  dividerStyle?: PropsStyles;
  image: ImageSourcePropType;
}

const CardImageCuston: React.FC<Props> = ({
  children,
  contanierStyle,
  title,
  titleStyle,
  divider,
  dividerStyle,
  image,
  ...props
}) => {
  
  return (
    <View>

    </View>
      // <Card.Image source={image} containerStyle={[styles.container, contanierStyle]}>
      //    {title && <Card.Title style={[titleStyle]}>{title}</Card.Title>}
      // {divider && <Card.Divider style={[dividerStyle]} />}
      // {children}
      // </Card.Image>
  );
};
export default CardImageCuston;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
