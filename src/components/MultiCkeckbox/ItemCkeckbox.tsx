import CheckBox from "@react-native-community/checkbox";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useEffect } from "react";
import { Controller, FieldError } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { PropsItem } from "./interfaces";

interface PropsItens {
  itens: PropsItem[];
  onChange: (...event: any[]) => void;
}

const ItemCkeckbox: React.FC<PropsItens> = ({ itens, onChange }) => {
  const [checkedItens, setCheckedItens] = useState<PropsItem[]>(itens);

  useEffect(() => {
    const itensSelectd = checkedItens.filter((item) => item.checked === true);
    onChange(itensSelectd.map((item) => item.value));
  }, [checkedItens]);

  function alterItens(checked: any, label: string) {
    const itensRefactor = checkedItens.map((item, indice) => {
      const key = indice;
      if (item.label === label) {
        item.checked = checked;
      }
      return item;
    });
    setCheckedItens(itensRefactor);
  }

  return (
    <>
      {checkedItens.map((iten, indice) => {
        return (
          <View  key={indice} style={styles.checkboxContainer}>
            <CheckBox
              value={iten.checked}
              onValueChange={(value: any) => alterItens(value, iten.label)}
              style={[styles.checkbox]}
            />
            <Text style={styles.labelCheckbox}> {iten.label}</Text>
          </View>
        );
      })}
    </>
  );
};

export default ItemCkeckbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  labelCheckbox: {
    margin: 0,
    color: colors.textHeading
  },
});
