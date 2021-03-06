import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionPageWithSpinner = WithSpinner(CollectionPage)
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)


class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            this.props.updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
    const { match } = this.props
    const { loading } = this.state
    return (
    <div className='shop-page'>
       <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
       <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
    </div>
            
)}
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage)