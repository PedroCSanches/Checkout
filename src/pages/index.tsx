"use client"
import { ChangeEvent ,useRef,useState } from 'react'
{/* USAR onBlur	remove o foco do elemento */}

type productType ={
  id: number
  name: string
  price: number
}
export default function Home() {
  {/* produtos */}
  const tabela = [
  {
    id:1,
    name:"café",
    price:8.50
  },
  {
    id:2,
    name:"chocolate",
    price: 11.50
  },
  {
    id:3,
    name:"arroz 5kg",
    price: 9.80
  },
]
  {/* armazenando id */}
  const [idValue, setIdValue] = useState<number>()
  {/* armazenando quantidade */}
  const [quantity, setQuantity] = useState<number>(1)
  {/* armazenando quantidade da tabela */}
  const [quantityTable, setQuantityTable] = useState<number>(1)
  {/* armazenando todos valores */}
  const [stored, setStored] = useState<productType | undefined>()
  {/* tabela */}
  const [table , setTable] = useState<Array<productType>>([])

  {/* salvando id */}
  function saveId(inputElement: ChangeEvent<HTMLInputElement>){
    setIdValue(+inputElement.target.value)
}

  {/* salvando quantidade */}
function saveQuantity(inputElement: ChangeEvent<HTMLInputElement>){
  setQuantity(+inputElement.target.value)
}
{/* salvando quantidade da tabela */}
function saveQuantityTable(inputElement: ChangeEvent<HTMLInputElement>){
  setQuantityTable(+inputElement.target.value)
}


function saveProduct() {
  setStored(tabela.find((item) => item.id === idValue))
}

function addProduct() {
  if (stored) {
    {/* criando uma cópia da tabela */}
    const newTable = [...table]

    {/* adicionando o novo produto a copia da tabela */}
    newTable.push({
      id: stored.id,
      name: stored.name,
      price: stored.price,
    })
    {/* atualizando a tabela com sua copia atualizada */}
    setTable(newTable);
  }

  
}

{/* removendo item da tabela */}
function remove(index:number) {
      
  {/* criando um array temporario com a lista */}
  let tempArray = [...table] 
  {/* pegando qual é o item da lista e do lado direito escolhendo a quantidade que sera removida */}
  tempArray.splice(index,1)

  {/* e por ultimo passando o array temporario sem o item que foi removido para a lista original */}
  setTable(tempArray)
  
}


  return (
    <main>


  <div className='container'>

      {/* cabeçalho */}
      <div className='header'>
        <div>Codigo : <input type='number' onChange={saveId} onBlur={saveProduct}></input></div>

        <div>Produto: {stored?.name}</div>

        <div >QTD: <input className='qtd' type="number" value={quantity} onChange={saveQuantity}/></div>

        <div>Preço : R$  {stored ? (quantity * stored.price).toFixed(2) : "0,00"}</div>

        <div ><button className='addButton' onClick={addProduct}>➕</button></div>
      </div>



      
      {/* lista */}
      <div className='list'>

      {/* tabela */}
      
      <table className='table'>
        <thead>
          <tr>
          <th>Cod</th>
          <th>Produto</th>
          <th>QTD</th>
          <th>Valor Unitario</th>
          <th>Valor</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {table?.map((tableItem, index) =>
              <tr key={tableItem.id}>
                <td>{tableItem.id}</td>
                <td>{tableItem.name}</td>
                <td><input type="number" value={quantityTable} onChange={saveQuantityTable} className='qtd'/></td>
                <td>{tableItem.price}</td>
                <td>{stored ? (quantityTable * stored.price).toFixed(2) : "0,00"}</td>
                <td><button onClick={() => remove(index)}>Delete</button></td>
            </tr>
          )}
          </tbody>
      </table>

      
      </div>
      


  </div>


    </main>
  )
}
