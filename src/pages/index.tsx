"use client"
import { useState } from 'react'
{/* USAR onBlur	remove o foco do elemento */}

export default function Home() {
  return (
    <main>


  <div className='container'>

      {/* cabeçalho */}
      <div className='header'>
        <div>Codigo : <input type='text'></input></div>

        <div>Produto: </div>

        <div >QTD: <input className='qtd' type="number" /></div>

        <div>Preço : </div>

        <div ><button className='addButton'>➕</button></div>
      </div>

      {/* lista */}
      <div className='list'>

      {/* tabela */}
      <table className='table'>
            <tr>
                <th>Cod</th>
                <th>Produto</th>
                <th>QTD</th>
                <th>Valor Unitario</th>
                <th>Valor</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td>148</td>
                <td>Café</td>
                <td>1</td>
                <th>R$: 8,50</th>
                <th>R$: 8,50</th>
                <th><button>Delete</button></th>
            </tr>

      </table>





      </div>

  </div>


    </main>
  )
}
