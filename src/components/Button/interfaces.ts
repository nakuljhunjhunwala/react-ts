export interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  size?:"small" | "medium" | "large";
  letterCase?: "upper" | "lower" | "capitalize";
}
