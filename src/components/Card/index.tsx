import React from "react";
import { StyleSheet, View } from "react-native";
// import { Card } from "react-native-elements";
import image from "../../images/map-marker.png";
import { BorderPropsStyles, PropsStyles, TextPropsStyles } from "../../interface/styles/propsStyles";

interface Props {
  title?: string;
  divider?: boolean;
  contanierStyle?: PropsStyles | BorderPropsStyles;
  titleStyle?: TextPropsStyles;
  dividerStyle?: PropsStyles;
}

const CardCuston: React.FC<Props> = ({
  children,
  contanierStyle,
  title,
  titleStyle,
  divider,
  dividerStyle,
  ...props
}) => {
  
  return (
    <View>
      
    </View>
    // <Card containerStyle={[styles.container, contanierStyle]} {...props}>
    //   {title && <Card.Title style={[titleStyle]}>{title}</Card.Title>}
    //   {divider && <Card.Divider style={[dividerStyle]} />}
    //   {children}
    // </Card>
  );
};
export default CardCuston;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
