export interface user {
  fuc?: () => void
  id:number,
  fullname:string,
  to:string,
  standing:string,
  singleActive:boolean,
  class:string,
  checked:boolean,
  checkedClass:string
}
export interface avail {
  announced:string,
  to:string
}