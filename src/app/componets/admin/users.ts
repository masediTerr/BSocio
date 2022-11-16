 import { user,avail } from "./inte";
 
 export const users:user[] = [
  {
    id: 1,
    fullname: 'Terrence mokgope',
    to: 'Mourners of the deceaced',
    standing: 'Fined',
    fuc: (u?: any,to?: any)=>{
        console.log(u.id);
        console.log(to.to);
        
        
      },
      singleActive: false,
      class: 'hidden',
      checked: false,
      checkedClass:'unSelect'
  },
  {
    id: 2,
    fullname: 'masedi mokgope',
    to: 'Mourners of the deceaced',
    standing: 'Good',
    fuc: (u?: any,to?: any)=>{
        console.log(u.id);
        console.log(to.to);
        
        
      },
      singleActive: false,
      class: 'hidden',
      checked: false,
      checkedClass:'unSelect'
      
  },
  {
    id: 3,
    fullname: 'pleasure mokgope',
    to: 'Mourners of the deceaced',
    standing: 'Good',
    fuc: (u?: any,to?: any)=>{
        console.log(u.id);
        console.log(to.to);
        
        console.log('helloe dear user');
        
      },
      singleActive: false,
      class: 'hidden',
      checked: false,
      checkedClass:'unSelect'
  },
  {
    id: 4,
    fullname: 'kgopotso mokgope',
    to: 'Mourners of the deceaced',
    standing: 'Good',
    singleActive: false,
    class: 'hidden',
    checked: false,
    checkedClass:'unSelect'
  },
  {
    id: 5,
    fullname: 'Jonas mokgope',
    to: 'Mourners of the deceaced',
    standing: 'Good',
    singleActive: false,
    class: 'hidden',
    checked: false,
    checkedClass:'unSelect'
  },
  {
    id: 6,
    fullname: 'devi had',
    to: 'the deceaced',
    standing: 'Bad',
    singleActive: false,
    class: 'hidden',
    checked: false,
    checkedClass:'unSelect'
  },
  {
    id: 7,
    fullname: 'Dimpho masinga',
    to: 'Mourners of the deceaced',
    standing: '',
    singleActive: false,
    class: 'hidden',
    checked: false,
    checkedClass:'unSelect'
  },
  {
    id: 8,
    fullname: 'Hope Mokoena',
    to: 'Mourners of the deceaced',
    standing: 'Pending',
    singleActive: false,
    class: 'hidden',
    checked: false,
    checkedClass:'unSelect'
  },
  {
    id: 9,
    fullname: 'Lethabo MOhlala',
    to: 'the deceaced',
    standing: 'Fined',
    singleActive: false,
    class: 'hidden',
    checked: false,
    checkedClass:'unSelect'
  },
]

export const contributes:avail[]=[
  {
    announced:'admin',
    to: 'all members'
  },
  {
    announced:'admin',
    to: 'The villages'
  },
  {
    announced:'admin',
    to: 'Rhuhry guest lodge'
  },
  {
    announced:'admin',
    to: 'Patido'
  },
];