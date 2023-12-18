import { ReactNode } from "react";

/*
afterLogin 레이아웃 
새로고침 마다 리마운트 됨. 
레이아웃과 공존하지 않는 것이 좋다. 
구글애널래틱 같은 것은 템플릿을 쓰는 것이 좋다.
*/
const template = ({ children }: {children: ReactNode}) => {
  return (
    <div>
      afterLogin 레이아웃 {children} 새로고침 마다 리마운트 됨. 레이아웃과
      공존하지 않는 것이 좋다. 구글애널래틱 같은 것은 템플릿을 쓰는 것이 좋다.
    </div>
  );
};

export default template;
