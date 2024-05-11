import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Extrapage`.
 */
export type ExtrapageProps = SliceComponentProps<Content.ExtrapageSlice>;

/**
 * Component for "Extrapage" Slices.
 */
const Extrapage = ({ slice }: ExtrapageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for extrapage (variation: {slice.variation}) Slices
    </section>
  );
};

export default Extrapage;
