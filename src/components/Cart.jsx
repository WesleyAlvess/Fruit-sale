import React from 'react'
import { useCart } from "react-use-cart"
import styled from 'styled-components'


const Cart = () => {

    const { items, isEmpty, totalItems, totalUniqueItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart()
    if (isEmpty) return <Title>Seu carrinho está vazio</Title>


    return (
        <Section>
            <div className='container'>
                <h5>Carrinho ({totalUniqueItems}) total: ({totalItems}) </h5>
                <table>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <div className='container-frutas'>
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>R$: {item.price},00</td>
                                        <td>Quantidade ({item.quantity} KG)</td>
                                        <td>
                                            <button className='btn-sub' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn-add' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn-remove' onClick={() => removeItem(item.id)}>Remover itens</button>
                                        </td>
                                    </tr>
                                </div>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <TotalFinal>
                <div>
                    <h2>Total: R$ {cartTotal},00 </h2>
                </div>
                <div>
                    <button className='limpar-carrinho' onClick={() => emptyCart()}>Limpar carrinho</button>
                    <button>Finalizar compra</button>
                </div>
            </TotalFinal>
        </Section>
    )
}

export default Cart

const Title = styled.h1`
    text-align: center;
    justify-content: flex-end;
    color: #2c9cfe;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;


    .container{
        margin-top: 30px;
        max-width: 800px;
        width: 800px;
        border-radius: 15px;
        background-color: #ececec;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h5{
            width: 750px;
            margin: 25px;
            display: flex;
            justify-content: flex-end;
            font-size: 25px;
            color: #1b6fb8;
        }
        .container-frutas{
            width: 750px;
            padding: 15px;
            border-radius: 15px;
            background-color: #d7d7d7;
            margin: 15px;
            
            Img{
                width: 100px;         
                align-items: center;
                justify-content: center;
                border-radius: 15px;
            }

            tr{
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 20px;

            td button{
                padding: 4px 10px;
                margin: 5px;
                font-size: 17px;
                border-radius: 5px;
                border: none;
                background-color: #2c9cfe;
                color: white;
            }
            .btn-add{
                background-color: #50d554;
                color: white;
            }
            .btn-sub{
                background-color: #f22310;
                color: white;
            }
            }
        }
    }

`
const TotalFinal = styled.div`
    width: 800px;
    border-radius: 15px;
    background-color: #ececec;
    padding: 25px;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        color: #2c9cfe;
    }

    button{
        padding: 8px;
        border-radius: 10px;
        border: none;
        margin-left: 10px;
        background-color: #2c9cfe;
        color: white;
        font-size: 17px;
    }
    
    .limpar-carrinho{
        background-color: #f22310;
        color: white;
    }
    
`