import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action'


import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';

const CollectionItem = ({ id, item, item: { imageUrl, name, price }, addItem }) => (
        <CollectionItemContainer
        key={id}
        >
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>

        </CollectionItemContainer>
        
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)