import React from 'react'
import { TabPane, Tab } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import getData from '../utils/getData'
import './People.css'
import PeopleGroup from './PeopleGroup'




const PeopleTabs = () => {
    //state
    const [loaded, setLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();

    //useEffect  |  Go get data...
    React.useEffect(() => {
        //The page was just rendered, now get data!
        //I am going to use the getData method in utils
        getData("people/")
            .then((json) => {
                console.log(json);
                setPepObj(json);
                setLoaded(true);
            })
    }, []);

    const panes = [
        {menuItem: 'Faculty', render: () => <TabPane>
            <PeopleGroup title="Faculty" whichGroup={pepObj.faculty}></PeopleGroup>
        </TabPane>},
        { menuItem: 'Staff', render: () => <TabPane>
            <PeopleGroup title="Staff" whichGroup={pepObj.staff}></PeopleGroup>
        </TabPane>}
    ]

    //If not loaded return
    //First case (pre-loading data)
    //This return is for the page BEFORE we load the data!
    if (!loaded) return (
        <h1 className="loading">...Loading People...</h1>
    );

    //Real return
    //This return is for the page AFTER we load the data!
    return (
        <div id="people">
            <h1 id="people-header">{pepObj.title}</h1>
            <h3>{pepObj.subTitle}</h3>
            <Tab panes={panes}></Tab>
        </div>
    )
}

export default PeopleTabs
