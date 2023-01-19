import React from 'react'
import styled from 'styled-components'

import Card from './Card'
import data from './Data'

const Home = () => {
    return (
        <>
            <h1 style={{textAlign:"center", padding:"25px", color:"#1b6fb8"}}>Todos os Itens</h1>
            <section>
                <Div>
                    {data.map((item, index) => {
                        return (
                        <Card 
                        key={index} 
                        img={item.img} 
                        title={item.title} 
                        price={item.price} 
                        description={item.description} 
                        item={item} 
                        />
                        )
                    })}
                </Div>
            </section>
        </>
    )
}

export default Home


const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;

`