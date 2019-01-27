import React from 'react';
import Header from './Header';
import Meta from './Meta';

// Everything is wrapped in this Page component, which always 
// renders the Header component above any other content

class Page extends React.Component {
    render () {
        return (
            <div>
                <Meta />
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Page;