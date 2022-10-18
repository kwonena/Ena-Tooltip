import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface TooltipProps {
  children: React.ReactElement;
  message: string;
  target: any;
  position: PositionType;
  trigger: TriggerType;
}

type PositionType = "top" | "bottom" | "left" | "right";
type TriggerType = "hover" | "click";

const Tooltip = ({
  message,
  target,
  position,
  trigger,
  children,
}: TooltipProps) => {
  const targetRef = useRef<any>(null);

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
        ref={targetRef}
        onClick={onClickTarget}
        onMouseOver={onHoverTarget}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
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
    margin-bottom: 8px;
  }
  .bottom {
    top: 100%;
    left: 0%;
    margin-top: 8px;
  }
  .left {
    top: 0%;
    right: 100%;
    margin-right: 8px;
  }
  .right {
    top: 0%;
    left: 100%;
    margin-left: 8px;
  }
`;

const TooltipMessage = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b5b5b5;
  color: #282828;
  border-radius: 6px;
`;
