"use client";

interface DividerProps {
  title: string;
  full?: boolean;
  label?: string;
  onClick?: () => void;
  testID?: string;
}

export const Divider = (props: DividerProps) => {
  const { title, full, label = "label", onClick, testID = "divider" } = props;
  return (
    <div
      className="flex flex-row justify-between items-center px-4 h-12 rounded-xl bg-green"
      data-testid={testID}
    >
      <p className="text-white font-bold text-sm">{title}</p>
      {full && (
        <button
          className="underline text-white tracking-wider text-sm"
          {...{ onClick }}
          data-testid="button"
        >
          {label}
        </button>
      )}
    </div>
  );
};
