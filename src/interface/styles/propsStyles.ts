import { StyleSheet } from "react-native";
import { number } from "yup/lib/locale";

export interface PropsStyles {
  backgroundColor?: string;
  color?: string;
  width?: number | string;
  minWidth?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  lineHeight?: number | string;
  maxHeight?: number | string;
  margin?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginStart?: number | string;
  marginEnd?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  padding?: number | string;
  paddingStart?: number | string;
  paddingEnd?: number | string;
  paddingRight?: number | string;
  paddingLeft?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  elevation?: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  shadowOpacity?: number;
  opacity?: number;
  position?: "relative" | "absolute";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  alignContent?:
    | "stretch"
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "center";
}

export interface TextPropsStyles {
  fontStyle?: "normal" | "italic";
  fontSize?: number;
  fontFamily?: any;
   fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  position?: "relative" | "absolute";
  backgroundColor?: string;
  color?: string;
  margin?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginStart?: number | string;
  marginEnd?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  padding?: number | string;
  paddingStart?: number | string;
  paddingEnd?: number | string;
  paddingRight?: number | string;
  paddingLeft?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  elevation?: number;
  shadowOpacity?: number;
  opacity?: number;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  alignContent?:
    | "stretch"
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "center";
}
export interface BorderPropsStyles {
  borderStyle?: "solid" | "dotted" | "dashed";
  borderWidth?: number;
  borderStartWidth?: number;
  borderEndWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderRadius?: number;
  borderTopStartRadius?: number;
  borderTopEndRadius?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomStartRadius?: number;
  borderBottomEndRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderColor?: string;
  borderStartColor?: string;
  borderEndColor?: string;
  borderLeftColor?: string;
  borderRightColor?: string;
  borderTopColor?: string;
  borderBottomColor?: string;
}

const styles = StyleSheet.create({
  continaer: {
    
  },
});
