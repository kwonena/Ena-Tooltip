import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type TooltipTypes = {
  children: React.ReactElement;
  message: string;
  position: PositionType;
  trigger: TriggerType;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type PositionType = "top" | "bottom" | "left" | "right";
type TriggerType = "hover" | "click";

const Tooltip = ({ message, position, trigger, children }: TooltipTypes) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);

  const [childrenMargin, setChildrenMargin] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const padding: number = 10; // message와 children 사이 여유 공간

  useEffect(() => {
    if (!targetRef.current || !childrenRef.current) return;
    const targetHeight: number = targetRef.current?.offsetHeight;
    const childrenHeight: number = childrenRef.current?.offsetHeight;
    setChildrenMargin((targetHeight - childrenHeight) / 2 || 0);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [clicked]);

  // target, message 이 외에 외부 클릭 감지 message 비활성화
  const onClickOutside = (event: MouseEvent) => {
    if (clicked && !targetRef?.current?.contains(event.target as Node))
      setClicked(false);
  };

  const onClickTarget = () => {
    if (trigger !== "click") return;
    setClicked(true);
  };

  const onHoverTarget = () => {
    if (trigger !== "hover") return;
    setHovered(true);
  };

  return (
    <TooltipContainer
      ref={targetRef}
      margin={childrenMargin}
      padding={padding}
      onClick={onClickTarget}
      onMouseOver={onHoverTarget}
      onMouseLeave={() => setHovered(false)}
    >
      {React.cloneElement(children && children, { ref: childrenRef })}
      {(clicked || hovered) && (
        <TooltipMessage className={position}>{message}</TooltipMessage>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;

const TooltipContainer = styled.div<{ margin: number; padding: number }>`
  position: relative;
  width: fit-content;
  height: fit-content;
  .top {
    bottom: 100%;
  }
  .bottom {
    top: 100%;
  }
  .left {
    right: 100%;
  }
  .right {
    left: 100%;
  }
  .top,
  .bottom {
    left: 0%;
    margin: ${(props) =>
      props.margin &&
      `${-props.margin + props.padding}px ${props.margin / 2}px`};
  }
  .left,
  .right {
    top: 0%;
    margin: ${(props) =>
      props.margin && `${props.margin}px ${-props.margin + props.padding}px`};
  }
`;

const TooltipMessage = styled.div`
  position: absolute;
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #646464;
  color: #ffffff;
  border-radius: 6px;
`;
