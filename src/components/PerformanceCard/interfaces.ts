export interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

title:string,
titleIcon:JSX.Element,
amount:string,
amountPara:string,
percentage:string,
percentageType:"increment" | "decrement"

}
