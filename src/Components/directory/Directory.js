import React from 'react';

import MenuItem from '../menu-item/MenuItem';

import './Directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'medicine',
                    imageUrl: 'https://images.unsplash.com/photo-1571942794251-9f3027e2e485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                    id: 1,
                    linkUrl: 'shop'
                },
                {
                    title: 'Body Checkup',
                    imageUrl: 'https://www.primarycaresimplified.com/wp-content/uploads/2019/07/family-doctor-in-keller.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Upload Prescripation',
                    imageUrl: 'https://i.ytimg.com/vi/EvTehblWTS8/maxresdefault.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Online Doctor',
                    imageUrl: 'https://wishhealth.in/blog/wp-content/uploads/2018/10/blogo-1.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Health Education & News',
                    imageUrl: 'http://4designer.t7yb.net/files/20151019/HD-Medical-element-54865.jpg',
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