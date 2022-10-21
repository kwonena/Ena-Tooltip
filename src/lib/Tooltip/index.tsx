import React, { Children, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface TooltipProps {
  children: React.ReactElement;
  message: string;
  position: PositionType;
  trigger: TriggerType;
}

type PositionType = "top" | "bottom" | "left" | "right";
type TriggerType = "hover" | "click";

const Tooltip = ({ message, position, trigger, children }: TooltipProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [clicked, hovered]);

  // target, message 이 외에 외부 클릭 감지 message 비활성화
  const onClickOutside = (e: MouseEvent) => {
    if (clicked && !targetRef?.current?.contains(e.target as Node))
      setClicked(false);
  };

  const onClickTarget = (e: any) => {
    if (trigger !== "click") return;
    setClicked(true);
  };

  const onHoverTarget = (e: any) => {
    if (trigger !== "hover") return;
    setHovered(true);
  };

  return (
    <>
      <TooltipContainer
        onClick={onClickTarget}
        onMouseOver={onHoverTarget}
        onMouseLeave={() => setHovered(false)}
      >
        <div ref={targetRef}>{children}</div>
        {(clicked || hovered) && (
          <TooltipMessage className={position}>{message}</TooltipMessage>
        )}
      </TooltipContainer>
    </>
  );
};

export default Tooltip;

const TooltipContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  .top {
    bottom: 100%;
    left: 0%;
  }
  .bottom {
    top: 100%;
    left: 0%;
  }
  .left {
    top: 0%;
    right: 100%;
  }
  .right {
    top: 0%;
    left: 100%;
  }
`;

const TooltipMessage = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000004b;
  color: #ffffff;
  border-radius: 6px;
`;
