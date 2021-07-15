export interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
 imgSrc:string,
 primary?:boolean,
 secondary?:boolean,
 date?:string,
 artist?:string,
 location?:string,
 title?:string,

}
