// TODO: реализовать виртуальный список
// Рендерить только видимые элементы + буфер, остальное — placeholder по высоте.

import { useEffect, useMemo, useRef, useState } from "react";

export interface VirtualListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight: number;
  containerHeight?: number;
  bufferSize?: number;
}

export function VirtualList<T>({
  items,
  renderItem,
  itemHeight,
  containerHeight = 400,
  bufferSize = 5,
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // scrollTop

  // const clientHeight = containerRef.current?.clientHeight;
  // const itemsInView = useEffect(() => {}, []);
  const { visibleItems, paddingTop, paddingBottom } = useMemo(() => {
    const totalCount = items.length;
    const totalHeight = totalCount * itemHeight;
    const startNode = Math.max(0, scrollTop / itemHeight - bufferSize);
    const endNode = Math.min(
      totalCount,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + bufferSize
    );
    const visibleItems = items.slice(startNode, endNode).map((item, index) => ({
      data: item,
      index: startNode + index,
    }));
    const paddingTop = startNode * itemHeight;
    const paddingBottom = totalHeight - endNode * itemHeight;

    return { visibleItems, paddingBottom, paddingTop };
  }, []);

  // const [startIndex, setStartIndex] = useState(0)
  // const [endIndex, setEndIndex] = useState(0)

  // TODO: useEffect + onScroll для пересчёта startIndex/endIndex
  // TODO: рендер только видимых + буфер, placeholder для остальных

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
      }}
      onScroll={(e) => {
        setScrollTop(e.currentTarget.scrollTop);
      }}
    >
      <div style={{ height: paddingTop }} />

      {items.map((item, index) => {
        return (
          <div
            style={{
              height: itemHeight,
            }}
          >
            {renderItem(item, index)}
          </div>
        );
      })}

      <div style={{ height: paddingBottom }} />
    </div>
  );
}
