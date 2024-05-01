import clsx from "clsx";
import Image from "next/image";

interface ReImageProps {
  className?: string;
  src: string;
  alt: string;
  testID?: string;
}

export const ReImage = (props: ReImageProps) => {
  const { alt, src, className, testID = "image" } = props;

  return (
    <Image
      {...{ src, alt }}
      width={500}
      height={500}
      className={clsx("rounded-lg", className)}
      data-testid={testID}
      fetchPriority="low"
    />
  );
};
