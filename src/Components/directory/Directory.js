import React from 'react';

import MenuItem from '../menu-item/MenuItem';

import './Directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    id: 1,
                    linkUrl: 'hat'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://ksr-ugc.imgix.net/assets/003/513/473/0e6933dffd38f2fb6809188783f7bbab_original.jpg?ixlib=rb-2.1.0&w=700&fit=max&v=1427474334&auto=format&frame=1&q=92&s=fe4aae44b6705bd6b85aaf0db9c10c87',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'http://www.smandrews.com/images/shoes1/Nike-Wmns-Air-Max-90-SE-Black-Black-Gum-Light-Brown-jdLOk0qFc.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'http://g02.a.alicdn.com/kf/HTB1sqFfIXXXXXaEXFXXq6xXFXXXx/Spring-2014-New-Models-Women-s-Embroidery-Flowery-White-Dress-Size-S-M-L-XL-Ladies.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://www.clothingsupplier.com/blue-checked-vested-suit-i-clos-dz-takm-elbise-wessi-52911-65-O.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...SectionsProps }) => (
                    <MenuItem key={id} {...SectionsProps} />
                ))}
            </div>
        );
    }
}

export default Directory;