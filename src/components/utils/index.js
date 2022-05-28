

export const handleGetToken = () =>{
  //  const h = localStorage.getItem("itemdemo");
  
  console.log("typeof window",typeof window)
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("itemdemo");
    
    console.log("token:",token);
    return token;
    }
    else {
      return 'nuu';
    }
}