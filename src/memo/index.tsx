import React, { useEffect, useState } from 'react';
import { BadMemoComponent, GoodMemoComponent } from './memos.tsx';

export const MemosWrapperComponent = () => {
    const ref = React.useRef<HTMLParagraphElement>(null);
    const [refreshState, setRefreshState] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (ref.current) {
          ref.current!.removeAttribute('hidden');
            ref.current!.innerText = 'Refreshed! 😮‍💨';
            timeout = setTimeout(() => {
                ref.current!.innerText = '';
              ref.current!.setAttribute('hidden', 'true');
            }, 1000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [refreshState]);

    return (
      <>
        <h1>Memos Example</h1>
        <div className="memos-wrapper">
          <p ref={ref} hidden></p>
          <BadMemoComponent />
          <GoodMemoComponent />
          <button onClick={() => setRefreshState((prev) => !prev)} disabled={!!ref.current?.innerText}>Refresh</button>
        </div>
      </>
    );
};
