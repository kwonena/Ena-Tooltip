import React from "react";
export interface TooltipProps {
    children: React.ReactElement;
    message: string;
    position: PositionType;
    trigger: TriggerType;
}
declare type PositionType = "top" | "bottom" | "left" | "right";
declare type TriggerType = "hover" | "click";
declare const Tooltip: ({ message, position, trigger, children }: TooltipProps) => JSX.Element;
export default Tooltip;
