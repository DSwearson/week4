



export default function Title({children}){
    //Passing property from a child to child (Between Siblings) component
    return  <h2 style={{fontWeight: "bold"}}>{children}</h2>
}