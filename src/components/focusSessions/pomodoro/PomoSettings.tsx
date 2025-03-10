import { IconArrowDown } from "../../../icons/IconArrowDown";
import { IconArrowUp } from "../../../icons/IconArrowUp";

export function PomoSettings({
  time,
  modifyTime,
  startTimer,
}: {
  time: number;
  modifyTime: (operator: string) => void;
  startTimer: () => void;
}) {
  return (
    <>
      <div className="relative flex h-full flex-col items-center justify-between overflow-hidden">
        <div className="m-5 flex h-[30%] w-[90%] flex-col items-center justify-center">
          <h1 className="mb-2 flex h-1/2 items-center text-xl font-bold text-white">
            Preparate Para concentrarte
          </h1>
          <p className="h-1/2 text-center text-sm text-neutral-200">
            We'll turn off notifications and app alerts during each session. For
            longer sessions, we'll add a short break so you can recharge.
          </p>
        </div>

        <div className="m-5 flex h-[22%] w-[50%] flex-row items-center justify-center overflow-hidden rounded-sm border-b border-white bg-neutral-800 shadow-sm hover:rounded-md hover:brightness-125">
          <div className="flex h-full w-[70%] flex-col items-center justify-center text-white hover:bg-[#5c5c5c] hover:opacity-40">
            <div className="text-xl">{time}</div>
            <div className="text-xs">min</div>
          </div>
          <div className="flex h-full w-[30%] flex-col items-center justify-center">
            <button
              onClick={() => modifyTime("+")}
              className="flex h-1/2 w-full items-center justify-center border-b border-l border-[#5c5c5c] text-white hover:bg-[#5c5c5c] hover:opacity-40"
            >
              <IconArrowUp />
            </button>
            <button
              onClick={() => modifyTime("-")}
              className="flex h-1/2 w-full items-center justify-center border-l border-[#5c5c5c] text-white hover:bg-[#5c5c5c] hover:opacity-40"
            >
              <IconArrowDown />
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-10">
          <button
            onClick={startTimer}
            className="bg-primary cursor-pointer rounded-sm px-3 py-2 text-sm text-black hover:opacity-60"
          >
            ▶ Start focus session
          </button>
        </div>
      </div>
    </>
  );
}
