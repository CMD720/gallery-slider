import React from 'react';
import './Basket.css'

const Basket = ({active, setActive, data, children}) => {

    const makeUniq = (arr) => [...new Set(arr)];
    const sortBasket = makeUniq(data);

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                {children}
                <div className={'card__basket__wrapper'}>
                    {sortBasket.map((card) => (
                        <div key={card.id} className={'card__basket'} style={{backgroundImage: "url(" + card.path + ")"}}>
                            {card.count > 1
                                ? <div className={'card__basket__count'}>{card.count}</div>
                                : <div></div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Basket;