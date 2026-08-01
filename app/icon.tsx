import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<div tw="flex h-full w-full items-center justify-center bg-black text-yellow-500"><svg width="20" height="20" viewBox="0 0 40 40" fill="none"><path d="M8 30 20 7l12 23M13 21h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div>, { ...size });
}
