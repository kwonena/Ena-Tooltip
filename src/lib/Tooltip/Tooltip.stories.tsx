import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip, { TooltipProps } from "./index";
import styled from "styled-components";

export default {
  title: "Example/Tooltip",
  component: Tooltip,
  args: {
    message: "This is message content",
    trigger: "hover",
  },
} as ComponentMeta<typeof Tooltip>;

// 기본 format
const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => {
  return (
    <StorybookContainer>
      <Tooltip {...args}>
        <Button>Click</Button>
      </Tooltip>
    </StorybookContainer>
  );
};

export const Top = Template.bind({});
Top.args = {
  position: "top",
  trigger: "hover",
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: "bottom",
  trigger: "hover",
};

export const Left = Template.bind({});
Left.args = {
  position: "left",
  trigger: "hover",
};

export const Right = Template.bind({});
Right.args = {
  position: "right",
  trigger: "hover",
};

export const Hover = Template.bind({});
Hover.args = {
  position: "top",
  trigger: "hover",
};
export const Click = Template.bind({});
Click.args = {
  position: "top",
  trigger: "click",
};

const StorybookContainer = styled.div`
  width: 480px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  background-color: #828282;
  color: #fff;
  font-size: 15px;
  font-weight: 100;
  border-radius: 5px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;
