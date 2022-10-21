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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
var Tooltip = function (_a) {
    var message = _a.message, position = _a.position, trigger = _a.trigger, children = _a.children;
    var targetRef = useRef(null);
    var _b = useState(false), clicked = _b[0], setClicked = _b[1];
    var _c = useState(false), hovered = _c[0], setHovered = _c[1];
    useEffect(function () {
        document.addEventListener("mousedown", onClickOutside);
        return function () {
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [clicked, hovered]);
    // target, message 이 외에 외부 클릭 감지 message 비활성화
    var onClickOutside = function (e) {
        var _a;
        if (clicked && !((_a = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)))
            setClicked(false);
    };
    var onClickTarget = function (e) {
        if (trigger !== "click")
            return;
        setClicked(true);
    };
    var onHoverTarget = function (e) {
        if (trigger !== "hover")
            return;
        setHovered(true);
    };
    return (_jsx(_Fragment, { children: _jsxs(TooltipContainer, __assign({ onClick: onClickTarget, onMouseOver: onHoverTarget, onMouseLeave: function () { return setHovered(false); } }, { children: [_jsx("div", __assign({ ref: targetRef }, { children: children })), (clicked || hovered) && (_jsx(TooltipMessage, __assign({ className: position }, { children: message })))] })) }));
};
export default Tooltip;
var TooltipContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  .top {\n    bottom: 100%;\n    left: 0%;\n    margin-bottom: 8px;\n  }\n  .bottom {\n    top: 100%;\n    left: 0%;\n    margin-top: 8px;\n  }\n  .left {\n    top: 0%;\n    right: 100%;\n    margin-right: 8px;\n  }\n  .right {\n    top: 0%;\n    left: 100%;\n    margin-left: 8px;\n  }\n"], ["\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  .top {\n    bottom: 100%;\n    left: 0%;\n    margin-bottom: 8px;\n  }\n  .bottom {\n    top: 100%;\n    left: 0%;\n    margin-top: 8px;\n  }\n  .left {\n    top: 0%;\n    right: 100%;\n    margin-right: 8px;\n  }\n  .right {\n    top: 0%;\n    left: 100%;\n    margin-left: 8px;\n  }\n"])));
var TooltipMessage = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #0000004b;\n  color: #ffffff;\n  border-radius: 6px;\n"], ["\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #0000004b;\n  color: #ffffff;\n  border-radius: 6px;\n"])));
var templateObject_1, templateObject_2;
