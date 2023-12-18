import { ReactNode } from "react";

/*
afterLogin 레이아웃 
새로고침 해도 리마운트 안됨. 
템블릿과 공존하지 않는 것이 좋다.
*/
const layout = ({ children }: {children: ReactNode  }) => {
  return (
    <div>
      afterLogin 레이아웃. 
      새로고침 해도 리마운트 안됨. 템블릿과
      공존하지 않는 것이 좋다.
      {children}
    </div>
  );
};

export default layout;
