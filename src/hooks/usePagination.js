import { useMemo } from "react";

export const usePagination = (pagesLen) => {
    const pagesArray = useMemo(() => {
        let pagesArr = [];
        for (let i = 1; i <= pagesLen; i++) {
            pagesArr.push(i);
        }
        return pagesArr;
    }, [pagesLen]);
    return pagesArray;
};