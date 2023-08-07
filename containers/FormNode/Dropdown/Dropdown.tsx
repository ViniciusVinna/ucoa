import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { theme } from "@/theme";

const { designTokens } = theme;

type DataList = {
  label: string;
  value: string;
};

type DropdownProps = {
  placeholder?: string;
  data: DataList[];
};

export default function Dropdown({ placeholder = "Selecione um item", data = [] }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState(data);

  return (
    <DropDownPicker
      items={items}
      open={open}
      placeholder={placeholder}
      setItems={setItems}
      setOpen={setOpen}
      setValue={setValue}
      value={value}
      placeholderStyle={{
        color: designTokens.colors.white,
        fontWeight: "bold"
      }}
      style={{
        backgroundColor: designTokens.colors.white,
        borderColor: designTokens.colors.white,
        borderRadius: designTokens.spacings.medium,
        marginBottom: designTokens.spacings.medium,
      }}
    />
  );
}