export const ListProducts=({listProduct})=>{
    return(
        <>
         <h2>Lista de productos</h2>
         <ul>
            {listProduct.map((item)=>{
                return(
                    <li key={item.id}>
                         <h4>{item.title}</h4>
                        <p>el ID es: {item.id}</p>
                        <img src={item.thumbnail} style={{width:"100px"}}/>
                        <br />
                    </li>
                )
            })}
         </ul>
        </>
    )
}