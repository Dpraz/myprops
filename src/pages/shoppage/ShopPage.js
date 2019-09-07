import React from 'react';
import ShopData from './ShopData';
import PreviewCollection from '../../Components/preview-collection/PreviewCollection'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: ShopData,
        }
    }
    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({ id, ...CollectionProps }) => (
                        < PreviewCollection key={id} {...CollectionProps} />
                    )
                    )
                }
            </div>
        )
    }
}
export default ShopPage;