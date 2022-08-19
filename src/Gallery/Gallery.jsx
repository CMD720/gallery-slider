import React, {useState} from 'react';
import './Gallery.css'
import Basket from "../Basket/Basket";

const Gallery = ({data}) => {
    const [cardList, setCardList] = useState(data)
    const [currentCard, setCurrentCard] = useState(null)
    const [cardCount, setCardCount] = useState(0)
    const [cardBasket, setCardBasket] = useState([])
    const [basketOpen, setBasketOpen] = useState(false)

    function dragStartHandler(e, card) {
        setCurrentCard(card)
    }

    function dragEndHandler(e) {
        e.target.style.opacity = 1
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.opacity = 0.1
    }

    function dropHandler(e, card) {
        e.preventDefault()
        e.target.style.opacity = 1
        if (e.target.classList == 'element delete') {
            setCardList(cardList.filter(p => p !== currentCard))
        } else {
            setCardList(cardList.map(c => {
                if (c.id === card.id) {
                    return {...c, order: currentCard.order}
                }
                if (c.id === currentCard.id) {
                    return {...c, order: card.order}
                }
                return c
            }))
        }
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    function deleteHandler(card) {
        setCurrentCard(card)
        setCardList(cardList.filter(p => p !== card))
    }

    function dropBasketHandler(e) {
        e.preventDefault()
        e.target.style.opacity = 1
        setCardCount(cardCount+1)
        currentCard.count = currentCard.count + 1
        setCardBasket([...cardBasket, currentCard])
    }

    function addBasketHandler(card) {
        setCardCount(cardCount+1)
        card.count = card.count + 1
        setCardBasket([...cardBasket,card])
    }

    function checkBasket(e) {
        {cardCount !==0
            ?  setBasketOpen(true)
            :  setBasketOpen(false)
        }
    }

    return (
        <div>
            <Basket active={basketOpen} setActive={setBasketOpen} data={cardBasket}/>
            <div className={'elem__wrapper'}>
                <div
                    className={'element basket'}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropBasketHandler(e)}
                    onClick={(e) => checkBasket(e)}
                >BAS
                    {cardCount!==0
                        ? <div className={'card__count'}>{cardCount}</div>
                        : <div></div>
                    }</div>
                <div
                    className={'element delete'}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e)}
                >DEL
                </div>
            </div>
            <div className={'card__wrapper'}>
                {cardList.sort(sortCards).map((card) => (
                    <div
                        key={card.id}
                        draggable={true}
                        className={'card'}
                        onDragStart={(e) => dragStartHandler(e, card)}
                        onDragLeave={(e) => dragEndHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, card)}
                        style={{backgroundImage: "url(" + card.path + ")"}}
                    >
                        <div className={'element card__btn'} onClick={(e) => addBasketHandler(card)}>basket</div>
                        <div className={'element card__btn'} onClick={(e) => deleteHandler(card)}>delete</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;