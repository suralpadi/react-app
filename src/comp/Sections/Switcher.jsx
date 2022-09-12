import React from 'react';

class Switcher extends React.Component {

    constructor(props){
        super(props);
        this.state = {stylePath: './assets/css/skins/skin-9.css'};
    }

    componentDidMount = () => {
        // var homepage3 = /\/homepage3/i;
        // var homepage4 = /\/homepage4/i;
        // var homepage5 = /\/homepage5/i;
        
        // if (homepage3.test(window.location.href)) {
        //     this.setState({stylePath: './assets/css/skins/skin-3.css'});
        // }else if (homepage4.test(window.location.href)) {
        //     this.setState({stylePath: './assets/css/skins/skin-7.css'});
        // }else if (homepage5.test(window.location.href)) {
        //     this.setState({stylePath: './assets/css/skins/skin-12.css'});
        // }else {
        //     this.setState({stylePath: './assets/css/skins/skin-4.css'});
        // }
    }

    render() {
        return (
            <>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
            </>
        );
    };
};

export default Switcher;