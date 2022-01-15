export type LinkProps = {
    to?: string;
    crossBrand?: boolean;
    as?: React.ElementType;
  } & React.ComponentPropsWithoutRef<"a">;
  