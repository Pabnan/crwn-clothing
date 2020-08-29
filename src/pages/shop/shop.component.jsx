import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import {selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

import  CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

const ShopPage = ({match}) => (

  <div className='shop-page'>
  <Route exact path={`${match.path}`} component={CollectionsOverview} />
  <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
</div>
    )  

  
  export default ShopPage;

// import React from 'react';
// import SHOP_DATA from './shop.data.js';
// import  CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

// class ShopPage extends React.Component {
//     constructor(props){
//         super(props);
//         this.state= {
//             collections: SHOP_DATA
            
//         }   
//     }

// render ()  {
//     const {collections}=this.state;
//     return (

//     <div>
//          {collections.map(({id,...otherCollectionProps}) =>  (
//     <CollectionPreview key={id} {...otherCollectionProps}
//     />
//     ))} 
//     </div>
//     )  
// }
// }
// export default ShopPage;

