import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, IButtonProps, Popover } from "native-base";

type Props = {
  label?: string;
} & IButtonProps;

const DetectedBox = ({ label, ...btnProps }: Props) => {
  return (
    <Popover
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} {...btnProps}>
            {label}
          </Button>
        );
      }}
    >
      <Popover.Content>
        <Popover.Arrow />
        <Popover.CloseButton borderTopWidth="0" />

        <Popover.Header>Cách tái chế {label}</Popover.Header>
        <Popover.Body borderTopWidth="0">
          Rác thải này cần nhét vào đâu đó rồi tự nó mất. Không có đâu, lêu lêu.
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
};

export default DetectedBox;

const styles = StyleSheet.create({});
