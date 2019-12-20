import * as React from 'react';

//最后还是anyscript了，艹
export default function useCurrentValue<T>(value: any): React.RefObject<T> {
    const ref = React.useRef(null);
    ref.current = value;
    return ref;
}