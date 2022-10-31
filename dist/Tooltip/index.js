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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
var Tooltip = function (_a) {
    var _b, _c;
    var message = _a.message, position = _a.position, trigger = _a.trigger, children = _a.children;
    var targetRef = useRef(null);
    var _d = useState(false), clicked = _d[0], setClicked = _d[1];
    var _e = useState(false), hovered = _e[0], setHovered = _e[1];
    var targetHeight = (_b = targetRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight; // margin을 포함한 target의 높이
    var childrenHeight = (_c = targetRef.current) === null || _c === void 0 ? void 0 : _c.children[0].offsetHeight; // margin을 제외한 target의 높이
    var marginWithoutChildrenHeight = (targetHeight - childrenHeight) / 2; // children에 적용된 margin값
    var padding = 10; // message와 children 사이 여유 공간
    useEffect(function () {
        document.addEventListener("mousedown", onClickOutside);
        return function () {
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [clicked, hovered]);
    // target, message 이 외에 외부 클릭 감지 message 비활성화
    var onClickOutside = function (event) {
        var _a;
        if (clicked && !((_a = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)))
            setClicked(false);
    };
    var onClickTarget = function () {
        if (trigger !== "click")
            return;
        setClicked(true);
    };
    var onHoverTarget = function () {
        if (trigger !== "hover")
            return;
        setHovered(true);
    };
    return (_jsxs(TooltipContainer, __assign({ margin: marginWithoutChildrenHeight, padding: padding, ref: targetRef, onClick: onClickTarget, onMouseOver: onHoverTarget, onMouseLeave: function () { return setHovered(false); } }, { children: [children, (clicked || hovered) && (_jsx(TooltipMessage, __assign({ className: position }, { children: message })))] })));
};
export default Tooltip;
var TooltipContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  .top {\n    bottom: 100%;\n  }\n  .bottom {\n    top: 100%;\n  }\n  .left {\n    right: 100%;\n  }\n  .right {\n    left: 100%;\n  }\n  .top,\n  .bottom {\n    left: 0%;\n    margin: ", ";\n  }\n  .left,\n  .right {\n    top: 0%;\n    margin: ", ";\n  }\n"], ["\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  .top {\n    bottom: 100%;\n  }\n  .bottom {\n    top: 100%;\n  }\n  .left {\n    right: 100%;\n  }\n  .right {\n    left: 100%;\n  }\n  .top,\n  .bottom {\n    left: 0%;\n    margin: ", ";\n  }\n  .left,\n  .right {\n    top: 0%;\n    margin: ", ";\n  }\n"])), function (props) {
    return props.margin &&
        "".concat(-props.margin + props.padding, "px ").concat(props.margin / 2, "px");
}, function (props) {
    return props.margin && "".concat(props.margin, "px ").concat(-props.margin + props.padding, "px");
});
var TooltipMessage = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 180px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n  background: #646464;\n  color: #ffffff;\n  border-radius: 6px;\n"], ["\n  position: absolute;\n  width: 180px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n  background: #646464;\n  color: #ffffff;\n  border-radius: 6px;\n"])));
var templateObject_1, templateObject_2;
