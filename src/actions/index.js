export  const  increment=(index)=>{return { type: 'INCREMENT',index }}
export  const  decrement=(index)=>{return  { type: 'DECREMENT' ,index}}
export  const  multiple=(index,inputmultiple)=>{return { type: 'MULTIPLE',index,multiple:inputmultiple }}
export  const  delay=(index)=>{return { type: 'DELAY',index }}