interface Props {
  width?: number;
  height?: number;
}

export function IconNext({ width = 15, height = 15 }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="M3 4.753c0-1.408 1.578-2.24 2.74-1.444l10.498 7.194a1.75 1.75 0 0 1 .01 2.88L5.749 20.685C4.59 21.492 3 20.66 3 19.248zM21 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0z"
      />
    </svg>
  );
}
