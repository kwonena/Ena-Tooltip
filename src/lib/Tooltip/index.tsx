import React, { useEffect, useRef, useState } from "react";
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
  // <HTMLDivElement | null>로 타입을 결정할 경우 offsetHeight에서 에러 발생
  const targetRef = useRef<any>(null);

  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const targetHeight: number = targetRef.current?.offsetHeight; // margin을 포함한 target의 높이
  const childrenHeight: number = targetRef.current?.children[0].offsetHeight; // margin을 제외한 target의 높이
  const marginWithoutChildrenHeight: number =
    (targetHeight - childrenHeight) / 2; // children에 적용된 margin값
  const padding: number = 10; // message와 children 사이 여유 공간

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, hovered]);

  // target, message 이 외에 외부 클릭 감지 message 비활성화
  const onClickOutside = (e: MouseEvent) => {
    if (clicked && !targetRef?.current?.contains(e.target as Node))
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
    <>
      <TooltipContainer
        margin={marginWithoutChildrenHeight}
        padding={padding}
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
