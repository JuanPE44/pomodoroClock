interface Props {
  width?: number;
  height?: number;
  color?: string;
}
export function IconFocus({ width = 15, height = 15, color = "#fff" }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
      />
    </svg>
  );
}
