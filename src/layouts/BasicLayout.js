import React, {Component} from 'react';
import RightBorad from './RightBorad';
import LeftBorad from './LeftBorad';
import PageHeader from './PageHeader';

class BasicLayout extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <LeftBorad />
                <RightBorad />
                <PageHeader />
            </div>
        );
    }
}

export default BasicLayout;