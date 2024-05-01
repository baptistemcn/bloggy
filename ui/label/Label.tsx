interface LabelProps {
  label: string;
  count: number;
}

export const Label = (props: LabelProps) => {
  return (
    <div className="flex flex-row justify-between items-center text-grey font-semibold">
      <p data-testid="label">
        {">"} {props.label}
      </p>
      <p data-testid="count">({props.count})</p>
    </div>
  );
};
