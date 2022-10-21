var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Tooltip from "./index";
import styled from "styled-components";
export default {
    title: "Example/Tooltip",
    component: Tooltip,
    args: {
        message: "This is message content",
        trigger: "hover",
    },
};
// 기본 format
var Template = function (args) {
    return (_jsx(StorybookContainer, { children: _jsx(Tooltip, __assign({}, args, { children: _jsx(Button, { children: "Click" }) })) }));
};
export var Top = Template.bind({});
Top.args = {
    position: "top",
    trigger: "hover",
};
export var Bottom = Template.bind({});
Bottom.args = {
    position: "bottom",
    trigger: "hover",
};
export var Left = Template.bind({});
Left.args = {
    position: "left",
    trigger: "hover",
};
export var Right = Template.bind({});
Right.args = {
    position: "right",
    trigger: "hover",
};
export var Hover = Template.bind({});
Hover.args = {
    position: "top",
    trigger: "hover",
};
export var Click = Template.bind({});
Click.args = {
    position: "top",
    trigger: "click",
};
var StorybookContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 480px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 480px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Button = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 70px;\n  height: 40px;\n  background-color: #828282;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 100;\n  border-radius: 5px;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n"], ["\n  width: 70px;\n  height: 40px;\n  background-color: #828282;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 100;\n  border-radius: 5px;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2;
